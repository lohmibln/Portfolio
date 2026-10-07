import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  /** Flip to true when peel / “interested in” content is ready */
  readonly peelEnabled = false;

  peeled = false;
  peelHover = false;

  readonly skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'SupaBase',
    'Git',
    'REST API',
    'Scrum',
    'Material Design',
  ];

  /** Learned / active skills stay colored; others stay grey until peel is enabled later */
  readonly coloredSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Git', 'REST API'];

  get peelSrc(): string {
    if (this.peeled) {
      return '/img/stickers/peel-final.png';
    }
    if (this.peelHover) {
      return '/img/stickers/peel-transition.png';
    }
    return '/img/stickers/peel-default.png';
  }

  isColored(skill: string): boolean {
    return this.coloredSkills.includes(skill) || this.peeled;
  }

  togglePeel(): void {
    if (!this.peelEnabled) {
      return;
    }
    this.peeled = !this.peeled;
  }

  onPeelHover(active: boolean): void {
    if (!this.peelEnabled) {
      return;
    }
    this.peelHover = active;
  }
}
