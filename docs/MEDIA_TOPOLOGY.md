# MEDIA_TOPOLOGY.md — текущая топология медиа и продуктовых поверхностей

- **Статус:** Canon / SSoT
- **Версия:** 1.2
- **Дата:** 2026-09-20
- **ADR:** `docs/adr/0004-author-first-media-topology.md`, `docs/adr/0007-threads-first-personal-media-and-editorial-autodistribution.md`

Этот документ определяет текущую медиатопологию. ADR 0007 supersedes ADR 0006 в части обязательной `Threads + Bluesky + X` triad как текущего operating default.

## 1. Главный принцип

> Один авторский источник, несколько слоёв с разной функцией. Сейчас основной personal discovery surface — Threads. Retention не превращается в зеркало, а product/editorial surfaces не смешиваются с личным голосом.

Медиа не копирует структуру репозиториев и продуктов один к одному.

## 2. Авторский контур Максима

### 2.1. Threads — primary discovery now

**Threads** — основной текущий acquisition/discovery layer.

Цель:

- органическое обнаружение новыми людьми;
- рост личного графа подписчиков;
- публичные диалоги и replies;
- тест тем и форматов;
- знакомство с Максимом как с живым автором;
- перевод части заинтересованной аудитории в личный Telegram.

Характер контента:

- живые мысли и наблюдения;
- юмор;
- AI и технологии;
- новости и реакции;
- обычная жизнь;
- странные интернет-находки;
- эксперименты;
- вопросы и публичные разговоры.

Threads намеренно не превращается в строгий экспертный канал или контент-конвейер.

### 2.2. Личный Telegram

Личный Telegram Максима — **relationship / retention layer**.

Публикуются:

- продолжения сильных коротких постов;
- более длинные мысли;
- рабочий контекст;
- архитектура и разработка;
- AI и агентные системы;
- предпринимательские выводы;
- кейсы Pro-leads и Tender Audit;
- исследования;
- ошибки, компромиссы и решения;
- более глубокий личный контекст.

Telegram не является автоматическим зеркалом Threads.

### 2.3. Личный сайт

Owned/canonical layer для:

- долгоживущих материалов;
- исследований;
- кейсов;
- страниц проектов;
- репутационного контента;
- контекстных CTA на продукты.

### 2.4. Instagram — next author surface

Instagram не входит в текущий core, пока Threads развивается как главный discovery surface.

После стабилизации Threads Instagram рассматривается как отдельный визуально-профессиональный слой:

- более собранный профессиональный образ;
- визуальные кейсы;
- продукты и процесс разработки;
- Reels / карусели;
- визуальные фрагменты работы и жизни.

Instagram может вести в личный Telegram, сайт или конкретный продукт. Он не является обязательным промежуточным шагом между Threads и Telegram.

### 2.5. X и Bluesky — optional discovery experiments

X и Bluesky не входят в текущий обязательный publishing core.

Они могут тестироваться через Discovery Surface Gate, если:

- не мешают развитию Threads;
- дают новую аудиторию;
- не требуют отдельной редакции;
- показывают измеримый результат;
- имеют stop rule.

Не существует обязательного маршрута `X → Threads` или `Bluesky → Threads`.

### 2.6. Остальные author surfaces

MAX, VK, LinkedIn, TenChat, VC.ru, Дзен, YouTube и другие площадки подключаются только при отдельной доказанной функции.

## 3. Канонический traffic flow

Текущая operating схема:

```text
                 Максим
                   │
                   ▼
                Threads
          primary discovery now
                   │
                   ▼
           personal Telegram
        relationship / retention
                   │
            ┌──────┴──────┐
            ▼             ▼
          site         products
       canonical      Pro-leads /
                     Tender Audit
```

Future / optional author surfaces:

```text
Instagram ───────────────┐
X ───────────────────────┼──→ personal Telegram / site / product
Bluesky ─────────────────┘
```

Переход в Telegram не обязан присутствовать в каждом discovery-посте. Пост должен иметь самостоятельную ценность.

## 4. Тематическая редакционная сеть

Отдельно от авторского контура развиваются три тематических медиа-продукта:

1. **Новости нейросетей простым языком**;
2. **Разработка с AI простым языком**;
3. **AI-инструменты и практические сценарии**.

Они не являются зеркалами личного Threads-потока и не являются social pages продуктов.

## 5. Editorial autodistribution network

Тематическая редакционная сеть может использовать автопостинг как инфраструктуру распространения уже подготовленного материала.

Базовая схема:

```text
editorial content object
        │
        ▼
thematic Telegram channel
        │
        ▼
automation / agents
   ┌────┴────┐
   ▼         ▼
Facebook  Pinterest
```

Facebook и Pinterest — **параллельные distribution endpoints**, а не последовательная пользовательская воронка.

### Facebook

Функция:

- дополнительный reach;
- long-tail distribution;
- переиспользование тематического материала без отдельной редакции.

### Pinterest

Функция:

