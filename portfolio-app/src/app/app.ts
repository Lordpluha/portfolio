import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { I18nService } from './core/i18n/i18n.service';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  template: `
    <a class="skip-link" href="#main">{{ i18n.t('skip') }}</a>
    <app-site-header />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
  styles: `
    :host {
      display: flex;
      min-height: 100dvh;
      flex-direction: column;
    }

    main {
      position: relative;
      z-index: 2;
      flex: 1;
    }

    main:focus {
      outline: none;
    }
  `,
})
export class App {
  protected readonly i18n = inject(I18nService);

  constructor() {
    // Apply the visitor's language only after hydration, so the prerendered
    // English HTML and the first client render match.
    afterNextRender(() => this.i18n.restore());
  }
}
