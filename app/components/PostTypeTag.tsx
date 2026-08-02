export default function PostTypeTag({ type }: { type: "product" | "expert" }) {
  const label = type === "product" ? "Продукт" : "Мнение";
  const dotClassName = type === "product" ? "bg-accent" : "bg-muted";

  return (
    <span className="inline-flex items-center gap-2 text-small uppercase tracking-wide text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClassName}`} />
      {label}
    </span>
  );
}
