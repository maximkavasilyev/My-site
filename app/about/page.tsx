import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import { getPageBySlug } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Обо мне — Максим",
  description:
    "Личная история, путь и подход к разработке, архитектуре систем и AI-продуктам.",
};

export default async function About() {
  const { title, contentHtml } = await getPageBySlug("about");

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

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <div
              className="prose max-w-2xl"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
