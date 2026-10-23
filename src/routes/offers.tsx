import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/offers")({
  head: () =>
    seo(
      "Offers & Dining Privileges | Crave & Crust",
      "Exclusive dining privileges, promo vouchers, and app partnerships with Zomato, Swiggy, EazyDiner, CRED, and premium banks."
    ),
  component: OffersPage,
});

export interface OfferItem {
  id: string;
  code: string;
  badge: string;
  partner: "Direct" | "Zomato" | "Swiggy" | "EazyDiner" | "CRED" | "Bank";
  title: string;
  discount: string;
  desc: string;
  minBill: string;
  validity: string;
  accent: string;
  partnerLogo?: string;
  perks: string[];
}

export const EXCLUSIVE_OFFERS: OfferItem[] = [
  {
    id: "crave-first",
    code: "CRAVE50",
    badge: "Direct Welcome Privilege",
    partner: "Direct",
    title: "50% Off First Dining or Cloud Order",
    discount: "50% OFF",
    desc: "Experience Crave & Crust for the first time. Valid across all 6 flagship dining rooms and online menu book orders.",
    minBill: "Min. Order ₹299 · Max Discount ₹150",
    validity: "Valid for all new guests",
    accent: "from-[#D6A85F] via-[#FF7628] to-[#D6A85F]",
    perks: ["Applicable on full menu", "Valid for Dine-in & Takeaway", "Instant bill deduction"],
  },
  {
    id: "zomato-gold",
    code: "ZOMATOGOLD",
    badge: "Zomato Gold Exclusive",
    partner: "Zomato",
    title: "1+1 on Royal Biryani & Pizzas + 20% Off",
    discount: "1+1 & 20% OFF",
    desc: "Exclusive partner privilege for Zomato Gold members dining in at Park Street, Salt Lake, and Ballygunge locations.",
    minBill: "No minimum spend · Dine-in exclusive",
    validity: "Valid on all weekdays & Sundays",
    accent: "from-[#CB202D] via-[#E23744] to-[#CB202D]",
    perks: ["Complimentary second main course", "Priority table seating", "Free dessert on orders above ₹1500"],
  },
  {
    id: "swiggy-one",
    code: "SWIGGYONE",
    badge: "Swiggy One & Dineout",
    partner: "Swiggy",
    title: "Flat ₹150 Off + Free Express Delivery",
    discount: "₹150 OFF",
    desc: "Order via Swiggy or pay your dining bill with Swiggy Dineout for instant cashback and zero delivery charges.",
    minBill: "Min. Order ₹399 · Use on Swiggy App",
    validity: "Valid on all 6 Kolkata cloud hubs",
    accent: "from-[#FC8019] via-[#FFA441] to-[#FC8019]",
    perks: ["Free delivery under 25 mins", "Zero surge fees", "Extra 10% Dineout bill cashback"],
  },
  {
    id: "eazydiner-prime",
    code: "EAZYPRIME",
    badge: "EazyDiner Prime Partner",
    partner: "EazyDiner",
    title: "Guaranteed Table + 25% Off Total Bill",
    discount: "25% OFF BILL",
    desc: "Reserve via EazyDiner Prime for guaranteed prime booth seating, complimentary chef amuse-bouche, and 25% off food & soft beverages.",
    minBill: "Dine-in booking required",
    validity: "Valid at all flagship venues",
    accent: "from-[#1F4591] via-[#2F6BE0] to-[#1F4591]",
    perks: ["Guaranteed table during rush hours", "Complimentary chef dessert", "Valid on beverages"],
  },
  {
    id: "cred-pay",
    code: "CREDPAY",
    badge: "CRED Pay Dining Reward",
    partner: "CRED",
    title: "Up to ₹250 Cashback on Table Pay",
    discount: "UP TO ₹250 BACK",
    desc: "Scan and pay your dining bill using CRED Pay at any Crave & Crust counter to unlock instant mystery cashback and coins.",
    minBill: "Min. Bill ₹1000 · Scan & Pay at Table",
    validity: "Valid once per week per user",
    accent: "from-[#1C1C1E] via-[#3A3A3C] to-[#1C1C1E]",
    perks: ["Direct credit card cashback", "Earn 5,000 CRED coins", "Zero transaction surcharge"],
  },
  {
    id: "hdfc-diners",
    code: "HDFCCULINARY",
    badge: "HDFC & Amex Dining Treats",
    partner: "Bank",
    title: "Flat 20% Off with HDFC & Diners Club",
    discount: "20% OFF",
    desc: "Exclusive bank privilege when settling your dining bill with HDFC Bank Diners Club, Regalia, or American Express Platinum cards.",
    minBill: "Min. Bill ₹1500 · Card swipe at venue",
    validity: "Valid on Friday, Saturday & Sunday",
    accent: "from-[#004B8D] via-[#0072CE] to-[#004B8D]",
    perks: ["Automatic discount on POS terminal", "Complimentary artisanal coffee", "Valid with family banquets"],
  },
  {
    id: "biryani-fest",
    code: "ROYALFEST",
    badge: "Weekend Heritage Feast",
    partner: "Direct",
    title: "Free Copper Handi Raita & Dal with Biryani",
    discount: "FREE SIDES",
    desc: "Order any Full Copper Handi Dum Biryani and receive a complimentary slow-simmered Tarka Dal and Burani Raita bowl.",
    minBill: "Valid on all Royal Dum Biryanis",
    validity: "Friday to Sunday special",
    accent: "from-[#D6A85F] via-[#B8860B] to-[#D6A85F]",
    perks: ["Handcrafted copper bowls", "Serves 3-4 persons", "Available for Dine-in & Menu Book"],
  },
  {
    id: "sweet-tooth",
    code: "SWEETINDULGE",
    badge: "Pastry & Bakery Indulgence",
    partner: "Direct",
    title: "Buy 2 Desserts, Get 1 Signature Free",
    discount: "BUY 2 GET 1",
    desc: "Treat your table to our Belgian Truffle, Burnt Basque Cheesecake, or Strawberry Tarts and enjoy the third on the house.",
    minBill: "Valid after 7:00 PM daily",
    validity: "Valid across all bakeries & cafes",
    accent: "from-[#722F37] via-[#9E2A2B] to-[#722F37]",
    perks: ["Hand-crafted fresh daily", "Includes Belgian chocolate pastries", "Chef selection available"],
  },
];

