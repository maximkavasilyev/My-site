import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <main id="main-content" className="flex-1 bg-background text-foreground">
        <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
          <p className="text-small uppercase tracking-widest text-muted">404</p>

          <h1 className="mt-6 font-serif text-h1 font-semibold leading-tight tracking-tight">
            Страница не найдена
          </h1>

          <p className="mt-6 max-w-xl text-body-lg leading-relaxed text-muted">
            Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              На главную
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-border px-6 py-3 text-body font-medium text-foreground transition-colors hover:border-foreground"
            >
              В блог
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
