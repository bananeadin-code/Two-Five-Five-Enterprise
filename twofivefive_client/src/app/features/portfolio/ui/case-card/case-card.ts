import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORY_LABELS, type CaseStudy } from '../../models/case-study';
import { CaseCover } from '../case-cover/case-cover';

@Component({
  selector: 'app-case-card',
  imports: [RouterLink, CaseCover],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="group relative flex h-full flex-col rounded-xl outline-offset-8 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-brand-600"
    >
      <app-case-cover
        [study]="study()"
        class="transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
      />

      <div class="mt-5 flex items-center gap-3 text-xs">
        <span
          class="rounded-md border border-brand-200 bg-brand-50 px-2 py-0.5 font-medium text-brand-700"
        >
          {{ categoryLabel() }}
        </span>
        <span class="font-mono text-ink-500">{{ study().year }}</span>
      </div>

      <h3
        class="mt-3 font-semibold tracking-tight"
        [class.text-2xl]="prominent()"
        [class.text-xl]="!prominent()"
      >
        <a
          [routerLink]="['/casos', study().slug]"
          class="transition-colors duration-200 group-hover:text-brand-700 after:absolute after:inset-0 focus-visible:outline-none"
        >
          {{ study().title }}
        </a>
      </h3>
      <p class="mt-1 text-sm text-ink-500">{{ study().client }}</p>
      <p class="mt-3 max-w-prose leading-relaxed text-ink-600">{{ study().summary }}</p>

      <ul class="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologías">
        @for (tech of study().stack; track tech) {
          <li
            class="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[0.6875rem] text-ink-600"
          >
            {{ tech }}
          </li>
        }
      </ul>
    </article>
  `,
  host: { class: 'block h-full' },
})
export class CaseCard {
  readonly study = input.required<CaseStudy>();
  readonly prominent = input(false);

  protected readonly categoryLabel = computed(() => CATEGORY_LABELS[this.study().category]);
}
