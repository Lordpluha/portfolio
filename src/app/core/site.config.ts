/**
 * Everything deployment-specific lives here so moving the site to another
 * account or host is a one-file change.
 */
export const SITE = {
  /**
   * Where the published project demos live. `<demoBase><repo>/`
   * Only used for slug demos; a project hosted on its own domain carries the
   * whole URL in its `demo` field instead.
   */
  demoBase: 'https://lordpluha.github.io/',
  /** Where the sources live. `<repoBase><repo>` */
  repoBase: 'https://github.com/Lordpluha/',
  /** Public origin of this site, used for canonical links. */
  origin: 'https://lordpluha.github.io',
  /** Sub-path this site is served from on GitHub Pages. */
  basePath: '/',
  titleSuffix: 'Vladyslav Tesliuk — Senior Frontend Engineer',
} as const;

/**
 * Absolute URL of a project's live demo, or null when there is not one.
 *
 * A project published on GitHub Pages is served at `<demoBase><repo>/`, and the
 * repository name is case-sensitive there — `/carstore/` 404s where `/CarStore/`
 * works. So the URL is built from `repo`, never from the demo slug, which makes
 * the two impossible to drift apart.
 *
 * A project living on its own domain carries the finished URL in `demo`, and
 * that is returned untouched — prefixing it would give `https://…/https://…`.
 */
export function demoUrl(demo: string | null, repo: string): string | null {
  if (!demo) {
    return null;
  }
  return isAbsoluteUrl(demo) ? demo : `${SITE.demoBase}${repo}/`;
}

function isAbsoluteUrl(value: string): boolean {
  return value.startsWith('https://') || value.startsWith('http://');
}

/** Absolute URL of a project's source, honouring a non-default branch. */
export function repoUrl(repo: string, branch?: string): string {
  // A team project can live under someone else's account: then `repo` carries
  // the whole URL and must not be prefixed with this account's repoBase.
  const base = isAbsoluteUrl(repo) ? repo : `${SITE.repoBase}${repo}`;
  return branch ? `${base}/tree/${branch}` : base;
}
