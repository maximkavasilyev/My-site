# ECOSYSTEM.md — Карта бренда, медиа и продуктов

> Статус: Canon / SSoT  
> Версия: 1.0

## 1. Верхний уровень

```text
Максим
├── Личный бренд
├── Персональное медиа
├── Продукты
│   ├── Pro-leads
│   ├── Tender Audit
│   └── Будущие сервисы
└── Общая инфраструктура
```

## 2. Личный бренд

Отвечает за:

- доверие;
- позиционирование;
- способ мышления;
- узнаваемость;
- верхний уровень коммуникации.

Личный бренд не является отдельным агентством и не подменяет продукты.

## 3. Персональное медиа

Отвечает за:

- объяснение подхода;
- документирование создания продуктов;
- распространение знаний;
- входящий интерес;
- связь с профессиональным сообществом.

## 4. Pro-leads

Самостоятельный продукт.

Решает задачу поиска B2B-лидов среди победителей государственных контрактов по 44-ФЗ.

Граница:

- не анализирует тендерную документацию;
- не готовит заявку;
- не заменяет Tender Audit.

## 5. Tender Audit

Самостоятельный продукт.

Решает задачу подготовки технической части заявки и работы с документацией после решения участвовать.

Граница:

- не является сервисом лидогенерации;
- не заменяет Pro-leads;
- не должен поглощать предварительный анализ закупки без отдельного архитектурного решения.

## 6. Будущие продукты

Новый продукт допускается, если:

- есть отдельная проблема;
- есть отдельный пользовательский сценарий;
- границы с текущими продуктами ясны;
- подтверждён спрос;
- продукт усиливает экосистему;
- общая инфраструктура создаёт реальную экономию.

## 7. Общая инфраструктура

В перспективе может включать:

- авторизацию;
- оплату;
- уведомления;
- биллинг;
- AI-оркестрацию;
- работу с документами;
- аналитику;
- общую базу компонентов;
- контентную систему.

Общая инфраструктура не должна появляться раньше, чем подтвердится повторяемая потребность минимум у двух продуктов.

## 8. Воронка

```text
Соцсети / поиск / рекомендации
        ↓
Персональное медиа
        ↓
Личный сайт
        ↓
Конкретный материал
        ↓
Конкретный продукт
        ↓
Использование / оплата / обратная связь
```

## 9. Правила масштабирования

1. Не объединять продукты только ради общего бренда.
2. Сначала подтверждать проблему и спрос.
3. Общую инфраструктуру выделять после повторения.
4. Не использовать личный бренд как замену продуктовой ценности.
5. Не превращать медиа в рекламный каталог.
6. Каждый новый контур должен иметь владельца, границы и метрики.

## Notion Canon v2 � operative override (2026-08-04)

Conflicting v1 statements above are superseded and retained only as history.

### Current

The personal website/media system, Pro-leads, and Tender Audit are separate product contours. Pro-leads and Tender Audit retain separate runtime, databases, authentication, deployment, product logic, and user journeys.

### Approved direction

The website/media system may test an independent commercial branch through paid research, materials, ideas, and later proven tools. It is neither an agency nor a dashboard for all products. The website may contextually introduce the separate products, but users and product data are not automatically combined. A shared authentication, billing, notification, analytics, AI gateway, storage, or admin service requires the same proven need in at least two products and a separate ADR.

### Future / Gate

Marketplace belongs to the website/media branch, not Pro-leads or Tender Audit. Its first possible form is a manually curated directory of verified specialists, services, tools, or templates, using affiliate links, paid listings, or lead generation. Reviews require verified interaction; transaction payments, seller dashboards, commissions, disputes, and complex roles wait for later evidence.

### Out of scope

No product merge, shared account, shared infrastructure, marketplace, seller function, or cross-product data change is authorized.
