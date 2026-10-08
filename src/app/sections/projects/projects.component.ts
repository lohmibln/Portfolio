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
  /** Order: biggest first — Join, Sharkie, Pokédex */
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
    },
    {
      id: 'sharkie',
      nameKey: 'projects.sharkie.name',
      descriptionKey: 'projects.sharkie.description',
      image: '/img/projects/shot-sharkie.png',
      githubUrl: 'https://github.com/lohmibln/Sharky',
      liveUrl: 'https://sharkie.lucas-lohmann.de',
      float: true,
    },
    {
      id: 'pokedex',
      nameKey: 'projects.pokedex.name',
      descriptionKey: 'projects.pokedex.description',
      image: '/img/projects/shot-pokedex.png',
      githubUrl: 'https://github.com/lohmibln/Pokedex',
      liveUrl: 'https://pokedex.lucas-lohmann.de',
    },
  ];
}
