
## 2026-09-07 — sweep note: still pulls Google Fonts from the CDN

Renders correctly at 1440x900 and 390x844 (hero, "We create Awesome Games",
About, feature columns, Featured Projects grid). 0 requests >= 400 to its own
assets, 0 page errors.

**Finding, not fixed:** `sublime/styles/css/main_style.css:1` still starts with

```
@import url("https://fonts.googleapis.com/css?family=Muli:...");
```

The preview README states CDN dependencies were vendored locally; this one was
not, and there are no local Muli files under `sublime/`. On the live Pages site
it resolves over the public internet, so it is not a rendering defect there —
offline it falls back to system fonts and the page makes a third-party request
per visit. Left as-is (vendoring needs a network fetch unavailable here).

For contrast, the jQuery CDN tag in this project *was* correctly vendored — see
the comment at `sublime/index.html:18`.

**Change made:** added `.nojekyll` at the repo root (Pages hygiene).
