import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DEPLOY_PREVIEW } from '@content/hero';

const FIRST_STEP_DELAY_MS = 300;
const STEP_INTERVAL_MS = 350;

@Component({
  selector: 'app-deploy-preview',
  templateUrl: './deploy-preview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    @keyframes step-in {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      .deploy-step {
        animation: step-in 420ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
      }
    }
  `,
  host: { class: 'block' },
})
export class DeployPreview {
  protected readonly preview = DEPLOY_PREVIEW;

  protected stepDelay(index: number): number {
    return FIRST_STEP_DELAY_MS + index * STEP_INTERVAL_MS;
  }
}
