import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="shell pt-12 pb-12 lg:pt-20 lg:pb-16">
      <div class="relative pl-7 sm:pl-10">
        <span
          aria-hidden="true"
          class="absolute top-2 bottom-0 left-0 w-px bg-linear-to-b from-brand-400 via-brand-200 to-transparent"
        ></span>
        <span
          aria-hidden="true"
          class="absolute top-[1.05rem] left-0 size-2 -translate-x-1/2 rotate-45 bg-brand-600 lg:top-[1.6rem]"
        ></span>
        <h1
          class="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl"
        >
          {{ title() }}
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-ink-600">
          {{ intro() }}
        </p>
        <ng-content />
      </div>
    </div>
  `,
  host: { class: 'block' },
})
export class PageHeader {
  readonly title = input.required<string>();
  readonly intro = input.required<string>();
}
