import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/biryani")({
  head: () => categoryHead("biryani"),
  component: () => <CategoryPage slug="biryani" layout="banner" />,
});
