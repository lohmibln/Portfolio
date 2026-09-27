import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/translation/translate.pipe';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'SupaBase',
    'Git',
    'Scrum',
    'REST API',
    'Material Design',
  ];

  readonly coloredSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Git'];

  isColored(skill: string): boolean {
    return this.coloredSkills.includes(skill);
  }
}
