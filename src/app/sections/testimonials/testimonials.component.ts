import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

interface TestimonialItem {
  quoteKey: TranslationKey;
  name: string;
  role: string;
  linkedin: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly items: TestimonialItem[] = [
    {
      quoteKey: 'testimonials.quote1',
      name: 'Tobias Lange',
      role: 'Frontend Developer',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      quoteKey: 'testimonials.quote2',
      name: 'Maya Richter',
      role: 'Project Partner',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      quoteKey: 'testimonials.quote3',
      name: 'Jonas Keller',
      role: 'Scrum Master',
      linkedin: 'https://www.linkedin.com/',
    },
  ];
}
