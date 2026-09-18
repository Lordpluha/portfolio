import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { SITE } from './site.config';

/** Sets the document title and description for each route. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  set(pageTitle: string | null, description: string): void {
    this.title.setTitle(pageTitle ? `${pageTitle} — ${SITE.titleSuffix}` : SITE.titleSuffix);
    this.meta.updateTag({ name: 'description', content: description });
  }
}