- visual discovery;
- evergreen traffic;
- распространение карточек, схем, промптов, before/after, визуальных инструкций и обложек материалов.

Pinterest может вести на сайт, конкретный материал или тематический Telegram — по функции конкретного pin.

Новые autodistribution endpoints добавляются только при доказанной функции и без превращения системы в синтетическую контент-сетку.

## 6. Разделение контента

| Событие | Основной дом | Допустимое продолжение |
|---|---|---|
| короткая личная мысль / наблюдение | Threads | Telegram при наличии глубины |
| юмор / жизнь / публичная реакция | Threads | без обязательного продолжения |
| длинная авторская мысль | Telegram / сайт | короткий hook в Threads |
| визуально-профессиональный кейс | future Instagram / сайт | Telegram или product по контексту |
| релиз AI-модели | тематическая сеть | авторская реакция в Threads при наличии собственного угла |
| архитектурное решение | Telegram / сайт | короткая версия в Threads |
| кейс Pro-leads | Telegram / сайт | Threads post + уместный CTA |
| кейс Tender Audit | Telegram / сайт | Threads post + уместный CTA |
| тематический AI-material | тематический Telegram | Facebook / Pinterest autodistribution |
| transactional/support уведомление | product UX | не является media content |

## 7. Products

### Pro-leads

Самостоятельный B2B-продукт. Его публичная продуктовая поверхность — домен/лендинг/сервис и связанные product UX-механизмы.

Отдельные публичные product social accounts не являются default.

### Tender Audit

Самостоятельный B2B-продукт. MAX Bot, MAX Mini App и web являются интерфейсами продукта и не считаются публичными медиа-редакциями.

Отдельные публичные product social accounts не являются default.

## 8. Product Social Gate (PSG)

Новая публичная социальная поверхность продукта появляется только при доказанной самостоятельной функции.

Проверить:

- отдельную повторяющуюся аудиторию;
- устойчивый product-specific content flow;
- отдельную функцию: releases, support, community, education, notifications, acquisition;
- конфликт/шум продуктового потока в author layer;
- владельца, процесс, стоимость и метрики;
- полезность канала без постоянного авторского контента Максима;
- stop/archive condition.

До прохождения Gate ответ по умолчанию: **не создавать**.

## 9. Discovery Surface Gate

Новая личная площадка сверх Threads подключается только если:

1. не мешает развитию текущего primary surface;
2. даёт доступ к новой аудитории;
3. позволяет использовать существующий авторский материал без отдельной редакции или имеет явно доказанную отдельную функцию;
4. обладает реальной discovery-механикой;
5. не требует непропорционального роста production cost;
6. даёт измеримый результат: профильные просмотры, диалоги, подписки или переходы;
7. имеет понятный stop rule.

## 10. Legacy publication targets

Технически существующие `proleads_ru`, `tenderaudit`, `maxightAI` сохраняются в истории и runtime до отдельной технической миграции.

Текущая стратегическая классификация:

- `proleads_ru` — legacy product media target;
- `tenderaudit` — legacy product media target;
- `maxightAI` — legacy technical identifier авторского Telegram Максима.

X/Bluesky и новые autodistribution targets не считаются подключёнными только потому, что определены в документации. Runtime-реализация — отдельная техническая задача.

## 11. Product UX ≠ media channel

Не путать:

- Telegram-бот доставки продукта;
- MAX Bot/Mini App;
- web app;
- email-уведомления;
- support inbox;
- transactional notifications

с публичной контентной редакцией.

## 12. Текущая схема

```text
Максим
├── Primary discovery
│   └── Threads
│
├── Relationship / retention
│   └── personal Telegram
│
├── Owned / canonical
│   └── personal site
│
├── Next / optional author surfaces
│   ├── Instagram — next visual/professional layer
│   ├── X — optional discovery experiment
│   ├── Bluesky — optional discovery experiment
│   ├── VK / MAX
│   ├── LinkedIn / TenChat
│   ├── VC.ru / Дзен
│   └── video
│
├── Editorial network — Telegram
│   ├── Новости нейросетей
│   ├── Разработка с AI
│   └── AI-инструменты
│       └── autodistribution
│           ├── Facebook
│           └── Pinterest
│
└── Products
    ├── Pro-leads
    └── Tender Audit
```

## 13. Source of truth

- последнее явное решение владельца;
- Notion — стратегия, Gates и операционные решения;
- `My-site` — versioned media canon;
- `agents` — технический publication/autodistribution runtime;
- продуктовые репозитории — product-specific architecture и distribution boundaries.

Изменение медиа-топологии должно синхронизироваться во всех затронутых слоях, но не должно незаметно менять product runtime.

## 14. Инвариант

> Сейчас Максим развивает Threads как главный личный discovery surface. Personal Telegram углубляет отношения, сайт хранит канонический слой. Instagram подключается позже как отдельный визуально-профессиональный author surface; X и Bluesky остаются опциональными. Тематическая AI-сетка и её автопостинг в Facebook/Pinterest живут отдельно от личного голоса.
