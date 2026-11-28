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
  tagline: 'Desarrollo de software y nube',
  summary:
    'Desarrollo de software e infraestructura en la nube para negocios que quieren crecer sin fricción.',
  city: null,
  email: 'hola@twofivefive.com',
  channels: [],
};
