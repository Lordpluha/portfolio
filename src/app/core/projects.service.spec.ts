import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { PROJECTS } from './portfolio.generated';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('exposes every project from the data file', () => {
    expect(service.all()).toHaveLength(PROJECTS.length);
  });

  it('splits featured projects from the rest without losing any', () => {
    expect(service.featured().length + service.rest().length).toBe(PROJECTS.length);
    expect(service.featured().every((p) => p.featured)).toBe(true);
  });

  it('only offers filters for categories that appear in the grid', () => {
    const present = new Set(service.rest().map((p) => p.category));
    expect(service.restCategories().every((c) => present.has(c.id))).toBe(true);
  });

  it('resolves demo and repo links per project', () => {
    const carstore = service.byId('carstore');
    expect(carstore?.repoHref).toBe('https://github.com/Lordpluha/CarStore/tree/carstore.layout');

    const chronos = service.byId('chronos');
    expect(chronos?.demoHref).toBe('https://lordpluha.github.io/chronos/');

    // Hosted on its own domain: the data carries the whole URL already.
    const bitrate = service.byId('bitrate');
    expect(bitrate?.demoHref).toBe('https://bitrate.me/');
  });

  it('gives the first project no previous neighbour and the last no next', () => {
    const first = service.neighbours(PROJECTS[0].id);
    expect(first.previous).toBeNull();
    expect(first.next?.id).toBe(PROJECTS[1].id);

    const last = service.neighbours(PROJECTS[PROJECTS.length - 1].id);
    expect(last.next).toBeNull();
  });

  it('returns nothing for an unknown id', () => {
    expect(service.byId('not-a-project')).toBeUndefined();
    expect(service.neighbours('not-a-project')).toEqual({ previous: null, next: null });
  });
});
