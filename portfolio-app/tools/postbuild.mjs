/**
 * Finishes the static build for GitHub Pages:
 *  - copies the prerendered /404 page to 404.html, which Pages serves for any
 *    address that has no file (the prerendered routes are real files, so this
 *    only ever fires for genuinely unknown URLs);
 *  - drops a .nojekyll marker so Pages serves every file as-is;
 *  - removes the client-side-render shell, which a static build never uses.
 */
import { copyFileSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const browser = join(root, 'dist/portfolio-app/browser');

const source = join(browser, '404/index.html');
if (!existsSync(source)) {
  console.error('postbuild: 404 route was not prerendered — check app.routes.ts');
  process.exit(1);
}

copyFileSync(source, join(browser, '404.html'));
writeFileSync(join(browser, '.nojekyll'), '');
rmSync(join(browser, 'index.csr.html'), { force: true });

console.log('postbuild: 404.html + .nojekyll written');
