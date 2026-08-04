import { PROJECT_URLS } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="text-body font-semibold tracking-tight">Максим</p>
          <p className="mt-1 text-small text-muted">
            Разработчик, архитектор систем, AI-специалист
          </p>
        </div>

        <div className="flex gap-6 text-small">
          <a href="https://t.me/maxightAI" className="text-muted transition-colors hover:text-foreground">
            Telegram
          </a>
          <a href={PROJECT_URLS["pro-leads"]} className="text-muted transition-colors hover:text-foreground">
            Pro-leads
          </a>
          <a href={PROJECT_URLS["tender-audit"]} className="text-muted transition-colors hover:text-foreground">
            Tender Audit
          </a>
          <a href="/rss.xml" className="text-muted transition-colors hover:text-foreground">
            RSS
          </a>
        </div>
      </div>
    </footer>
  );
}
