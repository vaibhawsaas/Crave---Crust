import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS } from "@/lib/catalog";
import { FilterableGrid } from "@/components/FilterableGrid";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/explore")({
  validateSearch: (s: Record<string, unknown>): { q?: string | undefined } => ({
    q: typeof s["q"] === "string" ? (s["q"] as string) : undefined,
  }),
  head: () => seo("Explore food", "Search every dish, filter by veg, price, popularity and delivery time."),
  component: Explore,
});

function Explore() {
  const { q } = Route.useSearch();

  return (
    <div style={{ background: "#080808", color: "#F7F0E6", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="px-6 pt-16 pb-10 max-w-7xl mx-auto"
        style={{
          background: "radial-gradient(ellipse at 60% 0%, rgba(214,168,95,0.05) 0%, transparent 60%)",
        }}
      >
        <span className="section-label mb-4">Explore</span>
        <h1 className="font-display mt-3 text-5xl text-[#F7F0E6] md:text-7xl leading-[0.92]">
          Everything<br />we cook.
        </h1>
        <p className="mt-4 text-sm max-w-md" style={{ color: "#AAA39B" }}>
          {PRODUCTS.length} dishes across {CATEGORIES.length} categories. Find exactly what you're craving.
        </p>

        {/* Category quick-links */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={c.path}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#AAA39B",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(214,168,95,0.4)";
                el.style.color = "#D6A85F";
                el.style.background = "rgba(214,168,95,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.color = "#AAA39B";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Filter grid */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <FilterableGrid key={q} products={PRODUCTS} initialQ={q ?? ""} />
      </div>
    </div>
  );
}
