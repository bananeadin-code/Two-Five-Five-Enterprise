import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the layout landmarks', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('app-header header')).toBeTruthy();
    expect(element.querySelector('main#contenido')).toBeTruthy();
    expect(element.querySelector('app-footer footer')).toBeTruthy();
  });

  it('moves focus to the main content from the skip link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    element.querySelector<HTMLAnchorElement>('a[href="#contenido"]')?.click();

    expect(document.activeElement).toBe(element.querySelector('main'));
  });
});
