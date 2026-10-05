import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../core/translation/translate.pipe';
import { TranslationKey } from '../../core/translation/translations';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly projectId = this.route.snapshot.paramMap.get('id') ?? 'sharkie';

  readonly projectMap: Record<
    string,
    {
      nameKey: TranslationKey;
      descriptionKey: TranslationKey;
      stack: string[];
      githubUrl: string | null;
      liveUrl: string | null;
      comingSoon?: boolean;
    }
  > = {
    sharkie: {
      nameKey: 'projects.sharkie.name',
      descriptionKey: 'projects.sharkie.description',
      stack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/lohmibln/Sharky',
      liveUrl: 'https://sharkie.lucas-lohmann.de',
    },
    join: {
      nameKey: 'projects.join.name',
      descriptionKey: 'projects.join.description',
      stack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: null,
      liveUrl: null,
      comingSoon: true,
    },
    dabubble: {
      nameKey: 'projects.daBubble.name',
      descriptionKey: 'projects.daBubble.description',
      stack: ['Angular', 'TypeScript', 'Firebase'],
      githubUrl: null,
      liveUrl: null,
      comingSoon: true,
    },
  };

  get project() {
    return this.projectMap[this.projectId] ?? this.projectMap['sharkie'];
  }
}
