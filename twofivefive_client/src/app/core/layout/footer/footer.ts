import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../config/site';
import { CONTACT_LINK, NAV_LINKS } from '../../navigation/nav-links';
import { Logo } from '../../../shared/ui/logo/logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Logo],
  templateUrl: './footer.html',
  host: { class: 'block' },
})
export class Footer {
  protected readonly site = SITE;
  protected readonly links = [...NAV_LINKS, CONTACT_LINK];
  protected readonly year = new Date().getFullYear();
}
