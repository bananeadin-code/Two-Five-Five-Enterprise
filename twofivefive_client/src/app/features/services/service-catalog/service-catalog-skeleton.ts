import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skeleton } from '@shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-service-catalog-skeleton',
  imports: [Skeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="inline-flex gap-1 rounded-xl border border-line bg-surface p-1">
      <app-skeleton class="h-10 w-28 rounded-lg" />
      <app-skeleton class="h-10 w-36 rounded-lg" />
    </div>
    <app-skeleton class="mt-10 h-5 w-full max-w-xl" />
    <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      @for (card of cards; track card) {
        <div class="rounded-xl border border-line bg-surface p-6 lg:p-7">
          <div class="flex gap-1.5">
            <app-skeleton class="h-5 w-16" />
            <app-skeleton class="h-5 w-20" />
            <app-skeleton class="h-5 w-14" />
          </div>
          <app-skeleton class="mt-6 h-6 w-3/5" />
          <app-skeleton class="mt-3 h-4 w-full" />
          <app-skeleton class="mt-2 h-4 w-4/5" />
          <div class="mt-6 space-y-3">
            <app-skeleton class="h-4 w-2/3" />
            <app-skeleton class="h-4 w-1/2" />
            <app-skeleton class="h-4 w-3/5" />
          </div>
          <app-skeleton class="mt-8 h-11 w-full rounded-lg" />
        </div>
      }
    </div>
  `,
  host: { class: 'block', role: 'status', 'aria-label': 'Cargando servicios' },
})
export class ServiceCatalogSkeleton {
  protected readonly cards = [1, 2, 3];
}
