import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cart, useCart } from "@/lib/cart";
import { LOCATIONS } from "@/lib/catalog";
import { BRAND } from "@/lib/brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/3d-food-lab", label: "Menu" },
  { to: "/explore", label: "Explore" },
  { to: "/restaurants", label: "Restaurants" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About" },
] as const;

const CRAVINGS = [
  { to: "/biryani", label: "Biryani" },
  { to: "/burgers", label: "Burgers" },
  { to: "/pizza", label: "Pizza" },
  { to: "/momos", label: "Momos" },
  { to: "/noodles", label: "Noodles" },
  { to: "/cakes", label: "Cakes" },
  { to: "/desserts", label: "Desserts" },
  { to: "/beverages", label: "Beverages" },
] as const;

function useCount() {
  const { lines } = useCart();
  return lines.reduce((s, l) => s + l.qty, 0);
}

function Location() {
  const [loc, setLoc] = useState(LOCATIONS[0]);
  useEffect(() => {
    const s = localStorage.getItem("cc-loc");
    if (s) setLoc(s);
  }, []);
  return (
    <label className="flex min-w-0 items-center gap-1.5 text-sm">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#D6A85F]" />
      <select
        aria-label="Delivery location"
        value={loc}
        onChange={(e) => {
          setLoc(e.target.value);
          localStorage.setItem("cc-loc", e.target.value);
        }}
        className="min-w-0 truncate bg-transparent font-medium text-[#AAA39B] outline-none text-xs cursor-pointer hover:text-[#F7F0E6] transition-colors"
      >
        {LOCATIONS.map((l) => (
          <option key={l} style={{ background: "#111" }}>{l}</option>
        ))}
      </select>
    </label>
  );
}

function Search({ className = "" }: { className?: string }) {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  return (
    <form
      role="search"
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        nav({ to: "/explore", search: { q } });
      }}
    >
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAA39B] text-sm">⌕</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search dishes, cuisines…"
          aria-label="Search food"
          className="w-full rounded-full border border-white/8 bg-white/5 pl-10 pr-5 py-2.5 text-sm text-[#F7F0E6] outline-none transition-all focus:border-[#D6A85F]/40 focus:bg-white/8 focus:ring-2 focus:ring-[#D6A85F]/10 placeholder:text-[#AAA39B]/50"
        />
      </div>
    </form>
  );
}

export function SiteHeader() {
  const count = useCount();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        {/* Logo */}
        <Link to="/" className="group shrink-0 flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-[#F7F0E6] tracking-tight">
            Crave{" "}
            <span className="text-[#FF7628] transition-transform duration-300 inline-block group-hover:rotate-12">
              &
            </span>{" "}
            Crust
          </span>
        </Link>

        {/* Location (desktop) */}
        <div className="hidden md:block ml-2">
          <Location />
        </div>

        {/* Search bar */}
        <Search className="hidden flex-1 lg:block lg:max-w-sm mx-auto" />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="link-underline whitespace-nowrap px-3 py-1.5 text-sm font-medium text-[#AAA39B] transition-colors hover:text-[#F7F0E6]"
              activeProps={{ className: "!text-[#D6A85F]" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Cart button */}
        <button
          id="cart-btn"
          onClick={() => cart.setOpen(true)}
          className="btn-primary ml-auto lg:ml-0 relative flex items-center gap-2 !py-2 !px-4 !text-sm shrink-0"
          aria-label={`Cart, ${count} items`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span>Cart</span>
          {count > 0 && (
            <span
              className="absolute -top-2 -right-2 min-w-[1.2rem] h-5 flex items-center justify-center rounded-full bg-[#D6A85F] text-[10px] font-bold text-[#080808] px-1 tabular-nums"
              aria-live="polite"
            >
              {count}
            </span>
          )}
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-2 flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-5 bg-[#F7F0E6] transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#F7F0E6] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#F7F0E6] transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/6 bg-[#0c0c0c]/98 px-4 pb-6 pt-4">
          <Search className="mb-4" />
          <Location />
          <nav className="mt-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMobileOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#AAA39B] transition-colors hover:bg-white/5 hover:text-[#F7F0E6]"
                activeProps={{ className: "!text-[#D6A85F] !bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/6">
            <p className="eyebrow text-[#AAA39B] mb-2">Categories</p>
            <div className="flex flex-wrap gap-2">
              {CRAVINGS.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#AAA39B] hover:border-[#D6A85F]/40 hover:text-[#D6A85F] transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function MobileNav() {
  const count = useCount();
  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="mobile-nav fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 md:hidden"
    >
      <Link
        to="/"
        className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-[#AAA39B] transition-colors"
        activeOptions={{ exact: true }}
        activeProps={{ className: "!text-[#D6A85F]" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Home
      </Link>
      <Link
        to="/explore"
        className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-[#AAA39B] transition-colors"
        activeProps={{ className: "!text-[#D6A85F]" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        Explore
      </Link>
      <Link
        to="/offers"
        className="flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-[#AAA39B] transition-colors"
        activeProps={{ className: "!text-[#D6A85F]" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        Offers
      </Link>
      <button
        onClick={() => cart.setOpen(true)}
        className="relative flex flex-col items-center gap-1 py-3 text-[10px] font-semibold text-[#AAA39B]"
        aria-label={`Cart, ${count} items`}
      >
        {count > 0 && (
          <span className="absolute top-2 right-6 min-w-[1rem] h-4 flex items-center justify-center rounded-full bg-[#FF7628] text-[9px] font-bold text-black px-1">
            {count}
          </span>
        )}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        Cart
      </button>
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer pb-24 pt-16 md:pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl text-[#F7F0E6]">
              Crave <span className="text-[#FF7628]">&</span> Crust
            </p>
            <p className="mt-3 text-sm text-[#AAA39B] leading-relaxed">
              Real food. Unreal cravings.
              <br />
              {BRAND.address}
            </p>
            <div className="mt-5 space-y-1 text-sm text-[#AAA39B]">
              {BRAND.hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4 max-w-[200px]">
                  <span>{day}</span>
                  <span className="text-[#F7F0E6]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eat */}
          <div>
            <p className="eyebrow text-[#D6A85F] mb-4">Eat</p>
            <ul className="space-y-2.5 text-sm text-[#AAA39B]">
              {[
                { to: "/explore", label: "Explore food" },
                { to: "/restaurants", label: "Restaurants" },
                { to: "/bakery", label: "Bakery" },
                { to: "/cloud-kitchen", label: "Cloud Kitchen" },
                { to: "/cafes", label: "Cafés" },
                { to: "/3d-food-lab", label: "Menu Book" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline hover:text-[#F7F0E6] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cravings */}
          <div>
            <p className="eyebrow text-[#D6A85F] mb-4">Cravings</p>
            <ul className="space-y-2.5 text-sm text-[#AAA39B]">
              {CRAVINGS.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="link-underline hover:text-[#F7F0E6] transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="eyebrow text-[#D6A85F] mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-[#AAA39B]">
              {[
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Contact" },
                { to: "/faq", label: "FAQ" },
                { to: "/offers", label: "Offers" },
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline hover:text-[#F7F0E6] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="eyebrow text-[#D6A85F] mb-3">Contact</p>
              <p className="text-sm text-[#AAA39B]">{BRAND.phone}</p>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-[#25D366] hover:opacity-80 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#AAA39B]/60">
            © {year} Crave & Crust · All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#AAA39B]/40">
            <span>Crafted with passion in Kolkata</span>
            <span className="text-[#FF7628]">●</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
