import { Injectable, signal } from '@angular/core';

import type { MessageKey } from './i18n/en';

/** The full-screen pages of the home page, in scroll order. */
export const SECTIONS = [
  { id: 'home', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'learning', label: 'nav.learning' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'work', label: 'nav.work' },
  { id: 'hobbies', label: 'nav.hobbies' },
  { id: 'contact', label: 'nav.contact' },
] as const satisfies readonly { id: string; label: MessageKey }[];

export type SectionId = (typeof SECTIONS)[number]['id'];

/** Which home-page section is in view, shared by the page, the header and the 3D scene. */
@Injectable({ providedIn: 'root' })
export class SectionState {
  readonly index = signal(0);
}
