import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import ScrollReveal from "./components/ScrollReveal";
import { getAllPosts } from "@/lib/posts";

const principles = [
  {
    title: "Сначала задача и границы",
    description: "Определяю нужный результат и границы системы, затем выбираю технологии.",
  },
  {
    title: "Автоматизация после понимания",
    description: "Сначала разбираюсь в процессе и исключениях. Автоматизирую то, что действительно повторяется.",
  },
  {
    title: "Сложность остаётся внутри",
    description: "Пользователь решает свою задачу, а не изучает внутреннее устройство продукта.",
  },
];

const featuredSlugs = [
  "ai-automation-first-process",
  "architecture-decisions-in-ai-products",
  "complexity-stays-inside",
];

const projects = [
  {
    slug: "pro-leads",
    name: "Pro-leads",
    description: "Поиск B2B-возможностей на основе данных государственных закупок.",
  },
  {
    slug: "tender-audit",
    name: "Tender Audit",
    description: "Анализ закупочной документации и подготовка технической части заявки.",
  },
];

export default function Home() {
  const allPosts = getAllPosts();
  const posts = featuredSlugs.map((slug) => {
    const post = allPosts.find((post) => post.slug === slug);
    if (!post) throw new Error(`Главная: выбранный материал "${slug}" не найден в content/posts.`);
    return post;
  });
  const casePost = allPosts.find((post) => post.slug === "static-site-with-markdown");
  if (!casePost) throw new Error('Главная: кейс "static-site-with-markdown" не найден в content/posts.');

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
            <h1 className="font-serif text-[clamp(2.25rem,1rem+2.5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Максим.
              <br />
              Разработчик, архитектор систем, AI.
            </h1>

            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-muted">
              Создаю цифровые и AI-продукты. Здесь — мои проекты, архитектурные
              решения и практические материалы о разработке и автоматизации.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Для бизнеса
              </Link>
              <Link
                href="#start"
                className="rounded-full border border-border px-6 py-3 text-body font-medium text-foreground transition-colors hover:border-foreground"
              >
                Для создателей
              </Link>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="start" aria-labelledby="start-heading" className="mx-auto max-w-6xl scroll-mt-8 border-t border-border px-6 py-16 sm:px-10 sm:py-20">
            <h2 id="start-heading" className="text-h2 font-semibold tracking-tight">С чего начать</h2>
            <p className="mt-4 max-w-2xl text-body text-muted">
              Три материала о выборе задачи, архитектурных решениях и понятных продуктах.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Link href="/blog" className="mt-8 inline-block text-body text-muted transition-colors hover:text-foreground">
              Все материалы →
            </Link>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section aria-labelledby="case-heading" className="mx-auto max-w-6xl border-t border-border px-6 py-16 sm:px-10 sm:py-20">
            <h2 id="case-heading" className="text-h2 font-semibold tracking-tight">Как устроен этот сайт</h2>
            <p className="mt-6 max-w-2xl text-body-lg leading-relaxed">
              {casePost.summary}
            </p>
            <Link href={`/blog/${casePost.slug}`} className="mt-8 inline-block text-body font-medium text-accent transition-colors hover:text-accent-hover">
              Читать кейс →
            </Link>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-6xl border-t border-border px-6 py-20 sm:px-10">
            <div className="flex items-center justify-between">
              <h2 className="text-h2 font-semibold tracking-tight">Мои проекты</h2>
              <Link
                href="/projects"
                className="text-body text-muted transition-colors hover:text-foreground"
              >
                Все проекты →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/#${project.slug}`}
                  className="group block rounded-2xl border border-border bg-surface p-8 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <h3 className="text-h3 font-semibold">{project.name}</h3>
                  <p className="mt-3 text-body text-muted">{project.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-6xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">Мой подход</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-h3 font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-body text-muted">{principle.description}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-8 inline-block text-body text-muted transition-colors hover:text-foreground">
              Обо мне →
            </Link>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
