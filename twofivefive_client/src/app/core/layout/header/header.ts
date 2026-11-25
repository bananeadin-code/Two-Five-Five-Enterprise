import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_LINK, NAV_LINKS } from '../../navigation/nav-links';
import { Logo } from '../../../shared/ui/logo/logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo],
  templateUrl: './header.html',
  host: {
    class: 'sticky top-0 z-50 block',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly links = NAV_LINKS;
  protected readonly contact = CONTACT_LINK;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
