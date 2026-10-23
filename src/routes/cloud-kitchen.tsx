import { createFileRoute } from "@tanstack/react-router";
import { IMG, PRODUCTS } from "@/lib/catalog";
import { Shelf } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cloud-kitchen")({
  head: () => seo("Cloud Kitchen", "Big flavour. Zero boring bites. Combos, quick bites and spicy favourites delivered fast."),
  component: Kitchen,
});

function Kitchen() {
  const k = PRODUCTS.filter((p) => p.cat === "kitchen");
  return (
    <div className="theme-kitchen">
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em]">Cloud Kitchen · Delivery only</p>
            <h1 className="mt-3 text-6xl font-semibold uppercase leading-[0.85] md:text-8xl">Big flavour.<br />Zero boring bites.</h1>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              {["⚡ 20 min avg", "🌶 Spice levels 1–5", "📦 Sealed packaging"].map((t) => <span key={t} className="rounded-full bg-espresso px-4 py-2 text-cream">{t}</span>)}
            </div>
          </div>
          <img src={IMG.kitchen} alt="Fried chicken, loaded fries and wraps in boxes" width={1600} height={1104} className="-rotate-2 rounded-3xl shadow-soft" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {["Korean", "Peri-peri", "Wraps", "Fries", "Combos", "Biryani", "Momos"].map((c) => <span key={c} className="whitespace-nowrap rounded-xl border-2 border-espresso px-5 py-3 font-bold uppercase">{c}</span>)}
        </div>
      </section>
      <Shelf title="Popular meals" items={k.filter((p) => !p.tags?.includes("combo"))} />
      <Shelf title="Value combos" note="Meal + side + drink" items={k.filter((p) => p.tags?.includes("combo"))} />
      <Shelf title="Spicy favourites 🌶" items={PRODUCTS.filter((p) => p.tags?.includes("spicy")).slice(0, 4)} />
      <Shelf title="Vegetarian picks" items={PRODUCTS.filter((p) => p.veg && ["kitchen", "momos", "burgers"].includes(p.cat)).slice(0, 4)} />
      <div className="h-12" />
    </div>
  );
}
