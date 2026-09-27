import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly quotes: TranslationKey[] = [
    'testimonials.quote1',
    'testimonials.quote2',
    'testimonials.quote3',
  ];
}
