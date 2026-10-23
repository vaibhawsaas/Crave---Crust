import { createFileRoute } from "@tanstack/react-router";
import { IMG, PRODUCTS } from "@/lib/catalog";
import { Shelf } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cafes")({
  head: () => seo("Café", "Slow mornings, served. Single-origin coffee, cold brew, brunch plates and pastries."),
  component: Cafe,
});

function Cafe() {
  return (
    <div className="theme-cafe">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <h1 className="text-6xl leading-[0.9] md:text-8xl">Slow mornings,<br /><em className="text-primary">served.</em></h1>
          <p className="text-lg text-muted-foreground">Chikmagalur beans roasted weekly, 18-hour cold brew, and brunch until 4pm. Bring a book.</p>
        </div>
        <img src={IMG.cafe} alt="Cappuccino, cold brew, avocado toast and croissant" width={1600} height={1104} className="mt-10 aspect-[21/9] w-full rounded-[2.5rem] object-cover" />
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3">
        {[["Espresso bar", "7am – 11pm"], ["All-day brunch", "8am – 4pm"], ["Work-friendly", "Wi-Fi & plugs at every table"]].map(([a, b]) => (
          <div key={a} className="rounded-3xl bg-muted p-6"><p className="font-display text-2xl">{a}</p><p className="text-muted-foreground">{b}</p></div>
        ))}
      </section>
      <Shelf title="Coffee & cold drinks" items={PRODUCTS.filter((p) => ["cold-brew-tonic", "cappuccino", "mango-lassi", "berry-smoothie"].includes(p.slug))} />
      <Shelf title="Brunch & bakes" items={PRODUCTS.filter((p) => p.cat === "cafe" || p.slug === "butter-croissant" || p.slug === "choc-chip-cookie")} />
      <div className="h-12" />
    </div>
  );
}
