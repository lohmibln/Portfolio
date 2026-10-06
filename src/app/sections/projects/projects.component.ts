import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

interface ProjectCard {
  id: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
  comingSoon?: boolean;
  featured?: boolean;
  float?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  /** Order matches Design 3 grid: featured Join, then Sharkie, DABubble */
  readonly allProjects: ProjectCard[] = [
    {
      id: 'join',
      nameKey: 'projects.join.name',
      descriptionKey: 'projects.join.description',
      image: '/img/projects/join.png',
      githubUrl: null,
      liveUrl: null,
      comingSoon: true,
      featured: true,
      float: true,
    },
    {
      id: 'sharkie',
      nameKey: 'projects.sharkie.name',
      descriptionKey: 'projects.sharkie.description',
      image: '/img/projects/shot-sharkie.png',
      githubUrl: 'https://github.com/lohmibln/Sharky',
      liveUrl: 'https://sharkie.lucas-lohmann.de',
    },
    {
      id: 'dabubble',
      nameKey: 'projects.daBubble.name',
      descriptionKey: 'projects.daBubble.description',
      image: '/img/projects/shot-chat.png',
      githubUrl: null,
      liveUrl: null,
      comingSoon: true,
    },
  ];
}
