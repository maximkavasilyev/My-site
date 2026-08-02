import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import ScrollReveal from "../components/ScrollReveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Блог — Максим",
  description: "Продуктовые и экспертные материалы: архитектура, AI, разработка, госзакупки.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      <main className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <h1 className="font-serif text-h1 font-semibold leading-tight tracking-tight">
              Блог
            </h1>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
