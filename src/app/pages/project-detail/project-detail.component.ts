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

  readonly projectId = this.route.snapshot.paramMap.get('id') ?? 'dabubble';

  readonly projectMap: Record<
    string,
    { nameKey: TranslationKey; descriptionKey: TranslationKey; stack: string[] }
  > = {
    dabubble: {
      nameKey: 'projects.daBubble.name',
      descriptionKey: 'projects.daBubble.description',
      stack: ['JavaScript', 'HTML', 'CSS'],
    },
    join: {
      nameKey: 'projects.join.name',
      descriptionKey: 'projects.join.description',
      stack: ['JavaScript', 'HTML', 'CSS'],
    },
    'el-pollo-loco': {
      nameKey: 'projects.pollo.name',
      descriptionKey: 'projects.pollo.description',
      stack: ['JavaScript', 'HTML', 'CSS'],
    },
  };

  get project() {
    return this.projectMap[this.projectId] ?? this.projectMap['dabubble'];
  }
}
