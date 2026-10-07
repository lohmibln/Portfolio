import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

interface TestimonialItem {
  quoteKey: TranslationKey;
  name: string;
  roleKey: TranslationKey;
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
      roleKey: 'testimonials.role1',
    },
    {
      quoteKey: 'testimonials.quote2',
      name: 'Peter Koban',
      roleKey: 'testimonials.role2',
    },
    {
      quoteKey: 'testimonials.quote3',
      name: 'Jonas Keller',
      roleKey: 'testimonials.role3',
    },
  ];
}
