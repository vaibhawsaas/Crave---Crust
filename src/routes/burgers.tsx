import { createFileRoute, Link } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/burgers")({
  head: () => categoryHead("burgers"),
  component: () => (
    <CategoryPage
      slug="burgers"
      layout="split"
      extra={
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <Link
            to="/3d-food-lab"
            className="flex items-center justify-between rounded-2xl p-8 transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, rgba(255,118,40,0.15) 0%, rgba(214,168,95,0.06) 100%)",
              border: "1px solid rgba(255,118,40,0.2)",
              color: "#F7F0E6",
            }}
          >
            <div>
              <p className="font-display text-3xl text-[#F7F0E6]">Build your burger in 3D →</p>
              <p className="mt-1 text-sm text-[#AAA39B]">Every layer, your way. Prices update live.</p>
            </div>
            <span className="hidden text-3xl md:block" style={{ color: "#FF7628" }}>↗</span>
          </Link>
        </section>
      }
    />
  ),
});
