import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionNavService } from '../../core/section-nav.service';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly sectionNav = inject(SectionNavService);

  readonly year = new Date().getFullYear();

  goTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.sectionNav.go(sectionId);
  }
}
