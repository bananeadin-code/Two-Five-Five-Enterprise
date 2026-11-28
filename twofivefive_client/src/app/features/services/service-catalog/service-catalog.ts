import {
  ChangeDetectionStrategy,
  Component,
  type ElementRef,
  signal,
  viewChildren,
} from '@angular/core';
import { SERVICE_CATEGORIES, type ServiceCategoryId } from '@content/services';
import { ServiceCard } from '../service-card/service-card';

@Component({
  selector: 'app-service-catalog',
  imports: [ServiceCard],
  templateUrl: './service-catalog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class ServiceCatalog {
  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('tab');

  protected readonly categories = SERVICE_CATEGORIES;
  protected readonly selectedId = signal<ServiceCategoryId>('desarrollo');

  protected select(id: ServiceCategoryId): void {
    this.selectedId.set(id);
  }

  protected onTabKeydown(event: KeyboardEvent, index: number): void {
    const target = this.targetIndex(event.key, index);
    const category = target === null ? undefined : this.categories[target];
    if (target === null || !category) {
      return;
    }
    event.preventDefault();
    this.select(category.id);
    this.tabs()[target]?.nativeElement.focus();
  }

  private targetIndex(key: string, index: number): number | null {
    const last = this.categories.length - 1;
    switch (key) {
      case 'ArrowRight':
        return index === last ? 0 : index + 1;
      case 'ArrowLeft':
        return index === 0 ? last : index - 1;
      case 'Home':
        return 0;
      case 'End':
        return last;
      default:
        return null;
    }
  }
}
