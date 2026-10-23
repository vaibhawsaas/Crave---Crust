import { lazy, Suspense, useEffect, useState } from "react";
import { BURGER_INGREDIENTS, type Ingredient } from "@/lib/brand";
import { cart } from "@/lib/cart";

const BurgerScene = lazy(() => import("./BurgerScene"));

function IngredientRow({
  item,
  selected,
  onSelect,
  onQty,
}: {
  item: Ingredient;
  selected: boolean;
  onSelect: () => void;
  onQty: (d: number) => void;
}) {
  return (
    <li
      className={`ingredient-row flex items-center gap-4 py-3 px-2 rounded-lg transition-all ${selected ? "active" : ""} ${item.qty === 0 ? "opacity-35" : ""}`}
    >
      <button onClick={onSelect} className="flex-1 text-left" aria-pressed={selected}>
        <span
          className="font-display text-base leading-tight"
          style={{ color: selected ? "#FF7628" : "#F7F0E6" }}
        >
          {item.name}
        </span>
        <span className="ml-2 text-xs" style={{ color: "#AAA39B" }}>
          ₹{item.price}
        </span>
        {!item.removable && (
          <span className="ml-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: "#D6A85F" }}>
            required
          </span>
        )}
      </button>

      <div className="flex items-center gap-1.5">
        <button
          aria-label={`Less ${item.name}`}
          onClick={() => onQty(-1)}
          disabled={item.qty <= (item.removable ? 0 : 1)}
          className="h-7 w-7 rounded-full border flex items-center justify-center text-sm transition-all"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#AAA39B",
          }}
        >
          −
        </button>
        <span className="w-5 text-center tabular-nums text-sm" style={{ color: "#F7F0E6" }}>
          {item.qty}
        </span>
        <button
          aria-label={`More ${item.name}`}
          onClick={() => onQty(1)}
          disabled={item.qty >= item.maxQty}
          className="h-7 w-7 rounded-full border flex items-center justify-center text-sm transition-all"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#AAA39B",
          }}
        >
          +
        </button>
      </div>
    </li>
  );
}

export function BurgerLab() {
  const [items, setItems] = useState<Ingredient[]>(BURGER_INGREDIENTS);
  const [exploded, setExploded] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => setMounted(true), []);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const setQty = (id: string, d: number) =>
    setItems((xs) =>
      xs.map((x) =>
        x.id === id
          ? { ...x, qty: Math.max(x.removable ? 0 : 1, Math.min(x.maxQty, x.qty + d)) }
          : x,
      ),
    );

  const changes = items
    .map((i) => {
      const base = BURGER_INGREDIENTS.find((b) => b.id === i.id)!;
      return i.qty === base.qty
        ? null
        : i.qty === 0
          ? `no ${i.name.toLowerCase()}`
          : `${i.qty}× ${i.name.toLowerCase()}`;
    })
    .filter(Boolean)
    .join(", ");

  const handleAdd = () => {
    cart.add({
      key: `burger-${changes || "classic"}`,
      name: "Custom Aloo Tikki Burger",
      unit: total,
      note: changes || "classic build",
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "radial-gradient(ellipse at 70% 20%, rgba(255,118,40,0.07) 0%, transparent 55%), #0c0c0c",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
      aria-labelledby="lab-title"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(214,168,95,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,95,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_1fr] relative z-10">
        {/* 3D Viewer */}
        <div>
          <span className="section-label mb-4">The Food Laboratory — 3D</span>
          <h1 id="lab-title" className="mt-3 font-display text-5xl leading-[0.95] text-[#F7F0E6] md:text-7xl">
            Explore
            <br />
            <em className="text-[#FF7628]">every layer.</em>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: "#AAA39B" }}>
            Drag to rotate, scroll to zoom, tap any layer. Build your dream burger exactly how you crave it.
          </p>

          {/* Canvas */}
          <div
            className="canvas-wrapper relative mt-6 h-[460px] md:h-[600px]"
            aria-label="Interactive 3D burger viewer"
          >
            {mounted ? (
              <Suspense
                fallback={
                  <div className="grid h-full place-items-center">
                    <div className="text-center">
                      <div
                        className="mx-auto mb-4 h-12 w-12 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: "#D6A85F", borderTopColor: "transparent" }}
                      />
                      <p className="eyebrow text-[#AAA39B]">Plating your burger…</p>
                    </div>
                  </div>
                }
              >
                <BurgerScene
                  items={items}
                  exploded={exploded}
                  selected={selected}
                  onSelect={(id) => setSelected((s) => (s === id ? null : id))}
                />
              </Suspense>
            ) : null}

            {/* Controls */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <button
                onClick={() => setExploded((e) => !e)}
                className="btn-gold !py-2.5 !px-5 !text-xs !rounded-full"
                style={{ fontSize: "0.7rem" }}
              >
                {exploded ? "↙ Assemble" : "↗ Explore every layer"}
              </button>
              <button
                onClick={() => {
                  setItems(BURGER_INGREDIENTS);
                  setExploded(false);
                  setSelected(null);
                }}
                className="rounded-full px-4 py-2.5 text-xs font-bold border transition-all"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "#AAA39B",
                  fontSize: "0.7rem",
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Ingredient configurator */}
        <div
          className="self-start lg:self-center rounded-xl p-6"
          style={{
            background: "rgba(17,17,17,0.8)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="eyebrow text-[#D6A85F] mb-4">Customise your burger</p>

          <ul className="space-y-0">
            {items.map((i) => (
              <IngredientRow
                key={i.id}
                item={i}
                selected={selected === i.id}
                onSelect={() => setSelected((s) => (s === i.id ? null : i.id))}
                onQty={(d) => setQty(i.id, d)}
              />
            ))}
          </ul>

          <div
            className="mt-6 pt-5 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="eyebrow text-[#AAA39B]">Your burger total</p>
                <p
                  className="font-display text-5xl tabular-nums mt-1"
                  style={{ color: "#D6A85F" }}
                >
                  ₹{total}
                </p>
              </div>
              {changes && (
                <div className="text-right text-xs" style={{ color: "#AAA39B", maxWidth: "14ch" }}>
                  <p className="font-semibold text-[#F7F0E6] mb-0.5">Changes:</p>
                  <p className="leading-relaxed">{changes}</p>
                </div>
              )}
            </div>

            <button
              onClick={handleAdd}
              className="w-full rounded-full py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300"
              style={{
                background: added
                  ? "linear-gradient(135deg, #D6A85F, #E8BF74)"
                  : "linear-gradient(135deg, #FF7628, #FF9650)",
                color: "#080808",
                transform: added ? "scale(0.98)" : "scale(1)",
              }}
            >
              {added ? "✓ Added to order!" : "Add to order →"}
            </button>

            <p className="mt-3 text-center text-[10px]" style={{ color: "#AAA39B" }}>
              Ingredient prices shown are demo values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
