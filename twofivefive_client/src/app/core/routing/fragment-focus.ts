import { DOCUMENT, ViewportScroller } from '@angular/common';
import { DestroyRef, inject, provideEnvironmentInitializer } from '@angular/core';
import { Router, Scroll } from '@angular/router';

const STICKY_HEADER_OFFSET = 96;

export function provideFragmentFocus() {
  return provideEnvironmentInitializer(() => {
    const document = inject(DOCUMENT);
    inject(ViewportScroller).setOffset([0, STICKY_HEADER_OFFSET]);
    const subscription = inject(Router).events.subscribe((event) => {
      if (!(event instanceof Scroll) || !event.anchor) {
        return;
      }
      const anchor = event.anchor;
      setTimeout(() => {
        const target = document.getElementById(anchor);
        if (!target) {
          return;
        }
        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      });
    });
    inject(DestroyRef).onDestroy(() => subscription.unsubscribe());
  });
}
