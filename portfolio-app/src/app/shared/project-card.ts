import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ProjectView } from '../core/projects.service';
import { ResponsiveImage } from './responsive-image';

/**
 * One project in the filterable grid. The title carries the only link; a
 * stretched pseudo-element makes the whole card clickable without adding a
 * second tab stop.
 */
@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ResponsiveImage],
  template: `
    <article class="card">
      <div class="card__frame">
        @if (project().media.card; as card) {
          <app-image
            [sources]="card.sources"
            [alt]="card.alt"
            sizes="(min-width: 1100px) 340px, (min-width: 700px) 44vw, 90vw"
          />
        } @else {
          <p class="card__placeholder">
            <span>{{ project().title }}</span>
            <span class="card__placeholder-note">No public demo yet</span>
          </p>
        }
      </div>

      <p class="card__meta">
        <span>{{ project().categoryLabel }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ project().year }}</span>
      </p>

      <h3 class="card__title">
        <a [routerLink]="['/work', project().id]">{{ project().title }}</a>
      </h3>

      <p class="card__tagline">{{ project().tagline }}</p>

      <ul class="card__stack">
        @for (item of project().stack.slice(0, 3); track item) {
          <li>{{ item }}</li>
        }
        @if (project().stack.length > 3) {
          <li class="card__stack-more">+{{ project().stack.length - 3 }}</li>
        }
      </ul>
    </article>
  `,
  styles: `
    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card__frame {
      aspect-ratio: 16 / 10;
      margin-bottom: var(--space-4);
      overflow: hidden;
      border: 1px solid var(--rule);
      border-radius: var(--radius);
      background: var(--paper-sunk);
      transition: border-color 180ms ease;
    }

    .card__frame app-image {
      height: 100%;
    }

    .card__placeholder {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: var(--space-1);
      padding: var(--space-4);
      font-family: var(--font-display);
      font-size: var(--text-xl);
      line-height: 1.1;
      color: var(--ink);
    }

    .card__placeholder-note {
      font-family: var(--font-mono);
      font-size: var(--text-2xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ink-muted);
    }

    .card__meta {
      display: flex;
      gap: var(--space-2);
      font-family: var(--font-mono);
      font-size: var(--text-2xs);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--ink-muted);
    }

    .card__title {
      margin-top: var(--space-1);
      font-size: var(--text-lg);
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    .card__title a {
      color: var(--ink);
      text-decoration: none;
    }

    /* Whole-card hit area, one tab stop. */
    .card__title a::after {
      content: '';
      position: absolute;
      inset: 0;
    }

    .card__tagline {
      margin-top: var(--space-2);
      max-width: 42ch;
      font-size: var(--text-sm);
      line-height: 1.5;
      color: var(--ink-muted);
    }

    .card__stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1) var(--space-2);
      margin-top: auto;
      padding-top: var(--space-4);
      font-family: var(--font-mono);
      font-size: var(--text-2xs);
      color: var(--ink-muted);
    }

    .card__stack li:not(:last-child)::after {
      content: ' /';
      color: var(--rule-strong);
    }

    .card:hover .card__frame {
      border-color: var(--rule-strong);
    }

    .card:hover .card__title a {
      color: var(--accent);
    }

    .card:has(a:focus-visible) .card__frame {
      border-color: var(--accent);
    }
  `,
})
export class ProjectCard {
  readonly project = input.required<ProjectView>();
}
