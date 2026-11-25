export interface NavLink {
  label: string;
  fragment: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Servicios', fragment: 'servicios' },
  { label: 'Casos', fragment: 'casos' },
  { label: 'Proceso', fragment: 'proceso' },
  { label: 'Nosotros', fragment: 'nosotros' },
];

export const CONTACT_LINK: NavLink = { label: 'Contáctanos', fragment: 'contacto' };
