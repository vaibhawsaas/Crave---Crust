import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/CategoryPage";

export const Route = createFileRoute("/noodles")({
  head: () => categoryHead("noodles"),
  component: () => <CategoryPage slug="noodles" layout="banner" />,
});
