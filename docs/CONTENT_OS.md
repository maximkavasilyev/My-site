# CONTENT_OS.md — операционная система контента

- **Статус:** Canon / SSoT
- **Версия:** 3.2
- **Дата:** 2026-09-20
- **Назначение:** единый процесс от идеи/сигнала до публикации, измерения, обновления и архивации.
- **Топология:** `MEDIA_TOPOLOGY.md`
- **ADR:** `docs/adr/0007-threads-first-personal-media-and-editorial-autodistribution.md`

## 1. Главный принцип

Сначала появляется сильная единица мысли, знания или наблюдения. Только затем выбираются слой, формат и канал.

Нельзя создавать контент ради заполнения канала. Нельзя создавать канал ради наличия продукта.

Для личного короткого контента текущий default — **Threads first**. X и Bluesky не получают материал автоматически только потому, что являются похожими text-first сетями.

## 2. Источники

Контент может начинаться из:

- реальной жизни и наблюдений;
- работы;
- разработки продукта;
- кейса;
- ошибки;
- вопроса клиента;
- исследования;
- новости/релиза;
- инструмента;
- эксперимента;
- обсуждения аудитории.

## 3. Контентные уровни

- **Founder** — мысли, решения, путь, работа и позиция Максима.
- **Ecosystem** — архитектура, общие технологии и знания.
- **Project** — конкретный Pro-leads, Tender Audit или будущий продукт.
- **Editorial** — тематическое объяснение новости/разработки/инструмента.
- **Campaign** — временный запуск или серия.

Уровень не равен каналу.

## 4. Базовый lifecycle

```text
signal / idea
→ capture
→ decide content level
→ choose layer
→ author draft / evidence if needed
→ publish
→ conversation / feedback
→ measurement
→ deepen / reuse / archive
```

Для короткого личного поста процесс не должен раздуваться до редакционного pipeline.

## 5. Triage

Перед существенным материалом ответить:

1. Что произошло или что я хочу сказать?
2. Это личная мысль, факт, опыт, вывод или гипотеза?
3. Нужны ли источники?
4. Это Threads post, deeper Telegram material, canonical site material или editorial content?
5. Есть ли product relation?
6. Нужен ли CTA?
7. Есть ли причина создавать отдельную адаптацию?
8. Это personal media или editorial media?

## 6. Выбор слоя

### Threads

Current default для коротких авторских публикаций, где ценность строится вокруг личности, наблюдения, мысли, юмора, мини-истории, AI/tech реакции или публичного диалога.

Threads остаётся живым и реактивным. Не требуется превращать каждый пост в экспертный материал.

### Telegram

Relationship / retention layer:

- продолжение короткой мысли;
- более длинный разбор;
- несколько мыслей за день;
- рабочий контекст;
- архитектура;
- кейс;
- исследование;
- глубокий авторский материал.

Telegram не зеркалирует каждый Threads post.

### Site

Долгоживущий материал, исследование, разбор, кейс, canonical article, страница проекта.

### Instagram

Future visual/professional author layer после стабилизации Threads. Не current default.

### X / Bluesky

Optional discovery experiments по Discovery Surface Gate. Не mandatory cross-post targets.

### Тематический канал

- AI event → Новости нейросетей;
- coding agent / AI development → Разработка с AI;
- AI service / practical workflow → AI-инструменты.

### Product UX

Transactional/support/release information, необходимая пользователю продукта как часть использования, живёт внутри email/bot/Mini App/web/product UI и не считается public editorial content.

### Product social surface

Не используется как default. Возможна только после Product Social Gate.

## 7. Author authenticity boundary

Личный text-first поток остаётся авторским.

AI/automation могут:

- публиковать утверждённый текст;
- добавлять platform metadata;
- хранить архив;
- собирать статистику;
- отслеживать ссылки;
- помогать искать старые посты.

По умолчанию AI не должен:

- генерировать личную мысль вместо Максима;
- переписывать каждый пост под каждую сеть;
- создавать искусственную регулярность;
- превращать личный блог в контент-фабрику;
- автоматически отправлять editorial material в personal Threads.

## 8. News routing

Чистая новость имеет thematic home.

В personal Threads она может попадать свободнее, чем в прежней строгой модели, если Максим сам считает её интересной и добавляет собственный угол, реакцию, юмор, вопрос или наблюдение.

Для долгоживущего экспертного слоя собственная интерпретация обязательна.

## 9. Editorial autodistribution

Тематический материал после редакционной подготовки может распространяться автоматически:

```text
editorial content object
→ thematic Telegram
→ automation / agents
→ Facebook / Pinterest / future endpoints
```

Правила:

- Facebook и Pinterest являются distribution endpoints, а не отдельными редакциями;
- автопостинг не создаёт новую смысловую единицу из воздуха;
- формат может адаптироваться технически под endpoint;
- факты, тезис и смысл не меняются;
- Pinterest используется преимущественно для visual/evergreen content;
- Facebook — для дополнительного reach и long-tail distribution;
- personal Threads не входит в эту сетку по умолчанию.

