# ROADMAP.md 💡 План действий

Порядок шагов — намеренно последовательный. Не начинать разработку в Claude Code до
завершения шага 1-2, иначе придётся переделывать конфигурацию.

## Этап 1 — Подготовка (до разработки)

- [ ] Подобрать и купить домен (не куплен на момент составления этого документа)
- [ ] Подтвердить доступ к VPS: SSH, свободный порт/поддомен для деплоя Next.js
- [x] Финализировать 4 базовых документа в репозитории: CLAUDE.md, ARCHITECTURE.md,
      TECH_SPEC.md, CONTENT_GUIDE.md (этот пакет)

## Этап 2 — Контент до кода

Тексты для страниц пишутся до вёрстки, не после — иначе дизайн будет подгоняться под
пустые заглушки, и текст потом придётся ломать под уже готовую структуру.

- [x] Текст для страницы "Обо мне" (личная история, путь, экспертиза)
- [x] Краткие описания для карточек "Проекты" (Pro-leads, Tender Audit — 1 абзац на каждый)
- [x] 3-5 первых постов для блога (черновой список тем — в CONTENT_GUIDE.md)

## Этап 3 — Разработка через Claude Code

- [x] Инициализация репозитория, добавление 4 md-документов в корень/`/docs`
- [x] Настройка Next.js + Tailwind по TECH_SPEC.md
- [x] Дизайн-система (промт из TECH_SPEC.md как отправная точка, дорабатывается итеративно)
- [x] Главная (`/`) — hero, "чем занимаюсь", превью проектов и блога, футер
- [x] Обо мне (`/about`) — текст из `content/pages/about.md`, без CTA
- [x] Проекты (`/projects`) — карточки Pro-leads и Tender Audit из `content/pages/projects.md`,
      кнопка на домен (плейсхолдер `#` — домен ещё не куплен)
- [x] Блог (`/blog`, `/blog/[slug]`) — лента + детальная страница, тип-метка, CTA-блок у
      продуктовых постов (поле `cta_quote` фронтматтера), ссылка на "Обо мне" у экспертных
- [x] Контакты (`/contact`) — кнопки-ссылки (Telegram, LinkedIn, VK), без формы
- [x] Подключение markdown-контента (посты из этапа 2)

## Этап 3.5 — Внешний аудит и фиксы

Полный аудит кода (ChatGPT через GitHub-коннектор), триаж каждой находки — независимая
перепроверка в Node.js/GitHub API там, где это было механически проверяемо, не просто
согласие с текстом отчёта.

Исправлено (не архитектурные решения, безопасно фиксить сразу):
- CTA продуктовых постов — было: скрытый regex по последней цитате файла (ломался на
  многострочных цитатах). Стало: явное поле `cta_quote` во фронтматтере
- Runtime-валидация фронтматтера постов/страниц — билд падает с понятной ошибкой
  (файл/поле/значение), а не тихо ломается или рендерит `undefined`
- Сортировка постов на равных датах реально разворачивала список — починено
- `next start` был сломан после перехода на static export — теперь указывает на `npx serve`
- CI (`.github/workflows/ci.yml`: lint + build), `.nvmrc`
- `/contact` переведён на markdown-модель (`content/pages/contact.md`), как и остальные
  страницы
- Русский `not-found.tsx` (был дефолтный английский от Next.js)
- Мобильное меню — `aria-controls`, Escape, фокус-менеджмент, лок скролла; skip-link;
  заголовки карточек постов — семантические (`h3`, не `p`)
- Deployment-контракт зафиксирован: `trailingSlash: true` + `deploy/nginx.conf.example`
- Default branch на GitHub был `claude/add-docs-to-repo-8tysna` (старая, на 14+ коммитов
  позади) — переключён на `main`

Осознанно отложено (решение владельца, не техническая недоработка):
- Позиционирование Tender Audit относительно предварительного анализа закупки (пост
  "Почему поставщики проигрывают ещё до подачи заявки" пересекается с границей, которую
  ECOSYSTEM.md просит трогать только осознанно) — **открытый вопрос**, контент не менялся
- Публикация `/design-system` — оставлена как есть (закрыта только через `robots.txt`,
  это не контроль доступа, но признано достаточным на этом этапе)

## Этап 4 — Деплой и проверка

Локальную проверку можно и нужно делать уже сейчас, не дожидаясь домена/VPS (Этап 1) —
деплой она не блокирует, а страховать от неё имеет смысл до, а не после переноса на сервер.

### Локальная проверка (не блокируется Этапом 1) — пройдена

