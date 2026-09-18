# Webster — статическое демо фронтенда

**Итог:** собирается и работает. Готовая сборка лежит в `/home/claude/work/preview/webster/`,
рассчитана на публикацию по адресу `https://lordpluha.github.io/webster/`.

Репозиторий: `/home/claude/work/src/webster` (pnpm + Turborepo, `apps/frontend` — React 19 /
React Router 7 / Vite 7 / Tailwind 4 / Apollo Client 4). Бэкенд (`apps/backend`, NestJS +
GraphQL + MongoDB) не запускался и не деплоился — по условию задачи.

---

## 1. Сборка

- `corepack enable`, установка из корня монорепозитория:
  `pnpm install --no-frozen-lockfile --filter @webster/frontend...`.
  **Флаг `--no-frozen-lockfile` использован** — лок-файл в репозитории не совпадал с
  установленным набором (плюс я добавил один пакет, см. ниже).
- Node — v22.22.2 (`/opt/node22/bin/node`). Каталога `/home/claude/node_modules/node-linux-x64/bin`
  в этом окружении нет; Node 22 сборке достаточно (`engines: node >= 20`).
- Добавлена одна зависимость: `@fontsource/plus-jakarta-sans` (devDependency фронтенда) —
  чтобы убрать `@import` с `fonts.googleapis.com`.
- Команда сборки демо:
  `pnpm --filter @webster/frontend exec vite build --mode demo`
  (режим `demo` подхватывает новый `apps/frontend/.env.demo`).
- Предупреждение сборщика одно и безобидное: главный чанк ~1.19 МБ (401 КБ gzip) — про
  code-splitting. Ошибок нет.

---

## 2. Что и где замокано

Ключевая идея: **живой путь остался в коде и включается флагом**. В `src/main.tsx` терминальное
звено Apollo выбирается так:

```ts
const terminatingLink = USE_LIVE_API
  ? new HttpLink({ uri: graphqlUrl, credentials: "include" })   // как было
  : createDemoMockLink();                                        // демо
```

`USE_LIVE_API` = `import.meta.env.VITE_USE_LIVE_API !== "false"`, то есть по умолчанию (dev,
обычный прод-билд команды) работает настоящий `HttpLink`; `false` ставится только в `.env.demo`.

### Новые файлы (весь демо-слой изолирован в `src/demo/`)

| Файл | Назначение |
|---|---|
| `src/demo/demo-config.ts` | Флаг `USE_LIVE_API` / `IS_STATIC_DEMO` и текст «нужен бэкенд» |
| `src/demo/schema.ts` | SDL, **скопированный дословно** из `apps/backend/src/infra/graphql/schema.gql` |
| `src/demo/fixtures.ts` | Демо-пользователь, 6 проектов со сценами, 5 встроенных шаблонов, 2 пользовательских, версии, шара-ссылка, аватар-пресеты |
| `src/demo/demo-state.ts` | In-memory «база» + резолверы для каждого поля `Query`/`Mutation` |
| `src/demo/mock-link.ts` | `ApolloLink`, исполняющий документ операции через `graphql-js` |
| `src/demo/DemoBadge.tsx` | Плашка «Static demo — fixture data, no server» |

Мок не подменяет схему: он берёт **настоящий SDL бэкенда** и выполняет **настоящие документы
операций** (`src/graphql/*.graphql.ts`) через `graphql.execute()`. Поэтому выборки полей,
алиасы и `__typename` ведут себя ровно так же, как против живого API, а Apollo-кэш
нормализуется без предупреждений. Задержка ответа — 90 мс, чтобы спиннеры вели себя естественно.

### Правки в существующем коде (минимальные, без изменения UI)

