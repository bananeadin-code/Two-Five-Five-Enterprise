import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

type LogoTone = 'dark' | 'light';
type LogoSize = 'sm' | 'lg';

const MARK_SIZE: Record<LogoSize, string> = {
  sm: 'h-7 w-auto',
  lg: 'h-14 w-auto',
};

const LABEL_SIZE: Record<LogoSize, string> = {
  sm: 'text-[1.0625rem]',
  lg: 'text-2xl',
};

const LABEL_TONE: Record<LogoTone, string> = {
  dark: 'text-ink-900',
  light: 'text-white',
};

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img src="brand/logo-mark.png" alt="" width="534" height="355" [class]="markClass()" />
    <span [class]="labelClass()">{{ label() }}</span>
  `,
  host: { class: 'inline-flex items-center gap-2.5' },
})
export class Logo {
  readonly label = input.required<string>();
  readonly tone = input<LogoTone>('dark');
  readonly size = input<LogoSize>('sm');

  protected readonly markClass = computed(() => MARK_SIZE[this.size()]);
  protected readonly labelClass = computed(
    () => `${LABEL_TONE[this.tone()]} ${LABEL_SIZE[this.size()]} font-semibold tracking-tight`,
  );
}
