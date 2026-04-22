import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceSectionComponent } from '../../shared/service-section/service-section.component';

type Feedback = 'yes' | 'no' | null;

@Component({
  selector: 'app-building-license',
  imports: [CommonModule, ServiceSectionComponent],
  templateUrl: './building-license.component.html',
  styleUrl: './building-license.component.scss',
})
export class BuildingLicenseComponent {
  readonly categories = ['الحياة', 'رحلة الحياة', 'المنصة'];
  readonly tabs = ['الخطوات', 'شروط الاستخدام', 'المستندات المطلوبة'];

  activeCategory = signal(0);
  activeTab = signal(0);

  userRating = signal<number>(0);
  hoverRating = signal<number>(0);
  ratingSubmitted = signal(false);
  feedback = signal<Feedback>(null);
  statusMessage = signal('');

  readonly avgRating = 3.9;
  readonly ratingCount = 1544;

  filledStars = computed(() => Math.floor(this.avgRating));
  hasHalfStar = computed(() => this.avgRating % 1 >= 0.5);

  selectCategory(i: number): void {
    this.activeCategory.set(i);
  }

  selectTab(i: number, event?: Event): void {
    event?.preventDefault();
    this.activeTab.set(i);
  }

  setHover(star: number): void {
    this.hoverRating.set(star);
  }

  clearHover(): void {
    this.hoverRating.set(0);
  }

  rate(star: number): void {
    this.userRating.set(star);
    this.ratingSubmitted.set(true);
    this.statusMessage.set(`شكراً لتقييمك: ${star} من 5`);
  }

  giveFeedback(value: Exclude<Feedback, null>): void {
    this.feedback.set(value);
    this.statusMessage.set(value === 'yes' ? 'شكراً لملاحظاتك الإيجابية.' : 'شكراً، سنعمل على التحسين.');
  }
}
