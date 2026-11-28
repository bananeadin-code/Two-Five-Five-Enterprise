import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { type CaseStudy } from '../../models/case-study';

@Component({
  selector: 'app-case-cover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
      <div class="flex items-center gap-3 border-b border-line bg-canvas px-4 py-2.5">
        <span aria-hidden="true" class="h-1.5 w-8 shrink-0 rounded-sm bg-ink-200"></span>
        <span class="truncate font-mono text-[0.6875rem] text-ink-500">{{ study().domain }}</span>
      </div>
      @if (study().cover; as cover) {
        <img
          [src]="cover"
          [alt]="'Captura de ' + study().title"
          loading="lazy"
          decoding="async"
          width="1600"
          height="1000"
          class="aspect-[16/10] w-full object-cover"
        />
      } @else {
        <div
          class="relative aspect-[16/10] overflow-hidden bg-linear-to-br from-brand-100 via-brand-50 to-surface"
        >
          <svg
            viewBox="0 0 800 500"
            preserveAspectRatio="none"
            class="absolute inset-x-0 bottom-0 h-3/5 w-full"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M0 330C120 290 220 350 340 318S560 210 660 238 760 170 800 176V500H0Z"
              class="fill-brand-200/70"
            />
            <path
              d="M0 410C150 380 260 430 400 398S620 320 720 344 780 300 800 302V500H0Z"
              class="fill-brand-300/40"
            />
          </svg>
          <p class="absolute inset-0 grid place-items-center font-mono text-xs text-brand-700">
            [Captura del proyecto]
          </p>
        </div>
      }
    </div>
  `,
  host: { class: 'block' },
})
export class CaseCover {
  readonly study = input.required<CaseStudy>();
}
