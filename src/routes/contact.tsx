import { createFileRoute } from "@tanstack/react-router";
import { Prose } from "@/components/Venue";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Call, WhatsApp or visit Crave & Crust."),
  component: () => (
    <Prose eyebrow="Contact" title="Say hello.">
      <p>WhatsApp / phone: +91 99999 99999</p>
      <p>Email: hello@craveandcrust.example</p>
      <p>Flagship: 12 Park Street, Kolkata 700016</p>
    </Prose>
  ),
});
