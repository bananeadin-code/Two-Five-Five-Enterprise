import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PAGES } from '@content/pages';
import { type ServiceCategoryId } from '@content/services';
import { PageHeader } from '@shared/ui/page-header/page-header';
import { CaseList } from './case-list/case-list';
import { CATEGORY_LABELS } from './models/case-study';
import { CaseGridSkeleton } from './ui/case-grid-skeleton/case-grid-skeleton';

interface CategoryFilter {
  readonly id: ServiceCategoryId | null;
  readonly label: string;
}

@Component({
  selector: 'app-portfolio-page',
  imports: [PageHeader, CaseList, CaseGridSkeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-header [title]="page.title" [intro]="page.intro" />

    <div class="shell pb-24 lg:pb-32">
      <div
        role="group"
        aria-label="Filtrar casos por categoría"
        class="inline-flex flex-wrap gap-1 rounded-xl border border-line bg-surface p-1 shadow-soft"
      >
        @for (filter of filters; track filter.label) {
          <button
            type="button"
            class="h-10 cursor-pointer rounded-lg px-4 text-sm font-medium transition-colors duration-200"
            [class.bg-ink-900]="filter.id === category()"
            [class.text-white]="filter.id === category()"
            [class.text-ink-600]="filter.id !== category()"
            [attr.aria-pressed]="filter.id === category()"
            (click)="category.set(filter.id)"
          >
            {{ filter.label }}
          </button>
        }
      </div>

      <div class="mt-12">
        @defer (on idle) {
          <app-case-list
            class="motion-safe:animate-fade-in"
            [category]="category()"
            (clearFilter)="category.set(null)"
          />
        } @placeholder (minimum 300ms) {
          <app-case-grid-skeleton />
        }
      </div>
    </div>
  `,
})
export class PortfolioPage {
  protected readonly page = PAGES.casos;
  protected readonly category = signal<ServiceCategoryId | null>(null);
  protected readonly filters: readonly CategoryFilter[] = [
    { id: null, label: 'Todos' },
    { id: 'desarrollo', label: CATEGORY_LABELS.desarrollo },
    { id: 'cloud', label: CATEGORY_LABELS.cloud },
  ];
}
