import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-service-section',
  imports: [CommonModule, Carousel, ButtonModule],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss',
})
export class ServiceSectionComponent {
  serviceCards = [
    { id: 1, title: 'عنوان البطاقة', description: 'نص افتراضي لمحتوى البطاقة', icon: 'pi-check-circle' },
    { id: 2, title: 'عنوان البطاقة', description: 'نص افتراضي لمحتوى البطاقة', icon: 'pi-check-circle' },
    { id: 3, title: 'عنوان البطاقة', description: 'نص افتراضي لمحتوى البطاقة', icon: 'pi-check-circle' },
    { id: 4, title: 'عنوان البطاقة', description: 'نص افتراضي لمحتوى البطاقة', icon: 'pi-check-circle' },
    { id: 5, title: 'عنوان البطاقة', description: 'نص افتراضي لمحتوى البطاقة', icon: 'pi-check-circle' },
  ];

  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 2, numScroll: 1 },
    { breakpoint: '991px',  numVisible: 2, numScroll: 1 },
    { breakpoint: '767px',  numVisible: 1, numScroll: 1 },
  ];
}
