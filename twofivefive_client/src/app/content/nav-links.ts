export type PagePath = '/servicios' | '/casos' | '/proceso' | '/nosotros' | '/contacto';

export interface NavLink {
  readonly label: string;
  readonly path: PagePath;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Servicios', path: '/servicios' },
  { label: 'Casos', path: '/casos' },
  { label: 'Proceso', path: '/proceso' },
  { label: 'Nosotros', path: '/nosotros' },
];

export const CONTACT_LINK: NavLink = { label: 'Contáctanos', path: '/contacto' };

export const FOOTER_LINKS: readonly NavLink[] = [
  ...NAV_LINKS,
  { label: 'Contacto', path: '/contacto' },
];