## 10. Product content

Product material должен иметь:

- одну конкретную проблему;
- реальный контекст;
- решение/подход;
- результат или честное состояние;
- ограничения;
- один CTA на соответствующий продукт, если CTA нужен.

Pro-leads и Tender Audit не объединяются в один оффер.

## 11. Evidence

Для внешнего факта хранить/проверять:

- source URL;
- publication/event date;
- primary vs secondary source;
- wording of claim;
- uncertainty;
- valid_as_of.

Факт, личный опыт, вывод и гипотеза должны быть различимы.

## 12. Canonical content object

```yaml
content_id:
source_type:
source_urls: []
observed_at:
valid_as_of:
facts: []
experience: []
conclusions: []
hypotheses: []
unknowns: []
primary_thesis:
content_level:
content_layer: discovery | retention | canonical | editorial | product_ux
primary_channels: []
secondary_channels: []
auto_distribution_targets: []
formats: []
product_relation: none | pro-leads | tender-audit | future-product
cta:
reviewed_by_owner: false
status:
sync_state:
```

`auto_distribution_targets` используется только для материалов, которым реально подходит автоматизированная дистрибуция.

## 13. Adaptation и cross-posting

Адаптация может менять:

- hook;
- длину;
- структуру;
- контекст;
- CTA;
- степень детализации;
- aspect/visual format для Pinterest и других визуальных endpoints.

Она не меняет факты и основной смысл.

Механический cross-posting личного текста во все author surfaces не является default.

Autodistribution разрешён для editorial network, если материал уже утверждён и endpoint имеет отдельную функцию.

## 14. Platform roles

Канонические роли описаны в `CHANNELS.md`.

Ключевое:

- Threads — current primary personal discovery;
- personal Telegram — relationship / retention;
- site — owned/canonical;
- Instagram — next visual/professional author layer;
- X / Bluesky — optional discovery experiments;
- три тематических Telegram-канала — editorial network;
- Facebook / Pinterest — automated editorial distribution endpoints;
- остальные surfaces — по доказанной функции;
- отдельные product social channels — только после PSG.

## 15. CTA policy

Для Threads:

- контент должен иметь самостоятельную ценность;
- Telegram может быть в профиле постоянно;
- direct CTA в Telegram используется только при реальном продолжении;
- CTA не добавляется в каждый пост;
- несколько конкурирующих CTA запрещены.

Для Instagram/LinkedIn/TenChat допустим прямой переход на сайт, кейс или продукт, если это естественный destination.

Для Telegram допустим один релевантный переход на сайт, материал или продукт.

## 16. Review и automation

Режим зависит от типа контента:

- личный Threads post — автор пишет и публикует/утверждает сам;
- automation может технически опубликовать уже утверждённый личный материал, но не создаёт голос автора;
- editorial content проходит evidence/editorial review;
- approved editorial material может идти в autodistribution endpoints;
- коммерческий/спорный материал не получает автопубликацию только потому, что publisher технически умеет её делать.

## 17. Measurement

Threads:

- impressions/reach;
- profile visits;
- followers;
- replies/reposts/quotes;
- качество диалогов;
- переходы в Telegram;
- темы, которые повторяемо дают discovery.

Telegram:

- прирост аудитории;
- возвращаемость;
- просмотры относительно базы;
- ответы/реакции/пересылки;
- переходы на сайт и продукты;
- качество связи, а не только объём.

Editorial autodistribution:

- incremental reach;
- outbound clicks;
- evergreen traffic;
- production cost;
- доля материалов, реально подходящих endpoint.

Системная метрика: растёт ли релевантная аудитория без пропорционального роста production cost.

## 18. Reuse

Сильная единица мысли может пройти путь:

```text
Threads post
→ обсуждение
→ Telegram continuation
→ статья / кейс / исследование
→ продуктовый или репутационный asset
```

Editorial material может пройти другой путь:

```text
research / editorial signal
→ thematic Telegram
→ Facebook / Pinterest autodistribution
→ site / canonical asset
```

Не каждый материал обязан пройти весь путь.

## 19. Archive / superseded

Использовать статусы:

- current;
- updated;
- superseded;
- historical;
- archived.

Для стратегических конфликтов новое решение оформляется ADR/current operating document.

## 20. Stop rules

Не производить материал или не подключать surface, если:

- нет самостоятельной ценности;
- публикация существует только ради частоты;
- новая сеть требует отдельной редакции без доказанного результата;
- product CTA приходится приклеивать искусственно;
- Telegram превращается в зеркало Threads;
- AI начинает заменять личный голос автора;
- autodistribution создаёт низкокачественные дубли без трафика или полезной функции;
- production cost растёт быстрее подтверждённой ценности.
