import { type Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    loadComponent: () => import('@layout/not-found/not-found').then((m) => m.NotFound),
    title: 'Página no encontrada',
  },
];
