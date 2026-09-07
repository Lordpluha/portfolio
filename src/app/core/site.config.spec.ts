import { describe, expect, it } from 'vitest';

import { demoUrl, repoUrl } from './site.config';

describe('outbound links', () => {
  it('builds a demo URL from the slug', () => {
    expect(demoUrl('chronos', 'chronos')).toBe('https://lordpluha.github.io/chronos/');
  });

  it('has no demo URL when the project has no demo', () => {
    expect(demoUrl(null, 'whatever')).toBeNull();
  });

  it('leaves a demo that is already an absolute URL alone', () => {
    expect(demoUrl('https://bitrate.me/', 'bitrate')).toBe('https://bitrate.me/');
    expect(demoUrl('http://example.test/app', 'x')).toBe('http://example.test/app');
  });

  it('links to the default branch when none is given', () => {
    expect(repoUrl('CabHUB')).toBe('https://github.com/Lordpluha/CabHUB');
  });

  it('links to the named branch when one is given', () => {
    expect(repoUrl('CarStore', 'carstore.layout')).toBe(
      'https://github.com/Lordpluha/CarStore/tree/carstore.layout',
    );
  });
});
