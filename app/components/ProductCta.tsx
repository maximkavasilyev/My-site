const productLabels = {
  "pro-leads": "Pro-leads",
  "tender-audit": "Tender Audit",
} as const;

export default function ProductCta({
  product,
  quote,
  href = "#",
}: {
  product: keyof typeof productLabels;
  quote: string;
  href?: string;
}) {
  const label = productLabels[product];

  return (
    <div className="rounded-2xl border-l-2 border-accent bg-surface p-8">
      <p className="font-serif text-body-lg italic leading-relaxed">{quote}</p>
      <a
        href={href}
        className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-body font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
      >
        Перейти на {label} →
      </a>
    </div>
  );
}
