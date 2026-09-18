import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ThemeService } from '../core/theme.service';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Icon],
  template: `
    <header class="header">
      <div class="header__inner shell">
        <a class="header__mark" routerLink="/">
          <span class="header__mark-name">V. Tesliuk</span>
          <span class="visually-hidden">— home</span>
        </a>

        <nav class="header__nav" aria-label="Main">
          <a routerLink="/" fragment="work" class="header__link">Work</a>
          <a
            routerLink="/about"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="header__link"
            >About</a
          >
        </nav>

        <button
          type="button"
          class="header__theme"
          [attr.aria-label]="label()"
          [attr.title]="label()"
          (click)="theme.toggle()"
        >
          <app-icon name="theme" />
        </button>
      </div>
    </header>
  `,
  styles: `
    .header {
      position: sticky;
      top: 0;
      z-index: 20;
      background: var(--paper);
      border-bottom: 1px solid transparent;
    }

    @supports (animation-timeline: scroll()) {
      @media (prefers-reduced-motion: no-preference) {
        .header {
          animation: header-rule linear both;
          animation-timeline: scroll();
          animation-range: 0 120px;
        }
      }
    }

    @keyframes header-rule {
      to {
        border-bottom-color: var(--rule);
      }
    }

    .header__inner {
      display: flex;
      align-items: center;
      gap: var(--space-5);
      min-height: 64px;
    }

    .header__mark {
      margin-right: auto;
      font-family: var(--font-display);
      font-size: var(--text-lg);
      line-height: 1;
      color: var(--ink);
      text-decoration: none;
      letter-spacing: -0.01em;
    }

    .header__mark:hover {
      color: var(--accent);
    }

    .header__nav {
      display: flex;
      gap: var(--space-5);
    }

    .header__link {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--ink);
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }

    .header__link:hover,
    .header__link.is-active {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }

    .header__theme {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 1px solid var(--rule);
      border-radius: 50%;
      color: var(--ink-muted);
      transition:
        color 140ms ease,
        border-color 140ms ease;
    }

    .header__theme:hover {
      color: var(--accent);
      border-color: var(--rule-strong);
    }
  `,
})
export class SiteHeader {
  protected readonly theme = inject(ThemeService);

  protected readonly label = computed(() =>
    this.theme.resolved() === 'dark' ? 'Switch to the light theme' : 'Switch to the dark theme',
  );
}
