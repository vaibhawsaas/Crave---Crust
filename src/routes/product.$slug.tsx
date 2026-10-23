import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, PRODUCTS, productBySlug } from "@/lib/catalog";
import { cart } from "@/lib/cart";
import { VegMark } from "@/components/ProductCard";
import { Shelf } from "@/components/Venue";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = productBySlug(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ₹${loaderData.price} | Crave & Crust` },
          { name: "description", content: loaderData.desc },
          { property: "og:title", content: `${loaderData.name} | Crave & Crust` },
          { property: "og:description", content: loaderData.desc },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Dish unavailable | Crave & Crust" },
          { name: "robots", content: "noindex" },
        ],
  }),
  notFoundComponent: () => (
    <div
      className="p-20 text-center"
      style={{ background: "#080808", color: "#F7F0E6", minHeight: "60vh" }}
    >
      <p className="eyebrow text-[#D6A85F] mb-4">Not found</p>
      <h1 className="font-display text-4xl text-[#F7F0E6]">Dish not found</h1>
      <Link to="/explore" className="mt-6 inline-block text-[#D6A85F] underline underline-offset-4">
        Explore food →
      </Link>
    </div>
  ),
  component: ProductPage,
});

const SIZES = [
  { id: "regular", label: "Regular", add: 0 },
  { id: "large", label: "Large", add: 60 },
];
const EXTRAS = [
  { id: "dip", label: "Extra dip", add: 25 },
  { id: "cheese", label: "Extra cheese", add: 40 },
  { id: "spicy", label: "Make it spicy", add: 0 },
];

function ProductPage() {
  const p = Route.useLoaderData();
  const c = CATEGORIES.find((x) => x.slug === p.cat);
  const [size, setSize] = useState("regular");
  const [extras, setExtras] = useState<string[]>([]);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [added, setAdded] = useState(false);

  const unit =
    p.price +
    (SIZES.find((s) => s.id === size)?.add ?? 0) +
    EXTRAS.filter((e) => extras.includes(e.id)).reduce((s, e) => s + e.add, 0);

  const add = () => {
    const desc = [size !== "regular" && size, ...extras, note].filter(Boolean).join(", ");
    for (let i = 0; i < qty; i++) {
      cart.add({ key: `${p.slug}|${desc}`, name: p.name, unit, note: desc });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div style={{ background: "#080808", color: "#F7F0E6" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-[2.5rem] opacity-30"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,118,40,0.3), transparent 70%)" }}
            aria-hidden
          />
          <img
            src={p.img}
            alt={p.name}
            width={1024}
            height={1024}
            className="relative w-full rounded-[2.5rem] object-cover"
            style={{
              aspectRatio: "1",
              border: "1px solid rgba(255,255,255,0.07)",
              filter: "brightness(0.9) saturate(1.2)",
            }}
          />
        </div>

        {/* Details */}
        <div>
          {c && (
            <Link
              to={c.path}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.3em] transition-colors"
              style={{ color: "#D6A85F" }}
            >
              ← {c.label}
            </Link>
          )}

          <div className="mt-3 flex items-center gap-3">
            <VegMark veg={p.veg} />
            <h1 className="font-display text-4xl text-[#F7F0E6] md:text-5xl">{p.name}</h1>
          </div>

          <p className="mt-3 text-base leading-relaxed" style={{ color: "#AAA39B" }}>
            {p.desc}
          </p>

          <div className="mt-2 flex items-center gap-3 text-sm" style={{ color: "#D6A85F" }}>
            <span>★ {p.rating}</span>
            <span style={{ color: "#AAA39B" }}>·</span>
            <span style={{ color: "#AAA39B" }}>{p.time} min prep</span>
            {p.popular && (
              <>
                <span style={{ color: "#AAA39B" }}>·</span>
                <span className="font-semibold">Popular</span>
              </>
            )}
          </div>

          {/* 3D Lab promo for burgers */}
          {p.cat === "burgers" && (
            <Link
              to="/3d-food-lab"
              className="mt-7 flex items-center justify-between rounded-2xl p-5 font-semibold transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, rgba(255,118,40,0.15) 0%, rgba(214,168,95,0.08) 100%)",
                border: "1px solid rgba(255,118,40,0.25)",
                color: "#F7F0E6",
              }}
            >
              <div>
                <p className="text-sm font-bold">Customise every layer in 3D</p>
                <p className="text-xs mt-0.5" style={{ color: "#AAA39B" }}>
                  Build it exactly how you want it
                </p>
              </div>
              <span style={{ color: "#FF7628" }}>→</span>
            </Link>
          )}

          {/* Size */}
          <fieldset className="mt-8">
            <legend className="font-semibold text-[#F7F0E6]">Size</legend>
            <div className="mt-3 flex gap-2">
              {SIZES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className="rounded-full px-5 py-2.5 text-sm font-medium transition-all"
                  style={{
                    background: size === s.id ? "#D6A85F" : "rgba(255,255,255,0.05)",
                    color: size === s.id ? "#080808" : "#AAA39B",
                    border: `1px solid ${size === s.id ? "#D6A85F" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {s.label}
                  {s.add ? ` +₹${s.add}` : ""}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Extras */}
          <fieldset className="mt-6">
            <legend className="font-semibold text-[#F7F0E6]">Extras</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {EXTRAS.map((e) => {
                const on = extras.includes(e.id);
                return (
                  <button
                    key={e.id}
                    onClick={() =>
                      setExtras(on ? extras.filter((x) => x !== e.id) : [...extras, e.id])
                    }
                    className="rounded-full px-5 py-2.5 text-sm font-medium transition-all"
                    style={{
                      background: on ? "#FF7628" : "rgba(255,255,255,0.05)",
                      color: on ? "#080808" : "#AAA39B",
                      border: `1px solid ${on ? "#FF7628" : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    {e.label}
                    {e.add ? ` +₹${e.add}` : ""}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Kitchen note */}
          <label className="mt-6 block">
            <span className="font-semibold text-[#F7F0E6] text-sm">Note for the kitchen</span>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="No onion, less spicy…"
              className="input-dark mt-2"
            />
          </label>

          {/* Qty + Add */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div
              className="flex items-center rounded-full"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-12 w-12 flex items-center justify-center text-[#AAA39B] hover:text-[#F7F0E6] transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center tabular-nums text-[#F7F0E6] font-semibold">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="h-12 w-12 flex items-center justify-center text-[#AAA39B] hover:text-[#F7F0E6] transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={add}
              className="flex-1 rounded-full py-4 px-8 font-bold text-sm transition-all duration-300"
              style={{
                background: added
                  ? "linear-gradient(135deg, #D6A85F, #E8BF74)"
                  : "linear-gradient(135deg, #FF7628, #FF9650)",
                color: "#080808",
                transform: added ? "scale(0.98)" : "scale(1)",
              }}
            >
              {added ? "✓ Added to cart!" : `Add to cart · ₹${unit * qty}`}
            </button>
          </div>
        </div>
      </div>

      <Shelf
        title="You might also crave"
        items={PRODUCTS.filter((x) => x.cat === p.cat && x.slug !== p.slug).slice(0, 4)}
      />
      <div className="h-16" />
    </div>
  );
}
