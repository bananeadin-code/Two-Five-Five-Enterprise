import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Service } from '@content/services';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-soft lg:p-7"
    >
      <ul class="flex flex-wrap gap-1.5" aria-label="Tecnologías">
        @for (tech of service().stack; track tech) {
          <li
            class="rounded-md border border-line bg-canvas px-2 py-0.5 font-mono text-[0.6875rem] text-ink-600"
          >
            {{ tech }}
          </li>
        }
      </ul>

      <h3 class="mt-6 text-lg font-semibold tracking-tight">{{ service().title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-ink-600">{{ service().summary }}</p>

      <ul class="mt-6 space-y-3 text-sm">
        @for (item of service().includes; track item) {
          <li class="flex items-start gap-3">
            <span
              aria-hidden="true"
              class="mt-px grid size-4.5 shrink-0 place-items-center rounded-[0.25rem] bg-brand-100 text-brand-700"
            >
              <svg
                viewBox="0 0 16 16"
                class="size-3"
                fill="none"
                stroke="currentColor"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3.5 8.5l3 3L12.5 5" />
              </svg>
            </span>
            {{ item }}
          </li>
        }
      </ul>

      <div class="mt-auto pt-8">
        <a routerLink="/contacto" class="btn btn-secondary w-full">
          Cotizar <span class="sr-only">{{ service().title }}</span>
        </a>
      </div>
    </article>
  `,
  host: { class: 'block h-full' },
})
export class ServiceCard {
  readonly service = input.required<Service>();
}
