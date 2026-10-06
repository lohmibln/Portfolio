import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SectionNavService {
  private readonly router = inject(Router);

  /** Scroll to a home-page section (works from home and from other routes). */
  go(sectionId: string): void {
    const path = this.router.url.split('#')[0] || '/';
    const onHome = path === '/' || path === '';

    const scroll = (): void => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (onHome) {
      scroll();
      void this.router.navigate([], { fragment: sectionId, replaceUrl: true });
      return;
    }

    void this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      // Wait a tick for the home view to render, then scroll.
      setTimeout(scroll, 80);
    });
  }
}
