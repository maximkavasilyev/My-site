import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";
import { getContactPage, type Channel } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Контакты — Максим",
  description: "Каналы связи — без формы обратной связи, напрямую в Telegram и другие каналы.",
};

const MONOGRAMS: Record<string, string> = {
  Telegram: "TG",
  "VC.ru": "VC",
  Дзен: "DZ",
  LinkedIn: "in",
  VK: "VK",
  Email: "@",
};

function ChannelMonogram({ label, primary }: { label: string; primary: boolean }) {
  const text = MONOGRAMS[label] ?? label.slice(0, 2).toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold leading-none ${
        primary ? "border-accent-foreground/40 text-accent-foreground" : "border-border text-muted"
      }`}
    >
      {text}
    </span>
  );
}

function ChannelLink({ channel }: { channel: Channel }) {
  const className = channel.primary
    ? "inline-flex items-center gap-2 rounded-full bg-accent pl-3 pr-6 py-2.5 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
    : "inline-flex items-center gap-2 rounded-full border border-border pl-3 pr-6 py-2.5 text-body font-medium text-foreground transition-colors hover:border-foreground";

  return (
    <a href={channel.href} className={className}>
      <ChannelMonogram label={channel.label} primary={channel.primary} />
      {channel.label}
    </a>
  );
}

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
              {channels.map((channel) => (
                <ChannelLink key={channel.label} channel={channel} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
