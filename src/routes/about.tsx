import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "Our Story & Heritage | Crave & Crust",
      "Discover the heritage, craft, master chefs, and architectural dining spaces of Crave & Crust. 6 flagship locations across Kolkata."
    ),
  component: AboutPage,
});

interface LocationPin {
  id: string;
  name: string;
  area: string;
  address: string;
  hours: string;
  phone: string;
  tag: string;
  valet: boolean;
  mapQuery: string;
}

const LOCATIONS: LocationPin[] = [
  {
    id: "park-street",
    name: "Crave & Crust Grand Flagship",
    area: "Park Street",
    address: "18 Park Street, Heritage Arcade, Kolkata 700016",
    hours: "11:30 AM – 11:30 PM (Daily)",
    phone: "+91 33 2229 4001",
    tag: "Chandelier Dining Hall & Speakeasy Lounge",
    valet: true,
    mapQuery: "Park+Street+Kolkata",
  },
  {
    id: "salt-lake",
    name: "The Royal Dum House",
    area: "Salt Lake (Sector V)",
    address: "Plot G2, Block EP & GP, Sector V, Bidhannagar, Kolkata 700091",
    hours: "12:00 PM – 12:00 AM (Midnight)",
    phone: "+91 33 2357 8890",
    tag: "Heritage Mughlai & Private Family Dining Suites",
    valet: true,
    mapQuery: "Sector+V+Salt+Lake+Kolkata",
  },
  {
    id: "ballygunge",
    name: "Rosemary Botanical Glasshouse",
    area: "Ballygunge",
    address: "44 Ballygunge Circular Road, Near Forum, Kolkata 700019",
    hours: "8:00 AM – 11:00 PM (Breakfast to Dinner)",
    phone: "+91 33 2475 1204",
    tag: "Sunlit Conservatory & Artisan Bakery",
    valet: true,
    mapQuery: "Ballygunge+Circular+Road+Kolkata",
  },
  {
    id: "lake-road",
    name: "Green Glass Rooftop Sky Lounge",
    area: "Lake Road / Southern Ave",
    address: "92 Southern Avenue, Rooftop Terrace, Kolkata 700029",
    hours: "4:00 PM – 1:00 AM (Sunset to Late Night)",
    phone: "+91 33 2466 7733",
    tag: "Open-Air Sky Terrace & Botanic Garden",
    valet: true,
    mapQuery: "Southern+Avenue+Lake+Road+Kolkata",
  },
];

const MASTER_CHEFS = [
  {
    name: "Ustad Zafarullah Khan",
    title: "Master Biryani Ustad",
    experience: "4th Generation Dum Specialist · 28 Years Craft",
    signature: "Kacche Gosht Mutton Dum Biryani in Copper Handi",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    bio: "Trained under the royal khansamas of Lucknow and Hyderabad, Ustad Zafarullah oversees our 16-hour coal simmered handis, selecting every grain of 2-year aged basmati and Kashmir saffron by hand.",
    quote: "Time and embers cannot be rushed. The dough seal speaks when the dum is complete.",
  },
  {
    name: "Chef Matteo Rossi",
    title: "Artisan Pizzaiolo & Fermentation Director",
    experience: "Napoli Trained · 16 Years Artisan Baking",
    signature: "Truffle Burrata Pesto Sourdough Pizza (450°C Wood-Fired)",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
    bio: "Born in Campania, Italy, Chef Matteo brought our 48-hour cold fermentation starter culture. He bakes in our hand-built 450°C beechwood ovens, achieving the signature airy leopard-spotted cornicione.",
    quote: "True pizza is 90 seconds of intense wood fire preceded by 48 hours of quiet patience.",
  },
  {
    name: "Chef Tenzing Norbu",
    title: "Himalayan Dimsum & Broth Artisan",
    experience: "Tibetan Heritage · 19 Years Himalayan Kitchens",
    signature: "Crispy Pan-Fried Momos & Roasted Sesame Jhol Broth",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80",
    bio: "Chef Tenzing hand-pleats up to 200 momos per hour with razor precision. His secret roasted tomato-sesame jhol achar uses authentic timur pepper sourced directly from Himalayan valley growers.",
    quote: "The pleat holds the steam; the broth holds the warmth of home.",
  },
  {
    name: "Chef Ananya Sen",
    title: "Head Pastry Chef & Chocolatier",
    experience: "Le Cordon Bleu Paris Alum · 14 Years Patisserie",
    signature: "Pistachio Noir Mirror Glaze & Burnt Basque Cheesecake",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80",
    bio: "Crafting small-batch Belgian chocolate ganaches, 72-layer honeycomb croissants, and molten-center cheesecakes using cultured churned butter and pure Madagascar vanilla bean pods.",
    quote: "Dessert is not an afterthought; it is the final lasting memory of a meal.",
  },
];

