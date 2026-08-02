import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import ScrollReveal from "./components/ScrollReveal";
import { getAllPosts } from "@/lib/posts";

const theses = [
  {
    title: "Разработчик",
    description: "Пишу и запускаю продукты сам, от бэкенда до интерфейса.",
  },
  {
    title: "Архитектор систем",
    description: "Сначала граница и структура, потом код и технологии.",
  },
  {
    title: "AI-специалист",
    description: "Использую AI как инструмент — там, где он реально экономит время.",
  },
  {
    title: "Предприниматель",
    description: "Провожу продукт от идеи до монетизации самостоятельно.",
  },
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
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Header />

      <main className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <h1 className="font-serif text-hero font-semibold leading-[1.08] tracking-tight">
              Максим.
              <br />
              Разработчик, архитектор систем, AI.
            </h1>

            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-muted">
              Я создаю системы и продукты, которые упрощают сложную работу и помогают
              принимать решения быстрее и точнее — от идеи и архитектуры до разработки,
              запуска и развития.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Проекты
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-border px-6 py-3 text-body font-medium text-foreground transition-colors hover:border-foreground"
              >
                Обо мне
              </Link>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <h2 className="text-h2 font-semibold tracking-tight">Чем занимаюсь</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {theses.map((thesis) => (
                <div key={thesis.title}>
                  <p className="text-h3 font-semibold">{thesis.title}</p>
                  <p className="mt-2 text-body text-muted">{thesis.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <div className="flex items-center justify-between">
              <h2 className="text-h2 font-semibold tracking-tight">Проекты</h2>
              <Link
                href="/projects"
                className="text-body text-muted transition-colors hover:text-foreground"
              >
                Все проекты →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-2xl border border-border bg-surface p-8 transition hover:-translate-y-0.5 hover:border-foreground"
                >
                  <p className="text-h3 font-semibold">{project.name}</p>
                  <p className="mt-3 text-body text-muted">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <div className="flex items-center justify-between">
              <h2 className="text-h2 font-semibold tracking-tight">Блог</h2>
              <Link
                href="/blog"
                className="text-body text-muted transition-colors hover:text-foreground"
              >
                Все посты →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
