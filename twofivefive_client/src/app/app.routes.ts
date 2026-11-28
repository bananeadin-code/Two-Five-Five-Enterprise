import { type Routes } from '@angular/router';
import { PAGES } from '@content/pages';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home').then((m) => m.Home),
  },
  {
    path: 'servicios',
    title: PAGES.servicios.title,
    loadComponent: () => import('@features/services/services-page').then((m) => m.ServicesPage),
  },
  {
    path: 'casos',
    title: PAGES.casos.title,
    loadComponent: () => import('@features/portfolio/portfolio-page').then((m) => m.PortfolioPage),
  },
  {
    path: 'casos/:slug',
    title: PAGES.casos.title,
    loadComponent: () =>
      import('@features/portfolio/case-detail/case-detail-page').then((m) => m.CaseDetailPage),
  },
  {
    path: 'proceso',
    title: PAGES.proceso.title,
    loadComponent: () => import('@features/process/process-page').then((m) => m.ProcessPage),
  },
  {
    path: 'nosotros',
    title: PAGES.nosotros.title,
    loadComponent: () => import('@features/about/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'contacto',
    title: PAGES.contacto.title,
    loadComponent: () => import('@features/contact/contact-page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    title: 'Página no encontrada',
    loadComponent: () => import('@layout/not-found/not-found').then((m) => m.NotFound),
  },
];
