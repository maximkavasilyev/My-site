# CONTENT_OS.md — операционная система контента

- **Статус:** Canon / SSoT
- **Версия:** 3.0
- **Дата:** 2026-08-08
- **Назначение:** единый процесс от идеи/сигнала до исследования, выбора основного дома, публикации, измерения, обновления и архивации.
- **Топология:** `MEDIA_TOPOLOGY.md`

## 1. Главный принцип

Сначала появляется сильная единица знания или наблюдение. Только затем выбираются канал, формат и адаптации.

Нельзя создавать контент ради заполнения канала. Нельзя создавать канал ради наличия продукта.

## 2. Источники

Контент может начинаться из:

- реальной работы;
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

Уровень не равен каналу. Один project case может жить в author layer, не требуя отдельной product social surface.

## 4. Базовый lifecycle

```text
signal / idea
→ intake
→ triage
→ source pack / evidence
→ thesis
→ choose primary home
→ canonical draft
→ review
→ adaptations
→ approval
→ publish / schedule
→ measurement
→ update / reuse / archive
```

## 5. Triage

Перед созданием материала ответить:

1. Что произошло или что мы узнали?
2. Для кого это полезно?
3. Какой один главный результат должен получить читатель?
4. Это факт, опыт, вывод или гипотеза?
5. Каков primary home?
6. Есть ли product relation?
7. Нужен ли CTA?
8. Какие secondary adaptations действительно добавляют ценность?

## 6. Выбор primary home

### Author layer

Личный Telegram/сайт и авторские MAX/VK/Instagram — когда ценность строится вокруг опыта, позиции, реальной работы, кейса или интерпретации Максима.

Продуктовые кейсы Pro-leads/Tender Audit по умолчанию маршрутизируются сюда или на сайт, а не в отдельный product media channel.

### Тематический канал

- AI event → Новости нейросетей;
- coding agent / AI development → Разработка с AI;
- AI service / practical workflow → AI-инструменты.

### Сайт

Долгоживущий материал, исследование, разбор, кейс, canonical article.

### Product UX

Transactional/support/release information, необходимая пользователю продукта как часть использования, может жить внутри email/bot/Mini App/web/product UI. Это не public editorial content.

### Product social surface

Не используется как default. Возможна только после Product Social Gate.

## 7. News routing

Чистая новость имеет thematic home.

В author layer она попадает только при добавлении:

- собственного опыта;
- вывода;
- влияния на архитектуру/бизнес/продукт;
- проверенного сценария;
- позиции Максима.

Механический пересказ не публикуется в author layer.

## 8. Product content

Product material должен иметь:

- одну конкретную проблему;
- реальный контекст;
- решение/подход;
- результат или честное состояние;
- ограничения;
- один CTA на соответствующий продукт, если CTA нужен.

Pro-leads и Tender Audit не объединяются в один оффер.

Наличие регулярных product materials само по себе ещё не открывает Product Social Gate.

## 9. Evidence

Для внешнего факта хранить/проверять:

- source URL;
- publication/event date;
- primary vs secondary source;
- wording of claim;
- uncertainty;
- valid_as_of.

Факт, личный опыт, вывод и гипотеза должны быть различимы.

## 10. Canonical content object

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
primary_channel:
secondary_channels: []
formats: []
product_relation: none | pro-leads | tender-audit | future-product
cta:
reviewed_by_owner: false
status:
sync_state:
```

## 11. Adaptation

Адаптация может менять:

- заголовок;
- hook;
- длину;
- структуру;
- контекст;
- визуальную форму;
- CTA;
- степень детализации.

Она не меняет факты и основной смысл.

Запрещён механический cross-posting без отдельной причины.

## 12. Platform roles

Канонические роли описаны в `CHANNELS.md`.

Ключевое:

- Telegram Максима — главный author feed;
- MAX Максима — один author channel;
- VK/Instagram — существующие author/professional surfaces;
- три тематических Telegram-канала — editorial network;
- отдельные product social channels — только после PSG;
- VC.ru/Дзен/LinkedIn/TenChat/video — адаптированные surfaces по функции.

## 13. Review layers

Минимально проверить:

### Evidence review

- источник существует;
- цифры и даты совпадают;
- неизвестное не выдано за факт.

### Editorial review

- один тезис;
- понятная аудитория;
- нет пустого пересказа;
- материал соответствует channel promise.

### Product review

Если есть product relation:

- не раскрыты private данные;
- результат не преувеличен;
- CTA ведёт к правильному продукту;
- продукты не смешаны.

### Canon review

- не нарушены `MEDIA_TOPOLOGY`, Product Social Gate, Media Gates и product boundaries.

## 14. Approval и automation

Режим определяется Media Gate:

- manual;
- agent draft + owner review;
- approved queue;
- allowlist auto-publish.

Коммерческий/авторский/спорный материал не получает право автопубликации только потому, что технически publisher это умеет.

## 15. Measurement

Смотреть прежде всего:

- релевантные диалоги;
- переходы к продуктам;
- trial/registration/use;
- сохранения и пересылки;
- возвраты аудитории;
- качество комментариев;
- production cost материала;
- долю принятых drafts;
- ошибки/исправления;
- накопленный reusable knowledge.

Просмотры и лайки — вторичные сигналы.

## 16. Reuse

Сильная единица знания может стать:

- постом;
- статьёй;
- кейсом;
- исследованием;
- каруселью;
- reel/short;
- видео;
- FAQ;
- продуктовым объяснением;
- будущим платным материалом.

Переиспользование не означает копирование одного текста во все каналы.

## 17. Archive / superseded

Старый материал не удаляется только потому, что решение изменилось.

Использовать статусы:

- current;
- updated;
- superseded;
- historical;
- archived.

Для стратегических конфликтов новое решение оформляется ADR/current operating document.

## 18. Stop rules

Не производить материал, если:

- нет самостоятельной ценности;
- источник не проверяется;
- тезис невозможно сформулировать;
- публикация существует только ради частоты;
- материал дублирует другой channel без нового угла;
- product CTA приходится приклеивать искусственно;
- публикация требует создать новую social entity без Product Social Gate.
