# MEDIA_ARCHITECTURE.md — архитектура персонального медиа

- **Статус:** Canon / SSoT
- **Версия:** 4.2
- **Дата:** 2026-09-20
- **ADR:** `docs/adr/0002-editorial-channel-network.md`, `docs/adr/0004-author-first-media-topology.md`, `docs/adr/0007-threads-first-personal-media-and-editorial-autodistribution.md`
- **Текущая топология:** `MEDIA_TOPOLOGY.md`

## 1. Роль медиа

Персональное медиа — система накопления внимания, доверия, знаний и долгоживущих активов вокруг реальной жизни и работы Максима.

Ценность строится на личности, способе мышления, наблюдениях, опыте, архитектурных решениях и ответственности за выбор, а не на максимальном числе каналов.

## 2. Архитектурный принцип

Медиа-топология не обязана зеркалировать продуктовую архитектуру.

```text
software product != public media channel
product UX != editorial channel
repository != social account
```

Авторский контур разделяется по функции:

```text
discovery → relationship/retention → owned/canonical → products
```

Новая публичная сущность создаётся только при отдельной функции и доказанной цене поддержки.

## 3. Общая схема

Текущий personal flow:

```text
реальная жизнь / работа / мысль / наблюдение / product signal
                              ↓
                         Максим пишет
                              ↓
                           Threads
                    primary discovery now
                              ↓
                         Telegram
                  relationship / retention
                              ↓
                         личный сайт
                      owned / canonical
                              ↓
                  products / reputation
```

Future / optional author surfaces подключаются параллельно, а не как обязательные ступени:

```text
Instagram ───────────────┐
X ───────────────────────┼──→ Telegram / site / product
Bluesky ─────────────────┘
LinkedIn / TenChat ──────→ site / case / product / Telegram
```

Параллельно существует отдельная тематическая Telegram-сеть и её autodistribution layer.

## 4. Author layer

### 4.1. Максим как источник

Максим остаётся источником личного текста.

AI/automation могут обслуживать инфраструктуру: публикацию утверждённого материала, архив, ссылки, метрики и поиск по истории. Они не заменяют личный голос автора по умолчанию.

### 4.2. Threads — primary discovery surface

Threads — основной текущий acquisition/discovery layer.

Причина выбора — уже существующий органический рост и публичная conversational-модель: короткие посты, ответы, ветки, репосты/цитирование и discovery вне существующей базы подписчиков.

Threads намеренно остаётся живым, реактивным и человеческим. Его роль включает:

- юмор;
- жизнь;
- AI и технологии;
- новости и реакции;
- наблюдения;
- вопросы аудитории;
- эксперименты;
- публичные диалоги.

Он не превращается в строгий экспертный блог или автоматизированную контент-фабрику.

### 4.3. Личный Telegram

Telegram — relationship / retention layer:

- продолжения;
- более длинные мысли;
- рабочий контекст;
- архитектурные решения;
- кейсы;
- исследования;
- более глубокая связь с аудиторией.

Telegram не становится автоматическим зеркалом Threads.

### 4.4. Личный сайт

Канонический owned-слой для долгоживущего контента, исследований, страниц проектов и контекстных переходов к продуктам.

### 4.5. Instagram

Instagram — next author surface после стабилизации Threads, но не current core.

Функция:

- более собранный профессиональный образ;
- визуальные кейсы;
- процесс разработки;
- Reels / карусели;
- визуальные фрагменты жизни и работы;
- переходы в Telegram, сайт или продукт по контексту.

Instagram не обязан быть копией Threads и не является обязательным промежуточным слоем.

### 4.6. X и Bluesky

X и Bluesky — optional discovery experiments, а не текущий publishing default.

Они подключаются по Discovery Surface Gate после стабилизации Threads, если дают отдельный discovery-result без непропорционального роста нагрузки.

### 4.7. Other professional / optional surfaces

LinkedIn, TenChat, VK, MAX, VC.ru, Дзен, YouTube и другие площадки подключаются только по отдельной функции.

## 5. Тематическая редакционная сеть

Три Telegram-направления:

1. **Новости нейросетей простым языком**;
2. **Разработка с AI простым языком**;
3. **AI-инструменты и практическое применение**.

Они имеют отдельные ожидания аудитории и не зеркалируют личный Threads Максима.

Подробный operating contract: `EDITORIAL_NETWORK.md`.

## 6. Editorial autodistribution

Редакционный контур может автоматически распространять уже созданный тематический материал в дополнительные surfaces.

```text
editorial content object
        ↓
thematic Telegram
        ↓
automation / agents
   ┌────┴────┐
   ↓         ↓
Facebook  Pinterest
```

Роли:

- **Facebook** — дополнительный reach / long-tail distribution;
- **Pinterest** — visual discovery / evergreen traffic.

Они являются параллельными distribution endpoints, а не последовательной воронкой.

Personal Threads не включается в эту автоматизированную сеть по умолчанию.

## 7. Discovery Surface Gate

