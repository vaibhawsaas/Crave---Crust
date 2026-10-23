import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/beverages")({
  head: () => categoryHead("beverages"),
  component: () => <CategoryPage slug="beverages" layout="banner" />,
});