const CRAFT_PILLARS = [
  {
    icon: "🌾",
    title: "100% Pure Ingredient Integrity",
    subtitle: "Zero Compromises",
    desc: "We use 2-year aged long-grain basmati, certified Kashmir saffron threads, pure cow desi ghee, and San Marzano plum tomatoes. Zero palm oil, zero chemical coloring, and zero MSG.",
  },
  {
    icon: "⏳",
    title: "Time As Our Core Ingredient",
    subtitle: "Patience Over Shortcuts",
    desc: "48-hour cold sourdough fermentation, 16-hour charcoal simmered black lentils, and 12-hour umami ramen broths. Great flavors cannot be accelerated by modern shortcuts.",
  },
  {
    icon: "🏛️",
    title: "Architectural Hospitality",
    subtitle: "Spaces Built for Atmosphere",
    desc: "Dining rooms conceived by visionary architects — featuring hand-cut Bohemian crystal chandeliers, acoustic noise-dampening timber, and lush open-air rooftop sky terraces.",
  },
  {
    icon: "🔥",
    title: "Live Fire & Heritage Clay Ovens",
    subtitle: "400°C Tandoor & 450°C Wood",
    desc: "Our naan flatbreads slap onto natural earthen clay walls; our pizzas blister over seasoned beechwood logs, delivering smoky blistered char impossible in electric ovens.",
  },
  {
    icon: "🛡️",
    title: "Surgical Hygiene Protocols",
    subtitle: "Clean-Room Lab Standards",
    desc: "Hospital-grade stainless prep stations, UV-sanitized dining ware, live CCTV prep transparency, and complete physical segregation between vegetarian and meat stations.",
  },
  {
    icon: "🌱",
    title: "Sustainable & Locally Rooted",
    subtitle: "Community Gastronomy",
    desc: "We partner with local dairy cooperatives in Bengal for daily fresh milk, paneer, and butter, paired with biodegradable cornstarch packaging for home orders.",
  },
];

const TIMELINE = [
  {
    year: "2018",
    title: "The Single Wood-Fire Oven",
    desc: "Founded in a quiet lane off Park Street with one hand-built wood-fired oven, two clay tandoors, and a stubborn belief that everyday dining deserves three-star care.",
  },
  {
    year: "2020",
    title: "Cloud Kitchen & Precision Delivery",
    desc: "Pioneered induction-sealed thermal copper containers and live temperature monitoring, allowing fine-dining dum biryanis to arrive piping hot at homes across Kolkata.",
  },
  {
    year: "2022",
    title: "The Grand Flagship & Royal Dum House",
    desc: "Expanded into monumental hospitality spaces: unveiled the 120-seat Chandelier Hall on Park Street and the heritage Mughlai sanctuary in Salt Lake.",
  },
  {
    year: "2024",
    title: "Rooftop Sky Terraces & Glasshouses",
    desc: "Opened Green Glass Sky Lounge overlooking Southern Avenue lakes and the European botanical glasshouse conservatory in Ballygunge.",
  },
  {
    year: "2026",
    title: "3D Culinary Innovation & 6 Flagships",
    desc: "Welcomed our 500,000th guest, launched the interactive 3D Food Lab & 4K Hardcover Menu Book, and expanded across 6 iconic destinations.",
  },
];

const FAQS = [
  {
    q: "Do you use artificial colors, palm oil, or synthetic flavor enhancers?",
    a: "Never. Every vibrant color in our kitchen comes directly from nature: golden Kashmiri saffron, rich deggi mirch, beet extracts, and cold-pressed oils. We strictly cook with pure dairy butter and A2 cow desi ghee, with an absolute zero-tolerance policy for palm oil or synthetic additives.",
  },
  {
    q: "How do you ensure vegetarian and non-vegetarian purity?",
    a: "Our kitchens feature physically segregated preparation bays, separate refrigeration, color-coded knives and chopping boards, and dedicated fryers. Dishes tagged Pure Veg never touch surfaces used for meats.",
  },
  {
    q: "Can we reserve private dining suites for family celebrations?",
    a: "Yes! Our Park Street Flagship and Salt Lake Dum House offer sound-dampened private family suites accommodating 6 to 14 guests, complete with dedicated butler service, custom celebration menus, and private audio control.",
  },
  {
    q: "What makes your sourdough pizzas different from commercial pizzas?",
    a: "Commercial pizzas rely on commercial bakers yeast and rise in 30 minutes. Our sourdough undergoes a 48-hour slow cold fermentation with wild Italian cultures. This breaks down gluten structures naturally, resulting in an exceptionally light, digestible crust with complex nutty flavors.",
  },
  {
    q: "Is parking available at your locations?",
    a: "All 6 Crave & Crust flagship properties feature complimentary valet parking service with dedicated curbside attendants.",
  },
];

