import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent {
  private readonly translationService = inject(TranslationService);

  readonly language = this.translationService.language;
}
