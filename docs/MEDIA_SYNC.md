# MEDIA_SYNC.md — синхронизация Notion, GitHub, agents, product repos и local

- **Статус:** Canon / operating contract
- **Версия:** 2.0
- **Дата:** 2026-08-08
- **Область:** персональная медиасистема, тематическая редакционная сеть, publication runtime и product distribution boundaries.
- **Топология:** `MEDIA_TOPOLOGY.md`

## 1. Цель

Не допустить появления разных версий медиасистемы в Notion, `My-site`, `agents`, продуктовых репозиториях и локальных клонах.

Синхронизация не означает копировать одни и те же документы во все системы. Каждый слой хранит только свою ответственность.

## 2. Роли систем

### Notion — стратегия и операции

Notion хранит:

- явные решения владельца;
- позиционирование и platform/channel decisions;
- Gates;
- backlog и calendar;
- source/candidate registries;
- material statuses;
- analytics и observations;
- журнал стратегических решений.

Notion не является источником фактов о текущем code/deployment/runtime.

### My-site — versioned media canon

Хранит:

- `MEDIA_TOPOLOGY.md`;
- media architecture;
- channel roles;
- editorial network;
- Content OS;
- ADR;
- sync contract;
- сайт и долгоживущий контент.

Для current media topology приоритет имеют ADR 0004 и `MEDIA_TOPOLOGY.md`.

### agents — technical execution runtime

`agents` исполняет durable workflows intake/approval/publication для явно подключённых publication targets.

Он не определяет:

- зачем существует канал;
- должен ли продукт иметь отдельную social surface;
- позиционирование;
- Media Gate/PSG status.

Эти решения приходят из media canon/owner decision.

### Product repositories

`pro-leads` и `tender-audit` хранят:

- product scope;
- runtime/data/auth/billing/deploy truth;
- product UX/delivery channels;
- product-specific growth/distribution boundaries.

Они не должны самостоятельно объявлять новый публичный product social channel без согласования с `My-site` Product Social Gate.

### Local clones

Рабочая копия GitHub. Незакоммиченный local state не является отдельным каноном.

## 3. Текущая медиа-топология

Author layer:

- Telegram Максима;
- один MAX Максима;
- существующая профессиональная/авторская VK-страница Максима;
- существующая профессиональная/авторская Instagram-страница Максима;
- личный сайт;
- TenChat/LinkedIn/VC.ru/Дзен/другие поверхности по функции.

Editorial network:

1. Новости нейросетей — Telegram;
2. Разработка с AI — Telegram;
3. AI-инструменты — Telegram.

Products:

- Pro-leads — отдельный software product;
- Tender Audit — отдельный software product;
- отдельная public social surface продукта — только после Product Social Gate.

## 4. Текущие technical publication targets в agents

На момент принятия протокола runtime исторически содержит:

- `proleads_ru`;
- `tenderaudit`;
- `maxightAI`.

Новая стратегическая классификация:

- `proleads_ru` — **legacy product media target**;
- `tenderaudit` — **legacy product media target**;
- `maxightAI` — **legacy technical identifier авторского Telegram Максима**.

Это важное различие:

```text
runtime target exists != editorial channel is strategically required
```

Документационное изменение не отключает target, не меняет channel ID/token и не делает production migration. Operational transition выполняется отдельно после проверки фактических каналов и desired mode (freeze/archive/redirect/repurpose).

## 5. Новые thematic publication targets

Три тематических Telegram-канала пока являются approved editorial direction. Они подключаются к `agents` только когда соответствующий Media Gate разрешает это и владелец явно утверждает target/account.

Никакой существующий generic publisher не является автоматическим разрешением на onboarding нового канала.

## 6. Product UX не синхронизируется как media target

Не относить автоматически к публичной медиасистеме:

- Telegram-бот доставки лидов;
- MAX Bot/Mini App Tender Audit;
- Tender Audit web channel;
- email/transactional notifications;
- support inbox;
- webhook/API/CRM integrations.

Это product UX/integration surfaces. Их жизненный цикл определяется product repo.

## 7. Приоритет при конфликте

1. последнее явное решение Максима;
2. текущая стратегия/Gate в Notion;
3. merged `My-site` media canon и ADR;
4. product repo для product runtime/UX facts;
5. `agents` docs/runtime facts для execution state;
6. open PR;
7. local working copy;
8. temporary agent output.

Если runtime и strategy расходятся, оба факта фиксируются отдельно. Нельзя выдавать docs-only решение за уже выполненную production migration.

## 8. Маршрут стратегического изменения

```text
owner decision
→ Notion decision/status
→ My-site ADR/canon
→ определить impact на agents и product repos
→ синхронизировать product boundaries/runtime docs
→ при необходимости отдельная implementation/runtime задача
→ local pull
→ sync record
```

Стратегические изменения:

- новый канал;
- изменение роли канала;
- создание/закрытие product social surface;
- изменение позиционирования;
- изменение Media Gate/PSG;
- новая platform automation;
- изменение product/media boundary.

## 9. Маршрут обычного контента

```text
idea/source/work result
→ content inbox
→ research/review
→ choose primary home
→ publish
→ record URL/result
→ durable material → GitHub /content or /media when needed
```

Не каждый Telegram/MAX/VK/Instagram-пост обязан становиться GitHub-файлом.

## 10. Sync metadata

Для существенного content object:

```yaml
content_id:
notion_url:
github_path:
github_commit:
canonical_url:
primary_channel:
status:
version:
valid_as_of:
last_synced_at:
sync_state: notion-only | github-draft | merged | local-ahead | conflict
```

## 11. Git discipline

Связное стратегическое изменение должно быть отделено от несвязанного code change.

Исторические ADR/gate records не переписываются так, будто прежнего решения не было. Новая политика либо:

- создаёт новый ADR;
- явно supersedes конкретный scope;
- обновляет current operating docs.

Не удалять старые документы только потому, что решение изменилось.

## 12. Работа agents/LLM

Перед media task определить:

- Current;
- Approved direction;
- Future Gate;
- Out of scope;
- Source of truth;
- Sync impact.

Запрещено:

- создавать новую product social surface из факта существования продукта;
- путать legacy publication target с current strategy;
- путать product UX с media channel;
- менять channel IDs/tokens/credentials из документационной задачи;
- механически cross-post;
- самостоятельно открывать Gate;
- хранить secrets в Markdown/Notion.

## 13. Sync Gates

- **S0:** ручная дисциплина между системами;
- **S1:** read-only diff/check;
- **S2:** agent prepares draft/PR/change set;
- **S3:** agent may update only safe service metadata.

Стратегию, product boundaries и Gates меняет только явное решение владельца.

## 14. Проверка завершения стратегического sync

Изменение считается синхронизированным, когда:

- решение отражено в Notion;
- `My-site` current canon обновлён;
- `agents` current planning/runtime docs не противоречат решению;
- product repos отражают новую distribution boundary;
- legacy/history сохранены;
- docs-only change не выдаётся за runtime migration;
- владелец может подтянуть все затронутые `main` через `git pull --ff-only`.