| Файл | Что и зачем |
|---|---|
| `src/main.tsx` | выбор link по флагу; `BrowserRouter basename={import.meta.env.BASE_URL}`; рендер `<DemoBadge/>`; `refreshToken()` в демо не ходит в сеть; глобальный error-toast не дублирует сообщение, если ошибка помечена кодом `DEMO_BACKEND_REQUIRED` |
| `vite.config.ts` | `base` из `VITE_BASE_PATH` (по умолчанию `/`) |
| `src/styles.css` | Google Fonts → `@fontsource/plus-jakarta-sans` (latin 400–800) |
| `src/shared/constants/avatar-presets.ts` | `avatarPresetSrc()` учитывает `BASE_URL` |
| `src/shared/lib/resolve-avatar-src.ts` | путь `/avatars/...` учитывает `BASE_URL` |
| `src/shared/lib/upload-project-image.ts` | в демо бросает понятную ошибку вместо `fetch` на `:4000/upload` |
| `src/components/profile/AvatarPicker.tsx` | то же для `POST /upload/avatar` |
| `apps/frontend/.env.demo` (новый) | `VITE_USE_LIVE_API=false`, `VITE_BASE_PATH=/webster/`, пустые OAuth client id |
| `public/demo/*.png` (новые) | 8 картинок, сгенерированы локально скриптом (без внешних ссылок) |

---

## 3. Вход в приложение — сразу продукт, а не форма логина

`useAuthBootstrap` и `PrivateRoute` не тронуты. Вместо этого мок отвечает на реальный запрос
`GetCurrentUser` демо-пользователем (`Demo Designer`, `demo@webster.studio`, аватар `preset-07`,
почта подтверждена, 2FA выключена). Посетитель на `/` сразу попадает на дашборд, на
`/projects` — на список из шести проектов.

Выход (`Logout`) работает по-настоящему: сессия сбрасывается, `me` начинает отдавать
`UNAUTHENTICATED` (тот же код, что у бэкенда), приложение уводит на `/login`. Обратный вход с
любым паролем восстанавливает демо-сессию — чтобы посетитель не заперся снаружи.

---

## 4. Что реально работает vs. что вежливо отказывает

### Работает на данных фикстур (мутации меняют состояние)

- **Список проектов, дашборд** — `Projects` с пагинацией, сортировка по `updatedAt`.
- **Создание проекта** — с нуля и из шаблона (`CreateProject`, `CreateProjectFromTemplate`),
  сразу открывается в редакторе.
- **Удаление проекта** (`DeleteProject`), переименование, `UpdateProject`.
- **Редактор** — `Project` отдаёт сцену, рисование/перемещение/выделение работают в памяти,
  **автосохранение** (`AutosaveProject`) кладёт сцену обратно в стор, «Save now» показывает `Saved`.
- **Версии** — `Versions`, `CreateVersion` (снапшот), `RestoreVersion` (откат сцены).
- **Шаблоны** — встроенные (5 штук, **скопированы из `default-templates.ts` бэкенда**),
  пользовательские: создание из редактора, переименование, удаление.
- **Профиль** — `UpdateProfile` (имя/фамилия, выбор аватара из 20 пресетов), `AvatarPresets`.
- **Просмотр по ссылке** — `/share/demo-share-launch-post` открывает read-only просмотрщик
  (`ResolveShareLink` на заранее засеянном токене).
- **Экспорт** — PNG / JPG / PDF / WEBP / SVG / BMP / JSON. Он и в оригинале **полностью
  клиентский** (`downloadProjectExport` + `pdf-lib`), поэтому работает без изменений: проверено,
  файл `Launch-post--infinite-canvas.png` реально скачивается.

Состояние живёт в `sessionStorage` (ключ `webster:demo-state:v1`): правки переживают
перезагрузку вкладки, новая вкладка начинает с исходных фикстур.

### Вежливо отказывает (GraphQL-ошибка с человеческим текстом, без исключений в консоли)

