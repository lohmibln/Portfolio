import { Injectable, signal } from '@angular/core';
import { Language, TranslationKey, translations } from './translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly language = signal<Language>('de');

  translate(key: TranslationKey): string {
    return translations[this.language()][key];
  }

  toggleLanguage(): void {
    this.language.update((current) => (current === 'en' ? 'de' : 'en'));
  }
}
