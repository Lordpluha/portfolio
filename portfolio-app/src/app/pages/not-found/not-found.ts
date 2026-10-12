import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService } from '../../core/i18n/i18n.service';
import { ProjectsService } from '../../core/projects.service';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <section class="missing shell">
      <p class="eyebrow">{{ i18n.t('nf.title') }}</p>
      <h1 class="missing__code display">404</h1>
      <p class="missing__lede">{{ text() }}</p>

      <div class="missing__links">
        <a class="button button--primary" routerLink="/">
          <app-icon name="arrow-left" />
          {{ i18n.t('nf.home') }}
        </a>
        <a class="button" routerLink="/" fragment="work">{{ i18n.t('nf.all') }}</a>
      </div>

      <div class="missing__suggested">
        <h2 class="eyebrow">{{ i18n.t('nf.suggest') }}</h2>
        <ul>
          @for (project of suggestions; track project.id) {
            <li>
              <a [routerLink]="['/work', project.id]">{{ project.title }}</a>
              <span>{{ i18n.tagline(project.id, project.tagline) }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    .missing {
      padding-block: clamp(3rem, 8vw, 7rem) var(--space-9);
    }

    .missing__code {
      margin-top: var(--space-4);
      font-size: var(--text-display);
      color: var(--accent);
    }

    .missing__lede {
      margin-top: var(--space-5);
      max-width: 46ch;
      font-size: var(--text-md);
      line-height: 1.5;
      color: var(--ink-muted);
      text-wrap: pretty;
    }

    .missing__links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      margin-top: var(--space-6);
    }

    .missing__suggested {
      margin-top: var(--space-9);
      padding-top: var(--space-5);
      border-top: 1px solid var(--rule);
    }

    .missing__suggested ul {
      display: grid;
      gap: var(--space-4);
      margin-top: var(--space-4);
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
    }

    .missing__suggested li {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .missing__suggested a {
      font-size: var(--text-md);
      color: var(--ink);
      text-decoration: none;
      border-bottom: 1px solid var(--rule-strong);
      align-self: flex-start;
    }

    .missing__suggested a:hover {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }

    .missing__suggested span {
      font-size: var(--text-sm);
      color: var(--ink-muted);
      max-width: 34ch;
    }
  `,
})
export class NotFound {
  /**
   * Overridden when the page is reached through an unknown project id. The
   * fallback lives in a computed rather than in the input default: as a routed
   * component this input is bound to `undefined` by the router's input
   * binding, which would wipe out a default.
   */
  readonly message = input<string | undefined>(undefined);

  protected readonly text = computed(() => this.message() ?? this.i18n.t('nf.body'));

  protected readonly i18n = inject(I18nService);
  private readonly projects = inject(ProjectsService);
  protected readonly suggestions = this.projects.featured().slice(0, 3);

  constructor() {
    inject(SeoService).set('Page not found', 'This page does not exist on this site.');
  }
}
