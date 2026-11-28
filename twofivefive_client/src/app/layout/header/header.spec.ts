import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

async function setup() {
  await TestBed.configureTestingModule({
    imports: [Header],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(Header);
  await fixture.whenStable();
  const element = fixture.nativeElement as HTMLElement;
  const toggle = element.querySelector<HTMLButtonElement>('button[aria-controls="menu-movil"]');
  const panel = element.querySelector<HTMLElement>('#menu-movil');
  if (!toggle || !panel) {
    throw new Error('Header markup is missing the menu toggle or panel');
  }
  return { fixture, element, toggle, panel };
}

describe('Header', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
  });

  it('renders a banner landmark with the primary navigation', async () => {
    const { element } = await setup();
    expect(element.querySelector('header nav[aria-label="Principal"]')).toBeTruthy();
  });

  it('keeps the mobile panel in the DOM, hidden until opened', async () => {
    const { toggle, panel } = await setup();
    expect(panel.hidden).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens and closes the mobile menu with the toggle', async () => {
    const { fixture, toggle, panel } = await setup();

    toggle.click();
    await fixture.whenStable();
    expect(panel.hidden).toBe(false);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    toggle.click();
    await fixture.whenStable();
    expect(panel.hidden).toBe(true);
  });

  it('closes on Escape and returns focus to the toggle', async () => {
    const { fixture, toggle, panel } = await setup();

    toggle.click();
    await fixture.whenStable();
    panel.querySelector('a')?.focus();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();

    expect(panel.hidden).toBe(true);
    expect(document.activeElement).toBe(toggle);
  });

  it('ignores Escape while the menu is closed', async () => {
    const { fixture, toggle } = await setup();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();

    expect(document.activeElement).not.toBe(toggle);
  });

  it('elevates the bar once the page scrolls', async () => {
    const { fixture, element } = await setup();
    const bar = element.querySelector('header');
    expect(bar?.classList.contains('border-transparent')).toBe(true);

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true });
    window.dispatchEvent(new Event('scroll'));
    await fixture.whenStable();

    expect(bar?.classList.contains('backdrop-blur-md')).toBe(true);
  });
});
