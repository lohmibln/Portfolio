import { Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly translation = inject(TranslationService);

  /** Split titles into letters for Marco-style hover highlight */
  readonly titleLetters = computed(() => [...this.translation.translate('hero.title')]);
  readonly accentLetters = computed(() => [...this.translation.translate('hero.titleAccent')]);

  /** Which letter is lit: `title:3` or `accent:2` */
  readonly litKey = signal<string | null>(null);

  lit(line: 'title' | 'accent', index: number): void {
    this.litKey.set(`${line}:${index}`);
  }

  clearLit(): void {
    this.litKey.set(null);
  }

  isLit(line: 'title' | 'accent', index: number): boolean {
    return this.litKey() === `${line}:${index}`;
  }

  /** Marco-style: flip case on hover (a→A / A→a), same font */
  displayLetter(letter: string, line: 'title' | 'accent', index: number): string {
    if (!this.isLit(line, index) || !/[A-Za-zÄÖÜäöüß]/.test(letter)) {
      return letter;
    }
    return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
  }
}
