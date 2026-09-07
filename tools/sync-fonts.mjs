/**
 * Copies the latin WOFF2 subsets out of the installed @fontsource packages and
 * into the source tree, where `src/styles/_fonts.scss` declares them.
 * Run after bumping a font package: `npm run fonts:sync`.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = join(root, 'src/styles/fonts');

const files = [
  '@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2',
  '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2',
  '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2',
  '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2',
  '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2',
];

mkdirSync(target, { recursive: true });
for (const file of files) {
  const from = join(root, 'node_modules', file);
  const to = join(target, file.split('/').pop());
  copyFileSync(from, to);
  console.log(`copied ${file}`);
}
