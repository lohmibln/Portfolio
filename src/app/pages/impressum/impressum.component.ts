import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {
  private readonly translationService = inject(TranslationService);

  readonly language = this.translationService.language;
}
