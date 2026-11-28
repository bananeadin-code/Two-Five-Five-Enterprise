import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { CASE_STUDIES } from '../data/case-studies';
import { PortfolioRepository } from '../data-access/portfolio-repository';
import { StaticPortfolioRepository } from '../data-access/static-portfolio-repository';
import { CaseList } from './case-list';

async function setup(category: 'desarrollo' | 'cloud' | null, repository?: PortfolioRepository) {
  await TestBed.configureTestingModule({
    imports: [CaseList],
    providers: [
      provideRouter([]),
      repository
        ? { provide: PortfolioRepository, useValue: repository }
        : { provide: PortfolioRepository, useClass: StaticPortfolioRepository },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(CaseList);
  fixture.componentRef.setInput('category', category);
  await fixture.whenStable();
  return { fixture, element: fixture.nativeElement as HTMLElement };
}

function titles(element: HTMLElement): (string | undefined)[] {
  return Array.from(element.querySelectorAll('h3')).map((h) => h.textContent?.trim());
}

describe('CaseList', () => {
  it('shows every case when no category is selected', async () => {
    const { element } = await setup(null);
    expect(titles(element)).toEqual(CASE_STUDIES.map((study) => study.title));
  });

  it('shows only the cases of the selected category', async () => {
    const { element } = await setup('cloud');
    const expected = CASE_STUDIES.filter((study) => study.category === 'cloud').map(
      (study) => study.title,
    );
    expect(titles(element)).toEqual(expected);
  });

  it('links each card to its detail page', async () => {
    const { element } = await setup(null);
    expect(element.querySelector('h3 a')?.getAttribute('href')).toBe(
      `/casos/${CASE_STUDIES[0]?.slug}`,
    );
  });

  it('offers a way back to all cases when a category is empty', async () => {
    const onlyDevelopment = Object.assign(new StaticPortfolioRepository(), {
      list: () => of(CASE_STUDIES.filter((study) => study.category === 'desarrollo')),
    });
    const { fixture, element } = await setup('cloud', onlyDevelopment);
    let cleared = false;
    fixture.componentInstance.clearFilter.subscribe(() => (cleared = true));

    expect(titles(element)).toEqual([]);
    element.querySelector<HTMLButtonElement>('button')?.click();
    expect(cleared).toBe(true);
  });
});
