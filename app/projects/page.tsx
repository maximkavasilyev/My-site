import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import { getProjectsPage } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Проекты — Максим",
  description: "Pro-leads и Tender Audit — самостоятельные продукты для B2B и госзакупок.",
};

export default async function Projects() {
  const { title, projects } = await getProjectsPage();

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <h1 className="font-serif text-h1 font-semibold leading-tight tracking-tight">
              {title}
            </h1>
          </section>
        </ScrollReveal>

        {projects.map((project) => (
          <ScrollReveal key={project.slug}>
            <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
              <div className="max-w-2xl rounded-2xl border border-border bg-surface p-10">
                <h2 className="text-h2 font-semibold tracking-tight">{project.name}</h2>
                <div
                  className="prose mt-6"
                  dangerouslySetInnerHTML={{ __html: project.contentHtml }}
                />
                <a
                  href={project.url}
                  className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  Перейти на {project.name} →
                </a>
              </div>
            </section>
          </ScrollReveal>
        ))}
      </main>

      <Footer />
    </>
  );
}
