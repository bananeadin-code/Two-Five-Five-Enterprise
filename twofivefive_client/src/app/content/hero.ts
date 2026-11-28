import { type PagePath } from './nav-links';

export interface HeroLink {
  readonly label: string;
  readonly path: PagePath;
}

export interface HeroContent {
  readonly availability: string;
  readonly title: {
    readonly before: string;
    readonly emphasis: string;
    readonly after: string;
  };
  readonly summary: string;
  readonly primary: HeroLink;
  readonly secondary: HeroLink;
}

export interface DeployStep {
  readonly label: string;
  readonly detail: string;
}

export interface DeployPreviewContent {
  readonly description: string;
  readonly project: string;
  readonly branch: string;
  readonly status: string;
  readonly steps: readonly DeployStep[];
  readonly footnote: string;
}

export const HERO: HeroContent = {
  availability: 'Agenda abierta para nuevos proyectos',
  title: {
    before: 'Tu infraestructura,',
    emphasis: 'ligera',
    after: 'como una nube.',
  },
  summary:
    'Desarrollamos software a medida y lo llevamos a la nube: infraestructura, despliegues y monitoreo listos para crecer contigo.',
  primary: { label: 'Cuéntanos tu proyecto', path: '/contacto' },
  secondary: { label: 'Ver casos', path: '/casos' },
};

export const DEPLOY_PREVIEW: DeployPreviewContent = {
  description:
    'Ejemplo de un despliegue: compilación, pruebas, despliegue en AWS y monitoreo completados.',
  project: 'tu-proyecto',
  branch: 'main',
  status: 'En línea',
  steps: [
    { label: 'Compilación', detail: '41 s' },
    { label: 'Pruebas', detail: '128 de 128' },
    { label: 'Despliegue', detail: 'AWS us-east-1' },
    { label: 'Monitoreo', detail: 'Alertas activas' },
  ],
  footnote: 'Publicado hace 2 min',
};
