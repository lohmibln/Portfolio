import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

interface ProjectCard {
  id: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly featured: ProjectCard = {
    id: 'join',
    nameKey: 'projects.join.name',
    descriptionKey: 'projects.join.description',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    featured: true,
  };

  readonly projects: ProjectCard[] = [
    {
      id: 'el-pollo-loco',
      nameKey: 'projects.pollo.name',
      descriptionKey: 'projects.pollo.description',
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 'dabubble',
      nameKey: 'projects.daBubble.name',
      descriptionKey: 'projects.daBubble.description',
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
  ];
}
