import {
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * A single short rise-and-fade as a block scrolls into view, applied once and
 * never taken back.
 *
 * The hidden state is added from script, so prerendered HTML and any browser
 * without JavaScript show the content immediately. The root margin extends far
 * past the top of the viewport, which means a block that was jumped over —
 * anchor navigation, scroll restoration — counts as intersecting and is
 * revealed rather than left invisible above the fold.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const element = this.host.nativeElement as HTMLElement;
      element.classList.add('reveal');

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '99999px 0px -6% 0px' },
      );
      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
