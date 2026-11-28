import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skeleton } from '@shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-case-grid-skeleton',
  imports: [Skeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
      @for (card of cards; track card) {
        <div>
          <app-skeleton class="aspect-[16/10] w-full rounded-xl" />
          <div class="mt-5 flex gap-3">
            <app-skeleton class="h-5 w-24" />
            <app-skeleton class="h-5 w-12" />
          </div>
          <app-skeleton class="mt-3 h-6 w-1/2" />
          <app-skeleton class="mt-3 h-4 w-full" />
          <app-skeleton class="mt-2 h-4 w-4/5" />
        </div>
      }
    </div>
  `,
  host: { class: 'block', role: 'status', 'aria-label': 'Cargando casos' },
})
export class CaseGridSkeleton {
  protected readonly cards = [1, 2, 3];
}
