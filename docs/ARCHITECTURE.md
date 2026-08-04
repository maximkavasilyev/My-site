# ARCHITECTURE.md ⛔️ Canon / SSoT

Статус: v1.0 — базовая версия после интейка. Менять только через осознанный пересмотр,
не точечными правками под текущее настроение.

## 1. Роль сайта

Сайт — **personal authority hub**, точка входа верхнего уровня воронки.

Он НЕ является:
- самоценным медиа-активом / блогом ради архива
- прямым продающим лендингом MaxightAI (агентство сознательно не трогаем — отдельный контур)
- лентой или зеркалом каналов — сайт не воспроизводит формат Telegram/VK/Instagram/YouTube/Pinterest
  и не хостит их рабочий контур (inbox/drafts и т.д.)

> Начиная с v1.1 репозиторий шире, чем сайт: он также хранит канон персонального медиа
> (`docs/BRAND.md`, `docs/MEDIA_ARCHITECTURE.md`, `docs/CONTENT_OS.md`, `docs/CHANNELS.md`,
> `docs/EDITORIAL_GUIDE.md`, `docs/ECOSYSTEM.md`) — единую систему позиционирования и
> контент-операций для всех каналов, не только сайта. Правила этого файла (ARCHITECTURE.md)
> и TECH_SPEC.md по-прежнему описывают только сайт как продукт/код; при конфликте формулировок
> о самом сайте этот файл имеет приоритет над медиа-доками.

Он ЯВЛЯЕТСЯ:
- цифровой визиткой уровня "узнаваемый эксперт" (разработчик, архитектор систем,
  AI-специалист, предприниматель)
- мостом, который конвертирует внимание в переход на два продукта: **Pro-leads** и
  **Tender Audit**

## 2. Целевая аудитория

Двойная, без разделения сайта на отдельные ветки под каждую:
- **B2B-заказчики** — ищут решение конкретной проблемы (лидогенерация, тендеры)
- **Профессиональное сообщество** — оценивают экспертизу, подход, мышление

Обе аудитории ведут к одной точке конверсии (переход в продукт или канал), поэтому
разделение происходит не по структуре сайта, а по **типу контента** (см. п.4).

## 3. Воронка

```
Узнал о Максиме (соцсети, нетворк, поиск)
        ↓
Личный сайт (доверие, экспертиза, "кто это и почему стоит слушать")
        ↓
   ┌────┴────┐
   ↓         ↓
Pro-leads  Tender Audit
(домен)     (домен)
```

Сайт — верх воронки. Его задача не удерживать трафик у себя, а **передавать** его дальше,
на конкретный продукт.

## 4. Типы контента

### Продуктовый
Кейс, демонстрация решения конкретной проблемы. Обязательный CTA — переход на тот продукт,
к которому пост ближе по теме.

- Тема: автоматизация лидогенерации, работа с B2B-клиентами → **CTA на Pro-leads**
- Тема: госзакупки, тендеры, документооборот в этой сфере → **CTA на Tender Audit**

### Экспертный / репутационный
Мнение, разбор подхода, архитектурные размышления, взгляд на индустрию. **Без обязательного
CTA на продукт.** Работает на раздел "Обо мне" и общую узнаваемость.

Правило: НЕ весь контент обязан продавать. Смешение форматов в один "рекламный щит"
разрушает доверие, ради которого сайт строится.

## 5. Структура страниц

1. **Главная** — кто ты, ключевое позиционирование, переходы на "Обо мне", "Проекты", ленту
2. **Обо мне** — личная история, путь, экспертиза, философия подхода (отдельная страница —
   осознанное решение при интейке)
3. **Проекты** — карточки Pro-leads и Tender Audit с описанием и переходом на домены
4. **Блог/контент** — смешанная лента постов (продуктовые + экспертные, размечены по типу)
5. **Контакты** — кнопки-ссылки на каналы (без формы на старте, см. п.6)

## 6. Осознанно отложенные решения

- **Форма обратной связи**: не делаем на первом этапе. Причина — отдельная система
  (обработка заявок, спам-защита), лишняя техническая нагрузка при неясной ценности на
  старте. Кнопки на Telegram/каналы закрывают ту же функцию проще. Пересмотреть после
  запуска, если кнопок окажется недостаточно.
- **Ритм публикаций**: нерегулярный, "по готовности". Следствие — интерактивные форматы
  (опросы, комментарии) не являются механикой роста сайта, это бонус-функция. Основной
  контур живого взаимодействия с аудиторией остаётся в соцканалах, не на сайте.
- **Двуязычность**: отклонена. Только русский — целевая аудитория обоих продуктов
  русскоязычная, двойная работа по контенту не оправдана текущим приоритетом.

## 7. Явно вне рамок

- MaxightAI как агентство/экосистема — не встраивается в этот сайт. Отдельный контур,
  трогать не будем (осознанное решение пользователя).
- CMS/Notion/админка — отклонены в пользу Markdown-файлов через Claude Code (см.
  TECH_SPEC.md, п. "Контент-модель").

## Notion Canon v2 � operative override (2026-08-04)

Conflicting v1 statements above are superseded and retained only as history.

### Current

The implemented website is a Next.js App Router static export. It renders Markdown content from the repository and has no database, authentication, payments, account, comments, CMS, API, backend application runtime, workers, or queues. Current routes are `/`, `/about`, `/projects`, `/blog`, and `/contact`; `/design-system` is an internal non-indexed reference route. Pro-leads and Tender Audit remain separate products.

### Approved direction

The website is Maxim's personal authority hub, canonical source of content and research, contextual entry point to separate products, and a future independent commercial branch. It is not only a traffic funnel, generic store, agency site, universal SaaS platform, or all-in-one dashboard. If server state becomes justified, the target backend is a modular monolith with separate public and authenticated boundaries; providers require a separate ADR. Shared services require proven use in at least two products.

### Future / Gate

Gate 0: expert core. Gate 1: repeated interest plus a manual paid-material test. Gate 2: about 5�10 target-user payments outside Maxim's immediate circle, with clear purchase reasons. Gate 3: a separately authorized minimal commercial layer�free registration, one-time purchases, access management, and a purchases/access account. Gate 4: retention from observed demand. Gate 5: community after repeated discussion and manual moderation. Gate 6: marketplace after demand, supply, trust, and monetization evidence. Gate 7: native apps only after regular Web App use proves a mobile-specific need. Each Gate requires evidence, success criteria, permitted scope, exclusions, and a stop or rollback condition. Telegram Mini App is not a priority; it may only be a lightweight entry point, notification surface, or narrow isolated scenario.

### Out of scope

No route, backend, API, auth, database, payment, account, comments, community, marketplace, PWA, Telegram Mini App, or native app is implemented or authorized by this change.
