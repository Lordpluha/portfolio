import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectsService } from '../../core/projects.service';
import { SeoService } from '../../core/seo.service';
import type { CategoryId } from '../../core/portfolio.generated';
import { Icon } from '../../shared/icon';
import { ProjectCard } from '../../shared/project-card';
import { ResponsiveImage } from '../../shared/responsive-image';
import { RevealDirective } from '../../shared/reveal.directive';

type Filter = CategoryId | 'all';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, ProjectCard, ResponsiveImage, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly projects = inject(ProjectsService);

  protected readonly activeCategory = signal<Filter>('all');

  protected readonly visible = computed(() => {
    const category = this.activeCategory();
    const list = this.projects.rest();
    return category === 'all' ? list : list.filter((p) => p.category === category);
  });

  protected readonly resultsMessage = computed(() => {
    const count = this.visible().length;
    const label =
      this.activeCategory() === 'all'
        ? 'all categories'
        : (this.projects.categories.find((c) => c.id === this.activeCategory())?.label ?? '');
    return `Showing ${count} ${count === 1 ? 'project' : 'projects'} in ${label}.`;
  });

  protected readonly skillGroups = Object.entries(this.projects.owner.skills).map(
    ([name, items]) => ({ name, items }),
  );

  constructor() {
    inject(SeoService).set(
      null,
      `${this.projects.owner.role} in ${this.projects.owner.location}. ${this.projects.owner.positioning}`,
    );
  }

  protected setCategory(category: Filter): void {
    this.activeCategory.set(category);
  }

  protected countFor(category: CategoryId): number {
    return this.projects.rest().filter((p) => p.category === category).length;
  }

  /** Two-digit index for the editorial numbering on featured rows. */
  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
