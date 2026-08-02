import Link from "next/link";

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
          <Link href="#" className="text-muted transition-colors hover:text-foreground">
            Telegram
          </Link>
          <Link href="#" className="text-muted transition-colors hover:text-foreground">
            Pro-leads
          </Link>
          <Link href="#" className="text-muted transition-colors hover:text-foreground">
            Tender Audit
          </Link>
        </div>
      </div>
    </footer>
  );
}
