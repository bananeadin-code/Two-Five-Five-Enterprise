import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PAGES } from '@content/pages';
import { PageHeader } from '@shared/ui/page-header/page-header';

@Component({
  selector: 'app-process-page',
  imports: [PageHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-page-header [title]="page.title" [intro]="page.intro" />`,
})
export class ProcessPage {
  protected readonly page = PAGES.proceso;
}
