# MEDIA_CLAUDE.md — правила медиа-контура

> Этот файл читается при задачах по медиа и контенту. Корневой `CLAUDE.md` остаётся приоритетным для правил репозитория, архитектуры и кода.

## 1. Перед любой media task

Прочитать по порядку:

1. `MEDIA_TOPOLOGY.md`;
2. `MEDIA_ARCHITECTURE.md`;
3. `CHANNELS.md`;
4. `EDITORIAL_NETWORK.md`;
5. `MEDIA_SYNC.md`;
6. `CONTENT_OS.md`;
7. `CONTENT_GUIDE.md`;
8. `BRAND.md`;
9. релевантный ADR;
10. документы конкретного продукта, если материал с ним связан.

При старом упоминании обязательного product social channel применять ADR 0004 и `MEDIA_TOPOLOGY.md`.

## 2. Сначала определить режим

Перед работой зафиксировать:

- **Current** — что реально существует;
- **Approved direction** — что утверждено;
- **Future Gate** — что допускается только после доказательств;
- **Out of scope** — что нельзя делать;
- **Source of truth**;
- **Sync impact** — какие репозитории/Notion/runtime затрагиваются.

Не выдавать future-функцию за реализованную и docs-only решение за production migration.

## 3. Текущая медиа-топология

### Author layer

- один авторский Telegram Максима;
- один авторский MAX Максима;
- существующая профессиональная/авторская VK-страница Максима;
- существующая профессиональная/авторская Instagram-страница Максима;
- личный сайт;
- TenChat, LinkedIn, VC.ru, Дзен, YouTube и другие поверхности по своей функции.

Авторский контент включает реальную работу, архитектуру, AI, кейсы продуктов, продуктовые updates с контекстом, исследования и новости только с собственным выводом/применением.

Личный Telegram не является четвёртым автоматическим новостным каналом.

### Editorial layer

Три тематических Telegram-медиа:

1. новости нейросетей;
2. разработка с AI;
3. AI-инструменты.

### Product layer

Pro-leads и Tender Audit — самостоятельные products. Их публичные media accounts не создаются автоматически. Отдельная social surface требует Product Social Gate.

Product UX не равен media channel: bot/Mini App/web/email/support/transactional notifications остаются product responsibilities.

## 4. Hard rules

1. Не придумывать опыт, цифры, кейсы, отзывы и результаты.
2. Отделять факты, источники, опыт, выводы и гипотезы.
3. Не смешивать Pro-leads, Tender Audit и медиасистему на runtime/data/auth/billing уровне.
4. Каждый материал имеет одну основную цель и один тезис.
5. Каждый материал имеет один основной дом.
6. Вторичная версия должна иметь отдельный угол/формат, а не быть механическим копированием.
7. Экспертный материал не обязан иметь CTA.
8. Продуктовый CTA ведёт только на один релевантный продукт.
9. Бесплатный материал должен быть самостоятельным и полезным.
10. Не создавать product social account только потому, что существует product/repo.
11. Не создавать вторую авторскую VK/Instagram-страницу Максима.
12. Не зеркалировать тематическую сеть в MAX автоматически.
13. Не превращать author Telegram в новостной агрегатор.
14. Не путать product UX/delivery channel с публичной редакцией.
15. Не считать legacy target доказательством актуальной стратегии.
16. Не публиковать и не автоматизировать без соответствующего Gate.
17. Не хранить secrets в Markdown/Notion/model context.
18. При нехватке данных прямо указать неизвестное.

## 5. Рабочий порядок материала

1. зафиксировать источник/наблюдение;
2. определить аудиторию и проблему;
3. выбрать один результат для читателя;
4. определить content level: founder / ecosystem / project / campaign;
5. выбрать формат;
6. сформулировать тезис;
7. выбрать primary home;
8. определить secondary adaptations;
9. проверить product relation;
10. собрать evidence/source pack;
11. перечислить unknowns/limitations;
12. подготовить canonical draft;
13. адаптировать;
14. evidence/channel/canon review;
15. owner approval по соответствующему Gate;
16. publish/schedule только после разрешения;
17. записать URL/result/sync-state.

## 6. Тематическая сеть

### Новости нейросетей

Фокус: значимые AI-события, простое объяснение, проверка и последствия для русскоязычной аудитории.

### Разработка с AI

Фокус: AI IDE, coding agents, GitHub-находки, создание цифровых решений, ограничения, безопасность и проверка результата.

### AI-инструменты

Фокус: конкретные сервисы, связки, сценарии применения, стоимость, ограничения и доступность.

При сомнении маршрутизировать по `CHANNELS.md`/`EDITORIAL_NETWORK.md`.

## 7. Author layer и новости

Новость попадает в author layer только если добавляется хотя бы одно:

- личный опыт;
- архитектурный вывод;
- влияние на текущую работу/продукты;
- проверенный сценарий;
- собственная позиция;
- важное последствие для аудитории Максима.

Иначе основной дом — тематический канал.

## 8. Связь с продуктами

Допустимо:

- обезличенные кейсы;
- история создания;
- объяснение problem/solution;
- демонстрация продукта;
- один релевантный CTA;
- product update в author layer при наличии содержательной ценности.

Недопустимо:

- смешивать Pro-leads и Tender Audit в один оффер;
- маскировать рекламу под новость;
- переносить private product data в медиасистему;
- создавать общий product/media runtime без ADR;
- создавать отдельный social account до Product Social Gate.

## 9. Product Social Gate

Перед созданием product Telegram/MAX/VK/Instagram surface требуется доказать:

- самостоятельную повторяющуюся аудиторию;
- устойчивый product-specific content flow;
- отдельную функцию (release/support/community/education/notifications/acquisition и т.п.);
- владельца и стоимость поддержки;
- измеримый результат;
- необходимость отделить product stream от author layer;
- stop/archive rule.

До Gate default: не создавать.

## 10. Legacy targets

Текущая стратегическая классификация technical targets в `agents`:

- `proleads_ru` — legacy product media target;
- `tenderaudit` — legacy product media target;
- `maxightAI` — legacy technical identifier author Telegram.

Не менять channel IDs, tokens и publisher config из media/docs task без отдельной runtime задачи.

## 11. Media Gates

- **M0:** concept/docs;
- **M1:** manual thematic pilot;
- **M2:** repeatable process 30+ days;
- **M3:** agent drafts + review;
- **M4:** queue/schedule approved materials;
- **M5:** limited allowlist auto-publishing;
- **M6:** sequential multiplatform automation.

Media Gate не открывает Product Social Gate.

## 12. Sync

Использовать `MEDIA_SYNC.md`.

- Notion — strategy/decisions/Gates/operations;
- My-site — media canon;
- agents — execution runtime;
- product repos — product truth/distribution boundaries;
- local — working copy.

Изменение стратегии считается завершённым только после синхронизации затронутых слоёв. Исторические документы не удалять; superseded scope обозначать новым ADR/current contract.

## 13. AI в производстве

AI может исследовать, ранжировать, дедуплицировать, структурировать, писать drafts/adaptations, проверять evidence/canon и вести registry.

AI не может сам:

- изобретать факты;
- менять позиционирование;
- открывать Gate;
- создавать новую media entity;
- объединять продукты;
- публиковать спорный/коммерческий/авторский материал без разрешённого режима;
- менять production credentials/targets из docs-задачи.
