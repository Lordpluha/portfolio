
## 2026-09-07 — fix pass: scroll-reveal animation left most of the page invisible

**Symptom.** Hero rendered, everything below it was blank. At 1440x900 on load
only 4 of 36 `._anim-elem` had `_active-fx`; 32 stayed at `opacity: 0`.
Scrolling at a normal speed recovered only 14 of 36. No console errors,
no failed requests.

**Cause — two things.**

1. A real typo in `js/app.min.js`. The reveal handler computed the element's
   document offset as

   ```js
   e.getBoundingClientRect().top + window.scrollX   // horizontal scroll — always 0
   ```

   It must be `window.scrollY`. With `scrollX` the value is the element's
   *viewport-relative* top, so the activation test
   `scrollY > n - o && scrollY < n + h` collapses to a window at
   `scrollY ≈ D/2` — roughly half-way to the element rather than at it, and
   half as wide as intended. Fixed: `scrollX` -> `scrollY`, one token, no other
   change to the bundle.

2. Even with the maths corrected the system is structurally fragile: it only
   ever runs inside a `scroll` listener and never re-checks. Any element whose
   activation window is stepped over — fast wheel scrolling, an anchor jump, a
   restored scroll position, print, a screenshot, JS off — stays at
   `opacity: 0` permanently. Nothing below the fold is visible on first paint.

**Fix.** The animation is **disabled, not repaired**. A clearly-commented block
appended to `css/styles.min.css` (and to the matching unminified
`css/styles.css`) neutralises the initial hidden state:

```css
._anim-elem { transform: none; opacity: 1; }
```

The reveal transition no longer plays; the content is simply visible from the
start. For a portfolio piece that has to look right on first paint, visible
beats animated. Delete that block to revert. The `scrollY` correction above was
kept anyway so the mechanism is right if anyone re-enables it.

Also added `.nojekyll` at the repo root (standard Pages hygiene).

**Verified.** `http://localhost:PORT/CabHUB/`, viewport shots at 1440x900 and
390x844 with `fullPage: false`, then a full-page shot, then a slow scroll-through
with a screenshot at the bottom. 0 console errors, 0 requests >= 400,
`_anim-elem` hidden count 0/36. Tariffs, "WE DO BEST", download and testimonial
sections and the footer all render; the footer background photo, its white
headings and the contact block are correct once the lazy background has loaded.

**Note (not a bug).** Images below the fold are `vanilla-lazyload`-managed and
only fetch when scrolled into view, so an unscrolled full-page capture shows
`alt` text for them. They load normally for a real visitor.
