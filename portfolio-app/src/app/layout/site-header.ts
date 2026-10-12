import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18nService, LANGS, type Lang } from '../core/i18n/i18n.service';
import { SECTIONS, SectionState } from '../core/sections';
import { THEMES, ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <header class="top">
      <a class="brand" routerLink="/">Lordpluha</a>

      <nav class="nav" [attr.aria-label]="i18n.t('nav.sections')">
        @for (section of nav; track section.id; let i = $index) {
          <a
            routerLink="/"
            [fragment]="section.id"
            [attr.aria-current]="state.index() === i + 1 ? 'true' : null"
            >{{ i18n.t(section.label) }}</a
          >
        }
      </nav>

      <div class="controls">
        <div class="seg" role="group" [attr.aria-label]="i18n.t('lang.label')">
          @for (lang of langs; track lang) {
            <button
              type="button"
              [id]="'lang-' + lang"
              [attr.aria-pressed]="i18n.lang() === lang"
              (click)="setLang(lang)"
            >
              {{ lang.toUpperCase() }}
            </button>
          }
        </div>
        <div class="seg" role="group" [attr.aria-label]="i18n.t('theme.label')">
          @for (theme of themes; track theme) {
            <button
              type="button"
              [id]="'theme-' + theme"
              [attr.aria-pressed]="themeService.resolved() === theme"
              (click)="themeService.set(theme)"
            >
              <span class="swatch" [class]="'swatch swatch--' + theme" aria-hidden="true"></span>
              <span class="seg__label">{{ i18n.t(themeKey[theme]) }}</span>
            </button>
          }
        </div>
      </div>
    </header>
  `,
  styles: `
    .top {
      position: fixed;
      inset: 0 0 auto;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: calc(env(safe-area-inset-top, 0px) + 12px) var(--gutter) 12px;
      background: color-mix(in srgb, var(--paper) 82%, transparent);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid color-mix(in srgb, var(--rule) 60%, transparent);
    }

    .brand {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 1.05rem;
      color: var(--ink);
      text-decoration: none;
    }

    .nav {
      display: flex;
      gap: 1.15rem;
      margin-right: auto;
    }

    .nav a {
      color: var(--ink-muted);
      text-decoration: none;
      font-size: var(--text-sm);
      padding-block: 0.25rem;
      border-bottom: 2px solid transparent;
      transition:
        color 0.2s,
        border-color 0.2s;
    }

    .nav a:hover,
    .nav a[aria-current='true'] {
      color: var(--ink);
      border-color: var(--accent);
    }

    .controls {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    .seg {
      display: inline-flex;
      padding: 2px;
      border: 1px solid var(--rule);
      border-radius: 999px;
      background: var(--paper-raised);
    }

    .seg button {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 0.7rem;
      border-radius: 999px;
      font-size: var(--text-xs);
      font-weight: 500;
      color: var(--ink-muted);
    }

    .seg button[aria-pressed='true'] {
      background: var(--ink);
      color: var(--paper);
    }

    .swatch {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      border: 1px solid var(--rule-strong);
    }
    .swatch--light {
      background: #eef0f3;
    }
    .swatch--dark {
      background: #090c13;
    }
    .swatch--dim {
      background: #1c222d;
    }

    @media (max-width: 980px) {
      .nav {
        display: none;
      }
      .top {
        justify-content: space-between;
      }
      .seg__label {
        display: none;
      }
    }

    @media (max-width: 420px) {
      .controls {
        gap: 0.35rem;
      }
      .seg button {
        padding: 0.4rem 0.5rem;
      }
    }
  `,
})
export class SiteHeader {
  protected readonly i18n = inject(I18nService);
  protected readonly themeService = inject(ThemeService);
  protected readonly state = inject(SectionState);

  protected readonly langs = LANGS;
  protected readonly themes = THEMES;
  protected readonly nav = SECTIONS.slice(1);
  protected readonly themeKey = {
    light: 'theme.light',
    dark: 'theme.dark',
    dim: 'theme.dim',
  } as const;

  protected setLang(lang: Lang): void {
    this.i18n.set(lang);
  }
}
