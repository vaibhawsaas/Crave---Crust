import { createFileRoute } from "@tanstack/react-router";
import { MenuBook } from "@/components/MenuBook";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/3d-food-lab")({
  head: () =>
    seo(
      "Menu — Crave & Crust",
      "Flip through our authentic leather-bound restaurant menu book. Handcrafted biryanis, wood-fired pizzas, gourmet smash burgers and artisanal starters."
    ),
  component: () => (
    <main className="min-h-screen bg-[#080808]">
      <MenuBook />
    </main>
  ),
});
