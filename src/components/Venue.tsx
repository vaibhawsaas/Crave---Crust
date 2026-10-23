import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

export function Shelf({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: Product[];
}) {
  if (!items.length) return null;
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-12"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="font-display text-3xl text-[#F7F0E6] md:text-4xl">{title}</h2>
        {note && <p className="text-sm" style={{ color: "#AAA39B" }}>{note}</p>}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      {items.map(([q, a], i) => (
        <div key={q} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full justify-between gap-4 py-5 text-left transition-colors"
            style={{ color: open === i ? "#D6A85F" : "#F7F0E6" }}
          >
            <span className="font-display text-xl">{q}</span>
            <span
              className="shrink-0 transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "none", color: "#D6A85F" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-5 text-sm leading-relaxed" style={{ color: "#AAA39B" }}>
              {a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function Prose({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mx-auto max-w-3xl px-6 py-20"
      style={{ background: "#080808", color: "#F7F0E6", minHeight: "60vh" }}
    >
      <span className="section-label mb-4">{eyebrow}</span>
      <h1 className="font-display mt-3 text-5xl leading-[0.92] text-[#F7F0E6] md:text-6xl">
        {title}
      </h1>
      <div
        className="mt-10 space-y-6 text-base leading-relaxed"
        style={{ color: "#AAA39B", maxWidth: "60ch" }}
      >
        {children}
      </div>
    </div>
  );
}
