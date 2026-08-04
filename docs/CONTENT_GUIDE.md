# CONTENT_GUIDE.md 🪄 Правила контента

Ссылается на ARCHITECTURE.md п.4 (типы контента) и TECH_SPEC.md (структура markdown-файла).

## Первый шаг перед написанием любого поста

Определи тип — это не формальность, а решение, которое управляет структурой текста:

**Продуктовый пост** — если тема прямо связана с проблемой, которую решает Pro-leads
(лидогенерация, B2B-автоматизация) или Tender Audit (тендеры, госзакупки).
→ Обязателен CTA в конце, ведущий на конкретный продукт.

**Экспертный пост** — architecture-мышление, разбор подхода, мнение об индустрии, философия
работы. Не привязан к конкретной проблеме, которую решает продукт.
→ Без CTA на продукт. Работает на раздел "Обо мне" и общую репутацию.

Если пост не подходит однозначно ни туда, ни туда — это сигнал переформулировать тему, а не
насильно приклеивать CTA к экспертному тексту или наоборот.

## Структура продуктового поста

1. Проблема (конкретная, узнаваемая для B2B-читателя)
2. Как ты её решил / подход
3. Результат (если есть цифры/факты — использовать; если нет — не выдумывать)
4. CTA: одна фраза "почему сейчас" — идёт не в тело статьи, а в поле `cta_quote`
   фронтматтера (см. TECH_SPEC.md, "Контент-модель"), рендерится отдельным блоком с
   кнопкой на продукт

## Структура экспертного поста

1. Тезис / наблюдение
2. Аргументация, при необходимости — пример из практики
3. Вывод — не обязательно с призывом к действию

## Что НЕ делать

- Не смешивать оба типа в одном посте
- Не писать продуктовый пост без чёткой темы-проблемы — общие рассуждения "о пользе AI" не
  продуктовый контент, это экспертный
- Не форсировать регулярность — публикация выходит, когда готова, не по календарю (см.
  ARCHITECTURE.md п.6)
- Не дублировать один в один посты из Telegram/VK — если материал переносится на сайт,
  адаптировать под более развёрнутый, "долгоживущий" формат (сайт — не лента, контент здесь
  должен работать месяцами/годами)

## Первые 3-5 материалов для запуска

Черновой список тем (утвердить перед написанием):

1. **Экспертный** — кто ты и как пришёл к архитектурному подходу в разработке (можно
   пересекаться с текстом страницы "Обо мне", но не быть тем же текстом)
2. **Продуктовый (Pro-leads)** — конкретный кейс/проблема в B2B-лидогенерации, которую решает
   продукт
3. **Продуктовый (Tender Audit)** — конкретный кейс/проблема в работе с тендерами
4. **Экспертный** — взгляд на то, как строить AI-агентские системы (архитектурная позиция,
   не туториал)
5. **Экспертный или продуктовый** — на усмотрение, в зависимости от того, что реально готово
   к моменту запуска

Готово: все 5 материалов и текст страницы "Обо мне" написаны и лежат в `content/posts/` и
`content/pages/` (см. ROADMAP.md, Этап 2). Этот список остаётся как образец логики выбора тем
для следующих постов, а не как открытая задача.

## Notion Canon v2 � operative override (2026-08-04)

Conflicting v1 statements above are superseded and retained only as history.

### Current

The current static site renders existing `expert` and `product` posts with the current validated front-matter contract. This task does not change posts, their metadata, or rendering rules.

### Approved direction

For strategy and editorial planning, choose among `note`, `article`, `case`, `research`, `product material`, and `paid material`; `expert | product` is no longer the complete long-term model. Content retains one clear purpose, but a product CTA is contextual rather than universal. Free material must stand alone. Paid material must add depth, evidence, conclusions, practical recommendations, templates, appendices, or an action plan, and must distinguish facts, sources, experience, conclusions, and hypotheses.

### Future / Gate

A Research or equivalent paid-material section may be introduced only after commercial validation; material must remain discoverable from the blog and thematic collections. New implementation metadata or CTA behavior requires a separate technical specification and authorization.

### Out of scope

No existing post, front matter, content renderer, CTA component, or route is changed.