Регистрация, подтверждение e-mail, сброс пароля, magic-link, OAuth-вход, смена пароля,
включение/выключение 2FA, **создание/отзыв share-ссылок**, изменение роли ссылки, автосохранение
через share-ссылку, серверный экспорт (`exportPng/Jpg/Pdf`). Плюс два REST-эндпоинта вне
GraphQL: загрузка картинки в проект и загрузка своего аватара.

Текст, который видит посетитель, например:

> «Registration writes to MongoDB and sends a verification email. This is a static demo — the
> Webster backend is not running, so this action is unavailable.»

> «Creating share links needs the backend — a read-only demo link is already seeded. This is a
> static demo — the Webster backend is not running, so this action is unavailable.»

Каждое такое сообщение показывается ровно один раз (тост страницы или инлайн-алерт), потому что
глобальный error-link для кода `DEMO_BACKEND_REQUIRED` молчит.

Кнопки OAuth на странице входа показывают штатное сообщение приложения «Google OAuth is not
configured…» — client id в `.env.demo` пустые, никакого редиректа на сторонние домены не
происходит.

---

## 5. Контент

6 проектов, всё на английском, сцены в формате canvas-engine v1 (`version/nodes/nodeOrder/layerOrder`):

1. **Nordic Cafe — menu poster** (800×1100) — постер меню, есть картинка, эллипс, штрих-каракуля.
2. **Aurora — onboarding slide** (1280×720) — слайд с тремя карточками, стрелками, треугольником.
3. **Q3 offsite brainstorm** (1400×900) — 7 стикеров, стрелки, обводка от руки.
4. **Launch post — infinite canvas** (1080×1080) — соцпост с фоновой картинкой.
5. **Analytics dashboard — wireframe v3** (1200×800) — вайрфрейм с барами и линией тренда.
6. **Studio 14 — business card** (1050×600) — визитка.

Задействованы все типы узлов движка: `rect`, `ellipse`, `triangle`, `arrow`, `text`, `path`, `image`.

Картинки (2 «фото» для холста + 6 превью проектов) сгенерированы локально PNG-энкодером на
`zlib` и лежат в `public/demo/`. Внешних ссылок нет.

---

## 6. Подпапка, роутинг, шрифты

- `vite base` = `/webster/` (через `VITE_BASE_PATH` в `.env.demo`).
- `BrowserRouter basename={import.meta.env.BASE_URL}`.
- **Проверенный базовый путь ассетов — `/webster/`**: в `index.html`
  `href="/webster/webster-logo.svg"`, `src="/webster/assets/index-*.js"`,
  `href="/webster/assets/index-*.css"`; в CSS `url(/webster/assets/plus-jakarta-sans-*.woff2)`;
  в бандле `import.meta.env.BASE_URL` заинлайнен как `"/webster/"` (аватары, демо-картинки).
- `404.html` — побайтовая копия `index.html` (`cmp` совпал). Добавлен `.nojekyll`.
- Шрифт Plus Jakarta Sans самохостится (`@fontsource`, latin 400/500/600/700/800, woff2+woff).
- **Ноль обращений к сторонним хостам**: во всех прогонах `performance.getEntriesByType("resource")`
  содержит только `localhost:8899`.

---

## 7. Плашка демо

Фиксированная плашка внизу по центру: `● Static demo — fixture data, no server`. `pointer-events: none`,
`z-index` максимальный, не перекрывает управление, видна на всех страницах и обоих разрешениях.

---

## 8. Проверка (Playwright + Chromium `/opt/pw-browsers`)

Сайт отдавался статическим сервером из **родительского каталога**, страницы открывались по
`http://localhost:PORT/webster/...`.

Скриншоты — `fullPage: false`, 1440×900 и 390×844, лежат в `/home/claude/work/shots/webster-*.png`
(41 файл), все просмотрены.

Маршруты в прогоне: `/`, `/projects`, `/templates`, `/profile`,
`/editor?projectId=…` (три разных проекта), `/share/demo-share-launch-post`, `/canvas-engine`,
`/verify-email?token=demo`.

