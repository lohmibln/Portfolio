import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNavService } from '../../core/section-nav.service';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationService } from '../../core/translation/translation.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly translationService = inject(TranslationService);
  private readonly sectionNav = inject(SectionNavService);

  readonly language = this.translationService.language;
  readonly isMenuOpen = signal(false);

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  goTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    this.sectionNav.go(sectionId);
  }
}
