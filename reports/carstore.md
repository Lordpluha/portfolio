
## 2026-09-07 — fix pass: checked for the scroll-reveal bug, NOT affected

CarStore was listed with CabHUB / ZERNO / Boostfolia as sharing the broken
scroll-animation system, and as "missing a full-height hero". Neither holds.

**Scroll-reveal:** the page contains **zero** `_anim-elem` elements, and
`styles/css.dist/styles.min.css` contains no `._anim-elem` rule. The animation
system was never wired into this build, so nothing can be hidden by it. No CSS
override was applied here.

Its `js/scripts/scripts.min.js` does carry a latent typo —
`document.getElementsByClassName("._anim-elem")` passes a *selector* where a
class *name* is required, so it always returns an empty collection — but since
there is no such markup and no such CSS rule, the function is dead code with no
observable effect. Left untouched deliberately: changing it alters nothing and
only risks the bundle.

**Hero:** present and correct. The full-bleed Bugatti hero renders at 1440x900
and at 390x844, followed by the four category tiles, "FUTURED PRODUCTS", the
25%-off banner and the full four-column footer. All 34 images load.

**Change actually made:** added `.nojekyll` at the repo root. This one matters
here — `img/_CarStore.min.png` (the header wordmark) and `img/_ico.min.png`
start with an underscore, and GitHub Pages' default Jekyll build drops
underscore-prefixed paths, which would have knocked the logo out on the
deployed site while the local preview looked fine.

**Verified.** `http://localhost:PORT/CarStore/`, viewport shots at 1440x900 and
390x844 with `fullPage: false`, then a full-page shot. 0 requests >= 400,
0 console errors (one non-blocking Chromium warning about `overflow: visible`
on an `<img>`).
