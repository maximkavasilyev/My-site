# CLAUDE.md — Правила проекта

> Этот файл читается Claude Code автоматически при каждой сессии в этом репозитории.
> Здесь — краткая выжимка. Полная логика в ARCHITECTURE.md, TECH_SPEC.md, CONTENT_GUIDE.md.
> Next.js-специфичные заметки (версия, breaking changes) — в AGENTS.md, прочитать перед
> написанием кода на Next.js API.
> Канон персонального медиа (все каналы, не только сайт) — в docs/BRAND.md,
> docs/MEDIA_ARCHITECTURE.md, docs/CONTENT_OS.md, docs/CHANNELS.md, docs/EDITORIAL_GUIDE.md,
> docs/ECOSYSTEM.md, docs/MEDIA_CLAUDE.md — читать перед задачами по контенту/медиа-стратегии,
> вне зависимости от того, идёт ли речь о сайте.

## Что это за проект

Репозиторий объединяет две вещи:

1. **Сайт Максима** — разработчика, архитектора систем, AI-специалиста, предпринимателя.
   **Не блог ради блога.** Сайт — точка входа верхнего уровня воронки: узнаваемость эксперта →
   переход подписчиков/клиентов на два продукта: **Pro-leads** и **Tender Audit**. Правила сайта
   как продукта/кода — этот файл + ARCHITECTURE.md + TECH_SPEC.md, они приоритетны при любом
   конфликте формулировок о самом сайте.
2. **Канон персонального медиа** — единая система позиционирования и контент-операций для всех
   каналов (сайт, Telegram, YouTube, Дзен, LinkedIn, VK и т.д.), см. docs/MEDIA_CLAUDE.md и
   связанные доки. Сайт — один из каналов этой системы, но не единственный и не хранит их рабочий
   контур (черновики, inbox и т.п. — в `/media/`, не в `/content/`).

## Стек

- Next.js (React), деплой на собственном VPS
- Контент — Markdown-файлы в репозитории (без CMS, без Notion, без БД)
- Язык интерфейса и контента — только русский

## Жёсткие правила (не нарушать без пересмотра ARCHITECTURE.md)

1. Каждая страница/пост имеет ОДНУ цель. Не смешивать продажу с чистой экспертностью в одном блоке.
2. Контент делится на два типа — **продуктовый** (CTA на Pro-leads или Tender Audit) и
   **экспертный** (без CTA, работает на репутацию). Тип обязателен при создании поста —
   см. CONTENT_GUIDE.md.
3. Продуктовый CTA всегда ведёт на конкретный продукт по теме — никогда на общий хаб
   «выбери сам».
4. Дизайн: минималистичный премиум («Apple-стиль») — много воздуха, крупная типографика,
   сдержанная цветовая палитра. Не добавлять визуальный шум без прямого запроса.
5. Без формы обратной связи на старте (осознанное решение — см. ARCHITECTURE.md). Вместо
   этого — прямые кнопки-ссылки на каналы/продукты.
6. Без обязательного ритма публикаций — не встраивать логику, которая требует регулярности
   (например, ленты «выходит каждую неделю»).

## Перед любым архитектурным изменением

Если задача противоречит одному из правил выше — остановиться и явно сообщить об этом
пользователю, а не тихо продавливать решение. Сначала согласовать изменение каркаса,
потом кодить.

## Структура репозитория (ожидаемая)

```
/content/posts/        — markdown-посты сайта (продуктовые и экспертные), схема — TECH_SPEC.md
/content/pages/         — статика сайта: about, projects, contact
/media/                 — редакционный пайплайн для всех каналов (inbox → ... → published),
                          схема и статусы — docs/CONTENT_OS.md
/docs/                  — ARCHITECTURE.md, TECH_SPEC.md, CONTENT_GUIDE.md, ROADMAP.md +
                          медиа-канон: BRAND.md, MEDIA_ARCHITECTURE.md, CONTENT_OS.md,
                          CHANNELS.md, EDITORIAL_GUIDE.md, ECOSYSTEM.md, MEDIA_CLAUDE.md
```

## Notion Canon v2 � operative override (2026-08-04)

Conflicting v1 statements above are superseded and retained only as history.

### Current

Treat the code and `TECH_SPEC.md` as the source of current implementation: static export, repository Markdown, and no backend, database, auth, payment, account, comments, CMS, API, worker, or queue.

### Approved direction

Treat `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, and ADR 0001 as the synchronized strategic canon: the site is authority hub, canonical content/research source, contextual entry to separate products, and a future commercial branch. `expert | product` is not the complete long-term content model.

### Future / Gate

Do not implement a Web App before Gate 2 commercial validation. Gate 3 is limited to registration, individual purchases, and purchase access. Telegram Mini App is not a priority; native apps are Gate 7. Shared services need evidence in at least two products and an ADR.

### Out of scope

Do not change Pro-leads or Tender Audit boundaries, or infer authorization for backend, account, payment, comments, community, marketplace, PWA, Telegram Mini App, or native-app work from future documentation.
