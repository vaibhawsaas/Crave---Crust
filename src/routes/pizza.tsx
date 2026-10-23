import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/pizza")({
  head: () => categoryHead("pizza"),
  component: () => <CategoryPage slug="pizza" layout="stack" />,
});
