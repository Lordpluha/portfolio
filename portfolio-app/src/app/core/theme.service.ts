import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'dim';
export type ThemeChoice = Theme | 'system';

export const THEMES: readonly Theme[] = ['light', 'dark', 'dim'];

const STORAGE_KEY = 'portfolio-theme';

/**
 * Owns the explicit theme choice. While the choice is `system` no `data-theme`
 * attribute is set and the `prefers-color-scheme` query in the stylesheet
 * decides between light and dark; `dim` is only ever an explicit choice.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly choice = signal<ThemeChoice>('system');
  /** The theme actually being painted right now. */
  readonly resolved = signal<Theme>('light');

  constructor() {
    if (!this.isBrowser) {
      return;
    }
    this.choice.set(this.read());
    this.apply();

    // Follow the OS while the visitor has not made an explicit choice.
    const query = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');
    query?.addEventListener('change', () => {
      if (this.choice() === 'system') {
        this.apply();
      }
    });
  }

  set(choice: ThemeChoice): void {
    this.choice.set(choice);
    this.write(choice);
    this.apply();
  }

  private apply(): void {
    const root = this.document.documentElement;
    const choice = this.choice();
    if (choice === 'system') {
      root.removeAttribute('data-theme');
      this.resolved.set(this.systemPrefersDark() ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', choice);
      this.resolved.set(choice);
    }
  }

  private systemPrefersDark(): boolean {
    return this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }

  // localStorage throws in private mode and in some embedded contexts.
  private read(): ThemeChoice {
    try {
      const stored = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      return THEMES.includes(stored as Theme) ? (stored as Theme) : 'system';
    } catch {
      return 'system';
    }
  }

  private write(choice: ThemeChoice): void {
    try {
      const storage = this.document.defaultView?.localStorage;
      if (choice === 'system') {
        storage?.removeItem(STORAGE_KEY);
      } else {
        storage?.setItem(STORAGE_KEY, choice);
      }
    } catch {
      // Persisting the choice is a nicety, not a requirement.
    }
  }
}
