import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectsService } from '../../core/projects.service';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly projects = inject(ProjectsService);
  protected readonly owner = this.projects.owner;

  /** Every number here is one that appears on his CV. */
  protected readonly timeline = [
    { value: '7', unit: 'years', label: 'In frontend' },
    { value: '4', unit: 'years', label: 'Production markup underneath it' },
    { value: '3', unit: 'years', label: 'Leading teams' },
    { value: '9', unit: 'engineers', label: 'Onboarded onto the GGChest codebase' },
  ];

  protected readonly skillGroups = Object.entries(this.owner.skills).map(([name, items]) => ({
    name,
    items,
  }));

  /** The bare address is what a reader recognises, so show that rather than the handle alone. */
  protected readonly profiles = this.owner.profiles.map((profile) => ({
    ...profile,
    display: profile.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
  }));

  protected readonly counts = {
    projects: this.projects.all().length,
    withDemos: this.projects.all().filter((p) => p.demo).length,
  };

  constructor() {
    inject(SeoService).set(
      'About',
      `${this.owner.role} based in ${this.owner.location}. ${this.owner.positioning}`,
    );
  }
}
