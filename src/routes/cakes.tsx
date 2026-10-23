import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/cakes")({
  head: () => categoryHead("cakes"),
  component: () => <CategoryPage slug="cakes" layout="stack" />,
});
