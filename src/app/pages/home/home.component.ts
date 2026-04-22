import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ServiceSectionComponent } from '../../shared/service-section/service-section.component';

interface HeroSlide {
  title: string;
  description: string;
  cta: string;
}

interface StatCard {
  icon: string;
  label: string;
  value: string;
  unit: string;
}

interface ArticleCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, Carousel, ButtonModule, ServiceSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  heroSlides: HeroSlide[] = [
    {
      title: 'القسم الرئيسى',
      description:
        'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعاً بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر.',
      cta: 'اجراء رئيسى',
    },
    {
      title: 'خدمات متكاملة',
      description: 'وصول سريع وآمن إلى خدمات البوابة لجميع المستفيدين على مدار الساعة.',
      cta: 'استكشف الخدمات',
    },
    {
      title: 'دعم على مدار الساعة',
      description: 'فريق دعم متخصص للإجابة على استفساراتك ومساعدتك في إتمام معاملاتك.',
      cta: 'تواصل معنا',
    },
    {
      title: 'بوابة آمنة وموثوقة',
      description: 'نضمن حماية بياناتك وخصوصيتك مع أعلى معايير الأمان الرقمي.',
      cta: 'اعرف المزيد',
    },
  ];

  stats: StatCard[] = [
    { icon: 'pi-users', label: 'المستخدمون', value: '1.5M', unit: 'شخص' },
    { icon: 'pi-star', label: 'متوسط التقييم', value: '4.8', unit: 'من 5' },
    { icon: 'pi-plus', label: 'الخدمات المتاحة', value: '200+', unit: 'خدمة' },
    { icon: 'pi-shield', label: 'معاملات آمنة', value: '99.9%', unit: 'موثوقية' },
  ];

  articles: ArticleCard[] = [
    {
      title: 'عنوان بطاقة الأخبار في سطرين',
      description: 'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.',
      image: 'assets/images/articl.png',
      link: '#',
    },
    {
      title: 'عنوان بطاقة الأخبار في سطرين',
      description: 'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.',
      image: 'assets/images/articl.png',
      link: '#',
    },
    {
      title: 'عنوان بطاقة الأخبار في سطرين',
      description: 'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.',
      image: 'assets/images/articl.png',
      link: '#',
    },
  ];

  partnerLogos: Partner[] = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `شريك ${i + 1}`,
    logo: 'assets/images/Palm & Swords.svg',
  }));

  partnerResponsiveOptions = [
    { breakpoint: '1199px', numVisible: 5, numScroll: 1 },
    { breakpoint: '991px', numVisible: 4, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 },
  ];
}
