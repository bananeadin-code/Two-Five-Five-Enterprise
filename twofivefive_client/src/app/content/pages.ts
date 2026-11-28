export type PageId = 'servicios' | 'casos' | 'proceso' | 'nosotros' | 'contacto';

export interface PageIntro {
  readonly title: string;
  readonly intro: string;
}

export const PAGES: Readonly<Record<PageId, PageIntro>> = {
  servicios: {
    title: 'Servicios',
    intro:
      'Desarrollamos tu software y lo llevamos a la nube, nos gusta la escalabilidad y la alta disponibilidad.',
  },
  casos: {
    title: 'Casos',
    intro: 'Proyectos reales, lo que construimos y el resultado.',
  },
  proceso: {
    title: 'Proceso',
    intro: 'Cómo trabajamos contigo, desde el primer contacto hasta después del lanzamiento.',
  },
  nosotros: {
    title: 'Nosotros',
    intro: 'Un equipo comprometido de desarrollo e infraestructura de nube que trabaja contigo.',
  },
  contacto: {
    title: 'Contacto',
    intro: 'Cuéntanos qué necesitas y te respondemos con una propuesta inicial.',
  },
};
