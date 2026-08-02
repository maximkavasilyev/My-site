/**
 * Черновик дизайн-системы (Этап 3 ROADMAP.md) — витрина токенов: типографика, цвет,
 * базовые элементы. Не является вёрсткой Главной страницы — она делается отдельно,
 * после утверждения этой основы (см. TECH_SPEC.md, "Страницы и компоненты").
 */

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCta from "./components/ProductCta";
import PostTypeTag from "./components/PostTypeTag";
import ScrollReveal from "./components/ScrollReveal";

const colors = [
  { name: "background", value: "#F6F3EE" },
  { name: "foreground", value: "#2B2622" },
  { name: "muted", value: "#6B6255" },
  { name: "border", value: "#E4DCCF" },
  { name: "surface", value: "#FFFFFF" },
  { name: "accent", value: "#B5502C" },
];

export default function DesignSystemPreview() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <p className="text-small uppercase tracking-widest text-muted">
              Дизайн-система · v3 (editorial, выбранное направление)
            </p>

            <h1 className="mt-6 font-serif text-hero font-semibold leading-[1.08] tracking-tight">
              Максим.
              <br />
              Разработчик, архитектор систем, AI.
            </h1>

            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-muted">
              Тёплая бумага вместо холодного белого, серифный заголовок для крупных
              заявлений, один терракотовый акцент. Ощущение личного текста архитектора,
              а не шаблона SaaS-лендинга.
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
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">Типографика</h2>
            <div className="mt-10 flex flex-col gap-8">
              <div>
                <p className="font-serif text-hero font-semibold leading-none">Hero</p>
                <p className="mt-2 text-small text-muted">
                  --text-hero · font-serif · clamp 48–96px
                </p>
              </div>
              <div>
                <p className="font-serif text-h1 font-semibold leading-tight">Заголовок H1</p>
                <p className="mt-2 text-small text-muted">--text-h1 · font-serif</p>
              </div>
              <div>
                <p className="text-h2 font-semibold leading-tight">Заголовок H2</p>
                <p className="mt-2 text-small text-muted">
                  --text-h2 · sans (структурные заголовки)
                </p>
              </div>
              <div>
                <p className="text-h3 font-semibold leading-snug">Заголовок H3</p>
                <p className="mt-2 text-small text-muted">--text-h3 · sans</p>
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
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">Цвет</h2>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
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
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">Карточка поста</h2>
            <div className="mt-10 max-w-sm rounded-2xl border border-border bg-surface p-8 transition hover:-translate-y-0.5 hover:border-foreground">
              <PostTypeTag type="product" />
              <p className="mt-4 text-h3 font-semibold leading-snug">
                Государственные закупки как источник B2B-клиентов
              </p>
              <p className="mt-3 text-body text-muted">
                Как данные о завершённых закупках помогают находить компании с
                подтверждённым спросом и финансированием.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">Тело поста (prose)</h2>
            <div className="prose mt-10 max-w-2xl">
              <p>
                Сложные задачи не всегда требуют сложного интерфейса. Часто происходит
                обратное: чем сложнее внутренняя система, тем больше работы её создатели
                перекладывают на пользователя.
              </p>
              <h2>Пользователь не должен собирать систему сам</h2>
              <p>Хороший продукт может выглядеть как несколько понятных действий:</p>
              <ol>
                <li>Передать исходные данные.</li>
                <li>Указать необходимые параметры.</li>
                <li>Получить структурированный результат.</li>
              </ol>
              <blockquote>
                Я считаю хорошей системой ту, сложность которой остаётся внутри, а не
                перекладывается на пользователя.
              </blockquote>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">CTA продуктового поста</h2>
            <div className="mt-10 max-w-2xl">
              <ProductCta
                product="tender-audit"
                quote="Tender Audit помогает последовательно разобрать документацию, увидеть требования и риски до того, как поставщик потратит ресурсы на участие."
              />
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
