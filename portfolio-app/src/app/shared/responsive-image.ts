import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { ImageSource } from '../core/media.generated';

/**
 * Renders one screenshot as a `srcset` picture with intrinsic dimensions, so
 * the browser can pick a size and the layout never shifts.
 */
@Component({
  selector: 'app-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <img
      [src]="largest().src"
      [srcset]="srcset()"
      [sizes]="sizes()"
      [width]="largest().w"
      [height]="largest().h"
      [alt]="alt()"
      [loading]="priority() ? 'eager' : 'lazy'"
      [attr.fetchpriority]="priority() ? 'high' : null"
      decoding="async"
    />
  `,
  styles: `
    :host {
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: var(--image-fit, cover);
      object-position: var(--image-position, top center);
      background: var(--paper-sunk);
    }
  `,
})
export class ResponsiveImage {
  readonly sources = input.required<readonly ImageSource[]>();
  readonly alt = input.required<string>();
  /** Value for the `sizes` attribute — describes the slot, not the image. */
  readonly sizes = input('100vw');
  /** Above-the-fold images opt out of lazy loading. */
  readonly priority = input(false);

  protected readonly largest = computed(() => {
    const list = this.sources();
    return list.reduce((best, s) => (s.w > best.w ? s : best), list[0]);
  });

  protected readonly srcset = computed(() =>
    this.sources()
      .map((s) => `${s.src} ${s.w}w`)
      .join(', '),
  );
}
