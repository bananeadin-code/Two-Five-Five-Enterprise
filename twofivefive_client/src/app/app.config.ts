import { provideHttpClient, withFetch } from '@angular/common/http';
import { type ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { PageTitleStrategy } from '@core/routing/page-title.strategy';
import { provideRouteFocus } from '@core/routing/route-focus';
import { PortfolioRepository } from '@features/portfolio/data-access/portfolio-repository';
import { StaticPortfolioRepository } from '@features/portfolio/data-access/static-portfolio-repository';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    provideRouteFocus(),
    provideHttpClient(withFetch()),
    { provide: PortfolioRepository, useClass: StaticPortfolioRepository },
  ],
};
