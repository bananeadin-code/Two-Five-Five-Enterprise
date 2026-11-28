import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_LINKS } from '@content/nav-links';
import { SITE } from '@content/site';
import { Logo } from '@shared/ui/logo/logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Logo],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class Footer {
  protected readonly site = SITE;
  protected readonly links = FOOTER_LINKS;
  protected readonly year = new Date().getFullYear();
}
