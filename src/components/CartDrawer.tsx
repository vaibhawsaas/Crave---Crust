import { useEffect, useState } from "react";
import { cart, hydrateCart, totals, useCart, whatsappLink } from "@/lib/cart";
import { BRAND } from "@/lib/brand";

export function CartDrawer() {
  const { lines, open } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => hydrateCart(), []);
  const t = totals(lines);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => cart.setOpen(false)}
        aria-hidden
        className="fixed inset-0 z-40 transition-all duration-500"
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: open ? "blur(4px)" : "none",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Panel */}
      <aside
        aria-label="Your order"
        aria-modal={open}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[400px] flex-col transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          background: "#111111",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
          <div>
            <p className="eyebrow text-[#D6A85F]">Your order</p>
            <h3 className="font-display text-2xl text-[#F7F0E6] mt-0.5">
              {lines.length === 0 ? "Cart is empty" : `${lines.reduce((s, l) => s + l.qty, 0)} item${lines.reduce((s, l) => s + l.qty, 0) === 1 ? "" : "s"}`}
            </h3>
          </div>
          <button
            onClick={() => cart.setOpen(false)}
            aria-label="Close cart"
            className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-[#AAA39B] hover:text-[#F7F0E6] hover:border-white/20 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl">
                🛍
              </div>
              <div>
                <p className="text-[#F7F0E6] font-medium">Nothing here yet</p>
                <p className="text-sm text-[#AAA39B] mt-1">Something tasty awaits.</p>
              </div>
              <button
                onClick={() => cart.setOpen(false)}
                className="btn-primary !py-2.5 !px-5 !text-sm mt-2"
              >
                Explore menu →
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              {lines.map((l) => (
                <div
                  key={l.key}
                  className="flex items-start gap-4 py-4 border-b border-white/6"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#F7F0E6] leading-tight">{l.name}</p>
                    {l.note && (
                      <p className="text-xs text-[#AAA39B] mt-0.5 truncate">{l.note}</p>
                    )}
                    <div className="mt-2.5 flex items-center gap-2">
                      <button
                        onClick={() => cart.setQty(l.key, l.qty - 1)}
                        className="h-7 w-7 rounded-full border border-white/12 text-[#AAA39B] hover:border-[#FF7628]/40 hover:text-[#FF7628] transition-all flex items-center justify-center text-sm"
                        aria-label={`Remove one ${l.name}`}
                      >
                        −
                      </button>
                      <span className="w-6 text-center tabular-nums text-sm text-[#F7F0E6] font-medium">
                        {l.qty}
                      </span>
                      <button
                        onClick={() => cart.setQty(l.key, l.qty + 1)}
                        className="h-7 w-7 rounded-full border border-white/12 text-[#AAA39B] hover:border-[#D6A85F]/40 hover:text-[#D6A85F] transition-all flex items-center justify-center text-sm"
                        aria-label={`Add one more ${l.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="price-tag !text-xl">₹{l.unit * l.qty}</p>
                    <button
                      onClick={() => cart.setQty(l.key, 0)}
                      className="text-xs text-[#AAA39B]/50 hover:text-[#FF7628] transition-colors mt-1"
                      aria-label={`Remove ${l.name}`}
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer totals + checkout */}
        {lines.length > 0 && (
          <div className="border-t border-white/8 px-6 py-5 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#AAA39B]">
                <span>Subtotal</span>
                <span className="text-[#F7F0E6]">₹{t.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-[#AAA39B]">
                <span>Delivery {t.delivery === 0 ? "(free 🎉)" : ""}</span>
                <span className="text-[#F7F0E6]">₹{t.delivery}</span>
              </div>
              {t.subtotal < BRAND.freeDeliveryAbove && (
                <p className="text-xs text-[#D6A85F]/80 bg-[#D6A85F]/8 rounded-lg px-3 py-2">
                  Add ₹{BRAND.freeDeliveryAbove - t.subtotal} more for free delivery
                </p>
              )}
              <div className="flex justify-between pt-2 border-t border-white/6">
                <span className="font-display text-xl text-[#F7F0E6]">Total</span>
                <span className="price-tag !text-2xl">₹{t.total}</span>
              </div>
            </div>

            <div className="space-y-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input-dark !text-sm"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery address"
                className="input-dark !text-sm"
              />
            </div>

            <a
              href={whatsappLink(lines, name, address)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center !py-3.5 !text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Order on WhatsApp
            </a>
            <button
              onClick={() => cart.clear()}
              className="w-full text-center text-xs text-[#AAA39B]/50 hover:text-[#AAA39B] transition-colors py-1"
            >
              Clear order
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
