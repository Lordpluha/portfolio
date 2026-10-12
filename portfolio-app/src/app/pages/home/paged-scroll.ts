/**
 * Page-by-page scrolling for the home page.
 *
 * A wheel notch, PageUp/PageDown, the arrow keys or Space move one full page
 * with an eased scroll. A page taller than the screen scrolls normally until
 * its edge is reached, so nothing is ever cut off. Touch devices keep native
 * scrolling with CSS snap; reduced motion turns the paging off entirely.
 */
export class PagedScroll {
  private current = 0;
  private animating = false;
  private readonly cleanup: (() => void)[] = [];

  constructor(
    private readonly pages: readonly HTMLElement[],
    private readonly onChange: (index: number) => void,
  ) {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(pointer: fine)').matches;

    this.listen(window, 'scroll', () => this.sync(), { passive: true });
    this.sync();

    if (reduced) {
      return;
    }
    if (finePointer) {
      this.listen(window, 'wheel', (e) => this.onWheel(e as WheelEvent), { passive: false });
    }
    this.listen(window, 'keydown', (e) => this.onKey(e as KeyboardEvent));
  }

  destroy(): void {
    this.cleanup.forEach((fn) => fn());
  }

  private listen(
    target: EventTarget,
    type: string,
    fn: EventListener,
    options?: AddEventListenerOptions,
  ): void {
    target.addEventListener(type, fn, options);
    this.cleanup.push(() => target.removeEventListener(type, fn, options));
  }

  private sync(): void {
    const mid = window.scrollY + window.innerHeight * 0.45;
    let index = 0;
    this.pages.forEach((page, i) => {
      if (page.offsetTop <= mid) index = i;
    });
    if (index !== this.current) {
      this.current = index;
      this.onChange(index);
    }
  }

  /** Whether the current page still has content past the edge in that direction. */
  private hasMore(down: boolean): boolean {
    const rect = this.pages[this.current].getBoundingClientRect();
    return down ? rect.bottom > window.innerHeight + 2 : rect.top < -2;
  }

  private onWheel(e: WheelEvent): void {
    if (e.ctrlKey) return;
    if (this.animating) {
      e.preventDefault();
      return;
    }
    if (Math.abs(e.deltaY) < 4) return;
    const down = e.deltaY > 0;
    if (this.hasMore(down)) return;
    const next = this.current + (down ? 1 : -1);
    if (next < 0 || next >= this.pages.length) return;
    e.preventDefault();
    this.goTo(next);
  }

  private onKey(e: KeyboardEvent): void {
    const target = e.target as HTMLElement | null;
    if (target?.closest('input, textarea, select, button, a')) return;
    const step: Record<string, number> = {
      PageDown: 1,
      ArrowDown: 1,
      ' ': 1,
      PageUp: -1,
      ArrowUp: -1,
    };
    const delta = step[e.key];
    if (delta === undefined) return;
    if (this.hasMore(delta > 0)) return;
    const next = this.current + delta;
    if (next < 0 || next >= this.pages.length) return;
    e.preventDefault();
    this.goTo(next);
  }

  private goTo(index: number): void {
    const from = window.scrollY;
    const to = this.pages[index].offsetTop;
    const duration = 950;
    const start = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    this.animating = true;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      window.scrollTo(0, from + (to - from) * ease(p));
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => (this.animating = false), 120);
      }
    };
    requestAnimationFrame(step);
  }
}
