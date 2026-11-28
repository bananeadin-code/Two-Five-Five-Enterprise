import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DEPLOY_PREVIEW, HERO } from '@content/hero';
import { Hero } from './hero';

async function setup() {
  await TestBed.configureTestingModule({
    imports: [Hero],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(Hero);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('Hero', () => {
  it('renders the page heading with the emphasised word', async () => {
    const element = await setup();
    const heading = element.querySelector('h1');

    expect(heading?.textContent).toContain(HERO.title.before);
    expect(heading?.querySelector('.emphasis')?.textContent?.trim()).toBe(HERO.title.emphasis);
  });

  it('links the calls to action to their sections', async () => {
    const element = await setup();
    const hrefs = Array.from(element.querySelectorAll('a.btn')).map((link) =>
      link.getAttribute('href'),
    );

    expect(hrefs).toEqual([HERO.primary.path, HERO.secondary.path]);
  });

  it('describes the deploy preview as a single image with every step', async () => {
    const element = await setup();
    const preview = element.querySelector('[role="img"]');

    expect(preview?.getAttribute('aria-label')).toBe(DEPLOY_PREVIEW.description);
    expect(preview?.querySelectorAll('li')).toHaveLength(DEPLOY_PREVIEW.steps.length);
  });
});
