import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CASE_STUDIES } from '../data/case-studies';
import { PortfolioRepository } from '../data-access/portfolio-repository';
import { StaticPortfolioRepository } from '../data-access/static-portfolio-repository';
import { CaseDetailPage } from './case-detail-page';

async function setup(slug: string) {
  await TestBed.configureTestingModule({
    imports: [CaseDetailPage],
    providers: [
      provideRouter([]),
      { provide: PortfolioRepository, useClass: StaticPortfolioRepository },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(CaseDetailPage);
  fixture.componentRef.setInput('slug', slug);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('CaseDetailPage', () => {
  it('renders the case that matches the slug', async () => {
    const study = CASE_STUDIES[0];
    if (!study) {
      throw new Error('Expected at least one case study');
    }
    const element = await setup(study.slug);

    expect(element.querySelector('h1')?.textContent?.trim()).toBe(study.title);
    expect(element.textContent).toContain(study.challenge);
    expect(element.textContent).toContain(study.result);
    expect(TestBed.inject(Title).getTitle()).toContain(study.title);
  });

  it('shows a not-found message for an unknown slug', async () => {
    const element = await setup('no-existe');

    expect(element.querySelector('h1')?.textContent?.trim()).toBe('No encontramos este caso.');
    expect(element.querySelector('a.btn[href="/casos"]')).toBeTruthy();
  });
});
