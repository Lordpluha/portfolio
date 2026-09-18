
## 2026-09-07 — sweep note: still pulls Google Fonts from the CDN

Renders correctly at 1440x900 (header, hero slider, portfolio filter, grid,
footer). 0 requests >= 400 to its own assets, 0 page errors.

**Finding, not fixed:** five stylesheets still start with a remote import —

```
lian/css/style.css:2
lian/about/css/style.css:2
lian/blog/css/style.css:2
lian/portfolio/css/style.css:2
lian/portfolio-details/css/style.css:2
    @import url("https://fonts.googleapis.com/css?family=Roboto:...");
```

The preview README states every CDN dependency (jQuery, Google Fonts) was
vendored locally so the previews are autonomous. These five are not; there are
no local Roboto files under `lian/`. On the live Pages site the import will
resolve over the public internet, so this is not a rendering defect there — but
in an offline/blocked environment the page falls back to system fonts, and the
site leaks a third-party request per visit. Left as-is: vendoring the face
needs a network fetch that is unavailable here, and it is a deliberate
dependency decision rather than a broken deploy.

**Also, not fixed:** no mobile breakpoint. At 390x844 the hero slider and
portfolio grid keep desktop widths and overflow horizontally. Pre-existing.

**Change made:** added `.nojekyll` at the repo root (Pages hygiene).
