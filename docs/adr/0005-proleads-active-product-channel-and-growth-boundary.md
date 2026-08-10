# ADR 0005 — Active Pro-leads product channel and growth boundary

- **Статус:** Accepted
- **Дата:** 2026-08-10
- **Область:** персональная медиасистема / Pro-leads / Telegram / acquisition boundary
- **Связанные документы:** `MEDIA_ARCHITECTURE.md`, `CHANNELS.md`, `MEDIA_SYNC.md`, ADR 0003, ADR 0004

## Контекст

После ADR 0004 в product-specific документации Pro-leads осталась промежуточная трактовка `proleads_ru` как legacy media target.

Фактическое состояние к 2026-08-10 другое:

- Telegram-канал `proleads_ru` существует;
- `agents` уже содержит утверждённый publication target `proleads_ru`;
- publishing runtime для этого target отделён от product runtime;
- owner decision: канал используется как активная продуктовая поверхность, но не как самостоятельная ежедневная редакция и не как главный growth engine.

Параллельно сформирован отдельный Growth Validation contract Pro-leads: email outreach, manual Telegram outreach, SEO/content, founder media, partner/admin outreach и data-driven reports должны работать как части единой acquisition-системы.

## Решение

### 1. `proleads_ru` — активная продуктовая поверхность

`proleads_ru` больше не классифицируется как legacy target.

Его текущая роль:

- product proof;
- примеры выборок;
- data reports;
- методология;
- FAQ;
- ограничения;
- кейсы;
- product updates;
- один релевантный CTA к `pro-leads.ru` / trial.

Канал может выполнять функцию продуктовой библиотеки и trust surface после внешнего касания.

Он **не обязан**:

- публиковать ежедневно;
- иметь отдельную полноценную редакцию;
- дублировать личный Telegram Максима;
- становиться основным source of traffic;
- существовать как отдельный бизнес или бренд-медиа.

### 2. Личный Telegram остаётся founder-led surface

Личный канал Максима сохраняет роль:

- авторской интерпретации;
- решений и ошибок;
- founder journey;
- кейсов;
- product thinking;
- доверия к основателю;
- связи между сайтом, продуктами и тематическими каналами.

Product channel и founder channel имеют разные функции и не конкурируют за одинаковый оригинальный контент.

### 3. Acquisition не равен publishing

Growth Pro-leads делится на три двигателя:

```text
Direct validation
→ email / manual Telegram / calls / warm / referral / micro-ABM

Data distribution
→ site / SEO / founder TG / proleads_ru / VC / Дзен / reports

Borrowed audiences
→ Telegram admins / communities / consultants / partners
```

Это business process Pro-leads, а не media runtime.

### 4. Telegram outreach имеет два сценария

#### Direct Telegram outreach

Ручное персонализированное обращение к конкретному потенциальному B2B-клиенту по понятному signal/use case.

#### Telegram distribution / partner outreach

Ручное обращение к администраторам каналов, владельцам сообществ и партнёрам для нативного data asset, co-branded report или измеримого пилота.

Оба сценария являются acquisition work и не принадлежат publisher runtime.

### 5. `agents` остаётся техническим runtime

ADR 0003 сохраняется.

`agents` отвечает за:

```text
intake
→ durable workflow
→ approval
→ deterministic publication
```

Он не получает автоматически:

- prospect discovery;
- Telegram channel discovery;
- direct outreach;
- mass DM;
- admin negotiations;
- acquisition scoring;
- partner CRM;
- Growth Agent capabilities.

Любая такая capability требует отдельного owner decision и доказанной ручной повторяемости процесса.

### 6. Один data asset — несколько поверхностей

Для Pro-leads предпочтительна модель:

```text
реальные данные / user question / validation signal
→ canonical data asset
→ channel-specific adaptations
```

Один report может адаптироваться для:

- founder Telegram;
- `proleads_ru`;
- сайта;
- SEO;
- VC.ru;
- Дзена;
- partner distribution;
- outreach.

Механическое копирование текста не требуется.

### 7. Product Social Gate уточняется

Существование `proleads_ru` больше не требует отдельного Gate: surface уже утверждена owner decision и подтверждена runtime.

Gate применяется к:

- новым дополнительным product social surfaces;
- существенному расширению обязательной редакционной нагрузки;
- новым platform targets;
- новой automation поверх этих targets.

## Ограничения

Не вводить сейчас:

- новые product Telegram-каналы;
- отдельный acquisition bot;
- Telegram Mini App;
- mass Telegram DM;
- automatic Growth Agent;
- отдельную acquisition infrastructure;
- сложную partner/referral platform.

## Метрики

`proleads_ru` оценивается не по числу постов, а по:

- целевым переходам;
- trial;
- product questions;
- qualified conversations;
- assisted use;
- paid / repeat;
- feedback / cases.

Founder channel дополнительно оценивается по содержательным ответам и переносу целевой аудитории в продукт.

## Последствия

### Pro-leads repository

Product strategy и media distribution contract должны отражать:

- post-award positioning;
- active `proleads_ru`;
- manual Telegram outreach;
- Telegram partner/admin distribution;
- единый Growth Validation contract.

### `agents`

Runtime изменений не требует. Existing target `proleads_ru` остаётся утверждённым.

### My-site

ADR 0004 сохраняет author-first topology как общий принцип, но трактовка `proleads_ru` как неактивной/legacy поверхности считается superseded этим ADR.

## Инвариант

```text
Founder media
├── личный сайт
└── личный Telegram

Product media
└── proleads_ru — active proof / education / data surface

Pro-leads acquisition
├── direct validation
├── data distribution
└── borrowed audiences

agents
└── publishing runtime only
```

Главный принцип:

> **Сначала доказанная business-механика. Затем повторяемость. Только после этого acquisition automation.**
