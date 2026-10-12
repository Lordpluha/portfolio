import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18nService } from '../core/i18n/i18n.service';
import { ProjectsService } from '../core/projects.service';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <span>© 2026 {{ owner.name }}</span>
      <span>{{ i18n.t('foot.line') }}</span>
    </footer>
  `,
  styles: `
    .footer {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.5rem 2rem;
      padding: 1.5rem var(--gutter) calc(1.5rem + env(safe-area-inset-bottom, 0px));
      border-top: 1px solid var(--rule);
      font-size: var(--text-xs);
      color: var(--ink-muted);
      background: var(--paper);
    }
  `,
})
export class SiteFooter {
  protected readonly i18n = inject(I18nService);
  protected readonly owner = inject(ProjectsService).owner;
}
