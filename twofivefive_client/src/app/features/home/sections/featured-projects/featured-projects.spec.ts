import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CASE_STUDIES } from '@features/portfolio/data/case-studies';
import { PortfolioRepository } from '@features/portfolio/data-access/portfolio-repository';
import { StaticPortfolioRepository } from '@features/portfolio/data-access/static-portfolio-repository';
import { FeaturedProjects } from './featured-projects';

async function setup() {
  await TestBed.configureTestingModule({
    imports: [FeaturedProjects],
    providers: [
      provideRouter([]),
      { provide: PortfolioRepository, useClass: StaticPortfolioRepository },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(FeaturedProjects);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('FeaturedProjects', () => {
  it('lists only the featured case studies', async () => {
    const element = await setup();
    const titles = Array.from(element.querySelectorAll('h3')).map((h) => h.textContent?.trim());
    const expected = CASE_STUDIES.filter((study) => study.featured).map((study) => study.title);

    expect(titles).toEqual(expected);
  });

  it('links to the full portfolio', async () => {
    const element = await setup();
    expect(element.querySelector('a[href="/casos"]')?.textContent?.trim()).toBe(
      'Ver todos los casos',
    );
  });
});
