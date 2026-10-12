# portfolio

Angular-портфолио со всеми проектами + статичные превью самих проектов.

Главная — постраничный скролл из семи экранов (герой, о себе, что изучаю, опыт, проекты,
хобби, контакты) с 3D-моделью слоёв Feature-Sliced Design на Three.js. Три темы
(light / dark / dim), три языка (EN / UK / PL, переключаются без перезагрузки; страницы
пререндерятся на английском), CV для скачивания лежит в `portfolio-app/public/cv/`.

## Структура

```
portfolio-app/     исходники портфолио (Angular 22, SSR-пререндер, Dockerfile, nginx.conf)
portfolio-dist/    последняя локальная сборка (для быстрого просмотра без npm install)
preview/           21 проект, подготовленный к статичному показу + локальная навигация
reports/           отчёт по каждому проекту со списком дефектов
shots/             скриншоты рендера портфолио (light/dark x 390/1440/1920)
.github/workflows/ деплой на GitHub Pages и публикация образа в GHCR
```

## Разработка

```bash
cd portfolio-app
npm install
npm start            # http://localhost:4200
npm run build        # сборка + tools/postbuild.mjs (пререндер 23 маршрутов)
```

## Посмотреть собранную версию без сборки

Сайт собран под подпуть `/portfolio/`, поэтому раздавать нужно на уровень выше:

```bash
mkdir -p .serve && ln -sfn ../portfolio-dist .serve/portfolio
cd .serve && python3 -m http.server 8080
# http://localhost:8080/portfolio/
```

## Превью проектов

```bash
cd preview && python3 -m http.server 8081   # http://localhost:8081/
```

Открывать через `file://` не стоит — относительные пути и fetch там не работают.

## Docker

```bash
cd portfolio-app
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

Образ ни разу не собирался локально — самое вероятное место поломки связка
`setcap` + `USER nginx` в Dockerfile.

## Деплой

- `.github/workflows/pages.yml` — сборка с `--base-href /<repo>/` и публикация на GitHub Pages.
  Нужно один раз включить Pages в настройках репозитория (Source: GitHub Actions).
- `.github/workflows/docker.yml` — сборка образа и push в `ghcr.io/lordpluha/portfolio`.

Ни один из воркфлоу ещё не запускался.
