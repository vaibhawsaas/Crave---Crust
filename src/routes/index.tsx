import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES, IMG, OFFERS, PRODUCTS, RESTAURANTS } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";
import { BRAND } from "@/lib/brand";
import { RealisticBurgerHero } from "@/components/RealisticBurgerHero";
import { RealisticSteamingRamen } from "@/components/RealisticSteamingRamen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crave & Crust — Real Food. Unreal Cravings." },
      { name: "description", content: "Discover biryani, burgers, pizza, momos, cakes and more. Build your burger in 3D and order on WhatsApp." },
      { property: "og:title", content: "Crave & Crust — Real Food. Unreal Cravings." },
      { property: "og:description", content: "Cinematic food. Interactive 3D. WhatsApp ordering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* ── Hero ─────────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  // Cursor parallax
  useEffect(() => {
    const hero = heroRef.current;
    const img = imgRef.current;
    if (!hero || !img) return;

    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;
      img.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  // Stagger entrance
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const city = BRAND.address.split(",")[1]?.trim() ?? "Kolkata";

  return (
    <section
      ref={heroRef}
      className="hero-cinematic"
      style={{ minHeight: "100svh" }}
      aria-label="Hero — Crave & Crust"
    >
      {/* Atmospheric glow */}
      <div className="hero-glow" aria-hidden />

      {/* Floating particles */}
      <Particles />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-12 pt-14 w-full md:grid-cols-[1.05fr_1fr] md:gap-16 lg:gap-20 md:pb-16 md:pt-16 lg:pt-16 -translate-y-3 md:-translate-y-6 lg:-translate-y-8">
        {/* Left: Copy */}
        <div className="relative z-10">
          {/* Eyebrow */}
          <div
            className="mb-5 md:mb-6 flex items-center gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(.15,.7,.2,1) 0.1s",
            }}
          >
            <span className="h-px w-8 bg-[#D6A85F]" />
            <span className="eyebrow text-[#D6A85F]">
              Delivering in {city}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7628] animate-pulse" />
          </div>

          {/* Main heading */}
          <h1
            className="hero-title"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(40px)",
              transition: "all 1s cubic-bezier(.15,.7,.2,1) 0.2s",
            }}
          >
            Not just
            <br />
            food.{" "}
            <span className="accent italic">An</span>
            <br />
            <span className="accent">experience.</span>
          </h1>

          {/* Sub */}
          <p
            className="mt-5 max-w-md text-base leading-relaxed"
            style={{
              color: "#AAA39B",
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(24px)",
              transition: "all 0.9s cubic-bezier(.15,.7,.2,1) 0.4s",
            }}
          >
            Crafted with passion. Served with character.
            <br />
            Remembered forever.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-wrap gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(24px)",
              transition: "all 0.9s cubic-bezier(.15,.7,.2,1) 0.55s",
            }}
          >
            <Link to="/explore" className="btn-primary">
              Explore Menu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/3d-food-lab" className="btn-outline">
              Open Menu Book 📖
            </Link>
          </div>

          {/* Stats */}
          <dl
            className="mt-8 flex items-center gap-8 border-t pt-5"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.8s",
            }}
          >
            {[
              { val: "4.8★", label: "Avg rating" },
              { val: "~25m", label: "Delivery" },
              { val: `${PRODUCTS.length}+`, label: "Dishes" },
            ].map(({ val, label }) => (
              <div key={label}>
                <dd className="font-display text-3xl text-[#D6A85F]">{val}</dd>
                <dt className="mt-0.5 text-xs text-[#AAA39B] uppercase tracking-widest">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: Realistic 3D Exploding Burger */}
        <div className="relative flex items-center justify-center mt-0 md:mt-2 overflow-visible">
          <RealisticBurgerHero />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="eyebrow text-[#AAA39B]/50" style={{ fontSize: "0.6rem" }}>Scroll</span>
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}

/* ── Floating particles ──────────────────────────────────────── */
function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: `${Math.random() * 30}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: i % 3 === 0 ? "#D6A85F" : i % 3 === 1 ? "#FF7628" : "rgba(247,240,230,0.4)",
            animationDuration: `${4 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 6}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ── Marquee ─────────────────────────────────────────────────── */
function MarqueeBand() {
  const items = ["Biryani", "Burgers", "Pizza", "Momos", "Noodles", "Cakes", "Desserts", "Beverages", "Crafted with passion"];
  const dots = ["#FF7628", "#D6A85F", "#6ea53a", "#FF7628", "#D6A85F"];
  return (
    <div className="brand-marquee overflow-hidden py-4" aria-label="Our food categories">
      <div
        className="marquee-track marquee flex w-max items-center gap-6 whitespace-nowrap font-display text-base italic"
        aria-hidden="true"
        style={{ color: "#F7F0E6" }}
      >
        {[0, 1, 2].map((rep) =>
          items.map((item, i) => (
            <span key={`${rep}-${i}`} className="flex items-center gap-6">
              <span>{item}</span>
              <span style={{ color: dots[i % dots.length], fontSize: "0.6rem" }}>◆</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}

/* ── Category Grid ───────────────────────────────────────────── */
function CategorySection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20 md:py-28"
      data-reveal
      aria-labelledby="cat-heading"
    >
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <span className="section-label mb-3">The craving starts here</span>
          <h2 id="cat-heading" className="font-display text-4xl text-[#F7F0E6] mt-2 md:text-5xl">
            What's your craving?
          </h2>
        </div>
        <Link
          to="/explore"
          className="shrink-0 text-sm font-semibold text-[#D6A85F] hover:text-[#E8BF74] transition-colors"
        >
          See all →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8" data-reveal-grid>
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to={c.path}
            className="cat-tile group flex flex-col items-center p-2.5 pb-4"
            style={{
              background: "rgba(26,26,26,0.8)",
            }}
          >
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                width={200}
                height={200}
                className="aspect-square w-full object-cover"
                style={{ display: "block" }}
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-[#F7F0E6] group-hover:text-[#D6A85F] transition-colors">
              {c.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── Popular Items ───────────────────────────────────────────── */
function PopularSection() {
  const popular = PRODUCTS.filter((p) => p.popular).slice(0, 8);
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "#0c0c0c" }}
      data-reveal
      aria-labelledby="popular-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label mb-3">The ones you come back for</span>
            <h2 id="popular-heading" className="font-display text-4xl text-[#F7F0E6] mt-2 md:text-5xl">
              Popular near you
            </h2>
          </div>
          <Link
            to="/explore"
            className="shrink-0 text-sm font-semibold text-[#D6A85F] hover:text-[#E8BF74] transition-colors"
          >
            Full menu →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-grid>
          {popular.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Four Kitchens ───────────────────────────────────────────── */
const SIG = [
  { to: "/bakery", label: "Bakery", line: "Little treats. Big happiness.", img: IMG.bakery, cls: "md:col-span-2 md:row-span-2" },
  { to: "/cloud-kitchen", label: "Cloud Kitchen", line: "Big flavour. Zero boring bites.", img: IMG.kitchen, cls: "" },
  { to: "/cafes", label: "Café", line: "Slow mornings, served.", img: IMG.cafe, cls: "" },
  { to: "/restaurants", label: "Restaurants", line: "Find a table. Find your favourite.", img: IMG.restaurant, cls: "md:col-span-2" },
] as const;

function KitchensSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20 md:py-28"
      data-reveal
      aria-labelledby="kitchens-heading"
    >
      <div className="mb-10">
        <span className="section-label mb-3">A little something for every mood</span>
        <h2 id="kitchens-heading" className="font-display text-4xl text-[#F7F0E6] mt-2 md:text-5xl">
          Four kitchens, four moods
        </h2>
      </div>

      <div className="grid auto-rows-[220px] gap-3 md:grid-cols-4" data-reveal-grid>
        {SIG.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className={`gallery-item group relative overflow-hidden rounded-xl ${s.cls}`}
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <img
              src={s.img}
              alt={s.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 40%, transparent 100%)",
              }}
            />
            <div className="absolute bottom-0 p-5 text-[#F7F0E6]">
              <p className="eyebrow text-[#D6A85F]">{s.label}</p>
              <p className="mt-1 font-display text-2xl leading-tight md:text-3xl">{s.line}</p>
              <span
                className="mt-2 inline-flex items-center gap-1 text-sm text-[#D6A85F] transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                Explore ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── 3D Lab Banner ───────────────────────────────────────────── */
function ThreeDLabBanner() {
  return (
    <section
      data-reveal
      aria-labelledby="ramen-heading"
      style={{
        background: "radial-gradient(ellipse at 70% 30%, rgba(255,118,40,0.09) 0%, transparent 60%), #0c0c0c",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-24">
        {/* Realistic Steaming Ramen Bowl with Continuous Organic Vapour */}
        <div className="relative order-2 md:order-1 flex items-center justify-center">
          <RealisticSteamingRamen />
        </div>

        {/* Copy Tailored to the Signature Ramen */}
        <div className="order-1 md:order-2">
          <span className="section-label mb-6">Signature Masterpiece · 18h Simmered</span>
          <h2 id="ramen-heading" className="font-display text-5xl leading-[0.95] text-[#F7F0E6] mt-3 md:text-6xl">
            Slurp the warmth.
            <br />
            <em className="text-[#FF7628]">Simmered for soul.</em>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed" style={{ color: "#AAA39B" }}>
            Silky hand-pulled noodles lifted from rich, 18-hour slow-simmered tonkotsu broth. Crowned with gooey golden ramen eggs, flame-seared chashu, and fragrant scallions — served piping hot with authentic flavour in every slurp.
          </p>

          {/* Feature list */}
          <ul className="mt-8 space-y-0">
            {[
              { icon: "🍜", text: "18-Hour Slow-Simmered Broth — Deep umami simmered to perfection" },
              { icon: "🥢", text: "Springy Hand-Pulled Noodles — Made fresh daily with the ideal chew" },
              { icon: "🥚", text: "Marinated Ajitsuke Tamago — Gooey amber yolks & tender whites" },
              { icon: "♨️", text: "Guaranteed Piping Hot — Thermal-sealed so every bowl arrives steaming" },
            ].map(({ icon, text }) => (
              <li key={text} className="feature-line">
                <span className="feature-line-icon text-[#D6A85F]">{icon}</span>
                <span className="text-sm text-[#AAA39B] self-center">{text}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/explore"
            className="btn-primary mt-10 inline-flex items-center gap-2"
          >
            Open Menu Book →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Offers ──────────────────────────────────────────────────── */
function OffersSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-20 md:py-28"
      data-reveal
      aria-labelledby="offers-heading"
    >
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <span className="section-label mb-3">A little extra joy</span>
          <h2 id="offers-heading" className="font-display text-4xl text-[#F7F0E6] mt-2 md:text-5xl">
            Today's offers
          </h2>
        </div>
        <Link
          to="/offers"
          className="shrink-0 text-sm font-semibold text-[#D6A85F] hover:text-[#E8BF74] transition-colors"
        >
          All offers →
        </Link>
      </div>

      <div className="flex snap-x gap-4 overflow-x-auto pb-3 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4" data-reveal-grid>
        {OFFERS.map((o, i) => {
          const accents = ["#FF7628", "#D6A85F", "#6ea53a", "#9A7540"];
          const accent = accents[i % accents.length];
          return (
            <div
              key={o.code}
              className="offer-card min-w-[280px] snap-start p-6 md:min-w-0"
            >
              <p
                className="font-display text-2xl leading-tight text-[#F7F0E6]"
              >
                {o.title}
              </p>
              <p className="mt-2 text-sm" style={{ color: "#AAA39B" }}>{o.note}</p>
              <div className="mt-6 flex items-center justify-between">
                <span
                  className="rounded-full px-3 py-1.5 font-mono text-xs font-bold"
                  style={{
                    background: `${accent}15`,
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {o.code}
                </span>
                <span className="text-xs text-[#AAA39B]">Tap to copy</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Top Restaurants ─────────────────────────────────────────── */
function RestaurantsSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "#0c0c0c" }}
      data-reveal
      aria-labelledby="restaurants-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label mb-3">Your next favourite is close</span>
            <h2 id="restaurants-heading" className="font-display text-4xl text-[#F7F0E6] mt-2 md:text-5xl">
              Top restaurants
            </h2>
          </div>
          <Link
            to="/restaurants"
            className="shrink-0 text-sm font-semibold text-[#D6A85F] hover:text-[#E8BF74] transition-colors"
          >
            Find more →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-grid>
          {RESTAURANTS.slice(0, 3).map((r) => (
            <Link
              key={r.slug}
              to="/restaurant/$slug"
              params={{ slug: r.slug }}
              className="food-card group overflow-hidden block"
            >
              <div className="overflow-hidden" style={{ borderRadius: "1rem 1rem 0 0" }}>
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-106"
                  style={{ display: "block" }}
                />
              </div>
              <div className="p-5">
                <p className="font-display text-xl text-[#F7F0E6]">{r.name}</p>
                <p className="mt-1 text-sm" style={{ color: "#AAA39B" }}>
                  {r.cuisine} · {r.area}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-[#D6A85F]">★ {r.rating}</span>
                  <span className="text-xs text-[#AAA39B]">·</span>
                  <span className="text-xs text-[#AAA39B]">~{r.time} min</span>
                  <span className="text-xs text-[#AAA39B]">·</span>
                  <span className="text-xs text-[#AAA39B]">{Array.from({ length: r.price }).map(() => "₹").join("")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Our Story ───────────────────────────────────────────────── */
function StorySection() {
  return (
    <section
      data-reveal
      aria-labelledby="story-heading"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, rgba(214,168,95,0.04) 0%, transparent 60%), #111111",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:gap-20 md:py-28">
        <div>
          <span className="section-label mb-6">Our story</span>
          <h2 id="story-heading" className="font-display text-4xl leading-tight text-[#F7F0E6] mt-3 md:text-5xl lg:text-6xl">
            Where passion
            <br />
            <span style={{ color: "#D6A85F" }}>becomes</span> food.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#AAA39B", maxWidth: "44ch" }}>
            <p>
              Crave & Crust started with a single question: why does great food feel like a privilege?
              We set out to change that — one perfectly crafted dish at a time.
            </p>
            <p>
              From biryanis sealed at sunrise to burgers built layer by layer, every dish is made
              with intent, with honesty, and with the belief that food should feel extraordinary.
            </p>
            <p>
              Park Street, Kolkata. Open since the beginning of a delicious obsession.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about" className="btn-outline !py-3 !px-6">
              Read our story
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-[#D6A85F] self-center hover:text-[#E8BF74] transition-colors">
              Visit us →
            </Link>
          </div>
        </div>

        {/* Image collage */}
        <div className="relative grid grid-cols-2 gap-3">
          <div className="gallery-item rounded-xl overflow-hidden">
            <img src={IMG.spread} alt="A colourful spread of food" loading="lazy"
              className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="gallery-item rounded-xl overflow-hidden mt-8">
            <img src={IMG.restaurant} alt="Restaurant interior" loading="lazy"
              className="aspect-[3/4] w-full object-cover" />
          </div>

          {/* Floating badge */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-4 py-2.5 whitespace-nowrap"
            style={{
              background: "rgba(8,8,8,0.9)",
              border: "1px solid rgba(214,168,95,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <span style={{ color: "#D6A85F" }}>★</span>
            <span className="text-xs font-semibold text-[#F7F0E6]">4.8 average across all outlets</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section
      className="section-hero-cta py-20 md:py-28"
      data-reveal
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="section-label mb-6 justify-center">One more bite?</span>
        <h2 id="cta-heading" className="font-display text-5xl leading-[0.92] text-[#F7F0E6] mt-3 md:text-7xl">
          Hungry yet?
        </h2>
        <p className="mt-5 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "#AAA39B" }}>
          Add a few favourites, tap order, and we'll confirm on WhatsApp in minutes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/explore" className="btn-primary !py-4 !px-8 !text-base">
            Start ordering →
          </Link>
          <Link to="/about" className="btn-outline !py-4 !px-8 !text-base">
            Our story
          </Link>
        </div>

        {/* Hours */}
        <div className="mt-14 inline-flex flex-col sm:flex-row items-center gap-6 text-xs text-[#AAA39B]">
          {BRAND.hours.map(([day, time]) => (
            <div key={day} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#D6A85F]" />
              <span>{day}</span>
              <span className="text-[#F7F0E6]">{time}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs" style={{ color: "#AAA39B" }}>{BRAND.address}</p>
      </div>
    </section>
  );
}

/* ── Reveal hook ─────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
}

/* ── Home Page ───────────────────────────────────────────────── */
function Home() {
  useReveal();

  return (
    <div style={{ background: "#080808", color: "#F7F0E6" }}>
      <HeroSection />
      <MarqueeBand />
      <CategorySection />
      <PopularSection />
      <KitchensSection />
      <ThreeDLabBanner />
      <OffersSection />
      <StorySection />
      <RestaurantsSection />
      <CtaSection />
    </div>
  );
}