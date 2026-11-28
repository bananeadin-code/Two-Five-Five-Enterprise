import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PAGES } from '@content/pages';
import { PageHeader } from '@shared/ui/page-header/page-header';

@Component({
  selector: 'app-about-page',
  imports: [PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-page-header [title]="page.title" [intro]="page.intro" />`,
})
export class AboutPage {
  protected readonly page = PAGES.nosotros;
}
