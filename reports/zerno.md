
## 2026-09-07 — fix pass: scroll-reveal animation left most of the page invisible

**Symptom.** Hero rendered; the catalogue, wiki, slogan and category blocks
below it were blank. On load 39 of 42 `._anim-elem` were at `opacity: 0`
(3 active). A normal-speed scroll-through recovered only 17 of 42.
No console errors, no failed requests.

**Cause.** Unlike CabHUB, ZERNO's reveal maths in `js/app.min.js` is *correct*
(`rect.top + window.pageYOffset`). The defect is structural: the check runs only
inside a `scroll` listener and never re-checks, so any element whose activation
window is stepped over — fast scrolling, an anchor jump, a restored scroll
position, print/screenshot, JS off — keeps `opacity: 0` for the life of the
page. Nothing below the fold is visible on first paint. There is no small,
safe correction to the condition here; the condition is not what is wrong.

**Fix.** The animation is **disabled, not repaired**. A clearly-commented block
appended to `css/styles.min.css` (and to the matching `css/styles.css`)
neutralises the initial hidden state:

```css
._anim-elem { transform: none; opacity: 1; }
```

The reveal transition no longer plays; content is visible from the start.
Delete that block to revert.

Also added `.nojekyll` at the repo root (standard Pages hygiene).

**Verified.** `http://localhost:PORT/ZERNO/`, viewport shots at 1440x900 and
390x844 with `fullPage: false`, then a full-page shot, then a slow
scroll-through with a screenshot at the bottom. 0 console errors,
0 requests >= 400, `_anim-elem` hidden count 0/42. Catalogue, product cards,
newsletter block and the green footer (logo, address, link columns, socials)
all render.

**Remaining, cosmetic:** Chromium logs one non-blocking warning about
`overflow: visible` on an `<img>`; harmless.
