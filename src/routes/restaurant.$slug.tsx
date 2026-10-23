import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS, RESTAURANTS } from "@/lib/catalog";
import { FilterableGrid } from "@/components/FilterableGrid";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/restaurant/$slug")({
  loader: ({ params }) => {
    const r = RESTAURANTS.find((x) => x.slug === params.slug);
    if (!r) throw notFound();
    return r;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — ${loaderData.cuisine} | Crave & Crust` },
      { name: "description", content: `${loaderData.tagline} Order from ${loaderData.name} in ${loaderData.area}.` },
      { property: "og:title", content: `${loaderData.name} | Crave & Crust` },
      { property: "og:description", content: loaderData.tagline },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [{ title: "Restaurant unavailable | Crave & Crust" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="p-20 text-center"><h1 className="text-4xl">Restaurant not found</h1><Link to="/restaurants" className="mt-4 inline-block text-coral underline">All restaurants</Link></div>,
  component: RestaurantPage,
});

function RestaurantPage() {
  const r = Route.useLoaderData();
  const items = PRODUCTS.filter((p) => r.cats.includes(p.cat));
  return (
    <div>
      <section className="relative">
        <img src={r.img} alt={r.name} className="h-[45vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10 text-cream">
          <h1 className="text-5xl md:text-6xl">{r.name}</h1>
          <p className="mt-2 text-cream/80">{r.cuisine} · {r.area} · ★ {r.rating} · {r.time} min · {"₹".repeat(r.price)}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_280px]">
        <div><h2 className="text-3xl">Menu</h2><div className="mt-6"><FilterableGrid products={items} /></div></div>
        <aside className="h-fit rounded-3xl bg-mint p-6 text-espresso">
          <p className="font-display text-2xl">Opening hours</p>
          <dl className="mt-3 space-y-1 text-sm">{BRAND.hours.map(([d, h]) => <div key={d} className="flex justify-between"><dt>{d}</dt><dd>{h}</dd></div>)}</dl>
          <p className="mt-4 text-sm">{r.area}, Kolkata</p>
        </aside>
      </section>
    </div>
  );
}
