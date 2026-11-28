export type SectionId = 'servicios' | 'casos' | 'proceso' | 'nosotros' | 'contacto';

export interface NavLink {
  readonly label: string;
  readonly fragment: SectionId;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Servicios', fragment: 'servicios' },
  { label: 'Casos', fragment: 'casos' },
  { label: 'Proceso', fragment: 'proceso' },
  { label: 'Nosotros', fragment: 'nosotros' },
];

export const CONTACT_LINK: NavLink = { label: 'Contáctanos', fragment: 'contacto' };

export const FOOTER_LINKS: readonly NavLink[] = [...NAV_LINKS, CONTACT_LINK];
