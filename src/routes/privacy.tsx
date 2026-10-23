import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("Privacy", "How Crave & Crust handles your information."),
  component: () => (
    <Prose eyebrow="Privacy" title="Privacy policy">
      <p>Your cart is stored only in your browser. When you order, the details you type are sent by you through WhatsApp; we use them only to fulfil your order.</p>
      <p>This is demo text — replace it with your business’s actual policy.</p>
    </Prose>
  ),
});
