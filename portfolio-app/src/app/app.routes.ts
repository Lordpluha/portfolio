import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    // The old about page now lives on the home page.
    path: 'about',
    redirectTo: '',
  },
  {
    path: 'work/:id',
    loadComponent: () => import('./pages/work-detail/work-detail').then((m) => m.WorkDetail),
  },
  {
    // Prerendered to a real file, then copied to 404.html for GitHub Pages.
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
