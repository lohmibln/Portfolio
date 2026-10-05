import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

interface ProjectCard {
  id: string;
  nameKey: TranslationKey;
  descriptionKey: TranslationKey;
  githubUrl: string | null;
  liveUrl: string | null;
  comingSoon?: boolean;
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
    id: 'sharkie',
    nameKey: 'projects.sharkie.name',
    descriptionKey: 'projects.sharkie.description',
    githubUrl: 'https://github.com/lohmibln/Sharky',
    liveUrl: 'https://sharkie.lucas-lohmann.de',
    featured: true,
  };

  readonly projects: ProjectCard[] = [
    {
      id: 'join',
      nameKey: 'projects.join.name',
      descriptionKey: 'projects.join.description',
      githubUrl: null,
      liveUrl: null,
      comingSoon: true,
    },
    {
      id: 'dabubble',
      nameKey: 'projects.daBubble.name',
      descriptionKey: 'projects.daBubble.description',
      githubUrl: null,
      liveUrl: null,
      comingSoon: true,
    },
  ];
}
