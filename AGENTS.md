<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may differ from training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing code against Next.js APIs and follow deprecation notices.
<!-- END:nextjs-agent-rules -->

## Правила проекта

Перед изменениями прочитать:

1. `CLAUDE.md`;
2. `docs/ARCHITECTURE.md`;
3. `docs/TECH_SPEC.md`;
4. релевантный ADR в `docs/adr/`.

Текущий проект — статический Next.js App Router export с Markdown-контентом, без БД, auth, payments, account, CMS, API, backend runtime, workers и queues.

Future-документация не разрешает реализацию автоматически. Backend, коммерческий слой, comments, community, marketplace, PWA, Telegram Mini App, native apps и shared infrastructure требуют соответствующего Gate, отдельной спецификации, ADR и явной задачи владельца.

Pro-leads и Tender Audit остаются отдельными продуктами. Не объединять их данные, runtime, deployment или пользовательские пути с медиа-системой.
