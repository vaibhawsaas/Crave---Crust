import { createFileRoute, Link } from "@tanstack/react-router";
import { IMG, PRODUCTS } from "@/lib/catalog";
import { Faq, Shelf } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/bakery")({
  head: () => seo("Bakery", "Little treats. Big happiness. Cakes, croissants, cookies and custom celebration cakes."),
  component: Bakery,
});

const SHOP = ["Birthday cakes", "Celebration cakes", "Chocolate cakes", "Cheesecakes", "Croissants", "Cookies", "Brownies", "Breads"];

function Bakery() {
  const cakes = PRODUCTS.filter((p) => p.cat === "cakes");
  const sweets = PRODUCTS.filter((p) => p.cat === "desserts");
  return (
    <div className="theme-bakery">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Bakery</p>
          <h1 className="mt-3 text-6xl leading-[0.9] md:text-8xl">Little treats.<br /><em className="text-primary">Big happiness.</em></h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">Baked from 5am with French butter, Belgian chocolate and a lot of patience.</p>
          <a href="#custom" className="mt-8 inline-block rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground">Order a custom cake</a>
        </div>
        <img src={IMG.bakery} alt="Croissants, tart, cookies, brownies and sourdough" width={1600} height={1104} className="rounded-[3rem] rounded-tr-none shadow-soft" />
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap gap-3">{SHOP.map((s) => <span key={s} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold">{s}</span>)}</div>
      </section>

      <Shelf title="Signature cakes" note="500g serves 4–6" items={cakes} />
      <Shelf title="Fresh pastries, cookies & brownies" note="Out of the oven daily" items={sweets.slice(0, 8)} />

      <section id="custom" className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 rounded-[2.5rem] bg-secondary p-8 text-espresso md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-4xl md:text-5xl">Custom celebration cakes</h2>
            <p className="mt-4">Tell us the flavour, size, message and date. We'll sketch it, price it and confirm on WhatsApp.</p>
            <Link to="/cakes" className="mt-6 inline-block rounded-full bg-espresso px-6 py-3 font-semibold text-cream">Browse cakes</Link>
          </div>
          <ul className="space-y-3 text-sm">
            {[["Notice", "48 hours for custom designs, same-day for signatures"], ["Sizes", "500g · 1kg · 2kg · tiered on request"], ["Pickup", "Rosemary Bakehouse, Ballygunge — 9am to 9pm"], ["Delivery", "Chilled delivery within 8 km"]].map(([a, b]) => (
              <li key={a} className="flex justify-between gap-4 border-b border-espresso/20 pb-3"><span className="font-semibold">{a}</span><span className="text-right">{b}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-2">
        <div><h2 className="text-4xl">Our bakery story</h2><p className="mt-4 text-muted-foreground">It started with one sourdough starter named Rosemary. She's eleven now, and still the first thing we feed every morning.</p></div>
        <Faq items={[["Are your cakes eggless?", "Most signatures have an eggless option — just mention it in your order note."], ["Can you write a message?", "Yes, up to 30 characters, free."], ["How do I order a custom cake?", "Add a cake to your order and describe your design in the note, or message us on WhatsApp."]]} />
      </section>
    </div>
  );
}
