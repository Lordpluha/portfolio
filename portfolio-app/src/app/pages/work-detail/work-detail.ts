import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { ProjectsService } from '../../core/projects.service';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../shared/icon';
import { ResponsiveImage } from '../../shared/responsive-image';
import { RevealDirective } from '../../shared/reveal.directive';
import { NotFound } from '../not-found/not-found';

@Component({
  selector: 'app-work-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, ResponsiveImage, NotFound, RevealDirective],
  templateUrl: './work-detail.html',
  styleUrl: './work-detail.scss',
})
export class WorkDetail {
  /** Bound from the `:id` route parameter via `withComponentInputBinding`. */
  readonly id = input<string>('');

  protected readonly i18n = inject(I18nService);
  private readonly projects = inject(ProjectsService);
  private readonly seo = inject(SeoService);

  protected readonly project = computed(() => this.projects.byId(this.id()));
  protected readonly neighbours = computed(() => this.projects.neighbours(this.id()));

  constructor() {
    effect(() => {
      const project = this.project();
      if (project) {
        this.seo.set(project.title, `${project.tagline}. ${project.summary}`);
      } else {
        this.seo.set('Project not found', 'This project does not exist on this site.');
      }
    });
  }

  /**
   * Screenshots of whole pages can be many times taller than they are wide.
   * The frame keeps its own proportions and crops from the top instead.
   */
  protected frameRatio(ratio: number, minimum: number): string {
    return `${Math.max(ratio, minimum)}`;
  }
}
