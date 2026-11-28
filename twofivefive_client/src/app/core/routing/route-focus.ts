import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, provideEnvironmentInitializer } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

export function provideRouteFocus() {
  return provideEnvironmentInitializer(() => {
    const document = inject(DOCUMENT);
    let isFirstNavigation = true;

    const subscription = inject(Router).events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      if (isFirstNavigation) {
        isFirstNavigation = false;
        return;
      }
      setTimeout(() => {
        const heading = document.querySelector<HTMLElement>('main h1');
        if (!heading) {
          return;
        }
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      });
    });

    inject(DestroyRef).onDestroy(() => subscription.unsubscribe());
  });
}
