/**
 * One-line descriptions of the featured projects for the home page. English
 * comes from projects.json itself; a project missing here falls back to it.
 */
export const PROJECT_TAGLINES: Record<'en' | 'uk' | 'pl', Readonly<Record<string, string>>> = {
  en: {},
  uk: {
    bitrate:
      'Музична платформа з відкритим кодом: Next.js, TanStack Start, NestJS і мікрофронтенди на Angular та Svelte',
    ggchest: 'Тимлід фронтенду, команда з чотирьох людей',
    'supply-chain-admin-panel':
      'Виробництво на мапі світу за 2010–2026: фільтр за країною або продуктом',
    chronos: 'Календар і таск-менеджер зі спільним доступом і синхронізацією з Google Calendar',
    uevent: 'Платформа для пошуку подій і продажу квитків з виплатами організаторам',
    usof: 'Q&A-платформа на кшталт Stack Overflow з модерацією',
    'card-game': 'Карткова гра з мультиплеєром у реальному часі, без фреймворка',
    cabhub: 'Лендинг таксі-сервісу',
    carstore: 'Верстка магазину автоаксесуарів',
  },
  pl: {
    bitrate:
      'Otwarta platforma muzyczna: Next.js, TanStack Start, NestJS i mikrofrontendy w Angular i Svelte',
    ggchest: 'Lider zespołu frontendowego, cztery osoby',
    'supply-chain-admin-panel': 'Produkcja na mapie świata 2010–2026: filtr po kraju lub produkcie',
    chronos: 'Kalendarz i menedżer zadań z udostępnianiem i synchronizacją z Google Calendar',
    uevent: 'Platforma wydarzeń i sprzedaży biletów z wypłatami dla organizatorów',
    usof: 'Platforma Q&A w stylu Stack Overflow z moderacją',
    'card-game': 'Gra karciana multiplayer w czasie rzeczywistym, bez frameworka',
    cabhub: 'Landing serwisu taksówkowego',
    carstore: 'Markup sklepu z akcesoriami samochodowymi',
  },
};
