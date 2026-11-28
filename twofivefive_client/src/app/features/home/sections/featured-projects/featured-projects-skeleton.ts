import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Skeleton } from '@shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-featured-projects-skeleton',
  imports: [Skeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid gap-x-8 gap-y-12 lg:grid-cols-12">
      @for (card of cards; track card.id) {
        <div [class]="card.span">
          <app-skeleton class="aspect-[16/10] w-full rounded-xl" />
          <div class="mt-5 flex gap-3">
            <app-skeleton class="h-5 w-24" />
            <app-skeleton class="h-5 w-12" />
          </div>
          <app-skeleton class="mt-3 h-7 w-1/2" />
          <app-skeleton class="mt-3 h-4 w-full max-w-md" />
          <app-skeleton class="mt-2 h-4 w-4/5 max-w-sm" />
        </div>
      }
    </div>
  `,
  host: { class: 'block', role: 'status', 'aria-label': 'Cargando proyectos destacados' },
})
export class FeaturedProjectsSkeleton {
  protected readonly cards = [
    { id: 1, span: 'lg:col-span-7 lg:row-span-2' },
    { id: 2, span: 'lg:col-span-5' },
    { id: 3, span: 'lg:col-span-5' },
  ];
}
