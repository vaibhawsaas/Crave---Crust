import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/desserts")({
  head: () => categoryHead("desserts"),
  component: () => <CategoryPage slug="desserts" layout="split" />,
});
