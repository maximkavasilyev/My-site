/**
 * Черновик дизайн-системы (Этап 3 ROADMAP.md) — витрина токенов: типографика, цвет,
 * базовые элементы. Не является вёрсткой Главной страницы — она делается отдельно,
 * после утверждения этой основы (см. TECH_SPEC.md, "Страницы и компоненты").
 */

const colors = [
  { name: "background", value: "#FAFAFA", varName: "--color-background" },
  { name: "foreground", value: "#16171A", varName: "--color-foreground" },
  { name: "muted", value: "#6E6E76", varName: "--color-muted" },
  { name: "border", value: "#E5E5EA", varName: "--color-border" },
  { name: "accent", value: "#4F46E5", varName: "--color-accent" },
];

export default function DesignSystemPreview() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <p className="text-small uppercase tracking-widest text-muted">
          Дизайн-система · v1 (черновик)
        </p>

        <h1 className="mt-6 text-hero font-semibold leading-[1.05] tracking-tight">
          Максим.
          <br />
          Разработчик, архитектор систем, AI.
        </h1>

        <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-muted">
          Apple-стиль: много воздуха, крупная типографика, один акцентный цвет на
          нейтральном фоне. Этот экран — не Главная страница, а превью токенов перед
          вёрсткой конкретных страниц.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover">
            Основная кнопка
          </button>
          <button className="rounded-full border border-border px-6 py-3 text-body font-medium text-foreground transition-colors hover:border-foreground">
            Вторичная кнопка
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
        <h2 className="text-h2 font-semibold tracking-tight">Типографика</h2>
        <div className="mt-10 flex flex-col gap-8">
          <div>
            <p className="text-hero font-semibold leading-none">Hero</p>
            <p className="mt-2 text-small text-muted">
              --text-hero · clamp 48–96px
            </p>
          </div>
          <div>
            <p className="text-h1 font-semibold leading-tight">Заголовок H1</p>
            <p className="mt-2 text-small text-muted">--text-h1</p>
          </div>
          <div>
            <p className="text-h2 font-semibold leading-tight">Заголовок H2</p>
            <p className="mt-2 text-small text-muted">--text-h2</p>
          </div>
          <div>
            <p className="text-h3 font-semibold leading-snug">Заголовок H3</p>
            <p className="mt-2 text-small text-muted">--text-h3</p>
          </div>
          <div>
            <p className="text-body-lg leading-relaxed">
              Крупный текст абзаца — для вводных блоков и цитат.
            </p>
            <p className="mt-2 text-small text-muted">--text-body-lg</p>
          </div>
          <div>
            <p className="text-body leading-relaxed text-muted">
              Обычный текст абзаца — основной контент постов и страниц.
            </p>
            <p className="mt-2 text-small text-muted">--text-body</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
        <h2 className="text-h2 font-semibold tracking-tight">Цвет</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5">
          {colors.map((color) => (
            <div key={color.name}>
              <div
                className="h-20 w-full rounded-2xl border border-border"
                style={{ backgroundColor: color.value }}
              />
              <p className="mt-3 text-small font-medium">{color.name}</p>
              <p className="text-small text-muted">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
        <h2 className="text-h2 font-semibold tracking-tight">Карточка</h2>
        <div className="mt-10 max-w-sm rounded-2xl border border-border p-8">
          <p className="text-small font-medium text-accent">Продукт</p>
          <p className="mt-3 text-h3 font-semibold">Пример карточки</p>
          <p className="mt-3 text-body text-muted">
            Сдержанная граница, крупный внутренний отступ, без теней и градиентов.
          </p>
        </div>
      </section>
    </main>
  );
}
