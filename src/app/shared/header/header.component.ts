import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';
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
  private readonly router = inject(Router);

  readonly language = this.translationService.language;
  readonly isMenuOpen = signal(false);

  /** Semi-opaque bar on light subpages so white nav stays readable */
  readonly onLightPage = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.isLightRoute(this.router.url))
    ),
    { initialValue: this.isLightRoute(this.router.url) }
  );

  private isLightRoute(url: string): boolean {
    const path = url.split('?')[0].split('#')[0];
    return path !== '/' && path !== '';
  }

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
