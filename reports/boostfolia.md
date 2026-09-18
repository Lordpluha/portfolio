
## 2026-09-07 — fix pass: scroll-reveal animation left most of the page invisible

**Symptom.** Hero slider rendered; everything below it was blank. On load
95 of 102 `._anim-elem` were at `opacity: 0`. No console errors, no failed
requests.

**Cause.** Same structural defect as ZERNO, with one wrinkle: Boostfolia's
active class is `_active__fx` (double underscore), not `_active-fx` as in the
sibling builds — that is internally consistent here (`js/scripts/script.min.js`
adds `_active__fx`, `styles/css/styles.min.css` matches on it), so it is not
the bug, but it is worth knowing when comparing these four projects.

The reveal maths in `script.min.js` is correct (`rect.top + pageYOffset`). What
is wrong is that it only ever runs from a `scroll` listener plus one
`setTimeout(…, 300)` at load, and never re-checks. Anything below the fold is
invisible on first paint, and anything whose activation window is stepped over
during fast scrolling stays invisible for the life of the page.

**Fix.** The animation is **disabled, not repaired**. A clearly-commented block
appended to `styles/css/styles.min.css` neutralises the initial hidden state:

```css
._anim-elem { transform: none; opacity: 1; }
```

(The rule matches on `._anim-elem`, so it covers this project's `_active__fx`
variant too.) The reveal transition no longer plays; content is visible from
the start. Delete that block to revert.

Also added `.nojekyll` at the repo root (standard Pages hygiene).

**Verified.** `http://localhost:PORT/Boostfolia/`, viewport shots at 1440x900
and 390x844 with `fullPage: false`, then a full-page shot, then a slow
scroll-through with a screenshot at the bottom. 0 console errors,
0 requests >= 400, `_anim-elem` hidden count 0/102. "About us", "Our works",
"Who we are" and the profile/skills cards all render.

**Remaining, cosmetic, not fixed:** body copy in the lower sections falls back
to the browser's default serif — those elements carry no `font-family` at all
in the source stylesheet (the display face `BigNoodleTitling` and the vendored
Roboto both load fine). Pre-existing authoring gap, not a deploy defect.