- [x] Продакшн-билд (`next build` + `next start`) — собирается и стартует чисто
- [x] Обход всех 11 маршрутов (5 страниц + 5 постов + `/design-system`) — везде HTTP 200,
      ошибок в консоли браузера нет
- [x] Внутренняя навигация: хедер (десктоп), клики по карточкам блога, ссылка "Обо мне" из
      экспертного поста — ведут на ожидаемые URL
- [x] Мобильная адаптация (390px) — бургер-меню открывается, ссылки внутри рабочие
- [x] Реестр CTA-плейсхолдеров подтверждён: футер (Telegram/Pro-leads/Tender Audit) и кнопки
      на `/projects`/постах — везде `href="#"`, осознанно, до покупки домена/ссылок на каналы
- [x] Статический экспорт (`next build` с `output: "export"`) — собрал `out/`, поднял его
      как чистый статик-сервер (без Node) на отдельном порту, все страницы и `robots.txt`/
      `sitemap.xml` отдаются и рендерят реальный контент
- [x] `sitemap.xml` и `robots.txt` — сгенерированы (`app/sitemap.ts`, `app/robots.ts`),
      `/design-system` закрыт от индексации

### Деплой (блокируется Этапом 1 — домен и VPS)

- [ ] Деплой на VPS
- [ ] Привязка домена
- [ ] Замена CTA-плейсхолдеров `#` на реальные ссылки (продукты, Telegram/LinkedIn/VK)
- [ ] Повторная проверка всех CTA-ссылок уже на реальном домене

## Этап 5 — После запуска

- [ ] Первая публикация в соцканалах со ссылкой на сайт
- [ ] Наблюдение: какие посты/страницы реально приводят переходы на продукты
      (без переусложнения аналитики на старте — базовая статистика достаточна)
- [ ] Пересмотр отложенных решений при необходимости (форма связи, ритм публикаций —
      см. ARCHITECTURE.md п.6) — не раньше, чем через 1-2 месяца работы сайта

## Незакрытые вопросы (требуют решения до или во время разработки)

- Конкретное доменное имя — не выбрано
- Точная светлая/тёмная база дизайн-системы — зафиксирована первым черновиком как светлая
  (см. TECH_SPEC.md), дорабатывается итеративно
- ~~Способ деплоя на VPS~~ — решено: статический экспорт (`output: "export"` в
  next.config.ts). Сайт не использует API-роуты, middleware, next/image — только markdown
  из репозитория и Server Components, рендерящиеся в HTML на билде. VPS на nginx (или любом
  статик-сервере) без Node-процесса.
  `SITE_URL` в `lib/site.ts` — плейсхолдер `https://example.com` до покупки домена, используется
  в `sitemap.xml`/`robots.txt`/`metadataBase`; заменить при деплое (через `NEXT_PUBLIC_SITE_URL`
  или прямо в файле).
- ~~Deployment-контракт (trailingSlash + nginx routing)~~ — решено: `trailingSlash: true` в
  next.config.ts (каждый роут — `/route/index.html`, простейший `try_files $uri $uri/ =404`,
  без угадывания `.html`-расширений). `next/link` сам расставляет trailing slash во внутренних
  ссылках, править компоненты не пришлось. Рабочий пример конфига — `deploy/nginx.conf.example`
  (заменить `server_name` на реальный домен и путь `root` при деплое).

## Notion Canon v2 � operative override (2026-08-04)

Conflicting v1 statements above are superseded and retained only as history.

### Current

The website is a completed static Next.js implementation. This branch only synchronizes documentation; it does not alter deployment, production, application code, content, or configuration.

### Approved direction

The sequence is: Gate 0 expert core > Gate 1 interest signal and one manual paid-material test > Gate 2 commercial validation > Gate 3 minimal commercial layer > Gate 4 retention > Gate 5 community > Gate 6 marketplace discovery > Gate 7 native-app consideration. The website remains the canonical content source and Pro-leads and Tender Audit remain separate.

### Future / Gate

Gate 2 requires approximately 5�10 payments from target users outside Maxim's immediate circle and clear reasons for purchase; without it, revise or stop the offer rather than build a platform. Gate 3 is limited to free registration, individual purchase, purchase/access state, and access to materials. Every Gate records evidence, success criteria, permitted scope, excluded functions, and a stop or rollback condition. Subscription is considered only after proven recurring value and repeat demand; it does not accelerate any Gate.

### Out of scope

No implementation of Research, login, account, payments, auth, database, API, comments, community, marketplace, PWA, Telegram Mini App, or native apps is scheduled by this docs-only change.
