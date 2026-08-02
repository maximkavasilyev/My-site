import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import { getContactPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Контакты — Максим",
  description: "Каналы связи — без формы обратной связи, напрямую в Telegram и другие каналы.",
};

export default async function Contact() {
  const { title, lead, channels } = await getContactPage();

  return (
    <>
      <Header />

      <main id="main-content" className="flex-1 bg-background text-foreground">
        <ScrollReveal>
          <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
            <h1 className="font-serif text-h1 font-semibold leading-tight tracking-tight">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-body-lg leading-relaxed text-muted">{lead}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              {channels.map((channel) =>
                channel.primary ? (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                  >
                    {channel.label}
                  </a>
                ) : (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="rounded-full border border-border px-6 py-3 text-body font-medium text-foreground transition-colors hover:border-foreground"
                  >
                    {channel.label}
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
