import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cart, totals, useCart, whatsappLink } from "@/lib/cart";
import { BRAND } from "@/lib/brand";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cart")({
  head: () => seo("Your cart", "Review your order and send it on WhatsApp."),
  component: CartPage,
});

function CartPage() {
  const { lines } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const t = totals(lines);
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-5xl">Your cart</h1>
      {!lines.length ? (
        <div className="mt-8 rounded-3xl bg-muted p-12 text-center"><p className="font-display text-2xl">Your cart is hungry.</p><Link to="/explore" className="mt-4 inline-block rounded-full bg-coral px-6 py-3 font-semibold text-white">Explore food</Link></div>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_340px]">
          <ul className="divide-y rounded-3xl bg-card p-6 shadow-soft">
            {lines.map((l) => (
              <li key={l.key} className="flex items-center gap-4 py-4">
                <div className="min-w-0 flex-1"><p className="font-display text-lg">{l.name}</p>{l.note && <p className="truncate text-xs text-muted-foreground">{l.note}</p>}</div>
                <div className="flex items-center gap-2"><button onClick={() => cart.setQty(l.key, l.qty - 1)} className="h-8 w-8 rounded-full border">−</button><span className="w-5 text-center">{l.qty}</span><button onClick={() => cart.setQty(l.key, l.qty + 1)} className="h-8 w-8 rounded-full border">+</button></div>
                <span className="w-16 text-right tabular-nums">₹{l.unit * l.qty}</span>
              </li>
            ))}
          </ul>
          <aside className="h-fit space-y-3 rounded-3xl bg-mint p-6 text-espresso">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{t.subtotal}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{t.delivery ? `₹${t.delivery}` : "Free"}</span></div>
            {t.subtotal < BRAND.freeDeliveryAbove && <p className="text-xs">Add ₹{BRAND.freeDeliveryAbove - t.subtotal} more for free delivery.</p>}
            <div className="flex justify-between font-display text-2xl"><span>Total</span><span>₹{t.total}</span></div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl bg-white px-4 py-3" />
            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address" className="w-full rounded-xl bg-white px-4 py-3" />
            <a href={whatsappLink(lines, name, address)} target="_blank" rel="noreferrer" className="block rounded-full bg-espresso py-4 text-center font-semibold text-cream">Order on WhatsApp</a>
          </aside>
        </div>
      )}
    </div>
  );
}
