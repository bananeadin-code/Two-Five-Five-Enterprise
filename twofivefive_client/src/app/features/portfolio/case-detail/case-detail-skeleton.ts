import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skeleton } from '@shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-case-detail-skeleton',
  imports: [Skeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="shell pt-12 pb-12 lg:pt-20 lg:pb-16">
      <div class="pl-7 sm:pl-10">
        <app-skeleton class="h-12 w-2/3 max-w-xl lg:h-14" />
        <app-skeleton class="mt-5 h-5 w-full max-w-2xl" />
        <app-skeleton class="mt-2 h-5 w-3/4 max-w-lg" />
      </div>
    </div>
    <div class="shell grid gap-12 pb-24 lg:grid-cols-12 lg:gap-16">
      <app-skeleton class="aspect-[16/10] w-full rounded-xl lg:col-span-8" />
      <div class="space-y-6 lg:col-span-4">
        @for (row of rows; track row) {
          <div>
            <app-skeleton class="h-4 w-20" />
            <app-skeleton class="mt-2 h-5 w-2/3" />
          </div>
        }
      </div>
    </div>
  `,
  host: { class: 'block', role: 'status', 'aria-label': 'Cargando caso' },
})
export class CaseDetailSkeleton {
  protected readonly rows = [1, 2, 3, 4];
}
