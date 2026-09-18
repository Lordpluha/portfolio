// Generates a typed TypeScript module from the authoritative projects.json so
// the content ships inside the bundle with no runtime fetch.
import { readFileSync, writeFileSync } from 'node:fs';

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = process.env.PROJECTS_JSON ?? join(root, 'src/data/projects.json');
const out = join(root, 'src/app/core/portfolio.generated.ts');

const data = JSON.parse(readFileSync(src, 'utf8'));

const header = `// GENERATED FILE — produced by tools/build_data.mjs from projects.json.
// Do not edit by hand; edit the source data and re-run the generator.

export type CategoryId = ${data.categories.map((c) => JSON.stringify(c.id)).join(' | ')};

export interface Category {
  readonly id: CategoryId;
  readonly label: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  readonly category: CategoryId;
  readonly year: string;
  readonly featured: boolean;
  readonly stack: readonly string[];
  readonly summary: string;
  readonly highlights: readonly string[];
  /** Slug of the published demo, or null when there is nothing to link to. */
  readonly demo: string | null;
  /** Honest caveat about what the demo actually does. Never hidden. */
  readonly demoNote: string | null;
  /** null for work whose source is not public. */
  readonly repo: string | null;
  readonly repoBranch?: string;
}

export type ProfileId = ${data.owner.profiles.map((p) => JSON.stringify(p.id)).join(' | ')};

/** One reachable phone number, in both dialling and reading form. */
export interface Phone {
  /** Country the number belongs to, e.g. "Poland". */
  readonly label: string;
  /** Dialling form, for the tel: href. */
  readonly e164: string;
  /** Grouped form, for reading on screen. */
  readonly display: string;
}

/** One external profile. The id doubles as the icon name. */
export interface Profile {
  readonly id: ProfileId;
  readonly label: string;
  readonly handle: string;
  readonly url: string;
}

export interface Owner {
  readonly name: string;
  readonly handle: string;
  readonly role: string;
  readonly positioning: string;
  /** About-page biography, one string per paragraph. */
  readonly bio: readonly string[];
  /** One line, as it reads on the CV. */
  readonly education: string;
  readonly location: string;
  readonly availability: string;
  readonly github: string;
  readonly email: string;
  readonly skills: Readonly<Record<string, readonly string[]>>;
  readonly phones: readonly Phone[];
  readonly profiles: readonly Profile[];
}

export const OWNER: Owner = ${JSON.stringify(data.owner, null, 2)};

export const CATEGORIES: readonly Category[] = ${JSON.stringify(data.categories, null, 2)};

export const PROJECTS: readonly Project[] = ${JSON.stringify(data.projects, null, 2)};
`;

writeFileSync(out, header);
console.log(`wrote ${out}: ${data.projects.length} projects, ${data.categories.length} categories`);
