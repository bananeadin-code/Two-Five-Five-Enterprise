import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturedProjects } from './sections/featured-projects/featured-projects';
import { FeaturedProjectsSkeleton } from './sections/featured-projects/featured-projects-skeleton';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProjects, FeaturedProjectsSkeleton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />

    @defer (on viewport; prefetch on idle) {
      <app-featured-projects class="motion-safe:animate-fade-in" />
    } @placeholder (minimum 300ms) {
      <div class="shell py-20 lg:py-28">
        <app-featured-projects-skeleton class="mt-24" />
      </div>
    }
  `,
})
export class Home {}
