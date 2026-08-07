# ADR 0003 — Признание `agents` техническим runtime существующих каналов

- **Статус:** Accepted
- **Дата:** 2026-08-06
- **Обновлено:** 2026-08-08
- **Связанные документы:** `docs/adr/0002-editorial-channel-network.md`, `docs/EDITORIAL_NETWORK.md`, `docs/MEDIA_SYNC.md`, `docs/CHANNELS.md`

## Контекст

Параллельно с принятием ADR 0002 в отдельном репозитории `agents` (`maxight-agent-platform`) реализована durable-платформа для Telegram intake, approval и публикации. Gate G1–G3 пройдены, Gate G4 (publishing sub-gate) пройден с живым подтверждением: воркер `agents-publisher` публикует одобренные материалы в три существующих Telegram-канала (`t.me/proleads_ru`, `t.me/tenderaudit`, `t.me/maxightAI`).

ADR 0002 ограничивает автоматизацию для будущей тематической редакционной сети. Эти ограничения не должны конфликтовать с уже утверждённым runtime существующих продуктовых/личных publication targets.

## Решение

1. Репозиторий `agents` является техническим runtime для уже утверждённых publication targets: `proleads_ru`, `tenderaudit`, `maxightAI`.
2. Ограничения ADR 0002 по новым тематическим каналам сохраняются. Новый publication target не подключается автоматически только потому, что runtime технически готов.
3. `agents` является исполняющим слоем, а не владельцем медиа-стратегии сайта. Notion хранит операционную стратегию, GitHub — versioned canon, `agents` — технические workflows/runtime.
4. Расширение на новый тематический канал требует отдельного решения владельца и соответствующего Media Gate.

## Уточнение архитектурной границы `agents` (2026-08-08)

`agents` развивается как multi-project платформа. Проектный контекст, workflow, агентные инструкции, prompts/tools и model execution разделены явно. Медиасистема сайта является одним из consumers платформы, а не архитектурным центром `agents`.

Каноническая техническая схема и детали model-assisted execution живут в репозитории `agents`. Этот ADR не дублирует их. Для My-site достаточно следующего контракта:

```text
My-site / media strategy
        |
        v
approved project/publication context
        |
        v
agents platform
  ProjectContext
  -> Workflow
  -> Agent
  -> Prompt + Context + Tools
  -> model/runtime execution
        |
        v
approval / publishing
```

Для текущего model-assisted направления в `agents` принят OpenAI API / GPT-4o mini. Hermes рассматривается как заменяемый runtime/agent-engine внутри `agents`, а не как владелец ProjectContext, workflow state, prompts или медиа-стратегии.

Критические границы:

- My-site не копирует в себя внутренние agent prompts и workflow definitions из `agents`;
- project-specific voice/CTA/policies могут передаваться в `agents` через явный `ProjectContext`, но не становятся глобальными правилами Core;
- durable workflow state принадлежит платформенному persistence `agents`, а не Hermes/LLM/conversation history;
- последовательность и handoff между агентами контролирует workflow, а не произвольная peer-to-peer сеть агентов;
- смена конкретной модели или runtime не должна требовать изменения медиа-архитектуры My-site.

## Рассмотренные варианты

### Вариант A — откатить автоматизацию в `agents` до Gate M4

Отклонён. Три уже действующих канала не являются частью новой тематической редакционной сети из ADR 0002; откат создал бы регресс без причины.

### Вариант B — переписать ADR 0002 задним числом

Отклонён. ADR — исторический документ; границы уточняются отдельным ADR.

## Последствия

### Положительные

- устранено противоречие между Media Gates и работающим runtime;
- My-site не становится вторым источником истины по внутренней архитектуре агентов;
- `agents` может обслуживать несколько проектов без утечки правил одного проекта в другой;
- модель/runtime остаются технической деталью платформы.

### Отрицательные

- требуется поддерживать актуальность списка publication targets синхронно между `agents` и `MEDIA_SYNC.md`;
- изменения контракта между My-site и `agents` требуют синхронизации двух GitHub-канонов.

## Не разрешено этим ADR

- автоматически подключать новые тематические каналы без прохождения соответствующего Media Gate;
- изменять правила Gates M0–M6 или Sync Gates S0–S3 из ADR 0002;
- переносить продуктовые данные Pro-leads/Tender Audit в медиасистему;
- дублировать в My-site внутреннюю реализацию Hermes, agent prompts или model backend из `agents`.

## Условия пересмотра

Пересматривается, если новый тематический канал готов к подключению к `agents`, меняется ownership между репозиториями или контракт `ProjectContext`/publication target требует изменения медиа-канона.