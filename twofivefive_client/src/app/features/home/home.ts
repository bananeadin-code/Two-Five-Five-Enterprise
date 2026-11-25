import { Component } from '@angular/core';
import { CONTACT_LINK, NAV_LINKS } from '../../core/navigation/nav-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {
  protected readonly sections = [...NAV_LINKS, CONTACT_LINK];
}
