import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  type ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONTACT_LINK, NAV_LINKS } from '@content/nav-links';
import { SITE } from '@content/site';
import { Logo } from '@shared/ui/logo/logo';

const SCROLL_THRESHOLD = 8;

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sticky top-0 z-50 block',
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class Header {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly toggle = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');

  protected readonly siteName = SITE.name;
  protected readonly links = NAV_LINKS;
  protected readonly contact = CONTACT_LINK;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly barClass = computed(() => {
    if (this.menuOpen()) {
      return 'border-line bg-canvas';
    }
    return this.scrolled()
      ? 'border-line bg-canvas/85 backdrop-blur-md'
      : 'border-transparent bg-transparent';
  });

  constructor() {
    afterNextRender(() => this.trackScroll());
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onEscape(): void {
    if (!this.menuOpen()) {
      return;
    }
    this.closeMenu();
    this.toggle().nativeElement.focus();
  }

  private trackScroll(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const update = () => this.scrolled.set(view.scrollY > SCROLL_THRESHOLD);
    update();
    view.addEventListener('scroll', update, { passive: true });
    this.destroyRef.onDestroy(() => view.removeEventListener('scroll', update));
  }
}
