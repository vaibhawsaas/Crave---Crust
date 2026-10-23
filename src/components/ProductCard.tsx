import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/catalog";
import { cart } from "@/lib/cart";
import { useState } from "react";

export function VegMark({ veg }: { veg: boolean }) {
  return (
    <span
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className="veg-dot"
      style={{
        borderColor: veg ? "#6ea53a" : "#FF7628",
      }}
    >
      <span
        className="rounded-full"
        style={{
          width: "6px",
          height: "6px",
          background: veg ? "#6ea53a" : "#FF7628",
          display: "block",
        }}
      />
    </span>
  );
}

export function ProductCard({ p }: { p: Product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    cart.add({ key: p.slug, name: p.name, unit: p.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="food-card group flex flex-col">
      {/* Image */}
      <Link to="/product/$slug" params={{ slug: p.slug }} className="relative block overflow-hidden" style={{ borderRadius: "1rem 1rem 0 0" }}>
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={600}
          height={450}
          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-106"
          style={{ display: "block" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-1.5">
          {p.popular && (
            <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: "#D6A85F", color: "#080808" }}>
              ★ Popular
            </span>
          )}
          {p.isNew && (
            <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
              style={{ background: "#FF7628", color: "#080808" }}>
              New
            </span>
          )}
        </div>

        {/* Spicy tag */}
        {p.tags?.includes("spicy") && (
          <span className="absolute right-3 top-3 text-sm" title="Spicy">🌶</span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <VegMark veg={p.veg} />
          <Link
            to="/product/$slug"
            params={{ slug: p.slug }}
            className="truncate font-display text-base leading-tight text-[#F7F0E6] hover:text-[#D6A85F] transition-colors"
          >
            {p.name}
          </Link>
        </div>

        <p className="line-clamp-2 text-xs text-[#AAA39B] leading-relaxed">{p.desc}</p>

        <div className="flex items-center gap-3 text-xs text-[#AAA39B]/70">
          <span>★ {p.rating}</span>
          <span className="w-0.5 h-0.5 rounded-full bg-current" />
          <span>{p.time} min</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/6">
          <span className="price-tag !text-xl">₹{p.price}</span>
          <button
            onClick={handleAdd}
            aria-label={`Add ${p.name} to cart`}
            className="rounded-full px-4 py-2 text-xs font-bold transition-all duration-300"
            style={{
              background: added ? "#D6A85F" : "#FF7628",
              color: "#080808",
              transform: added ? "scale(0.95)" : "scale(1)",
            }}
          >
            {added ? "Added ✓" : "Add +"}
          </button>
        </div>
      </div>
    </article>
  );
}
