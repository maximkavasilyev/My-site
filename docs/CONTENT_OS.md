# CONTENT_OS.md — операционная система контента

- **Статус:** Canon / SSoT
- **Версия:** 3.1
- **Дата:** 2026-09-18
- **Назначение:** единый процесс от идеи/сигнала до публикации, измерения, обновления и архивации.
- **Топология:** `MEDIA_TOPOLOGY.md`
- **ADR:** `docs/adr/0006-text-first-discovery-triad.md`

## 1. Главный принцип

Сначала появляется сильная единица мысли, знания или наблюдения. Только затем выбираются слой, формат и канал.

Нельзя создавать контент ради заполнения канала. Нельзя создавать канал ради наличия продукта.

Для короткого авторского text-first контента действует отдельное правило: один исходный текст может одновременно иметь три primary discovery surfaces — Threads, Bluesky и X.

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
4. Это discovery post, deeper Telegram material, canonical site material или editorial content?
5. Есть ли product relation?
6. Нужен ли CTA?
7. Есть ли причина создавать отдельную адаптацию?

## 6. Выбор слоя

### Discovery triad

Threads + Bluesky + X — default для коротких авторских text-first публикаций, где ценность строится вокруг личности, наблюдения, мысли, юмора, мини-истории, разработки или публичного диалога.

Один и тот же текст может идти во все три сети без обязательной адаптации.

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

Telegram не зеркалирует каждый discovery post.

### Сайт

Долгоживущий материал, исследование, разбор, кейс, canonical article, страница проекта.

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

- публиковать один утверждённый текст в несколько targets;
- добавлять platform metadata;
- хранить архив;
- собирать статистику;
- отслеживать ссылки;
- помогать искать старые посты.

По умолчанию AI не должен:

- генерировать личную мысль вместо Максима;
- переписывать каждый пост под каждую сеть;
- создавать искусственную регулярность;
- превращать личный блог в контент-фабрику.

## 8. News routing

Чистая новость имеет thematic home.

В author layer она попадает только при добавлении собственного опыта, вывода, влияния на архитектуру/бизнес/продукт или проверенного сценария.

## 9. Product content

Product material должен иметь:

- одну конкретную проблему;
- реальный контекст;
- решение/подход;
- результат или честное состояние;
- ограничения;
- один CTA на соответствующий продукт, если CTA нужен.

Pro-leads и Tender Audit не объединяются в один оффер.

## 10. Evidence

Для внешнего факта хранить/проверять:

- source URL;
- publication/event date;
- primary vs secondary source;
- wording of claim;
- uncertainty;
- valid_as_of.

Факт, личный опыт, вывод и гипотеза должны быть различимы.

## 11. Canonical content object

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
formats: []
product_relation: none | pro-leads | tender-audit | future-product
cta:
reviewed_by_owner: false
status:
sync_state:
```

`primary_channels` является массивом, потому что короткий author discovery post может одновременно иметь Threads + Bluesky + X как primary surfaces.

## 12. Adaptation и cross-posting

Адаптация может менять:

- hook;
- длину;
- структуру;
- контекст;
- CTA;
- степень детализации.

Она не меняет факты и основной смысл.

По умолчанию механический cross-posting не используется, **кроме discovery triad**. Для Threads + Bluesky + X одинаковый короткий авторский текст допустим как нормальный operating mode.

## 13. Platform roles

Канонические роли описаны в `CHANNELS.md`.

Ключевое:

- Threads + Bluesky + X — text-first discovery layer;
- Telegram Максима — relationship / retention layer;
- сайт — owned/canonical layer;
- три тематических Telegram-канала — editorial network;
- Instagram/VK/MAX/LinkedIn/TenChat/VC.ru/Дзен/video — optional surfaces по доказанной функции;
- отдельные product social channels — только после PSG.

## 14. CTA policy

Для discovery layer:

- контент должен иметь самостоятельную ценность;
- Telegram может быть в профиле постоянно;
- direct CTA в Telegram используется только при реальном продолжении;
- CTA не добавляется в каждый пост;
- несколько конкурирующих CTA запрещены.

Для Telegram допустим один релевантный переход на сайт, материал или продукт.

## 15. Review и automation

Режим зависит от типа контента:

- личный короткий post — автор пишет и публикует/утверждает сам;
- publisher может распространить утверждённый текст в discovery triad;
- editorial content проходит evidence/editorial review;
- коммерческий/спорный материал не получает автопубликацию только потому, что publisher технически умеет её делать.

## 16. Measurement

Discovery triad измеряется по каждой платформе отдельно:

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

Системная метрика: растёт ли релевантная аудитория без пропорционального роста production cost.

## 17. Reuse

Сильная единица мысли может пройти путь:

```text
короткий discovery post
→ обсуждение
→ Telegram continuation
→ статья / кейс / исследование
→ продуктовый или репутационный asset
```

Не каждый пост обязан пройти весь путь.

## 18. Archive / superseded

Использовать статусы:

- current;
- updated;
- superseded;
- historical;
- archived.

Для стратегических конфликтов новое решение оформляется ADR/current operating document.

## 19. Stop rules

Не производить материал или не подключать surface, если:

- нет самостоятельной ценности;
- публикация существует только ради частоты;
- новая сеть требует отдельной редакции без доказанного результата;
- product CTA приходится приклеивать искусственно;
- Telegram превращается в зеркало discovery triad;
- AI начинает заменять личный голос автора;
- production cost растёт быстрее подтверждённой ценности.