export function AboutPage() {
  const [selectedLocation, setSelectedLocation] = useState<LocationPin>(LOCATIONS[0]!);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F7F0E6] select-none">
      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 1. CINEMATIC ABOUT HERO ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden pb-16 pt-28 px-6">
        {/* Background Image: Grand Heritage Kitchen & Dining Hall */}
        <img
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=2000&q=85"
          alt="Crave & Crust Grand Heritage Dining Hall"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.38] saturate-[1.25] scale-105"
        />

        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6A85F]/15 border border-[#D6A85F]/40 text-xs font-bold uppercase tracking-widest text-[#D6A85F] mb-4 backdrop-blur-md">
            <span>✨</span>
            <span>Est. 2018 · Culinary Heritage & Hospitality</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F0E6] leading-[1.05] max-w-4xl">
            Born from an Obsession. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A85F] via-[#F7F0E6] to-[#FF7628]">
              Crafted Without Shortcuts.
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#AAA39B] max-w-2xl leading-relaxed font-light">
            We started with a single wood-fired hearth and a stubborn belief: everyday dining deserves the uncompromising care of fine gastronomy. Today, Crave & Crust unites six flagship properties across Kolkata — from heritage handi biryanis and 48-hour sourdough pizzas to breezy rooftop sky terraces.
          </p>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-8 max-w-5xl">
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#D6A85F]/30 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold text-[#D6A85F] block">6 Venues</span>
              <span className="text-[10px] text-[#AAA39B] uppercase tracking-wider">Across Kolkata</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#D6A85F]/30 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold text-[#D6A85F] block">48 Hours</span>
              <span className="text-[10px] text-[#AAA39B] uppercase tracking-wider">Cold Sourdough</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#D6A85F]/30 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold text-[#D6A85F] block">16 Hours</span>
              <span className="text-[10px] text-[#AAA39B] uppercase tracking-wider">Coal Handi Dum</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#D6A85F]/30 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold text-[#D6A85F] block">500k+</span>
              <span className="text-[10px] text-[#AAA39B] uppercase tracking-wider">Guests Served</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#D6A85F]/30 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold text-[#D6A85F] block">4.9 ★</span>
              <span className="text-[10px] text-[#AAA39B] uppercase tracking-wider">Average Rating</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-[#D6A85F]/30 backdrop-blur-md">
              <span className="text-2xl font-serif font-bold text-[#D6A85F] block">0%</span>
              <span className="text-[10px] text-[#AAA39B] uppercase tracking-wider">Palm Oil / MSG</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 2. THE STORY: THE FOUNDING MANIFESTO ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#D6A85F]/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              The Crave & Crust Manifesto
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6] mt-2 leading-tight">
              Why We Refuse To Compromise
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[#AAA39B] leading-relaxed">
              <p>
                In an era dominated by factory-produced frozen patties, microwave-reheated curries, and powdered spice mixes, Crave & Crust was founded to do the exact opposite.
              </p>
              <p>
                Every morning at 5:00 AM, our bakers fire the ovens to bake fresh brioche and hand-stretch sourdough. Our spice ustads roast and crush whole cardamoms, star anise, and mace on heavy stone mills. Our broths simmer on low embers through the night so that when you sit down at our tables, you experience real, unadulterated depth of flavor.
              </p>
              <p>
                We believe hospitality is an art form. It is the temperature of the plate, the dimness of the amber lamp, the crispness of the leavened naan, and the memory of sharing food with the people you love.
              </p>
            </div>

            {/* Signature Quote Callout */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#181512] to-[#12100e] border-l-4 border-[#D6A85F] shadow-lg">
              <p className="font-serif italic text-base sm:text-lg text-[#F7F0E6]">
                "Food created with patience holds soul. When shortcuts enter the kitchen, hospitality leaves the room."
              </p>
              <span className="text-xs text-[#D6A85F] font-bold mt-2 block uppercase tracking-wider">
                — Founding Culinary Council, Crave & Crust
              </span>
            </div>
          </div>

          {/* Visual Collage of Culinary Craft */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#D6A85F]/30 shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Flagship Exterior Night"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 rounded-2xl bg-[#141210] border border-white/10 text-center">
                <span className="font-serif text-2xl font-bold text-[#D6A85F]">400°C</span>
                <p className="text-[11px] text-[#AAA39B] uppercase tracking-wider mt-0.5">Earthen Clay Tandoors</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-2xl bg-[#141210] border border-white/10 text-center">
                <span className="font-serif text-2xl font-bold text-[#D6A85F]">100%</span>
                <p className="text-[11px] text-[#AAA39B] uppercase tracking-wider mt-0.5">Desi Cow Ghee</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#D6A85F]/30 shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                  alt="Chandelier Dining Room"
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 3. SIX PILLARS OF CRAFT (RICH ANIMATED CARDS) ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0c0a09] py-20 px-6 border-b border-[#D6A85F]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              The Core Foundations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6] mt-2">
              Our Six Culinary Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#AAA39B] mt-2">
              Every dish that leaves our kitchens is governed by these non-negotiable principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CRAFT_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-6 rounded-2xl bg-[#141210] border border-white/5 hover:border-[#D6A85F]/50 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(214,168,95,0.15)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-black/60 border border-[#D6A85F]/30 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6A85F]">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F7F0E6] mt-1 group-hover:text-[#D6A85F] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#AAA39B] leading-relaxed mt-3">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#D6A85F] font-semibold">
                  <span>✦</span>
                  <span>Certified Craft Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 4. MEET THE MASTER CHEFS & USTADS ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#D6A85F]/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
            The Artisans Behind The Flavors
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6] mt-2">
            Meet Our Master Chefs
          </h2>
          <p className="text-xs sm:text-sm text-[#AAA39B] mt-2">
            Decades of heritage, generational knowledge, and passionate pursuit of perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MASTER_CHEFS.map((chef) => (
            <div
              key={chef.name}
              className="group rounded-2xl overflow-hidden bg-[#12100e] border border-white/10 hover:border-[#D6A85F]/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[9px] uppercase font-bold tracking-wider text-[#D6A85F] border border-[#D6A85F]/30">
                      {chef.title}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#F7F0E6] mt-1">
                      {chef.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[11px] text-[#D6A85F] font-semibold">{chef.experience}</p>
                  <p className="text-xs text-[#AAA39B] leading-relaxed mt-2 line-clamp-3">
                    {chef.bio}
                  </p>
                  <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[9px] uppercase tracking-wider text-[#D6A85F] font-bold block">
                      Signature Creation:
                    </span>
                    <p className="text-[11px] text-[#F7F0E6] font-serif italic mt-0.5">
                      {chef.signature}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <p className="text-[10px] text-[#AAA39B] font-serif italic border-t border-white/5 pt-2">
                  "{chef.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 5. INTERACTIVE TIMELINE / OUR JOURNEY ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0e0c0a] py-20 px-6 border-b border-[#D6A85F]/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6] mt-2">
              Our Journey Over The Years
            </h2>
          </div>

          <div className="relative border-l-2 border-[#D6A85F]/30 ml-4 sm:ml-32 space-y-12">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative pl-6 sm:pl-10 group">
                {/* Glowing Year Node */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#181512] border-2 border-[#D6A85F] flex items-center justify-center shadow-[0_0_15px_rgba(214,168,95,0.5)] group-hover:scale-125 transition-transform">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D6A85F]" />
                </div>

                {/* Desktop Year Callout */}
                <span className="hidden sm:block absolute -left-28 top-1.5 font-serif text-xl font-bold text-[#D6A85F]">
                  {item.year}
                </span>

                {/* Mobile Year Badge */}
                <span className="sm:hidden inline-block px-2.5 py-0.5 rounded-full bg-[#D6A85F]/20 text-[#D6A85F] font-bold text-xs mb-1.5 border border-[#D6A85F]/30">
                  {item.year}
                </span>

                <div className="p-6 rounded-2xl bg-[#141210] border border-white/5 group-hover:border-[#D6A85F]/40 transition-all shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-[#F7F0E6] group-hover:text-[#D6A85F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AAA39B] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 6. REAL INTERACTIVE GOOGLE MAP & LOCATIONS ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#D6A85F]/20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
            Live Map & Directory
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6] mt-2">
            Visit Our Flagships In Kolkata
          </h2>
          <p className="text-xs sm:text-sm text-[#AAA39B] mt-2">
            Select a location below to load real interactive Google Maps directions, operating hours, and valet concierge.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelectedLocation(loc)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                selectedLocation.id === loc.id
                  ? "bg-[#1f1a14] border-[#D6A85F] shadow-[0_10px_30px_rgba(214,168,95,0.25)] scale-[1.02]"
                  : "bg-[#141210] border-white/5 hover:border-white/20 text-[#AAA39B]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-serif text-[#D6A85F]">📍 {loc.area}</span>
                {selectedLocation.id === loc.id && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <p className="font-serif text-sm font-bold text-[#F7F0E6] mt-1 line-clamp-1">
                {loc.name}
              </p>
              <p className="text-[10px] text-[#AAA39B] mt-1 line-clamp-1 italic">
                {loc.tag}
              </p>
            </button>
          ))}
        </div>

        {/* Real Interactive Map + Detail Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-3xl overflow-hidden bg-[#141210] border border-[#D6A85F]/40 shadow-2xl p-4 sm:p-6">
          {/* Active Location Info Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-gradient-to-b from-[#1c1814] to-[#100e0c] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#D6A85F] text-[#080808] text-[10px] font-bold uppercase tracking-wider">
                Selected Location
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F0E6] mt-3">
                {selectedLocation.name}
              </h3>
              <p className="text-xs text-[#D6A85F] font-serif italic mt-0.5">
                {selectedLocation.tag}
              </p>

              <div className="mt-6 space-y-3.5 text-xs text-[#AAA39B]">
                <div className="flex items-start gap-3">
                  <span className="text-base text-[#D6A85F]">🏢</span>
                  <div>
                    <span className="font-bold text-[#F7F0E6] block">Physical Address:</span>
                    <span>{selectedLocation.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-[#D6A85F]">🕒</span>
                  <div>
                    <span className="font-bold text-[#F7F0E6] block">Dining Hours:</span>
                    <span>{selectedLocation.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-[#D6A85F]">📞</span>
                  <div>
                    <span className="font-bold text-[#F7F0E6] block">Concierge & Bookings:</span>
                    <span>{selectedLocation.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-[#D6A85F]">🚗</span>
                  <div>
                    <span className="font-bold text-[#F7F0E6] block">Valet Parking:</span>
                    <span className="text-emerald-400 font-semibold">Complimentary Curbside Valet</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${selectedLocation.name} ${selectedLocation.address}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6A85F] to-[#FF7628] hover:brightness-110 text-[#080808] font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all"
              >
                Open in Google Maps ➔
              </a>

              <Link
                to="/restaurants"
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#AAA39B] hover:text-[#F7F0E6] text-center border border-white/10 transition-all"
              >
                View Architecture & Interior Photos
              </Link>
            </div>
          </div>

          {/* Real Interactive Google Maps Iframe */}
          <div className="lg:col-span-2 relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-[#0c0a09]">
            <iframe
              title={`Google Map Location for ${selectedLocation.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${selectedLocation.name}, ${selectedLocation.address}`
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.1) brightness(0.9)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 7. FREQUENTLY ASKED PHILOSOPHY QUESTIONS ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-b border-[#D6A85F]/20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
            Clarity & Transparency
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E6] mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl bg-[#141210] border border-white/5 overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
              >
                <span className="font-serif text-base font-bold text-[#F7F0E6]">
                  {faq.q}
                </span>
                <span className="text-[#D6A85F] text-lg font-bold shrink-0">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#AAA39B] leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 8. INVITATION / JOIN OUR TABLE CALLOUT ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#141210] to-[#080808] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-[#161311] border border-[#D6A85F]/40 shadow-[0_20px_70px_rgba(0,0,0,0.9)]">
          <span className="text-3xl block mb-3">🍽️</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6]">
            Every Great Memory Begins Around A Table.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#AAA39B] max-w-xl mx-auto leading-relaxed">
            Whether you crave our 16-hour coal simmered biryani, an artisan sourdough pizza blistered in wood fire, or an open-air sunset cocktail on our sky terrace — we look forward to hosting you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/restaurants"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6A85F] to-[#FF7628] hover:brightness-110 text-[#080808] font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
            >
              Reserve a Table →
            </Link>

            <Link
              to="/3d-food-lab"
              className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#F7F0E6] border border-white/20 transition-all hover:border-[#D6A85F]"
            >
              📖 Open 4K Hardcover Menu Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
