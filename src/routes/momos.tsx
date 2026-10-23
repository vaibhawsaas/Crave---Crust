import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/momos")({
  head: () => categoryHead("momos"),
  component: () => <CategoryPage slug="momos" layout="split" />,
});
