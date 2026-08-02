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

Next.js (App Router) + Tailwind CSS. Контент — Markdown-файлы в `content/posts/` и
`content/pages/`, без CMS. Деплой — на VPS.

## Разработка

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

Текущее состояние `app/page.tsx` — витрина дизайн-системы (типографика, цвет, базовые
компоненты), не вёрстка Главной страницы. Вёрстка страниц по порядку (Главная → Обо мне →
Проекты → Блог → Контакты) — следующий шаг, см. `docs/ROADMAP.md`.
