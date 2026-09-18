import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectsService } from '../core/projects.service';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  template: `
    <footer class="footer">
      <div class="shell footer__inner">
        <div class="footer__brand">
          <p class="footer__name">{{ owner.name }}</p>
          <p class="footer__role">{{ owner.role }} · {{ owner.location }}</p>
        </div>

        <nav class="footer__nav" aria-label="Footer">
          <h2 class="eyebrow">Pages</h2>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/" fragment="work">Work</a></li>
            <li><a routerLink="/about">About</a></li>
          </ul>
        </nav>

        <div class="footer__contact">
          <h2 class="eyebrow">Elsewhere</h2>
          <ul class="footer__profiles">
            @for (profile of owner.profiles; track profile.id) {
              <li>
                <a [href]="profile.url" rel="noopener">
                  <app-icon [name]="profile.id" />
                  {{ profile.label }}
                </a>
              </li>
            }
          </ul>
        </div>

        <div class="footer__contact">
          <h2 class="eyebrow">Contact</h2>
          <ul>
            <li>
              <a [href]="'mailto:' + owner.email">
                <app-icon name="mail" />
                {{ owner.email }}
              </a>
            </li>
            @for (phone of owner.phones; track phone.e164) {
              <li>
                <a [href]="'tel:' + phone.e164">
                  <app-icon name="phone" />
                  <span class="footer__place">{{ phone.label }}</span>
                  {{ phone.display }}
                </a>
              </li>
            }
          </ul>
        </div>
      </div>

      <div class="shell">
        <p class="footer__colophon">
          Built with Angular. Typeset in Instrument Serif and IBM Plex. Screenshots are of the
          projects themselves.
        </p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      margin-top: var(--space-10);
      padding-block: var(--space-8) var(--space-6);
      border-top: 1px solid var(--rule);
    }

    .footer__inner {
      display: grid;
      gap: var(--space-7) var(--space-6);
      grid-template-columns: 1fr;
    }

    @media (min-width: 560px) {
      .footer__inner {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    /*
     * Elsewhere holds twice as many links as its neighbours, so it gets the
     * widest track and splits into two files of its own (see .footer__profiles);
     * Contact needs ~200px before a phone number wraps.
     */
    @media (min-width: 820px) {
      .footer__inner {
        grid-template-columns: 0.8fr 1.4fr 1.1fr;
      }

      .footer__brand {
        grid-column: 1 / -1;
      }
    }

    @media (min-width: 1080px) {
      .footer__inner {
        grid-template-columns: 1.4fr 0.7fr 1.7fr 1.2fr;
      }

      .footer__brand {
        grid-column: auto;
      }
    }

    .footer__name {
      font-family: var(--font-display);
      font-size: var(--text-xl);
      line-height: 1.1;
    }

    .footer__role {
      margin-top: var(--space-1);
      font-size: var(--text-sm);
      color: var(--ink-muted);
    }

    .footer__nav h2,
    .footer__contact h2 {
      margin-bottom: var(--space-3);
      font-weight: 400;
    }

    .footer__nav ul,
    .footer__contact ul {
      display: grid;
      gap: var(--space-2);
    }

    /* Seven profiles run too long in one file; two keeps the footer compact. */
    .footer__profiles {
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      column-gap: var(--space-4);
    }

    .footer__nav a,
    .footer__contact a {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--text-sm);
      color: var(--ink);
      text-decoration: none;
      border-bottom: 1px solid var(--rule-strong);
      padding-block: 2px;
    }

    .footer__nav a:hover,
    .footer__contact a:hover {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }

    /* Country in front of a number, so two numbers never read as one list. */
    .footer__place {
      font-family: var(--font-mono);
      font-size: var(--text-2xs);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--ink-muted);
    }

    .footer__contact a:hover .footer__place {
      color: inherit;
    }

    .footer__colophon {
      margin-top: var(--space-8);
      max-width: 60ch;
      font-family: var(--font-mono);
      font-size: var(--text-2xs);
      line-height: 1.7;
      color: var(--ink-muted);
    }
  `,
})
export class SiteFooter {
  protected readonly owner = inject(ProjectsService).owner;
}
