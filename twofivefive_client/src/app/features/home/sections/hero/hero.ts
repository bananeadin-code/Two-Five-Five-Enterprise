import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO } from '@content/hero';
import { DeployPreview } from './deploy-preview/deploy-preview';
import { HeroBackdrop } from './hero-backdrop/hero-backdrop';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, DeployPreview, HeroBackdrop],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class Hero {
  protected readonly content = HERO;
}
