# MEDIA_ARCHITECTURE.md — архитектура персонального медиа

- **Статус:** Canon / SSoT
- **Версия:** 4.1
- **Дата:** 2026-09-18
- **ADR:** `docs/adr/0002-editorial-channel-network.md`, `docs/adr/0004-author-first-media-topology.md`, `docs/adr/0006-text-first-discovery-triad.md`
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

```text
реальная жизнь / работа / мысль / наблюдение / product signal
                              ↓
                         Максим пишет
                              ↓
                 short text-first content
                              ↓
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
    Threads                Bluesky                X
       └──────────────────────┼──────────────────────┘
                              ↓
                         Telegram
                  relationship / retention
                              ↓
                         личный сайт
                      owned / canonical
                              ↓
                  products / reputation
```

Параллельно существует отдельная тематическая Telegram-сеть, которая не является продолжением личного discovery feed.

## 4. Author layer

### 4.1. Максим как источник

Максим остаётся источником личного текста.

AI/automation могут обслуживать инфраструктуру: публикацию, архив, ссылки, метрики и поиск по истории. Они не заменяют личный голос автора по умолчанию.

### 4.2. Discovery triad

**Threads + Bluesky + X (Twitter)** — основной acquisition/discovery layer.

Причина выбора — их публичная conversational модель: короткие посты, ответы, ветки, репосты/цитирование и возможность быть обнаруженным вне существующей базы подписчиков.

Один короткий пост может публиковаться на всех трёх площадках практически без изменений.

Это один publishing layer, а не три редакции.

### 4.3. Личный Telegram

Telegram — relationship / retention layer:

- продолжения;
- более длинные мысли;
- рабочий контекст;
- архитектурные решения;
- кейсы;
- исследования;
- более глубокая связь с аудиторией.

Telegram не становится автоматическим зеркалом discovery triad.

### 4.4. Личный сайт

Канонический owned-слой для долгоживущего контента, исследований, страниц проектов и контекстных переходов к продуктам.

### 4.5. Optional surfaces

Instagram, VK, MAX, LinkedIn, TenChat, VC.ru, Дзен, YouTube и другие площадки не входят в обязательный ежедневный core.

Instagram рассматривается как будущий визуальный слой.

Substack Notes, Mastodon и другие text-first сети могут тестироваться через отдельный Discovery Surface Gate после стабилизации основной triad.

## 5. Тематическая редакционная сеть

Три Telegram-направления:

1. **Новости нейросетей простым языком**;
2. **Разработка с AI простым языком**;
3. **AI-инструменты и практическое применение**.

Они имеют отдельные ожидания аудитории и не зеркалируют Threads/Bluesky/X Максима.

Подробный operating contract: `EDITORIAL_NETWORK.md`.

## 6. Discovery Surface Gate

Новая личная text-first платформа добавляется только если:

1. даёт новую аудиторию;
2. позволяет переиспользовать исходный авторский пост без новой редакции;
3. имеет реальную discovery/conversation механику;
4. не увеличивает production cost непропорционально;
5. даёт измеримый результат;
6. имеет stop rule.

Это защищает систему от бесконечного добавления соцсетей.

## 7. Продукты

### Pro-leads

Самостоятельный B2B-продукт со своим runtime/data/auth/billing/deploy/product UX.

Публичный путь:

```text
Threads / Bluesky / X
→ Telegram / site
→ Pro-leads
```

Продукт не обязан иметь отдельный social media channel.

### Tender Audit

Самостоятельный B2B-продукт со своим runtime/data/auth/billing/deploy/product UX.

Публичный путь:

```text
Threads / Bluesky / X
→ Telegram / site
→ Tender Audit
```

MAX Bot/Mini App и web Tender Audit — product UX, а не публичная редакция.

## 8. Product Social Gate

Отдельная публичная social surface продукта появляется только при доказанной самостоятельной аудитории, отдельной функции и устойчивом product-specific content flow.

Критерии и stop rules: `MEDIA_TOPOLOGY.md` / ADR 0004.

## 9. CTA architecture

Discovery layer не превращается в рекламную воронку.

Правила:

- короткий пост должен быть ценен сам по себе;
- Telegram можно держать в профилях постоянно;
- прямой CTA в Telegram используется только при наличии дополнительной ценности;
- не каждый пост содержит CTA;
- Telegram ведёт дальше максимум к одному релевантному материалу или продукту;
- конкурирующие CTA запрещены.

## 10. Content model

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
- carousel.

Текущий renderer сайта может иметь более узкий технический контракт; это не ограничивает редакционный словарь.

## 11. Content object

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

Для discovery post допустимо несколько primary channels: Threads + Bluesky + X.

## 12. Производственная модель

Личный text-first контент не обязан выходить по жёсткому графику.

Базовая модель:

```text
Максим написал один пост
→ ручное утверждение самим автором
→ публикация в Threads + Bluesky + X
→ ответы / ветки / разговор
→ при наличии глубины продолжение в Telegram
→ при долгом сроке жизни материал на сайт
```

Техническая автоматизация publisher не является условием запуска модели.

## 13. Measurement

По discovery triad измеряются отдельно:

- reach/impressions;
- profile visits;
- follower growth;
- replies/reposts/quotes;
- качественные разговоры;
- переходы в Telegram;
- повторяемость сильных тем.

На уровне системы:

- растёт ли релевантная аудитория;
- конвертируется ли часть discovery-аудитории в Telegram;
- растёт ли ценность без пропорционального роста production cost.

## 14. Legacy publication targets

До отдельной технической миграции в `agents` могут существовать:

- `proleads_ru` — legacy product media target;
- `tenderaudit` — legacy product media target;
- `maxightAI` — legacy technical identifier авторского Telegram.

Runtime-факт не переопределяет media strategy.

Threads/Bluesky/X в документации не означают, что publication targets уже реализованы технически.

## 15. Sync

- Notion — стратегия, решения владельца, Gates, backlog, аналитика и статусы;
- GitHub — versioned canon, ADR, agent instructions, schemas и code;
- `agents` — publication/workflow runtime;
- product repos — product-specific technical/product truth.

Подробности: `MEDIA_SYNC.md`.

## 16. Инварианты

- Максим остаётся источником личного текста;
- Threads + Bluesky + X — один discovery layer, а не три редакции;
- Telegram не зеркалит discovery triad;
- сайт остаётся owned/canonical layer;
- тематическая сеть не превращается в копии личного блога;
- product runtime не смешивается с media runtime;
- public product social не создаётся без Gate;
- дополнительные сети не добавляются ради присутствия.
