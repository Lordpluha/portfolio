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

  /** Read straight out of the positioning line — no numbers invented here. */
  protected readonly timeline = [
    { value: '10', unit: 'years', label: 'Building interfaces' },
    { value: '5', unit: 'years', label: 'Markup: responsive, cross-browser, accessible' },
    { value: '5', unit: 'years', label: 'In the React ecosystem' },
    { value: '1', unit: 'year', label: 'Leading a team' },
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
