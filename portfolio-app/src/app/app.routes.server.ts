import { RenderMode, ServerRoute } from '@angular/ssr';

import { PROJECTS } from './core/portfolio.generated';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'work/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => PROJECTS.map((project) => ({ id: project.id })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
