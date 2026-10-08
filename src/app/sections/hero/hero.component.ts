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

  /**
   * `|` in translations = soft break (space on desktop, line break on narrow mobile).
   * Letter hover skips the break marker.
   */
  readonly titleLetters = computed(() => [...this.translation.translate('hero.title')]);
  readonly accentLetters = computed(() => [...this.translation.translate('hero.titleAccent')]);

  /** Accessible full words without break markers */
  readonly titlePlain = computed(() => this.translation.translate('hero.title').replaceAll('|', ''));
  readonly accentPlain = computed(() =>
    this.translation.translate('hero.titleAccent').replaceAll('|', '')
  );

  /** Which letter is lit: `title:3` or `accent:2` */
  readonly litKey = signal<string | null>(null);

  /** Sticky color on touch devices (hover alone is unreliable). */
  readonly polaroidColor = signal(false);

  togglePolaroid(): void {
    // Desktop hover already handles color; sticky-toggle for touch.
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    this.polaroidColor.update((v) => !v);
  }

  lit(line: 'title' | 'accent', index: number): void {
    this.litKey.set(`${line}:${index}`);
  }

  clearLit(): void {
    this.litKey.set(null);
  }

  isLit(line: 'title' | 'accent', index: number): boolean {
    return this.litKey() === `${line}:${index}`;
  }

  isBreak(letter: string): boolean {
    return letter === '|';
  }

  /** Figma-style: flip case on hover (a→A / A→a), same font */
  displayLetter(letter: string, line: 'title' | 'accent', index: number): string {
    if (this.isBreak(letter) || !this.isLit(line, index) || !/[A-Za-zÄÖÜäöüß]/.test(letter)) {
      return letter;
    }
    return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
  }
}