Новая личная discovery-платформа сверх Threads добавляется только если:

1. не мешает развитию текущего primary surface;
2. даёт новую аудиторию;
3. позволяет переиспользовать исходный авторский материал без отдельной редакции или имеет отдельную доказанную функцию;
4. имеет реальную discovery/conversation механику;
5. не увеличивает production cost непропорционально;
6. даёт измеримый результат;
7. имеет stop rule.

## 8. Products

### Pro-leads

Самостоятельный B2B-продукт со своим runtime/data/auth/billing/deploy/product UX.

Публичный путь может быть:

```text
Threads / future Instagram / professional surfaces
→ Telegram / site
→ Pro-leads
```

Продукт не обязан иметь отдельный social media channel.

### Tender Audit

Самостоятельный B2B-продукт со своим runtime/data/auth/billing/deploy/product UX.

Публичный путь может быть:

```text
Threads / future Instagram / professional surfaces
→ Telegram / site
→ Tender Audit
```

MAX Bot/Mini App и web Tender Audit — product UX, а не публичная редакция.

## 9. Product Social Gate

Отдельная публичная social surface продукта появляется только при доказанной самостоятельной аудитории, отдельной функции и устойчивом product-specific content flow.

Критерии и stop rules: `MEDIA_TOPOLOGY.md` / ADR 0004.

## 10. CTA architecture

Discovery layer не превращается в рекламную воронку.

Правила:

- короткий пост должен быть ценен сам по себе;
- Telegram можно держать в профиле Threads постоянно;
- прямой CTA в Telegram используется только при наличии дополнительной ценности;
- не каждый пост содержит CTA;
- Instagram/LinkedIn/TenChat могут вести сразу на сайт, кейс или продукт, если это естественный destination;
- Telegram ведёт дальше максимум к одному релевантному материалу или продукту;
- конкурирующие CTA запрещены;
- не строить искусственную цепочку через несколько соцсетей.

## 11. Content model

Стратегические форматы:

- short text post;
- thread;
- note;
- article;
- case;
- research;
- product material;
- reel;
- short;
- long-video;
- carousel;
- visual card / pin.

Текущий renderer сайта может иметь более узкий технический контракт; это не ограничивает редакционный словарь.

## 12. Content object

Существенный материал содержит:

- источник;
- дату наблюдения/актуальности;
- факты;
- unknowns;
- thesis;
- content layer;
- primary channels;
- secondary channels;
- formats;
- product relation;
- CTA;
- review state;
- sync-state.

Editorial content object также может иметь automated distribution targets.

## 13. Производственная модель

Личный Threads-контент не обязан выходить по жёсткому графику.

Базовая модель:

```text
Максим написал пост
→ ручное утверждение самим автором
→ публикация в Threads
→ ответы / ветки / разговор
→ при наличии глубины продолжение в Telegram
→ при долгом сроке жизни материал на сайт
```

Instagram, X и Bluesky не получают публикацию автоматически только потому, что существуют.

Техническая автоматизация publisher не является условием запуска модели.

## 14. Measurement

Для Threads измеряются:

- reach/impressions;
- profile visits;
- follower growth;
- replies/reposts/quotes;
- качественные разговоры;
- переходы в Telegram;
- повторяемость сильных тем.

Для optional discovery surfaces метрики считаются отдельно.

Для editorial autodistribution:

- дополнительный reach;
- outbound clicks;
- evergreen traffic;
- production cost;
- доля материалов, которые реально подходят endpoint.

На уровне системы:

- растёт ли релевантная аудитория;
- конвертируется ли часть discovery-аудитории в Telegram / site / products;
- растёт ли ценность без пропорционального роста production cost.

## 15. Legacy publication targets

До отдельной технической миграции в `agents` могут существовать:

- `proleads_ru` — legacy product media target;
- `tenderaudit` — legacy product media target;
- `maxightAI` — legacy technical identifier авторского Telegram.

Runtime-факт не переопределяет media strategy.

X/Bluesky/Facebook/Pinterest в документации не означают, что publication targets уже реализованы технически.

## 16. Sync

- Notion — стратегия, решения владельца, Gates, backlog, аналитика и статусы;
- GitHub — versioned canon, ADR, agent instructions, schemas и code;
- `agents` — publication/autodistribution runtime;
- product repos — product-specific technical/product truth.

Подробности: `MEDIA_SYNC.md`.

## 17. Инварианты

- Максим остаётся источником личного текста;
- Threads — текущий primary personal discovery surface;
- Telegram не зеркалит Threads;
- сайт остаётся owned/canonical layer;
- Instagram подключается позже с отдельной визуально-профессиональной функцией;
- X/Bluesky не входят в current core автоматически;
- тематическая сеть не превращается в копию личного блога;
- Facebook/Pinterest — automated editorial distribution endpoints, а не personal voice surfaces;
- product runtime не смешивается с media runtime;
- public product social не создаётся без Gate;
- дополнительные сети не добавляются ради присутствия.
