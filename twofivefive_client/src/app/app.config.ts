import { provideHttpClient, withFetch } from '@angular/common/http';
import { type ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { provideFragmentFocus } from '@core/routing/fragment-focus';
import { PageTitleStrategy } from '@core/routing/page-title.strategy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    provideFragmentFocus(),
    provideHttpClient(withFetch()),
  ],
};
