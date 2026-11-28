import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { type ServiceCategoryId } from '@content/services';
import { PortfolioRepository } from '../data-access/portfolio-repository';
import { CaseCard } from '../ui/case-card/case-card';
import { CaseGridSkeleton } from '../ui/case-grid-skeleton/case-grid-skeleton';

@Component({
  selector: 'app-case-list',
  imports: [CaseCard, CaseGridSkeleton],
  templateUrl: './case-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class CaseList {
  private readonly repository = inject(PortfolioRepository);

  readonly category = input<ServiceCategoryId | null>(null);
  readonly clearFilter = output();

  protected readonly cases = rxResource({ stream: () => this.repository.list() });

  protected readonly visible = computed(() => {
    const category = this.category();
    const all = this.cases.value() ?? [];
    return category ? all.filter((study) => study.category === category) : all;
  });
}
