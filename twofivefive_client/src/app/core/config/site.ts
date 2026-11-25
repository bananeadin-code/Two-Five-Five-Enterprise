export interface ContactChannel {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  summary: string;
  city: string;
  email: string;
  channels: readonly ContactChannel[];
}

export const SITE: SiteConfig = {
  name: 'Two Five Five',
  summary: 'Desarrollo de software e infraestructura en la nube para negocios que quieren crecer sin fricción.',
  city: '[Ciudad]',
  email: 'hola@twofivefive.com',
  channels: [],
};