const COLLAB_PARTNERS = [
  {
    name: "Zomato Gold",
    badge: "Top Dining Partner",
    perk: "Flat 1+1 on Food & 20% Off",
    color: "#CB202D",
    rating: "4.8 ★ (12,400+ Reviews)",
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#CB202D" />
        <path
          d="M6 8h12l-6.5 8H18v2H6l6.5-8H6V8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Swiggy One & Dineout",
    badge: "Express 25-Min Delivery",
    perk: "Zero Delivery Fee & ₹150 Off",
    color: "#FC8019",
    rating: "4.9 ★ (18,900+ Orders)",
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#FC8019" />
        <path
          d="M12 4C9.24 4 7 6.24 7 9c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "EazyDiner Prime",
    badge: "VIP Table Reservations",
    perk: "Guaranteed Booth & 25% Off",
    color: "#1F4591",
    rating: "Preferred Luxury Dining",
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1F4591" />
        <path
          d="M7 6h10v2H7V6zm0 5h10v2H7v-2zm0 5h7v2H7v-2z"
          fill="#FFFFFF"
        />
        <circle cx="16" cy="17" r="2" fill="#D6A85F" />
      </svg>
    ),
  },
  {
    name: "CRED Pay Dining",
    badge: "Instant Bill Cashback",
    perk: "Up to ₹250 Cashback on Card",
    color: "#2C2C2E",
    rating: "Exclusive Member Reward",
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1C1C1E" />
        <path
          d="M12 5l6 3.5v7l-6 3.5-6-3.5v-7L12 5z"
          stroke="#D6A85F"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M12 9v6m-3-3h6" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "HDFC & Amex Culinary",
    badge: "Weekend Card Privileges",
    perk: "20% Instant POS Terminal Off",
    color: "#004B8D",
    rating: "Diners Club & Platinum",
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#004B8D" />
        <path
          d="M5 8h14v2H5V8zm0 4h9v2H5v-2zm0 4h14v2H5v-2z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Magicpin Pay",
    badge: "Magic Points & Vouchers",
    perk: "Up to 30% Savings via MagicPay",
    color: "#833AB4",
    rating: "4.7 ★ Verified Partner",
    logoSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#833AB4" />
        <path
          d="M12 6l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z"
          fill="#FFD700"
        />
      </svg>
    ),
  },
];

