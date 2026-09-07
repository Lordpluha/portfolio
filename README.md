# Portfolio — Vladyslav Tesliuk

A static portfolio site for a senior frontend engineer: twenty projects across products, landing
pages, markup and build tooling, each with its own page, real screenshots and an honest note about
what the linked demo actually does.

Built with **Angular 22** (standalone components, signals, the `@if` / `@for` control flow) and
prerendered to static HTML with `@angular/ssr`, so every route is a real file. Nothing is fetched
from a third party at runtime — fonts are self-hosted subsets and all imagery is bundled WebP.

## Requirements

- Node.js `^22.22.3 || ^24.15.0 || >=26` (the Angular 22 CLI enforces this)
- npm 10 or newer

## Local development

```bash
npm install
npm start            # http://localhost:4200
```

Other scripts:

```bash
npm run build        # static build with base href "/", output in dist/portfolio-app/browser
npm run build:pages  # the same build with base href "/portfolio/" for GitHub Pages
npm test             # unit tests (vitest)
npm run format       # prettier
npm run fonts:sync   # re-copy the WOFF2 subsets out of the @fontsource packages
```

## Content and imagery

Both are generated, not hand-written:

- `src/app/core/portfolio.generated.ts` — projects, categories and owner details.
- `src/app/core/media.generated.ts` + `public/img/**` — responsive WebP derived from the raw
  screenshots.

Edit the source data and re-run the generators rather than editing the generated files:

```bash
PROJECTS_JSON=../portfolio-data/projects.json npm run generate:data
SHOTS_DIR=../shots PROJECTS_JSON=../portfolio-data/projects.json npm run generate:media
```

`generate:media` needs Python with Pillow.

## Deploying to GitHub Pages

The site lives at a sub-path, `https://lordpluha.github.io/portfolio/`, so the build needs a
matching base href:

```bash
npm run build:pages
# publishes dist/portfolio-app/browser
```

`tools/postbuild.mjs` copies the prerendered `/404` page to `404.html` and writes `.nojekyll`.
Because every route is prerendered to its own `index.html`, deep links resolve to real files;
`404.html` is only reached by addresses that genuinely do not exist.

`.github/workflows/pages.yml` does all of this on every push to `main` and publishes with
`actions/deploy-pages`.

## Running the container

```bash
docker build -t ghcr.io/lordpluha/portfolio .
docker run -p 8080:80 ghcr.io/lordpluha/portfolio
# http://localhost:8080
```

Multi-stage: Node 24 builds the app, `nginx:alpine` serves the static output. The server runs as
the unprivileged `nginx` user — port 80 is bound through `cap_net_bind_service` on the binary
rather than by running the master process as root. `nginx.conf` sets gzip, immutable caching for
content-hashed assets and images, `no-cache` for HTML, and an SPA fallback.

One deliberate difference from GitHub Pages: under nginx an unknown address falls through to
`index.html` and the router renders the 404 page with a `200` status. If you would rather return a
real `404`, change the last entry of `try_files` to `=404` and add `error_page 404 /404.html;`.

`.github/workflows/docker.yml` builds and pushes `ghcr.io/lordpluha/portfolio` tagged `latest` and
with the commit SHA on every push to `main`, authenticating with the workflow's `GITHUB_TOKEN`.

## Accessibility and performance notes

- One `<h1>` per page, real landmarks, a skip link, visible focus rings everywhere.
- Filters are `<button>`s with `aria-pressed`, and the result count is announced through a polite
  live region.
- Light and dark are both authored palettes; the toggle persists in `localStorage` inside a
  `try`/`catch` and falls back to `prefers-color-scheme`.
- Motion is one short rise on scroll-in, skipped entirely under `prefers-reduced-motion`.
- Route bundles are lazy-loaded, below-fold images are `loading="lazy"` with `srcset`, and the
  fonts are latin-only WOFF2 subsets (about 107 KB in total).
