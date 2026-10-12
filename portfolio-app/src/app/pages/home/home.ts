import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import type { MessageKey } from '../../core/i18n/en';
import { I18nService } from '../../core/i18n/i18n.service';
import { ProjectsService } from '../../core/projects.service';
import { SECTIONS, SectionState } from '../../core/sections';
import { SeoService } from '../../core/seo.service';
import { Icon } from '../../shared/icon';
import { LayerScene } from '../../shared/layer-scene';
import { PagedScroll } from './paged-scroll';

interface Phone {
  readonly id: string;
  readonly label: MessageKey;
  readonly e164: string;
  readonly display: string;
}

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, LayerScene],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly i18n = inject(I18nService);
  protected readonly projects = inject(ProjectsService);
  protected readonly state = inject(SectionState);
  protected readonly owner = this.projects.owner;
  protected readonly sections = SECTIONS;

  protected readonly phones: readonly Phone[] = [
    { id: 'eu', label: 'con.phoneEU', e164: '+48883599424', display: '+48 883 599 424' },
    { id: 'ua', label: 'con.phoneUA', e164: '+380689448449', display: '+380 68 944 8449' },
  ];

  protected readonly learning = [
    { name: 'Angular', note: 'learn.angular' },
    { name: 'Svelte', note: 'learn.svelte' },
    { name: 'NestJS', note: 'learn.nest' },
    { name: 'React Native', note: 'learn.rn' },
    { name: 'Flutter', note: 'learn.flutter' },
    { name: 'Tauri', note: 'learn.tauri' },
  ] as const satisfies readonly { name: string; note: MessageKey }[];

  /** Id of the copy button that just succeeded, so it can say "Copied". */
  protected readonly copied = signal<string | null>(null);

  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    inject(SeoService).set(
      null,
      'Vladyslav Tesliuk, Senior Front-end Developer, AI Engineer and Team Lead in Warsaw. React, Next.js and TypeScript, seven years in frontend.',
    );

    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const pages = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>('.page'));
      const pager = new PagedScroll(pages, (index) => this.state.index.set(index));
      destroyRef.onDestroy(() => pager.destroy());
    });
    destroyRef.onDestroy(() => this.state.index.set(0));
  }

  protected copy(id: string, text: string, target: HTMLElement): void {
    const done = () => {
      this.copied.set(id);
      setTimeout(() => this.copied.set(null), 1800);
    };
    const select = () => {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, select);
    } else {
      select();
    }
  }
}
