import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  styles: `
    :host {
      display: block;
      border-radius: 0.375rem;
      background-image: linear-gradient(
        90deg,
        var(--color-brand-50) 0%,
        var(--color-brand-100) 50%,
        var(--color-brand-50) 100%
      );
      background-size: 200% 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
      :host {
        animation: shimmer 1.4s ease-in-out infinite;
      }
    }

    @keyframes shimmer {
      from {
        background-position: 100% 0;
      }
      to {
        background-position: -100% 0;
      }
    }
  `,
  host: { 'aria-hidden': 'true' },
})
export class Skeleton {}
