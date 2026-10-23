import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms", "Terms of use for Crave & Crust."),
  component: () => (
    <Prose eyebrow="Terms" title="Terms of use">
      <p>Prices, offers and menus are shown for demonstration and may change. Orders are confirmed only once we reply on WhatsApp.</p>
      <p>This is demo text — replace it with your business’s actual terms.</p>
    </Prose>
  ),
});
