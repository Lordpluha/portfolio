import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { en } from './en';
import { I18nService } from './i18n.service';
import { pl } from './pl';
import { uk } from './uk';

describe('translations', () => {
  it('fill every English key with text in Ukrainian and Polish', () => {
    for (const dictionary of [uk, pl]) {
      for (const key of Object.keys(en) as (keyof typeof en)[]) {
        expect(dictionary[key].trim(), key).not.toBe('');
      }
    }
  });
});

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('starts in English, the language the pages are prerendered in', () => {
    expect(service.lang()).toBe('en');
    expect(service.t('nav.work')).toBe('Work');
  });

  it('switches every lookup and the document language together', () => {
    service.set('uk', false);
    expect(service.t('nav.work')).toBe('Роботи');
    expect(document.documentElement.lang).toBe('uk');
  });

  it('falls back to the English tagline for a project without a translation', () => {
    service.set('pl', false);
    expect(service.tagline('no-such-project', 'Fallback')).toBe('Fallback');
    expect(service.tagline('chronos', 'x')).toContain('Kalendarz');
  });
});
