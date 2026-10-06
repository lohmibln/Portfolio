import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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

  readonly coloredSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Git'];

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
    return this.coloredSkills.includes(skill);
  }

  togglePeel(): void {
    this.peeled = !this.peeled;
  }

  onPeelHover(active: boolean): void {
    this.peelHover = active;
  }
}
