import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { en, type MessageKey, type Messages } from './en';
import { pl } from './pl';
import { PROJECT_TAGLINES } from './project-taglines';
import { uk } from './uk';

export type Lang = 'en' | 'uk' | 'pl';
export const LANGS: readonly Lang[] = ['en', 'uk', 'pl'];

const DICTIONARIES: Record<Lang, Messages> = { en, uk, pl };
const STORAGE_KEY = 'portfolio-lang';

/**
 * Runtime language switch. Pages are prerendered in English; in the browser the
 * stored choice (or the browser's own language) is applied once the app has
 * hydrated, so the static HTML and the first client render always agree.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly lang = signal<Lang>('en');

  /** Reads the current language, so a template calling it re-renders on a switch. */
  t(key: MessageKey): string {
    return DICTIONARIES[this.lang()][key];
  }

  /** A featured project's one-liner in the current language, English otherwise. */
  tagline(id: string, fallback: string): string {
    return PROJECT_TAGLINES[this.lang()][id] ?? fallback;
  }

  /** Called once after hydration. */
  restore(): void {
    if (!this.isBrowser) {
      return;
    }
    this.set(this.read(), false);
  }

  set(lang: Lang, persist = true): void {
    this.lang.set(lang);
    this.document.documentElement.lang = lang;
    if (persist) {
      try {
        this.document.defaultView?.localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Remembering the language is a nicety, not a requirement.
      }
    }
  }

  private read(): Lang {
    try {
      const stored = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(stored as Lang)) {
        return stored as Lang;
      }
    } catch {
      // Fall through to the browser's language.
    }
    const browser = (this.document.defaultView?.navigator.language ?? 'en').slice(0, 2);
    return browser === 'uk' ? 'uk' : browser === 'pl' ? 'pl' : 'en';
  }
}
