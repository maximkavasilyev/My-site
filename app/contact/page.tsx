import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Контакты — Максим",
  description: "Каналы связи — без формы обратной связи, напрямую в Telegram и другие каналы.",
};

const channels = [
  { name: "Telegram", href: "#", primary: true },
  { name: "LinkedIn", href: "#", primary: false },
  { name: "VK", href: "#", primary: false },
];

export default function Contact() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <h1 className="font-serif text-h1 font-semibold leading-tight tracking-tight">
              Контакты
            </h1>

            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-muted">
              Самый быстрый способ связаться — Telegram.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {channels.map((channel) =>
                channel.primary ? (
                  <a
                    key={channel.name}
                    href={channel.href}
                    className="rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                  >
                    {channel.name}
                  </a>
                ) : (
                  <a
                    key={channel.name}
                    href={channel.href}
                    className="rounded-full border border-border px-6 py-3 text-body font-medium text-foreground transition-colors hover:border-foreground"
                  >
                    {channel.name}
                  </a>
                ),
              )}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
