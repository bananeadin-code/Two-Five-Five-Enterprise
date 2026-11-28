import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER_LINKS } from '@content/nav-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly pendingSections = FOOTER_LINKS;
}
