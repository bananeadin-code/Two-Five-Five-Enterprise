export interface ContactChannel {
  readonly label: string;
  readonly href: `https://${string}`;
}

export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly summary: string;
  readonly city: string | null;
  readonly email: string;
  readonly channels: readonly ContactChannel[];
}

export const SITE: SiteConfig = {
  name: 'Two Five Five',
  tagline: 'Desarrollo de software e infraestructura de nube',
  summary: 'Desarrollo de software e infraestructura en la nube.',
  city: 'Durango',
  email: 'hola@twofivefive.com',
  channels: [],
};
