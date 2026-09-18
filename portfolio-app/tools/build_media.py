#!/usr/bin/env python3
"""Convert the raw project screenshots into responsive WebP assets and emit a
typed manifest for the Angular app.

Input : $SHOTS_DIR/<slug>-<page>-<width>.png  (default ../shots)
        $PROJECTS_JSON                       (default ../portfolio-data/projects.json)
Output: public/img/<slug>/*.webp
        src/app/core/media.generated.ts
"""

import json
import os
import re
import shutil
from pathlib import Path

from PIL import Image

# Both inputs live outside the repository; point at them with the environment
# variables or pass the defaults used when the site was first generated.
APP = Path(__file__).resolve().parent.parent
SHOTS = Path(os.environ.get("SHOTS_DIR", "../shots"))
DATA_FILE = Path(os.environ.get("PROJECTS_JSON", "../portfolio-data/projects.json"))
OUT = APP / "public" / "img"
DATA = json.loads(DATA_FILE.read_text())

CARD_WIDTHS = [640, 960, 1280]
DESKTOP_WIDTHS = [640, 1280]
MOBILE_WIDTHS = [390, 780]
CARD_RATIO = 16 / 10
MOBILE_MAX_SOURCE_WIDTH = 800
QUALITY = 76

WORD_FIXES = {
    "newpost": "new post",
    "orgs": "organisations",
    "org": "organisation",
    "demo_": "demo",
    "ua": "Ukrainian locale",
    "carddetail": "card detail",
    "thememenu": "theme menu",
    "lighttheme": "light theme",
    "mobfull": "full page",
    "usof": "USOF",
    "drill": "drill-down",
}

slugs = [p["id"] for p in DATA["projects"]]
titles = {p["id"]: p["title"] for p in DATA["projects"]}


def source_files(slug: str) -> list[Path]:
    """Every raw screenshot belonging to a project slug, de-duplicated."""
    files = sorted(SHOTS.glob(f"{slug}-*.png"))
    # A slug is only a match when the next character starts a new token.
    files = [f for f in files if not f.name.startswith("_")]
    # Longer slugs win: card-game must not swallow files of another project.
    others = [s for s in slugs if s != slug and s.startswith(slug)]
    files = [f for f in files if not any(f.name.startswith(o + "-") for o in others)]
    names = {f.name for f in files}
    kept = []
    for f in files:
        base = f.stem
        # Drop the full-page duplicate when a viewport-height shot of the same
        # screen exists — they show the same top-of-page content.
        if "-full" in base or "-mobfull" in base:
            stripped = base.replace("-mobfull", "").replace("-full", "").rstrip("-")
            if stripped != base and any(
                n == stripped + ".png" or n.startswith(stripped + "-") for n in names
            ):
                continue
        kept.append(f)
    return kept


def label_for(slug: str, base: str) -> str:
    rest = base[len(slug) :].strip("-")
    tokens = [t for t in rest.split("-") if t]
    dark = "dark" in tokens
    tokens = [t for t in tokens if t not in {"dark", "index", "full", "mobfull"}]
    tokens = [t for t in tokens if not re.fullmatch(r"\d{3,4}", t)]
    tokens = [WORD_FIXES.get(t, t) for t in tokens]
    text = " ".join(tokens).strip()
    if not text:
        text = "Overview"
    text = text[0].upper() + text[1:]
    if dark:
        text += " (dark theme)"
    return text


def encode(img: Image.Image, dest: Path, width: int) -> tuple[int, int]:
    if img.width != width:
        height = max(1, round(img.height * width / img.width))
        resized = img.resize((width, height), Image.LANCZOS)
    else:
        resized = img
    dest.parent.mkdir(parents=True, exist_ok=True)
    resized.convert("RGB").save(dest, "WEBP", quality=QUALITY, method=6)
    return resized.width, resized.height


