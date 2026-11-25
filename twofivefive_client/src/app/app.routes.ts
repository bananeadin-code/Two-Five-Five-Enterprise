import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Two Five Five · Desarrollo de software y nube',
  },
  { path: '**', redirectTo: '' },
];
