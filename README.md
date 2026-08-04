# Личный сайт Максима

Personal authority hub: разработчик, архитектор систем, AI-специалист. Точка входа
верхнего уровня воронки на два продукта — Pro-leads и Tender Audit.

Перед началом работы над проектом читать в этом порядке:

1. `CLAUDE.md` — краткие правила проекта
2. `docs/ARCHITECTURE.md` — архитектура, воронка, структура сайта (Canon/SSoT)
3. `docs/TECH_SPEC.md` — стек, дизайн-система, спецификация страниц и компонентов
4. `docs/CONTENT_GUIDE.md` — правила контента и типизация постов
5. `docs/ROADMAP.md` — текущий этап и план действий

Для задач по контенту/медиа-стратегии (не только сайт) — дополнительно канон персонального медиа:
`docs/BRAND.md`, `docs/MEDIA_ARCHITECTURE.md`, `docs/CONTENT_OS.md`, `docs/CHANNELS.md`,
`docs/EDITORIAL_GUIDE.md`, `docs/ECOSYSTEM.md`, `docs/MEDIA_CLAUDE.md`.

## Стек

Next.js (App Router), статический экспорт (`output: "export"`) + Tailwind CSS. Контент —
Markdown-файлы в `content/posts/` и `content/pages/`, без CMS. Деплой — на VPS через nginx,
без Node-процесса (пример конфига — `deploy/nginx.conf.example`).

## Разработка

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

Продакшн-сборка и локальный просмотр статического экспорта:

```bash
npm run build   # -> out/
npm run start   # поднимает out/ как статик-сервер (npx serve)
```

Все 5 страниц сайта готовы: Главная (`/`), Обо мне (`/about`), Проекты (`/projects`),
Блог (`/blog`, `/blog/[slug]`), Контакты (`/contact`) — текущее состояние см.
`docs/ROADMAP.md`. Витрина токенов дизайн-системы — на `/design-system` (референс для
разработки, вне навигации и вне индексации).

## Notion Canon v2

### Current

This is a static Next.js App Router site with repository Markdown and no database, auth, payments, account, comments, CMS, or backend runtime.

### Approved direction

It is Maxim's expert and authority hub, canonical content/research source, contextual link to the separate Pro-leads and Tender Audit products, and a future independent commercial branch�not only a traffic funnel.

### Future / Gate

One paid material is validated manually before any commerce backend. Only after about 5�10 target-user payments and clear purchase reasons may a separately authorized minimal account-and-purchase layer be considered. See `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, and `docs/adr/0001-notion-canon-v2-gated-website-evolution.md`.

### Out of scope

No commercial, account, community, marketplace, Telegram Mini App, native-app, or code implementation is included in this documentation synchronization.
