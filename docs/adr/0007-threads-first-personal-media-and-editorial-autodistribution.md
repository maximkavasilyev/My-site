# ADR 0007 — Threads-first personal media и отдельная editorial autodistribution network

- **Статус:** Accepted
- **Дата:** 2026-09-20
- **Supersedes:** ADR 0006 в части обязательного `Threads + Bluesky + X` discovery triad как текущего operating default
- **Затрагивает:** `MEDIA_TOPOLOGY.md`, `MEDIA_ARCHITECTURE.md`, `CHANNELS.md`, `CONTENT_OS.md`, `BRAND.md`

## Контекст

После фактического запуска личного Threads стало видно, что текущая документация переоценивает симметричную модель `Threads + Bluesky + X`.

На текущем этапе реальное поведение и ресурс автора выглядят иначе:

- Threads уже даёт органический discovery и является единственной площадкой, которую Максим активно развивает сейчас;
- X и Bluesky не должны автоматически получать равный приоритет и создавать дополнительную производственную нагрузку;
- личный Threads намеренно остаётся живым, разговорным, смешным и реактивным, а не превращается в строгий экспертный канал;
- Instagram рассматривается как следующий, более собранный визуально-профессиональный author surface после стабилизации Threads;
- личный Telegram остаётся relationship / retention layer;
- тематическая AI-сетка и её автодистрибуция являются отдельным редакционным контуром и не должны смешиваться с личным голосом автора.

## Решение

### 1. Current personal discovery default

Текущий основной discovery surface Максима — **Threads**.

```text
Threads
  ↓
personal Telegram
  ↓
site / products
```

Threads отвечает за:

- живые короткие мысли;
- юмор;
- новости и реакции;
- AI и технологии в личной манере;
- наблюдения из жизни;
- вопросы и публичные диалоги;
- быстрые эксперименты с темами и форматами.

AI не генерирует личный voice по умолчанию.

### 2. Instagram

Instagram — следующий author surface после стабилизации Threads.

Его функция отличается от Threads:

- более собранный профессиональный образ;
- визуальные кейсы;
- продукты и процесс разработки;
- Reels / карусели / визуальные фрагменты работы и жизни;
- переходы в личный Telegram, сайт или конкретный продукт по контексту.

Instagram не является обязательным промежуточным шагом между Threads и Telegram.

### 3. X и Bluesky

X и Bluesky переводятся из current core в **optional discovery experiments**.

Они подключаются по Discovery Surface Gate, когда:

- не мешают росту Threads;
- дают новую аудиторию;
- не требуют отдельной редакции;
- показывают измеримый результат.

Не существует обязательного маршрута `X → Threads` или `Bluesky → Threads`.

### 4. Personal Telegram

Личный Telegram остаётся relationship / retention layer для аудитории, которая уже знакома с Максимом из любого author discovery surface.

Допустимые входы:

```text
Threads ──────┐
Instagram ────┼──→ personal Telegram
X / Bluesky ──┘
```

Не каждый пост содержит CTA в Telegram.

### 5. Professional surfaces

LinkedIn и TenChat при использовании ведут преимущественно в:

- сайт;
- кейс;
- конкретный продукт;
- Telegram, если нужен более глубокий author context.

Они не обязаны вести через Threads.

### 6. Editorial media и autodistribution

Тематическая AI-сетка — отдельный контур:

```text
editorial source / content object
        ↓
  thematic Telegram
        ↓
 automation / agents
   ┌────┴────┐
   ↓         ↓
Facebook  Pinterest
```

Facebook и Pinterest — параллельные distribution endpoints, а не последовательная пользовательская воронка.

Autodistribution может расширяться на дополнительные surfaces только при сохранении качества и отдельной функции.

### 7. Boundary

Каноническое разделение:

```text
PERSONAL MEDIA
Максим → Threads / future Instagram / optional X-Bluesky
       → personal Telegram
       → site / products

EDITORIAL MEDIA
AI News / AI Dev / AI Tools
       → thematic Telegram channels
       → automated distribution
       → Facebook / Pinterest / future endpoints

DISTRIBUTION INFRASTRUCTURE
agents / publishers / archive / links / analytics
```

Личный voice не превращается в автогенерируемую сетку.

## Consequences

### Плюсы

- ресурс концентрируется на уже работающем Threads;
- исчезает ложная симметрия между площадками;
- Instagram получает отдельную роль вместо копии Threads;
- Telegram остаётся естественным downstream layer;
- editorial automation не загрязняет личный author layer;
- Facebook и Pinterest можно масштабировать технически без обязательной новой редакции.

### Цена

- ADR 0006 больше не является текущим operating default для triad-first модели;
- часть существующих документов требует синхронизации;
- publisher targets для X/Bluesky не являются текущим приоритетом;
- Instagram потребует отдельной стратегии перед запуском как core surface.

## Инвариант

> Сначала развивается один сильный личный discovery surface — Threads. Личный Telegram углубляет связь. Instagram подключается позже как отдельный визуально-профессиональный author layer. X и Bluesky остаются опциональными. Тематическая медиасетка и её автопостинг живут отдельно от личного голоса Максима.
