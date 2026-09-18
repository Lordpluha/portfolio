import { Injectable, computed } from '@angular/core';

import { PROJECT_MEDIA, type ProjectMedia } from './media.generated';
import { CATEGORIES, OWNER, PROJECTS, type Category, type Project } from './portfolio.generated';
import { demoUrl, repoUrl } from './site.config';

const EMPTY_MEDIA: ProjectMedia = { card: null, desktop: [], mobile: [] };

/** A project joined with its imagery and its resolved outbound links. */
export interface ProjectView extends Project {
  readonly media: ProjectMedia;
  readonly demoHref: string | null;
  readonly repoHref: string | null;
  readonly categoryLabel: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly owner = OWNER;
  readonly categories: readonly Category[] = CATEGORIES;

  readonly all = computed<readonly ProjectView[]>(() => PROJECTS.map((p) => this.toView(p)));

  /** The large, alternating rows at the top of the home page. */
  readonly featured = computed(() => this.all().filter((p) => p.featured));

  /** Everything not shown large — the filterable grid. */
  readonly rest = computed(() => this.all().filter((p) => !p.featured));

  /** Only the categories that actually appear in the filterable grid. */
  readonly restCategories = computed(() => {
    const present = new Set(this.rest().map((p) => p.category));
    return this.categories.filter((c) => present.has(c.id));
  });

  byId(id: string): ProjectView | undefined {
    return this.all().find((p) => p.id === id);
  }

  /** Neighbours in source order, for the previous/next footer on a detail page. */
  neighbours(id: string): { previous: ProjectView | null; next: ProjectView | null } {
    const list = this.all();
    const index = list.findIndex((p) => p.id === id);
    if (index < 0) {
      return { previous: null, next: null };
    }
    return {
      previous: index > 0 ? list[index - 1] : null,
      next: index < list.length - 1 ? list[index + 1] : null,
    };
  }

  private toView(project: Project): ProjectView {
    return {
      ...project,
      media: PROJECT_MEDIA[project.id] ?? EMPTY_MEDIA,
      demoHref: demoUrl(project.demo, project.repo),
      repoHref: repoUrl(project.repo, project.repoBranch),
      categoryLabel: this.categories.find((c) => c.id === project.category)?.label ?? '',
    };
  }
}
