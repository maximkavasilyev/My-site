# Личный сайт Максима

Статический экспертный сайт и основа персональной медиа-системы: контент, исследования, проекты и будущая коммерческая ветка по Gates.

Сайт является:

- личным authority hub;
- каноническим источником долгоживущего контента;
- контекстной точкой входа в отдельные продукты Pro-leads и Tender Audit;
- базой для будущих платных материалов после коммерческой проверки.

## Текущая медиа-топология

С 2026-08-08 действует author-first модель, зафиксированная в `docs/MEDIA_TOPOLOGY.md` и ADR 0004:

- один авторский Telegram Максима;
- один авторский MAX Максима;
- существующие профессиональные/авторские страницы Максима в VK и Instagram без создания дублей;
- три отдельных тематических Telegram-направления: новости нейросетей, разработка с AI, AI-инструменты;
- Pro-leads и Tender Audit остаются самостоятельными продуктами, но отдельные публичные соцканалы продукта не создаются автоматически;
- новая product social surface появляется только после Product Social Gate;
- product UX (бот, Mini App, web, email/transactional notifications) не считается публичным медиа-каналом.

Исторические publication targets `proleads_ru` и `tenderaudit` не удаляются, но в текущем каноне являются legacy media targets. `maxightAI` остаётся legacy technical identifier авторского Telegram до отдельной технической миграции.

## Документация

Перед изменениями читать:

1. `CLAUDE.md` — правила проекта;
2. `AGENTS.md` — Next.js-специфичные инструкции;
3. `docs/ARCHITECTURE.md` — роль системы, границы и Gates;
4. `docs/MEDIA_TOPOLOGY.md` — текущая топология авторских, тематических и продуктовых поверхностей;
5. `docs/TECH_SPEC.md` — текущий технический контракт;
6. `docs/CONTENT_GUIDE.md` — правила материалов;
7. `docs/ROADMAP.md` — этапы и условия переходов;
8. `docs/adr/` — архитектурные решения.

Медиа-канон:

- `docs/BRAND.md`;
- `docs/MEDIA_TOPOLOGY.md`;
- `docs/MEDIA_ARCHITECTURE.md`;
- `docs/CONTENT_OS.md`;
- `docs/CHANNELS.md`;
- `docs/EDITORIAL_NETWORK.md`;
- `docs/EDITORIAL_GUIDE.md`;
- `docs/ECOSYSTEM.md`;
- `docs/MEDIA_SYNC.md`;
- `docs/MEDIA_CLAUDE.md`.

При конфликте старой формулировки о продуктовых соцканалах с `MEDIA_TOPOLOGY.md`/ADR 0004 приоритет имеет новый author-first протокол.

## Текущий стек

- Next.js App Router;
- Tailwind CSS;
- статический экспорт — `output: "export"`;
- Markdown в `content/posts/` и `content/pages/`;
- nginx/VPS без постоянного Node.js application process;
- без CMS, БД, auth, payments и backend API.

## Разработка

```bash
npm install
npm run dev
```

Локальный адрес: `http://localhost:3000`.

## Production build

```bash
npm run build   # формирует out/
npm run start   # поднимает out/ через статический сервер
```

## Реализованные маршруты

- `/`;
- `/about`;
- `/projects`;
- `/blog`;
- `/blog/[slug]`;
- `/contact`;
- `/design-system` — внутренний неиндексируемый референс.

## Статические возможности

- RSS: `/rss.xml`;
- sitemap и robots;
- Open Graph изображения для главной и постов;
- optional analytics component, выключенный без build-time переменной;
- русский 404;
- accessibility и mobile navigation.

## Тесты

```bash
npx playwright install chromium
npm run test:e2e
```

CI запускает lint, build и E2E для pull requests и push в `main`.

## Архитектурное ограничение

До Gate 2 коммерческий backend не создаётся. Один платный материал сначала продаётся и доставляется вручную. Ориентир Gate 2 — 5–10 платежей от целевой аудитории вне близкого окружения и понятные причины покупки.

Future-документация не является разрешением на реализацию auth, payments, account, comments, community, marketplace, PWA, Telegram Mini App или native apps.
