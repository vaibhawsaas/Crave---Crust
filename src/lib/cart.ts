import { useSyncExternalStore } from "react";
import { BRAND } from "./brand";

export type CartLine = { key: string; name: string; unit: number; qty: number; note?: string };

let lines: CartLine[] = [];
let open = false;
const subs = new Set<() => void>();
const emit = () => {
  try { localStorage.setItem("cc-cart", JSON.stringify(lines)); } catch { /* ignore */ }
  subs.forEach((f) => f());
};
let snapshot = { lines, open };
const refresh = () => { snapshot = { lines, open }; emit(); };

export function hydrateCart() {
  try {
    const raw = localStorage.getItem("cc-cart");
    if (raw) { lines = JSON.parse(raw); refresh(); }
  } catch { /* ignore */ }
}

export const cart = {
  add(l: Omit<CartLine, "qty">) {
    const ex = lines.find((x) => x.key === l.key);
    lines = ex ? lines.map((x) => (x.key === l.key ? { ...x, qty: x.qty + 1 } : x)) : [...lines, { ...l, qty: 1 }];
    open = true; refresh();
  },
  setQty(key: string, qty: number) {
    lines = qty <= 0 ? lines.filter((x) => x.key !== key) : lines.map((x) => (x.key === key ? { ...x, qty } : x));
    refresh();
  },
  clear() { lines = []; refresh(); },
  setOpen(v: boolean) { open = v; refresh(); },
};

const empty = { lines: [] as CartLine[], open: false };
export function useCart() {
  return useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, () => snapshot, () => empty);
}

export function totals(ls: CartLine[]) {
  const subtotal = ls.reduce((s, l) => s + l.unit * l.qty, 0);
  const delivery = subtotal === 0 || subtotal >= BRAND.freeDeliveryAbove ? 0 : BRAND.deliveryFee;
  return { subtotal, delivery, total: subtotal + delivery };
}

export function whatsappLink(ls: CartLine[], name: string, address: string) {
  const t = totals(ls);
  const body = [
    `Hi ${BRAND.name}! New order:`,
    ...ls.map((l) => `• ${l.qty}× ${l.name} — ₹${l.unit * l.qty}${l.note ? `\n   (${l.note})` : ""}`),
    `Subtotal: ₹${t.subtotal}`,
    `Delivery: ₹${t.delivery}`,
    `Total: ₹${t.total}`,
    name && `Name: ${name}`,
    address && `Address: ${address}`,
  ].filter(Boolean).join("\n");
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(body)}`;
}
