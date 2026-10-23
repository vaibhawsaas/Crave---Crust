import { createFileRoute } from "@tanstack/react-router";
import { Prose, Faq } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ", "Answers about ordering, delivery and custom cakes."),
  component: () => (
    <Prose eyebrow="FAQ" title="Questions, answered.">
      <Faq items={[["How do I order?", "Add dishes to your cart and tap Order on WhatsApp. We confirm within minutes."], ["Where do you deliver?", "Within 6 km of each kitchen. Free above ₹499."], ["Is the food vegetarian?", "Every dish shows a green (veg) or red (non-veg) mark."], ["Can I customise?", "Yes — pick sizes and extras on any dish, or build a burger in the 3D Lab."], ["How do promo codes work?", "Mention the code in your WhatsApp order and we apply it."]]} />
    </Prose>
  ),
});