def pick_primary(files: list[Path], slug: str) -> Path | None:
    preferred = [
        f"{slug}-1440.png",
        f"{slug}-index-1440.png",
        f"{slug}-home-1440.png",
        f"{slug}-feed-1440.png",
        f"{slug}-menu-1440.png",
        f"{slug}-landing-1440.png",
    ]
    by_name = {f.name: f for f in files}
    for name in preferred:
        if name in by_name:
            return by_name[name]
    wide = [f for f in files if Image.open(f).width > MOBILE_MAX_SOURCE_WIDTH]
    return wide[0] if wide else (files[0] if files else None)


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    manifest: dict[str, dict] = {}

    for slug in slugs:
        files = source_files(slug)
        if not files:
            continue
        primary = pick_primary(files, slug)
        entry: dict = {"card": None, "desktop": [], "mobile": []}

        if primary is not None:
            with Image.open(primary) as img:
                crop_h = min(img.height, round(img.width / CARD_RATIO))
                card_src = img.crop((0, 0, img.width, crop_h))
                sources = []
                for w in CARD_WIDTHS:
                    if w > card_src.width * 1.35:
                        continue
                    w = min(w, card_src.width)
                    dest = OUT / slug / f"card-{w}.webp"
                    cw, ch = encode(card_src, dest, w)
                    sources.append({"w": cw, "h": ch, "src": f"img/{slug}/card-{w}.webp"})
            entry["card"] = {
                "sources": sources,
                "alt": f"{titles[slug]} — screenshot of the project interface",
            }

        for f in files:
            # The primary shot is already the page hero — don't repeat it below.
            if primary is not None and f == primary:
                continue
            base = f.stem
            with Image.open(f) as img:
                is_mobile = img.width <= MOBILE_MAX_SOURCE_WIDTH
                widths = MOBILE_WIDTHS if is_mobile else DESKTOP_WIDTHS
                sources = []
                for w in widths:
                    if w > img.width * 1.35:
                        continue
                    w = min(w, img.width)
                    dest = OUT / slug / f"{base}-{w}.webp"
                    iw, ih = encode(img, dest, w)
                    sources.append({"w": iw, "h": ih, "src": f"img/{slug}/{base}-{w}.webp"})
                if not sources:
                    continue
                label = label_for(slug, base)
                shot = {
                    "label": label,
                    "alt": f"{titles[slug]} — {label[0].lower() + label[1:]} screen",
                    "sources": sources,
                    "ratio": round(img.width / img.height, 4),
                }
            entry["mobile" if is_mobile else "desktop"].append(shot)

        # Overview first, then alphabetical — a predictable reading order.
        for key in ("desktop", "mobile"):
            entry[key].sort(key=lambda s: (s["label"] != "Overview", s["label"]))
        manifest[slug] = entry

    header = (
        "// GENERATED FILE — produced by tools/build_media.py from the raw\n"
        "// project screenshots. Do not edit by hand.\n\n"
        "export interface ImageSource {\n  readonly w: number;\n  readonly h: number;\n"
        "  readonly src: string;\n}\n\n"
        "export interface Shot {\n  readonly label: string;\n  readonly alt: string;\n"
        "  readonly sources: readonly ImageSource[];\n  readonly ratio: number;\n}\n\n"
        "export interface CardImage {\n  readonly sources: readonly ImageSource[];\n"
        "  readonly alt: string;\n}\n\n"
        "export interface ProjectMedia {\n  readonly card: CardImage | null;\n"
        "  readonly desktop: readonly Shot[];\n  readonly mobile: readonly Shot[];\n}\n\n"
        "export const PROJECT_MEDIA: Readonly<Record<string, ProjectMedia>> = "
    )
    target = APP / "src" / "app" / "core" / "media.generated.ts"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(header + json.dumps(manifest, indent=2) + " as const;\n")

    total = sum(f.stat().st_size for f in OUT.rglob("*.webp"))
    count = len(list(OUT.rglob("*.webp")))
    print(f"{count} webp files, {total / 1024 / 1024:.1f} MB")
    for slug in slugs:
        m = manifest.get(slug)
        if not m:
            print(f"  !! no media for {slug}")
        else:
            print(f"  {slug:24s} desktop={len(m['desktop'])} mobile={len(m['mobile'])}")


if __name__ == "__main__":
    main()
