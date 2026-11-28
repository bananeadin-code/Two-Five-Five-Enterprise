import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 1440 520"
      preserveAspectRatio="none"
      class="h-full w-full"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="hero-wave-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" class="[stop-color:var(--color-brand-200)]" />
          <stop offset="1" class="[stop-color:var(--color-canvas)]" />
        </linearGradient>
        <linearGradient id="hero-wave-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" class="[stop-color:var(--color-brand-100)]" />
          <stop offset="0.6" class="[stop-color:var(--color-brand-300)]" stop-opacity="0.55" />
          <stop offset="1" class="[stop-color:var(--color-canvas)]" />
        </linearGradient>
      </defs>
      <path
        d="M0 380C180 320 320 410 520 360S860 210 1040 262 1320 128 1440 140V520H0Z"
        fill="url(#hero-wave-back)"
      />
      <path
        d="M0 452C220 408 380 470 600 424S940 300 1120 340 1340 246 1440 252V520H0Z"
        fill="url(#hero-wave-front)"
      />
      <path
        d="M0 380C180 320 320 410 520 360S860 210 1040 262 1320 128 1440 140"
        class="stroke-white"
        stroke-width="1.5"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  `,
  host: { class: 'pointer-events-none absolute inset-x-0 bottom-0 -z-10 block h-[55%]' },
})
export class HeroBackdrop {}
