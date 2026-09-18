
## 2026-09-07 — fix pass: reported "small box top-left", NOT REPRODUCIBLE

The reported symptom (renders as a small box in the top-left corner, mostly
blank) does not occur in the current preview.

**What was checked.**

* Served from `serve/` at `http://localhost:PORT/messenger-layout/` — the
  repository-name path, case-sensitive, exactly as GitHub Pages serves it.
* Viewport screenshots at 1440x900 and 390x844 with `fullPage: false`, plus a
  full-page shot. All three show the messenger rendering correctly: chat list
  with avatars/badges on the left, the conversation pane with both message
  bubble styles, the composer bar, and the bottom tab bar. `documentElement`
  height is exactly the viewport height, so the layout does fill the screen.
* 0 console errors, 0 requests >= 400.
* Asset references: `main.css`, `main.js`, and the four `SF_Pro_*` font files
  are all relative and all match the on-disk casing — nothing that a
  case-sensitive host would drop.

**Comparison with `telegram-copy-layout`** (suggested as the fastest route to
the cause): the two directories are **byte-identical** — `diff -rq` reports no
differences across all 11 files, and the rendered 1440x900 screenshots have the
same MD5. There is no divergence between them to explain a divergence in
behaviour.

**Conclusion.** Either the defect was already corrected in the preview tree
before this pass, or the earlier observation came from a different path
(the case-mismatched `/Messenger-layout/`, a `file://` open, or a stale
deployment). Nothing to fix in the current build. If it recurs on the live
Pages site, capture the failing URL and the network panel — the first thing to
check is whether `main.css` returned 200.

**Change made:** added `.nojekyll` at the repo root (standard Pages hygiene;
no underscore-prefixed paths here, so it is precautionary only).
