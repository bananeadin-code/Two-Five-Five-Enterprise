import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SITE } from '@content/site';
import { PageHeader } from '@shared/ui/page-header/page-header';
import { PortfolioRepository } from '../data-access/portfolio-repository';
import { CATEGORY_LABELS } from '../models/case-study';
import { CaseCover } from '../ui/case-cover/case-cover';
import { CaseDetailSkeleton } from './case-detail-skeleton';

@Component({
  selector: 'app-case-detail-page',
  imports: [RouterLink, PageHeader, CaseCover, CaseDetailSkeleton],
  templateUrl: './case-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseDetailPage {
  private readonly repository = inject(PortfolioRepository);
  private readonly title = inject(Title);

  readonly slug = input.required<string>();

  protected readonly study = rxResource({
    params: () => this.slug(),
    stream: ({ params }) => this.repository.bySlug(params),
  });

  protected readonly categoryLabel = computed(() => {
    const study = this.study.value();
    return study ? CATEGORY_LABELS[study.category] : '';
  });

  protected readonly story = computed(() => {
    const study = this.study.value();
    if (!study) {
      return [];
    }
    return [
      { heading: 'El reto', body: study.challenge },
      { heading: 'La solución', body: study.solution },
      { heading: 'El resultado', body: study.result },
    ];
  });

  constructor() {
    effect(() => {
      const study = this.study.value();
      if (study) {
        this.title.setTitle(`${study.title} · ${SITE.name}`);
      }
    });
  }
}
