export type ServiceCategoryId = 'desarrollo' | 'cloud';

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly stack: readonly string[];
  readonly includes: readonly string[];
}

export interface ServiceCategory {
  readonly id: ServiceCategoryId;
  readonly label: string;
  readonly summary: string;
  readonly services: readonly Service[];
}

export const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    id: 'desarrollo',
    label: 'Desarrollo',
    summary:
      'Software a medida para tu negocio: sitios, aplicaciones, APIs y dispositivos conectados, construidos para mantenerse y crecer.',
    services: [
      {
        id: 'web-apps',
        title: 'Sitios y aplicaciones web',
        summary:
          'Sitios rápidos y aplicaciones a medida, desde el diseño de la interfaz hasta producción y disponibilidad.',
        stack: ['Angular', 'React', 'Vue.js', 'TypeScript'],
        includes: ['Diseño responsivo', 'Paneles de administración', 'Optimización y SEO técnico'],
      },
      {
        id: 'apis',
        title: 'APIs e integraciones',
        summary:
          'Conectamos tus sistemas entre sí y con servicios de terceros: pagos, inventarios o CRMs.',
        stack: ['Spring Boot', 'Node.js', 'Python', 'Bases de datos'],
        includes: ['Diseño de APIs REST', 'Integraciones con terceros', 'Documentación de la API'],
      },
      {
        id: 'iot',
        title: 'IoT y automatización',
        summary:
          'Dispositivos y sensores conectados a un panel que puedes consultar desde cualquier lugar.',
        stack: ['ESP32', 'MQTT', 'Python'],
        includes: [
          'Conectividad de dispositivos',
          'Tableros en tiempo real',
          'Alertas automáticas',
          'Automatización de procesos',
        ],
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud y DevOps',
    summary:
      'Infraestructura en la nube diseñada, desplegada y monitoreada por nosotros, garantizando la alta disponibilidad',
    services: [
      {
        id: 'infraestructura',
        title: 'Infraestructura en la nube',
        summary:
          'Diseñamos y levantamos tu infraestructura en AWS, documentada y lista para crecer.',
        stack: ['AWS', 'Terraform', 'Linux'],
        includes: [
          'Arquitectura en AWS',
          'Infraestructura como código',
          'Costos bajo control',
          'Control de acceso',
        ],
      },
      {
        id: 'ci-cd',
        title: 'Contenedores y CI/CD',
        summary: 'Empaquetamos tu aplicación y automatizamos cada despliegue.',
        stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Nginx'],
        includes: ['Contenedores con Docker', 'Pipelines de despliegue', 'Entornos de prueba'],
      },
      {
        id: 'monitoreo',
        title: 'Monitoreo y seguridad',
        summary: 'Vigilamos la disponibilidad y el rendimiento de tus servicios.',
        stack: ['CloudFlare', 'Bases de datos', 'Linux'],
        includes: ['Métricas y alertas', 'Copias de seguridad', 'Hardening de servidores'],
      },
    ],
  },
];
