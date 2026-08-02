"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "Обо мне" },
  { href: "/projects", label: "Проекты" },
  { href: "/blog", label: "Блог" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-body font-semibold tracking-tight">
          Максим
        </Link>

        <nav className="hidden gap-6 text-small text-muted sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="mobile-nav-enter fixed inset-0 z-40 flex flex-col bg-background sm:hidden">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <span className="text-body font-semibold tracking-tight">Максим</span>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center"
              aria-label="Закрыть меню"
              onClick={() => setOpen(false)}
            >
              <span className="block h-px w-5 translate-y-[3.5px] rotate-45 bg-foreground" />
              <span className="block h-px w-5 -translate-y-[3.5px] -rotate-45 bg-foreground" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-6 px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-h3 font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
