import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-left'
  | 'github'
  | 'linkedin'
  | 'stackoverflow'
  | 'codewars'
  | 'codepen'
  | 'telegram'
  | 'instagram'
  | 'mail'
  | 'phone'
  | 'theme';

/** Inline SVG icons. Always decorative — the label sits in the surrounding text. */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-up-right') {
          <path d="M4.5 11.5 11.5 4.5M5.75 4.5h5.75v5.75" />
        }
        @case ('arrow-right') {
          <path d="M2.5 8h11M9.5 4 13.5 8l-4 4" />
        }
        @case ('arrow-left') {
          <path d="M13.5 8h-11M6.5 4 2.5 8l4 4" />
        }
        @case ('mail') {
          <path d="M1.75 4.25h12.5v7.5H1.75z" />
          <path d="m2 4.75 6 4 6-4" />
        }
        @case ('phone') {
          <path
            d="M14.67 11.28v2a1.33 1.33 0 0 1-1.45 1.33 13.19 13.19 0 0 1-5.75-2.05 13 13 0 0 1-4-4 13.19 13.19 0 0 1-2.05-5.78A1.33 1.33 0 0 1 2.74 1.33h2a1.33 1.33 0 0 1 1.33 1.15 8.56 8.56 0 0 0 .47 1.87 1.33 1.33 0 0 1-.3 1.41L5.39 6.61a10.67 10.67 0 0 0 4 4l.85-.85a1.33 1.33 0 0 1 1.41-.3 8.56 8.56 0 0 0 1.87.47 1.33 1.33 0 0 1 1.15 1.35Z"
          />
        }
        @case ('github') {
          <path
            fill="currentColor"
            stroke="none"
            d="M8 .5a7.5 7.5 0 0 0-2.37 14.62c.37.07.5-.16.5-.36l-.01-1.26c-2.09.45-2.53-1-2.53-1-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.76.06 1.15.78 1.15.78.67 1.15 1.76.82 2.19.63.07-.49.26-.82.48-1.01-1.67-.19-3.42-.84-3.42-3.72 0-.82.29-1.5.77-2.02-.08-.19-.34-.95.07-1.99 0 0 .63-.2 2.06.77a7.1 7.1 0 0 1 3.76 0c1.43-.97 2.06-.77 2.06-.77.41 1.04.15 1.8.08 1.99.48.52.76 1.2.76 2.02 0 2.89-1.76 3.53-3.43 3.71.27.23.51.69.51 1.4l-.01 2.08c0 .2.14.44.51.36A7.5 7.5 0 0 0 8 .5Z"
          />
        }
        @case ('linkedin') {
          <circle cx="2.75" cy="2.9" r="1.05" />
          <path d="M2.75 13.7V6.6" />
          <path d="M6.65 13.7V9.9a3.3 3.3 0 0 1 6.6 0v3.8" />
        }
        @case ('stackoverflow') {
          <path d="M2.6 10.2v4.6h10.8v-4.6" />
          <path d="M4.9 12.6h6.2" />
          <path d="m4.3 8.6 6.7.6" />
          <path d="m4.8 5.1 6.6 1.2" />
          <path d="m5.6 1.6 6.2 1.8" />
        }
        @case ('codewars') {
          <path d="M8 1.3 10.5 5.5 14.7 8 10.5 10.5 8 14.7 5.5 10.5 1.3 8 5.5 5.5Z" />
          <circle cx="8" cy="8" r="1.2" />
        }
        @case ('codepen') {
          <path d="M8 1.5 14.4 5.7v4.6L8 14.5 1.6 10.3V5.7Z" />
          <path d="m1.6 5.7 6.4 4.3 6.4-4.3M1.6 10.3 8 6l6.4 4.3M8 1.5V6m0 4v4.5" />
        }
        @case ('telegram') {
          <path d="M14.7 1.3 10 14.6 7.3 8.7 1.4 6Z" />
          <path d="M14.7 1.3 7.3 8.7" />
        }
        @case ('instagram') {
          <rect x="1.35" y="1.35" width="13.3" height="13.3" rx="3.4" />
          <circle cx="8" cy="8" r="2.7" />
          <path d="M11.65 4.35h.01" />
        }
        @case ('theme') {
          <circle cx="8" cy="8" r="3.4" />
          <path
            d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.95 3.05l-1.13 1.13M4.18 11.82l-1.13 1.13M12.95 12.95l-1.13-1.13M4.18 4.18 3.05 3.05"
          />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
}
