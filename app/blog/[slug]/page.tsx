import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PostTypeTag from "../../components/PostTypeTag";
import ProductCta from "../../components/ProductCta";
import ScrollReveal from "../../components/ScrollReveal";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) return {};

  return {
    title: `${post.title} — Максим`,
    description: post.summary,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) notFound();

  return (
    <>
      <Header />

      <main className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <PostTypeTag type={post.type} />
            <h1 className="mt-4 font-serif text-h1 font-semibold leading-tight tracking-tight">
              {post.title}
            </h1>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:px-10">
            <div
              className="prose max-w-2xl"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {post.type === "product" && post.product && post.ctaQuote && (
              <div className="mt-12 max-w-2xl">
                <ProductCta product={post.product} quote={post.ctaQuote} />
              </div>
            )}

            {post.type === "expert" && (
              <div className="mt-12 max-w-2xl">
                <Link
                  href="/about"
                  className="text-body text-muted transition-colors hover:text-foreground"
                >
                  Больше о подходе → Обо мне
                </Link>
              </div>
            )}
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
