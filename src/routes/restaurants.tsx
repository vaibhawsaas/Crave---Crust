import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { RESTAURANTS } from "@/lib/catalog";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/restaurants")({
  head: () =>
    seo(
      "Restaurants & Venues | Crave & Crust",
      "Explore our architectural facades, luxury dining interiors, private family dining suites, rooftop terrace cafes, and chill lounges."
    ),
  component: Restaurants,
});

export interface VenueSpace {
  id: string;
  category: "exterior" | "interior" | "family" | "terrace" | "lounge" | "atrium" | "tables";
  categoryLabel: string;
  name: string;
  venueName: string;
  location: string;
  img: string;
  caption: string;
  capacity: string;
  vibe: string;
  features: string[];
}

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: "flagship-exterior",
    category: "exterior",
    categoryLabel: "Grand Exterior Facade",
    name: "Architectural Facade & Valet Portico",
    venueName: "Crave & Crust Grand Flagship",
    location: "Park Street, Kolkata",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    caption: "Dramatic double-height glass marquee with warm evening illumination, bronze trim, and dedicated curbside valet drop-off.",
    capacity: "Grand Entrance & Valet",
    vibe: "Opulent · Sophisticated · Warm Dusk Glow",
    features: ["Curbside Valet Portico", "Architectural Facade Lighting", "Covered Glass Canopy", "Dedicated Concierge Host"],
  },
  {
    id: "main-dining-interior",
    category: "interior",
    categoryLabel: "Luxury Main Dining",
    name: "Chandelier Grand Dining Hall",
    venueName: "The Royal Dum House",
    location: "Salt Lake, Kolkata",
    img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80",
    caption: "High-ceiling dining sanctuary featuring hand-cut Bohemian crystal chandeliers, warm fluted timber walls, and plush leather booths.",
    capacity: "Seating for 120 Guests",
    vibe: "Regal Heritage · Acoustic Comfort · Intimate Glow",
    features: ["Crystal Chandelier Canopy", "Acoustic Noise Dampening", "Fluted Oak Paneling", "Soft Brass Table Lamps"],
  },
  {
    id: "family-dining-suite",
    category: "family",
    categoryLabel: "Family Table Sets",
    name: "Private Family Dining Suite & Round Tables",
    venueName: "Crave & Crust Flagship",
    location: "Park Street, Kolkata",
    img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1400&q=80",
    caption: "Generous circular tables crafted for family feasts, birthdays, and celebrations, framed with private brass lattice screens.",
    capacity: "6 to 14 Guests per Suite",
    vibe: "Celebratory · Private · Comfortable Banquettes",
    features: ["Solid Oak Round Tables", "Highback Upholstered Seating", "Private Sound Partition", "Dedicated Butler Call System"],
  },
  {
    id: "rooftop-terrace-cafe",
    category: "terrace",
    categoryLabel: "Rooftop Terrace Café",
    name: "Open-Air Sky Terrace & Botanic Garden",
    venueName: "Green Glass Sky Lounge",
    location: "Lake Road, Kolkata",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80",
    caption: "Panoramic rooftop garden café with fairy string light canopy, fragrant jasmine planters, and sunset skyline views.",
    capacity: "Seating for 85 Guests",
    vibe: "Breezy · Romantic · Twilight Fairy Lights",
    features: ["360° City Skyline Views", "Fairy Canopy Lights", "Weather-Proof Pergola", "Acoustic Evening Chill Music"],
  },
  {
    id: "chill-stay-lounge",
    category: "lounge",
    categoryLabel: "Chill & Stay Lounge",
    name: "The Velvet Library & Hearth Lounge",
    venueName: "Wok Republic & Sky Lounge",
    location: "Camac Street, Kolkata",
    img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1400&q=80",
    caption: "Deep emerald velvet armchairs, marble low tables, and ambient jazz melodies. Perfect for leisurely conversations and extended stays.",
    capacity: "Comfortable Sofa Seating for 45",
    vibe: "Sultry · Unrushed · Curated Cocktails & Coffee",
    features: ["Plush Velvet Club Chairs", "Low Fireplace Hearth", "Bespoke Cocktail Bar", "Complimentary High-Speed Wi-Fi"],
  },
  {
    id: "hotel-atrium-view",
    category: "atrium",
    categoryLabel: "Hotel Atrium & Lobby View",
    name: "Grand Skylight Atrium & Marble Courtyard",
    venueName: "Crave & Crust Hotel & Dining Suites",
    location: "Ballygunge, Kolkata",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    caption: "Soaring 40-foot central skylight atrium with Italian Carrara marble flooring, living vertical gardens, and grand cascading staircase.",
    capacity: "Grand Architectural Atrium",
    vibe: "Monolithic · Architectural · Bright Daylight & Golden Evenings",
    features: ["40-Foot Skylight Ceiling", "Carrara Marble Floors", "Indoor Tropical Living Wall", "Lobby Piano Recitals"],
  },
  {
    id: "table-craftsmanship",
    category: "tables",
    categoryLabel: "Table Features & Sets",
    name: "Handcrafted Solid Wood Tables & Tableware",
    venueName: "Pleat & Steam Asian Bistro",
    location: "New Market, Kolkata",
    img: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1400&q=80",
    caption: "Intimate table setting with handcrafted walnut timber, brushed brass cutlery, dimmable amber candle globes, and fine crystal glassware.",
    capacity: "2 to 4 Guest Settings",
    vibe: "Refined Craftsmanship · Warm Amber Candlelight",
    features: ["Solid Walnut Timber", "Matte Brass Flatware", "Rechargeable Table Lamp", "Ergonomic Lumbar Chairs"],
  },
  {
    id: "glasshouse-conservatory",
    category: "terrace",
    categoryLabel: "Rooftop Terrace Café",
    name: "Sunlit Glasshouse Botanical Garden",
    venueName: "Rosemary Garden & Bakehouse",
    location: "Ballygunge, Kolkata",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    caption: "French colonial greenhouse café with iron-framed skylights, hanging ferns, checkerboard tiles, and gentle afternoon sunshine.",
    capacity: "Seating for 60 Guests",
    vibe: "Botanical · Sun-Drenched · European Charm",
    features: ["Wrought Iron Skylights", "Hanging Exotic Ferns", "Artisan Marble Tables", "Natural Daylight Sanctuary"],
  },
  {
    id: "moody-bar-lounge",
    category: "lounge",
    categoryLabel: "Chill & Stay Lounge",
    name: "The Speakeasy Mezzanine Lounge",
    venueName: "Crave & Crust Flagship",
    location: "Park Street, Kolkata",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80",
    caption: "Low-lit mezzanine cocktail lounge overlooking the main hall, featuring tufted leather banquettes and curated vinyl records.",
    capacity: "Seating for 35 Guests",
    vibe: "Intimate · Low-Lit · Vintage Vinyl Jazz",
    features: ["Tufted Leather Banquettes", "Overlooking Mezzanine", "Bespoke Mocktails & Brews", "Warm Amber Sconces"],
  },
];

