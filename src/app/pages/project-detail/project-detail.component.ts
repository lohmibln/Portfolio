import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { SectionNavService } from '../../core/section-nav.service';
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
  private readonly sectionNav = inject(SectionNavService);

  private readonly order = ['join', 'sharkie', 'pokedex'] as const;

  readonly projectId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id') ?? 'sharkie')),
    { initialValue: this.route.snapshot.paramMap.get('id') ?? 'sharkie' }
  );

  readonly projectMap: Record<
    string,
    {
      nameKey: TranslationKey;
      descriptionKey: TranslationKey;
      implementationKey: TranslationKey;
      durationKey: TranslationKey;
      stack: string[];
      githubUrl: string | null;
      liveUrl: string | null;
      image: string;
      comingSoon?: boolean;
      featured?: boolean;
    }
  > = {
    sharkie: {
      nameKey: 'projects.sharkie.name',
      descriptionKey: 'projects.sharkie.description',
      implementationKey: 'projects.sharkie.implementation',
      durationKey: 'projects.sharkie.duration',
      stack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/lohmibln/Sharky',
      liveUrl: 'https://sharkie.lucas-lohmann.de',
      image: '/img/projects/shot-sharkie.png',
    },
    pokedex: {
      nameKey: 'projects.pokedex.name',
      descriptionKey: 'projects.pokedex.description',
      implementationKey: 'projects.pokedex.implementation',
      durationKey: 'projects.pokedex.duration',
      stack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/lohmibln/Pokedex',
      liveUrl: 'https://pokedex.lucas-lohmann.de',
      image: '/img/projects/shot-pokedex.png',
    },
    join: {
      nameKey: 'projects.join.name',
      descriptionKey: 'projects.join.description',
      implementationKey: 'projects.join.implementation',
      durationKey: 'projects.join.duration',
      stack: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Scrum', 'Material Design'],
      githubUrl: null,
      liveUrl: null,
      image: '/img/projects/join.png',
      comingSoon: true,
      featured: true,
    },
  };

  readonly project = computed(() => {
    const id = this.projectId();
    return this.projectMap[id] ?? this.projectMap['sharkie'];
  });

  readonly nextId = computed(() => {
    const id = this.projectId();
    const index = this.order.indexOf(id as (typeof this.order)[number]);
    return this.order[(index + 1) % this.order.length];
  });

  iconSrc(tech: string): string {
    return `/img/${tech}.svg`;
  }

  goProjects(event: Event): void {
    event.preventDefault();
    this.sectionNav.go('projects');
  }
}
