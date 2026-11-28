import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PortfolioRepository } from '@features/portfolio/data-access/portfolio-repository';
import { CaseCard } from '@features/portfolio/ui/case-card/case-card';
import { FeaturedProjectsSkeleton } from './featured-projects-skeleton';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink, CaseCard, FeaturedProjectsSkeleton],
  templateUrl: './featured-projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class FeaturedProjects {
  private readonly repository = inject(PortfolioRepository);

  protected readonly featured = rxResource({ stream: () => this.repository.featured() });
  protected readonly studies = computed(() => this.featured.value() ?? []);
}
