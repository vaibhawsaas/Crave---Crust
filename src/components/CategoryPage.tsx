import { Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS, byCat, type CategorySlug } from "@/lib/catalog";
import { FilterableGrid } from "./FilterableGrid";
import { ProductCard } from "./ProductCard";

export function categoryHead(slug: CategorySlug) {
  const c = CATEGORIES.find((x) => x.slug === slug)!;
  const title = `${c.label} — ${c.headline} | Crave & Crust`;
  return {
    meta: [
      { title },
      { name: "description", content: c.sub },
      { property: "og:title", content: title },
      { property: "og:description", content: c.sub },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function CategoryPage({
  slug,
  layout = "split",
  extra,
}: {
  slug: CategorySlug;
  layout?: "split" | "banner" | "stack";
  extra?: React.ReactNode;
}) {
  const c = CATEGORIES.find((x) => x.slug === slug)!;
  const items = byCat(slug);
  const featured = items.filter((p) => p.popular)[0] ?? items[0];
  const others = CATEGORIES.filter((x) => x.slug !== slug).slice(0, 6);

  return (
    <div style={{ background: "#080808", color: "#F7F0E6" }}>
      {/* Category hero */}
      {layout === "banner" ? (
        <section className="relative overflow-hidden">
          <img
            src={c.img}
            alt={c.label}
            width={1600}
            height={900}
            className="h-[65vh] w-full object-cover"
            style={{ filter: "brightness(0.5) saturate(1.2)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-14">
            <span className="section-label mb-4">{c.label}</span>
            <h1 className="mt-3 font-display max-w-3xl text-5xl leading-[0.92] text-[#F7F0E6] md:text-7xl">
              {c.headline}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "#AAA39B" }}>
              {c.sub}
            </p>
          </div>
        </section>
      ) : (
        <section
          className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, rgba(214,168,95,0.05) 0%, transparent 60%)",
          }}
        >
          <div className={layout === "stack" ? "md:order-2" : ""}>
            <span className="section-label mb-4">{c.label}</span>
            <h1 className="mt-3 font-display text-5xl leading-[0.92] text-[#F7F0E6] md:text-7xl">
              {c.headline}
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-base" style={{ color: "#AAA39B" }}>
              {c.sub}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {c.blurb.map((b) => (
                <li
                  key={b}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: "rgba(214,168,95,0.1)",
                    color: "#D6A85F",
                    border: "1px solid rgba(214,168,95,0.2)",
                  }}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[2.5rem] opacity-20"
              style={{ background: "radial-gradient(ellipse at center, #D6A85F, transparent 70%)" }}
              aria-hidden
            />
            <img
              src={c.img}
              alt={c.label}
              width={1024}
              height={1024}
              className="relative w-full rounded-[2.5rem] object-cover shadow-soft"
              style={{
                aspectRatio: "1",
                filter: "brightness(0.85) saturate(1.2)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </section>
      )}

      {extra}

      {/* Featured spotlight */}
      {featured && (
        <section
          className="mx-auto max-w-7xl px-6 pb-8"
          aria-labelledby="featured-title"
        >
          <div
            className="grid items-center gap-6 rounded-2xl p-6 md:grid-cols-[1fr_1.2fr] md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(214,168,95,0.08) 0%, rgba(17,17,17,0.9) 100%)",
              border: "1px solid rgba(214,168,95,0.12)",
            }}
          >
            <div>
              <span className="section-label mb-3">House favourite</span>
              <h2 id="featured-title" className="mt-2 font-display text-3xl text-[#F7F0E6]">
                {featured.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#AAA39B" }}>
                {featured.desc}
              </p>
              <Link
                to="/product/$slug"
                params={{ slug: featured.slug }}
                className="btn-gold mt-5 inline-flex !py-3 !px-6 !text-sm"
              >
                View dish · ₹{featured.price}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {items
                .filter((p) => p !== featured)
                .slice(0, 2)
                .map((p) => (
                  <ProductCard key={p.slug} p={p} />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Full menu */}
      <section className="mx-auto max-w-7xl px-6 py-14" aria-labelledby="menu-title">
        <h2 id="menu-title" className="font-display text-3xl text-[#F7F0E6] md:text-4xl">
          The full {c.label.toLowerCase()} menu
        </h2>
        <div className="mt-6">
          <FilterableGrid products={items} />
        </div>
      </section>

      {/* Cross-category links */}
      <section className="mx-auto max-w-7xl px-6 pb-20" aria-label="Explore other categories">
        <h2 className="font-display text-xl text-[#F7F0E6] mb-4">Still craving?</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to={o.path}
              className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#F7F0E6",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(214,168,95,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#D6A85F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F7F0E6";
              }}
            >
              {o.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export const allProducts = PRODUCTS;