Результат по всем маршрутам и обоим разрешениям:

- **console errors: 0**
- **запросов со статусом ≥ 400: 0**, упавших запросов: 0
- **горизонтального переполнения при 390px: 0px**
- сторонние хосты: нет

### Холст реально работает

Сценарий на `prj-business-card`: открыть → выбрать инструмент «Rect» в доке → протащить мышью →
переключиться на «Select» → перетащить нарисованное:

```
before:           1.00x · 0 sel · 12 nodes
after draw rect:  1.00x · 1 sel · 13 nodes
after move:       1.00x · 1 sel · 13 nodes   (панель Properties показала X 555 / Y 340 / 170×120)
после Save now:   футер → "Saved"
после полной перезагрузки страницы: 13 nodes   (правка вернулась из мок-стора)
```

Также проверено: создание проекта из шаблона «Presentation slide» (список 6 → 7, редактор
открылся с 5 узлами шаблона), удаление (7 → 6), панель версий с двумя снапшотами и кнопкой
Restore, экспорт PNG (файл скачался), logout → login.

### Глубокие ссылки через 404.html

Отдельный прогон на сервере, который повторяет поведение GitHub Pages (неизвестный путь →
`404.html` со статусом 404):

```
/webster/templates                         → документ 404, отрисовался заголовок "My templates"
/webster/editor?projectId=prj-aurora-…     → документ 404, редактор открылся
/webster/share/demo-share-launch-post      → документ 404, "Launch post — infinite canvas"
/webster/profile                           → документ 404, "Your account"
```

То есть все глубокие ссылки работают. Единственная запись в консоли в этом режиме — сам HTTP-404
на документ; это неустранимое свойство GitHub Pages без SPA-fallback, ассеты при этом отдаются с 200.
При обычном заходе на `/webster/` и навигации внутри приложения консоль чистая.

---

## 9. Что осталось известным ограничением

1. **Клавиша `R` в редакторе** (без модификаторов, после первого клика по холсту) — это
   отладочный шорткат самой команды (`CanvasEnginePage.tsx`: `handleReplaceScene()`), он заменяет
   сцену на технический smoke-scene из 4 фигур. Я его **не трогал** — это поведение приложения, а
   не демо-слоя, но посетитель может случайно стереть доску. Штатные горячие клавиши инструментов
   — `CapsLock+Shift+буква`.
2. **Редактор на 390px** тесный: панель слоёв фиксированной ширины съедает пол-экрана, шапка и
   футер скроллятся внутри себя. Так написано в оригинале; горизонтального переполнения документа нет.
3. **Отладочный HUD** редактора (чипы `1.00x · 0 sel · N nodes`) перекрывает левый верхний угол
   любой доски — это тоже родное поведение. Содержимое фикстур я сдвинул только у brainstorm-доски,
   чтобы заголовок не разрезался.
4. Полная перезагрузка **в новой вкладке** сбрасывает демо-данные к исходным (по замыслу).
5. Главный JS-чанк 1.19 МБ (401 КБ gzip) — из них заметная доля это `graphql-js`, который нужен
   моку для исполнения операций против настоящей SDL. Для демо приемлемо; при желании его можно
   вынести в динамический импорт, включаемый только в демо-режиме.
6. Файлы `public/` из репозитория (`Banana.webp`, `use-case.png`, диаграммы и т.д.) попали в
   сборку как есть — они лежали в `public/` у команды и ни на что не влияют.

---

## 10. Артефакты

- Сборка: `/home/claude/work/preview/webster/` (2.3 МБ, включая `404.html` и `.nojekyll`)
- Скриншоты: `/home/claude/work/shots/webster-*.png`
- `node_modules` удалены; `df -h /home/claude` → 30 ГБ свободно (использовано 31%).
- Git-команд на запись не выполнялось.
