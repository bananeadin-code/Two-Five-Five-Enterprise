import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SERVICE_CATEGORIES } from '@content/services';
import { ServiceCatalog } from './service-catalog';

async function setup() {
  await TestBed.configureTestingModule({
    imports: [ServiceCatalog],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(ServiceCatalog);
  await fixture.whenStable();
  const element = fixture.nativeElement as HTMLElement;
  const tabs = Array.from(element.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = Array.from(element.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
  return { fixture, tabs, panels };
}

describe('ServiceCatalog', () => {
  it('renders one tab and one panel per category', async () => {
    const { tabs, panels } = await setup();
    expect(tabs).toHaveLength(SERVICE_CATEGORIES.length);
    expect(panels).toHaveLength(SERVICE_CATEGORIES.length);
  });

  it('selects the first category and hides the rest', async () => {
    const { tabs, panels } = await setup();
    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true');
    expect(tabs[0]?.tabIndex).toBe(0);
    expect(tabs[1]?.tabIndex).toBe(-1);
    expect(panels[0]?.hidden).toBe(false);
    expect(panels[1]?.hidden).toBe(true);
  });

  it('switches panels when a tab is clicked', async () => {
    const { fixture, tabs, panels } = await setup();

    tabs[1]?.click();
    await fixture.whenStable();

    expect(tabs[1]?.getAttribute('aria-selected')).toBe('true');
    expect(panels[0]?.hidden).toBe(true);
    expect(panels[1]?.hidden).toBe(false);
  });

  it('moves selection and focus with the arrow keys, wrapping at the ends', async () => {
    const { fixture, tabs } = await setup();

    tabs[0]?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    await fixture.whenStable();

    const last = tabs[tabs.length - 1];
    expect(last?.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement).toBe(last);
  });

  it('jumps to the first tab with Home', async () => {
    const { fixture, tabs } = await setup();
    tabs[1]?.click();
    await fixture.whenStable();

    tabs[1]?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    await fixture.whenStable();

    expect(tabs[0]?.getAttribute('aria-selected')).toBe('true');
  });
});
