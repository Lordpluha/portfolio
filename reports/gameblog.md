
## 2026-09-07 — fix pass: basePath case mismatch (fatal)

**Symptom.** The page loaded as raw unstyled HTML: black background, blue
underlined links, no layout. 17 console 404s.

**Cause.** The Next.js static export was built with
`basePath`/`assetPrefix` = `/gameblog`, but the GitHub Pages repository is
`GameBlog`. Pages is case-sensitive, so every asset request
(`/gameblog/_next/static/...`) missed. All three CSS bundles, all eleven JS
chunks and `icon-age.png` 404'd; nothing but the server-rendered HTML survived.

**Fix.** Rewrote the built output in place instead of rebuilding Next. Every
occurrence of the string `/gameblog` was replaced with `/GameBlog` —
784 replacements across 37 files (17 `.html`, 15 `.txt` RSC payloads,
4 `_next` JS chunks, 1 CSS bundle).

The replacement is safe: before rewriting, every one of the 784 occurrences was
checked to be a URL path prefix. All were preceded by `/` and followed by `/`,
`"` or `\"`; the eight `"/gameblog"` occurrences are the `basePath` constant
inside the Next router runtime (`addPathPrefix`, `pathHasPrefix`,
`__NEXT_DATA__.basePath`). No occurrence was a slug, a display string or an
absolute `https://…` URL, so nothing that legitimately contains the lowercase
word was touched. Zero lowercase `gameblog` remain.

**Also added:** `.nojekyll` at the repo root. GitHub Pages runs Jekyll when a
site is published from a branch, and Jekyll silently drops paths beginning with
an underscore — which would have 404'd the whole `_next/` tree again even with
the casing fixed.

**Verified.** Served from `serve/` at `http://localhost:PORT/GameBlog/`,
1440x900 and 390x844 viewport shots plus a full-page shot:
0 console errors, 0 requests >= 400, header/cards/sidebar/footer all render,
images and fonts applied. Sub-routes `/GameBlog/news/`,
`/GameBlog/posts/1/demo-post-1/`, `/GameBlog/profile/`, `/GameBlog/games/`
also load clean (they are the project's own stub pages).

**Remaining, not fixed:** on 390px the news-card titles clip
(`Демо-` cut off) — a pre-existing responsive nit in the card component, not a
deploy defect.
