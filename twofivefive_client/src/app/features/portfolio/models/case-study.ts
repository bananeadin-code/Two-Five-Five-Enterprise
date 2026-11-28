import { type ServiceCategoryId } from '@content/services';

export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly year: number;
  readonly category: ServiceCategoryId;
  readonly domain: string;
  readonly summary: string;
  readonly challenge: string;
  readonly solution: string;
  readonly result: string;
  readonly stack: readonly string[];
  readonly featured: boolean;
  readonly cover: string | null;
}

export const CATEGORY_LABELS: Readonly<Record<ServiceCategoryId, string>> = {
  desarrollo: 'Desarrollo',
  cloud: 'Cloud y DevOps',
};