export function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [partnerFilter, setPartnerFilter] = useState<string>("all");
  const [calculatorBill, setCalculatorBill] = useState<number>(1200);

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  const filteredOffers = EXCLUSIVE_OFFERS.filter(
    (o) => partnerFilter === "all" || o.partner.toLowerCase() === partnerFilter.toLowerCase()
  );

  // Calculate estimated savings
  const calculateSavings = (bill: number) => {
    if (bill >= 1500) return Math.min(Math.round(bill * 0.25), 350);
    if (bill >= 800) return Math.min(Math.round(bill * 0.2), 200);
    return Math.min(Math.round(bill * 0.15), 150);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F7F0E6] select-none">
      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 1. CINEMATIC HERO: OFFERS & APP COLLABORATIONS ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-16 px-6 bg-gradient-to-b from-[#16120e] via-[#0d0b09] to-[#080808] border-b border-[#D6A85F]/20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#D6A85F]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#FF7628]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6A85F]/15 border border-[#D6A85F]/40 text-xs font-bold uppercase tracking-widest text-[#D6A85F] mb-4 backdrop-blur-md">
            <span>🏷️</span>
            <span>Official Dining Privileges & App Collaborations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F0E6] leading-[1.05] max-w-4xl">
            Exceptional Food. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A85F] via-[#F7F0E6] to-[#FF7628]">
              Unrivaled Dining Privileges.
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#AAA39B] max-w-2xl leading-relaxed font-light">
            Enjoy curated dining discounts, 1+1 offers, complimentary desserts, and express deliveries through our official partnerships with Zomato, Swiggy, EazyDiner, CRED, and major banking networks.
          </p>

          {/* ────────────────────────────────────────────────────────── */}
          {/* ── PARTNER LOGO TICKER / RECOGNITION ── */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <span className="text-[11px] uppercase tracking-widest text-[#AAA39B] font-bold block mb-4">
              Official Delivery & Dining Partners:
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {COLLAB_PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="p-3.5 rounded-2xl bg-black/40 border border-white/5 hover:border-[#D6A85F]/40 transition-all duration-300 flex items-center gap-3 shadow-md group"
                >
                  <div className="shrink-0 transition-transform group-hover:scale-110">
                    {partner.logoSvg}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#F7F0E6] truncate group-hover:text-[#D6A85F] transition-colors">
                      {partner.name}
                    </p>
                    <p className="text-[10px] text-[#AAA39B] truncate mt-0.5">
                      {partner.perk}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 2. FILTERABLE VOUCHER TICKETS SECTION ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#D6A85F]/20">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              Active Vouchers & Promo Codes
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#F7F0E6] mt-1">
              Select Your Dining Reward
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All Offers" },
              { id: "direct", label: "Direct Crave" },
              { id: "zomato", label: "Zomato Gold" },
              { id: "swiggy", label: "Swiggy One" },
              { id: "eazydiner", label: "EazyDiner" },
              { id: "cred", label: "CRED Pay" },
              { id: "bank", label: "HDFC / Cards" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setPartnerFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  partnerFilter === tab.id
                    ? "bg-[#D6A85F] text-[#080808] font-bold shadow-md scale-105"
                    : "bg-white/5 text-[#AAA39B] hover:text-[#F7F0E6] border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Perforated Luxury Voucher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="relative group rounded-3xl overflow-hidden bg-[#13110f] border border-[#D6A85F]/30 hover:border-[#D6A85F] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Ticket Top Ribbon */}
              <div className="p-6 sm:p-7 relative">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#D6A85F]">
                    {offer.badge}
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#D6A85F] tracking-tight">
                    {offer.discount}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F0E6] group-hover:text-[#D6A85F] transition-colors leading-tight">
                  {offer.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#AAA39B] leading-relaxed mt-2.5">
                  {offer.desc}
                </p>

                {/* Bullet Perks */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  {offer.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-xs text-[#AAA39B]">
                      <span className="text-[#D6A85F]">✓</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perforated Ticket Divider (Notched Cutouts) */}
              <div className="relative flex items-center justify-between px-2">
                <div className="w-5 h-5 -ml-3.5 rounded-full bg-[#080808] border border-r-0 border-[#D6A85F]/30" />
                <div className="flex-1 border-b-2 border-dashed border-white/10 mx-2" />
                <div className="w-5 h-5 -mr-3.5 rounded-full bg-[#080808] border border-l-0 border-[#D6A85F]/30" />
              </div>

              {/* Ticket Bottom Bar: Code & Copy Action */}
              <div className="p-5 sm:p-6 bg-black/40 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#AAA39B] tracking-wider block">
                    Promo Code:
                  </span>
                  <span className="font-mono text-base font-bold text-[#D6A85F] tracking-widest mt-0.5 block">
                    {offer.code}
                  </span>
                  <span className="text-[10px] text-[#AAA39B] block mt-0.5">
                    {offer.minBill}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyCode(offer.code)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2 ${
                    copiedCode === offer.code
                      ? "bg-emerald-500 text-black font-bold scale-105"
                      : "bg-[#D6A85F] hover:bg-[#FF7628] text-[#080808] hover:text-[#F7F0E6]"
                  }`}
                >
                  <span>{copiedCode === offer.code ? "Copied to Clipboard! ✓" : "Copy Code"}</span>
                  {copiedCode !== offer.code && <span>📋</span>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 3. INTERACTIVE SAVINGS CALCULATOR WIDGET ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0e0c0a] py-16 px-6 border-y border-[#D6A85F]/20">
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#181512] to-[#100e0c] border border-[#D6A85F]/40 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              Live Bill Savings Estimator
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E6] mt-1">
              Calculate Your Dining Privilege Savings
            </h2>
            <p className="text-xs text-[#AAA39B] mt-1.5">
              Adjust your estimated bill to see instant savings unlocked via our app collaborations.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-6">
            <div>
              <div className="flex items-center justify-between text-sm font-semibold mb-2">
                <span className="text-[#AAA39B]">Estimated Bill Amount:</span>
                <span className="text-xl font-serif font-bold text-[#D6A85F]">
                  ₹{calculatorBill}
                </span>
              </div>
              <input
                type="range"
                min="400"
                max="5000"
                step="100"
                value={calculatorBill}
                onChange={(e) => setCalculatorBill(Number(e.target.value))}
                className="w-full accent-[#D6A85F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#AAA39B] mt-1">
                <span>₹400 (Quick Bites)</span>
                <span>₹2,500 (Family Dinner)</span>
                <span>₹5,000+ (Grand Banquet)</span>
              </div>
            </div>

            {/* Calculated Results */}
            <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-black/60 border border-[#D6A85F]/30 text-center">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#AAA39B] block">
                  Estimated Instant Savings:
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mt-1 block">
                  ₹{calculateSavings(calculatorBill)}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#AAA39B] block">
                  Net Effective Bill:
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D6A85F] mt-1 block">
                  ₹{calculatorBill - calculateSavings(calculatorBill)}
                </span>
              </div>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/restaurants"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D6A85F] to-[#FF7628] hover:brightness-110 text-[#080808] font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
              >
                <span>Reserve a Table & Apply Voucher</span>
                <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 4. HOW TO REDEEM ACROSS CHANNELS ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
            Effortless Redemption
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E6] mt-1">
            How to Redeem Your Offers
          </h2>
          <p className="text-xs text-[#AAA39B] mt-2">
            Seamlessly unlock privileges whether you dine in person or order to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#141210] border border-white/5 hover:border-[#D6A85F]/40 transition-all text-center">
            <div className="w-14 h-14 rounded-2xl bg-black/60 border border-[#D6A85F]/30 mx-auto flex items-center justify-center text-3xl mb-4">
              🏛️
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F0E6]">1. At Our Dining Rooms</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-2">
              Simply inform your steward before bill settlement or scan using Zomato Gold, Swiggy Dineout, or CRED Pay at your table for direct deduction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141210] border border-white/5 hover:border-[#D6A85F]/40 transition-all text-center">
            <div className="w-14 h-14 rounded-2xl bg-black/60 border border-[#D6A85F]/30 mx-auto flex items-center justify-center text-3xl mb-4">
              📱
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F0E6]">2. On Delivery Apps</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-2">
              Select Crave & Crust on Zomato or Swiggy. In the coupon section, paste your promo code or tap the pre-applied Swiggy One / Gold benefit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141210] border border-white/5 hover:border-[#D6A85F]/40 transition-all text-center">
            <div className="w-14 h-14 rounded-2xl bg-black/60 border border-[#D6A85F]/30 mx-auto flex items-center justify-center text-3xl mb-4">
              📖
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F0E6]">3. Via 4K Menu Book</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-2">
              Add your dishes in our 3D Hardcover Menu Book. The welcome promo <strong className="text-[#D6A85F]">CRAVE50</strong> automatically applies at cart checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Floating toast notification when coupon is copied */}
      {copiedCode && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-xl bg-[#111111] border border-[#D6A85F] text-[#F7F0E6] shadow-2xl text-xs font-bold animate-slide-up">
          <span className="text-emerald-400 text-base">✓</span>
          <span>Promo Code <strong>{copiedCode}</strong> copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
