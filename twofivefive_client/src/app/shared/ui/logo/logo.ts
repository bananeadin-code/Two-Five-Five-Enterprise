import { Component, computed, input } from '@angular/core';
import { SITE } from '../../../core/config/site';

type LogoTone = 'dark' | 'light';
type LogoSize = 'sm' | 'lg';

@Component({
  selector: 'app-logo',
  template: `
    <img
      src="brand/logo-mark.png"
      alt=""
      width="534"
      height="355"
      [class]="size() === 'lg' ? 'h-14 w-auto' : 'h-7 w-auto'"
    />
    <span [class]="labelClass()">{{ name }}</span>
  `,
  host: { class: 'inline-flex items-center gap-2.5' },
})
export class Logo {
  readonly tone = input<LogoTone>('dark');
  readonly size = input<LogoSize>('sm');

  protected readonly name = SITE.name;

  protected readonly labelClass = computed(() => {
    const color = this.tone() === 'light' ? 'text-white' : 'text-ink-900';
    const scale = this.size() === 'lg' ? 'text-2xl' : 'text-[1.0625rem]';
    return `${color} ${scale} font-semibold tracking-tight`;
  });
}
