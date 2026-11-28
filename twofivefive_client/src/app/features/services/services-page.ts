import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PAGES } from '@content/pages';
import { PageHeader } from '@shared/ui/page-header/page-header';
import { ServiceCatalog } from './service-catalog/service-catalog';
import { ServiceCatalogSkeleton } from './service-catalog/service-catalog-skeleton';

@Component({
  selector: 'app-services-page',
  imports: [PageHeader, ServiceCatalog, ServiceCatalogSkeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-header [title]="page.title" [intro]="page.intro" />
    <div class="shell pb-24 lg:pb-32">
      @defer (on idle) {
        <app-service-catalog class="motion-safe:animate-fade-in" />
      } @placeholder (minimum 300ms) {
        <app-service-catalog-skeleton />
      }
    </div>
  `,
})
export class ServicesPage {
  protected readonly page = PAGES.servicios;
}
