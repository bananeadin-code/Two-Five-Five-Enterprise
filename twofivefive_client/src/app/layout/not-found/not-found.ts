import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="shell flex min-h-[60vh] flex-col justify-center py-24">
      <h1 class="max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        No encontramos esta página.
      </h1>
      <p class="mt-4 max-w-xl text-lg text-ink-600">
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <a routerLink="/" class="btn btn-primary mt-10 self-start">Volver al inicio</a>
    </section>
  `,
})
export class NotFound {}