export function Restaurants() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSpace, setSelectedSpace] = useState<VenueSpace | null>(null);

  // Reservation form state
  const [resVenue, setResVenue] = useState("Crave & Crust Grand Flagship (Park Street)");
  const [resZone, setResZone] = useState("Rooftop Terrace Café");
  const [resGuests, setResGuests] = useState("4 Guests (Family Booth)");
  const [resDate, setResDate] = useState("Today, Dinner Slot (8:00 PM)");
  const [resConfirmed, setResConfirmed] = useState(false);

  const filteredSpaces = VENUE_SPACES.filter(
    (space) => activeCategory === "all" || space.category === activeCategory
  );

  const handleBookTable = (e: React.FormEvent) => {
    e.preventDefault();
    setResConfirmed(true);
    setTimeout(() => setResConfirmed(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F7F0E6] select-none">
      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 1. CINEMATIC HERO: ARCHITECTURAL GRANDEUR ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden pb-16 pt-24 px-6">
        {/* Real Exterior Night Facade Background */}
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Crave & Crust Flagship Restaurant Exterior Facade"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] saturate-[1.2] scale-105 transition-transform duration-1000"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6A85F]/15 border border-[#D6A85F]/40 text-xs font-bold uppercase tracking-widest text-[#D6A85F] mb-4 backdrop-blur-md">
            <span>🏛️</span>
            <span>Architectural Venues & Hospitality Spaces</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F7F0E6] leading-[1.05] max-w-4xl">
            Where Space, Light & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A85F] via-[#F7F0E6] to-[#D6A85F]">
              Hospitality Converge.
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#AAA39B] max-w-2xl leading-relaxed font-light">
            Step inside Crave & Crust properties. Every location is architecturally tailored with dramatic double-height facades, crystal-chandelier dining halls, sound-dampened family suites, breezy open-air rooftop terraces, and plush velvet lounges.
          </p>

          {/* Quick Highlight Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl">
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#D6A85F] block">6 Venues</span>
              <span className="text-[11px] text-[#AAA39B] uppercase tracking-wider">Across Prime Kolkata</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#D6A85F] block">Sky Terraces</span>
              <span className="text-[11px] text-[#AAA39B] uppercase tracking-wider">360° Open Air Views</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#D6A85F] block">Family Suites</span>
              <span className="text-[11px] text-[#AAA39B] uppercase tracking-wider">Private & Soundproof</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#D6A85F] block">Valet Portico</span>
              <span className="text-[11px] text-[#AAA39B] uppercase tracking-wider">Curbside Concierge</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 2. VENUE SPACES & ZONES FILTER BAR ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 bg-[#080808]/95 backdrop-blur-md border-y border-[#D6A85F]/20 py-4 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif italic text-[#D6A85F] hidden sm:inline">
              Filter By Space:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All Spaces" },
                { id: "exterior", label: "Exterior Facade" },
                { id: "interior", label: "Main Dining Interior" },
                { id: "family", label: "Family Table Sets" },
                { id: "terrace", label: "Rooftop Terrace Café" },
                { id: "lounge", label: "Chill & Stay Lounge" },
                { id: "atrium", label: "Hotel Atrium View" },
                { id: "tables", label: "Table Features" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-[#D6A85F] text-[#080808] font-bold shadow-md scale-105"
                      : "bg-white/5 text-[#AAA39B] hover:text-[#F7F0E6] border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="#reserve-table-section"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D6A85F] to-[#FF7628] hover:brightness-110 text-[#080808] text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <span>📅</span>
            <span>Reserve Table</span>
          </a>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 3. ARCHITECTURAL GALLERY: EXTERIOR & INTERIOR SHOWCASE ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-8 pb-3 border-b border-[#D6A85F]/20">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              Visual Ambience Tour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E6] mt-1">
              Explore Our Spaces & Settings
            </h2>
          </div>
          <p className="text-xs text-[#AAA39B] max-w-sm text-right hidden md:block">
            High-resolution interior photography. Click any space to inspect seating layout, acoustics & lighting features.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.map((space) => (
            <div
              key={space.id}
              onClick={() => setSelectedSpace(space)}
              className="group rounded-2xl overflow-hidden bg-[#12100e] border border-white/10 hover:border-[#D6A85F]/60 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-pointer flex flex-col"
            >
              {/* High-Resolution Venue Photo */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                <img
                  src={space.img}
                  alt={space.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-[0.9] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D6A85F]/40 text-[10px] uppercase font-bold tracking-wider text-[#D6A85F]">
                  <span>✦</span>
                  <span>{space.categoryLabel}</span>
                </div>

                {/* Capacity Pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] text-[#F7F0E6] border border-white/10">
                  {space.capacity}
                </div>
              </div>

              {/* Space Description Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#F7F0E6] group-hover:text-[#D6A85F] transition-colors">
                      {space.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#D6A85F] font-serif italic mt-0.5">
                    {space.venueName} · {space.location}
                  </p>
                  <p className="text-xs text-[#AAA39B] leading-relaxed mt-2.5 line-clamp-2">
                    {space.caption}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {space.features.slice(0, 3).map((feat) => (
                      <span
                        key={feat}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-[#AAA39B] border border-white/5"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#D6A85F] font-semibold group-hover:text-[#FF7628] transition-colors">
                    <span>View Space Details & Layout</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 4. FLAGSHIP RESTAURANT VENUES (6 PROPERTIES) ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0e0c0a] py-16 px-6 border-y border-[#D6A85F]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              Our Locations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F0E6] mt-2">
              6 Flagship Architectural Destinations
            </h2>
            <p className="text-xs sm:text-sm text-[#AAA39B] mt-2">
              Each dining room is conceived with custom lighting, bespoke furniture, and acoustic design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESTAURANTS.map((venue) => (
              <div
                key={venue.slug}
                className="group rounded-2xl overflow-hidden bg-[#161311] border border-white/10 hover:border-[#D6A85F]/60 transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={venue.img}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-[#D6A85F] border border-[#D6A85F]/30">
                    ★ {venue.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[11px] font-semibold text-[#F7F0E6]">
                    📍 {venue.area}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-[#F7F0E6] group-hover:text-[#D6A85F] transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-[#D6A85F] font-serif italic mt-0.5">
                    {venue.cuisine} · {"₹".repeat(venue.price)}
                  </p>
                  <p className="text-xs text-[#AAA39B] mt-2 leading-relaxed">
                    "{venue.tagline}"
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-[#AAA39B]">Valet Available · Wi-Fi</span>
                    <a
                      href="#reserve-table-section"
                      onClick={() => setResVenue(venue.name)}
                      className="text-xs font-bold text-[#D6A85F] hover:text-[#FF7628] transition-colors"
                    >
                      Book Table Here →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 5. SEATING FEATURES & TABLE CRAFTSMANSHIP GRID ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
            Hospitality Details
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E6] mt-1">
            Engineered For Unhurried Conversations
          </h2>
          <p className="text-xs text-[#AAA39B] mt-2">
            Every table dimension, acoustic panel, and lighting fixture is crafted for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-[#12100e] border border-white/5 hover:border-[#D6A85F]/30 transition-all">
            <span className="text-3xl block mb-3">🪵</span>
            <h3 className="font-serif text-base font-bold text-[#F7F0E6]">Solid Timber Tables</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-1">
              Deep reclaimed teak and walnut tabletops with natural satin beeswax finish and gentle chamfered edges.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12100e] border border-white/5 hover:border-[#D6A85F]/30 transition-all">
            <span className="text-3xl block mb-3">🕯️</span>
            <h3 className="font-serif text-base font-bold text-[#F7F0E6]">Ambient Table Glow</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-1">
              Custom rechargeable brass table lamps emitting 2200K warm candlelight that flatters without glaring.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12100e] border border-white/5 hover:border-[#D6A85F]/30 transition-all">
            <span className="text-3xl block mb-3">🔇</span>
            <h3 className="font-serif text-base font-bold text-[#F7F0E6]">Acoustic Balance</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-1">
              Perforated acoustic timber ceilings that keep ambient conversations private without deadening atmosphere.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#12100e] border border-white/5 hover:border-[#D6A85F]/30 transition-all">
            <span className="text-3xl block mb-3">🌿</span>
            <h3 className="font-serif text-base font-bold text-[#F7F0E6]">Rooftop Sky Gardens</h3>
            <p className="text-xs text-[#AAA39B] leading-relaxed mt-1">
              Natural air purifying palms, jasmine vines, and weather-sheltered pergolas for comfortable outdoor evenings.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 6. TABLE RESERVATION & SPACE BOOKING SECTION ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="reserve-table-section" className="bg-[#12100e] border-t border-[#D6A85F]/30 py-16 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#181512] to-[#0c0a09] border border-[#D6A85F]/40 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D6A85F]">
              Direct Table Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F0E6] mt-1">
              Reserve Your Table or Space
            </h2>
            <p className="text-xs text-[#AAA39B] mt-2">
              Select your preferred venue and seating zone. Instant confirmation with zero booking fees.
            </p>
          </div>

          <form onSubmit={handleBookTable} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Venue Selector */}
              <div>
                <label className="text-xs font-semibold text-[#D6A85F] uppercase tracking-wider block mb-1.5">
                  Select Restaurant Venue
                </label>
                <select
                  value={resVenue}
                  onChange={(e) => setResVenue(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 bg-black/60 border border-white/10 text-xs text-[#F7F0E6] focus:border-[#D6A85F] outline-none"
                >
                  {RESTAURANTS.map((r) => (
                    <option key={r.slug} value={`${r.name} (${r.area})`}>
                      {r.name} — {r.area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seating Zone */}
              <div>
                <label className="text-xs font-semibold text-[#D6A85F] uppercase tracking-wider block mb-1.5">
                  Preferred Seating Zone
                </label>
                <select
                  value={resZone}
                  onChange={(e) => setResZone(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 bg-black/60 border border-white/10 text-xs text-[#F7F0E6] focus:border-[#D6A85F] outline-none"
                >
                  <option value="Rooftop Terrace Café (Open Air)">Rooftop Terrace Café (Open Air & String Lights)</option>
                  <option value="Main Chandelier Dining Hall">Main Chandelier Dining Hall (Grand Interior)</option>
                  <option value="Private Family Dining Suite">Private Family Dining Suite (Sound-Dampened)</option>
                  <option value="Chill & Stay Cocktail Lounge">Chill & Stay Cocktail Lounge (Velvet Armchairs)</option>
                  <option value="Sunlit Glasshouse Conservatory">Sunlit Glasshouse Conservatory</option>
                  <option value="Intimate Candlelight Window Table">Intimate Candlelight Window Table (Couple)</option>
                </select>
              </div>

              {/* Guest Count */}
              <div>
                <label className="text-xs font-semibold text-[#D6A85F] uppercase tracking-wider block mb-1.5">
                  Party Size / Seating Set
                </label>
                <select
                  value={resGuests}
                  onChange={(e) => setResGuests(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 bg-black/60 border border-white/10 text-xs text-[#F7F0E6] focus:border-[#D6A85F] outline-none"
                >
                  <option value="2 Guests (Intimate Window Table)">2 Guests (Intimate Window Table)</option>
                  <option value="4 Guests (Family Booth)">4 Guests (Family Booth)</option>
                  <option value="6-8 Guests (Round Oak Banquet)">6-8 Guests (Round Oak Banquet Table)</option>
                  <option value="10-14 Guests (Private Dining Suite)">10-14 Guests (Private Dining Suite)</option>
                  <option value="15+ Guests (Celebration Hall)">15+ Guests (Celebration Booking)</option>
                </select>
              </div>

              {/* Slot / Time */}
              <div>
                <label className="text-xs font-semibold text-[#D6A85F] uppercase tracking-wider block mb-1.5">
                  Preferred Date & Time Slot
                </label>
                <select
                  value={resDate}
                  onChange={(e) => setResDate(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 bg-black/60 border border-white/10 text-xs text-[#F7F0E6] focus:border-[#D6A85F] outline-none"
                >
                  <option value="Today (Lunch: 1:00 PM - 3:00 PM)">Today (Lunch: 1:00 PM - 3:00 PM)</option>
                  <option value="Today (Sunset Tea: 4:30 PM - 6:30 PM)">Today (Sunset Tea: 4:30 PM - 6:30 PM)</option>
                  <option value="Today (Dinner Slot: 8:00 PM - 10:30 PM)">Today (Dinner Slot: 8:00 PM - 10:30 PM)</option>
                  <option value="Tomorrow (Dinner Slot: 8:30 PM)">Tomorrow (Dinner Slot: 8:30 PM)</option>
                  <option value="This Weekend (Saturday Night 8:00 PM)">This Weekend (Saturday Night 8:00 PM)</option>
                  <option value="This Weekend (Sunday Brunch 12:30 PM)">This Weekend (Sunday Brunch 12:30 PM)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#AAA39B]">
                ✓ Instant SMS confirmation · Valet parking included
              </span>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6A85F] via-[#FF7628] to-[#D6A85F] text-[#080808] font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Confirm Table Reservation →
              </button>
            </div>
          </form>

          {/* Toast on Reservation */}
          {resConfirmed && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in">
              <span className="text-lg">✓</span>
              <div>
                <p className="font-bold">Table Reservation Confirmed!</p>
                <p className="text-[11px] text-emerald-300">
                  {resVenue} · {resZone} for {resGuests} ({resDate}). Concierge will hold your table for 20 minutes past slot.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 7. DETAILED SPACE LIGHTBOX / MODAL ── */}
      {/* ────────────────────────────────────────────────────────── */}
      {selectedSpace && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={() => setSelectedSpace(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#141210] border border-[#D6A85F]/50 rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedSpace(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-[#AAA39B] hover:text-[#F7F0E6] flex items-center justify-center text-sm transition-all cursor-pointer border border-white/20 z-20"
            >
              ✕
            </button>

            {/* High Res Showcase Photo */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedSpace.img}
                alt={selectedSpace.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 rounded-full bg-[#D6A85F] text-[#080808] text-[10px] uppercase font-bold tracking-widest">
                  {selectedSpace.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E6] mt-2">
                  {selectedSpace.name}
                </h3>
                <p className="text-xs text-[#D6A85F] font-serif italic">
                  {selectedSpace.venueName} · {selectedSpace.location}
                </p>
              </div>
            </div>

            {/* Details Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-[#AAA39B] leading-relaxed">
                {selectedSpace.caption}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D6A85F] font-bold block">
                    Seating & Capacity
                  </span>
                  <span className="text-xs font-semibold text-[#F7F0E6] mt-0.5 block">
                    {selectedSpace.capacity}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D6A85F] font-bold block">
                    Atmosphere & Vibe
                  </span>
                  <span className="text-xs font-semibold text-[#F7F0E6] mt-0.5 block">
                    {selectedSpace.vibe}
                  </span>
                </div>
              </div>

              {/* Architectural Amenities */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D6A85F] font-bold block mb-2">
                  Key Space Amenities & Design
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSpace.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-[#AAA39B]">
                      <span className="text-[#D6A85F]">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D6A85F]/20 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedSpace(null)}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-[#AAA39B]"
                >
                  Close Tour
                </button>

                <a
                  href="#reserve-table-section"
                  onClick={() => {
                    setResVenue(selectedSpace.venueName);
                    setResZone(selectedSpace.categoryLabel);
                    setSelectedSpace(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#D6A85F] hover:bg-[#FF7628] text-[#080808] font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  Reserve Table in This Zone →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
