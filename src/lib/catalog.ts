import heroBurger from "@/assets/hero-burger.jpg";
import noodles from "@/assets/noodles.jpg";
import momos from "@/assets/momos.jpg";
import cake from "@/assets/cake.jpg";
import biryani from "@/assets/biryani.jpg";
import pizza from "@/assets/pizza.jpg";
import bakery from "@/assets/bakery.jpg";
import cafe from "@/assets/cafe.jpg";
import beverages from "@/assets/beverages.jpg";
import kitchen from "@/assets/cloud-kitchen.jpg";
import restaurant from "@/assets/restaurant.jpg";
import spread from "@/assets/home-spread.jpg";

export const IMG = { heroBurger, noodles, momos, cake, biryani, pizza, bakery, cafe, beverages, kitchen, restaurant, spread };

export type CategorySlug =
  | "biryani" | "burgers" | "pizza" | "momos" | "noodles" | "cakes" | "desserts" | "beverages"
  | "bakery" | "cafe" | "kitchen";

export type Category = {
  slug: CategorySlug; label: string; path: string; headline: string; sub: string; img: string;
  theme: string; tile: string; blurb: string[];
};

// Tile classes are design-system utilities (bg-*), not raw colours.
export const CATEGORIES: Category[] = [
  { slug: "biryani", label: "Biryani", path: "/biryani", headline: "Slow-cooked. Sealed. Unforgettable.", sub: "Dum biryanis layered for hours in copper handis.", img: biryani, theme: "theme-mango", tile: "bg-mango", blurb: ["Aged basmati", "Hand-sealed dum", "Saffron & kewra"] },
  { slug: "burgers", label: "Burgers", path: "/burgers", headline: "Stacked with intent.", sub: "Brioche baked at dawn, sauces made in-house. Build yours in 3D.", img: heroBurger, theme: "theme-dark", tile: "bg-coral", blurb: ["Daily-baked buns", "Smashed to order", "Build in 3D"] },
  { slug: "pizza", label: "Pizza", path: "/pizza", headline: "Blistered. Bubbling. Brilliant.", sub: "48-hour dough, 450°C wood-fire, 90 seconds.", img: pizza, theme: "theme-kitchen", tile: "bg-coral/80", blurb: ["48h cold ferment", "Wood-fired", "Fior di latte"] },
  { slug: "momos", label: "Momos", path: "/momos", headline: "Pleated by hand. Loved by all.", sub: "Steamed, pan-fried or swimming in jhol.", img: momos, theme: "theme-fresh", tile: "bg-mint", blurb: ["Hand-pleated", "Three styles", "Fiery achar"] },
  { slug: "noodles", label: "Noodles", path: "/noodles", headline: "Wok hei, every single time.", sub: "Fire-tossed noodles and slow-simmered ramen.", img: noodles, theme: "theme-dark", tile: "bg-mango/70", blurb: ["Fresh-pulled", "Blazing woks", "House chilli oil"] },
  { slug: "cakes", label: "Cakes", path: "/cakes", headline: "Celebrations, beautifully layered.", sub: "Signature and custom cakes for every moment.", img: cake, theme: "theme-bakery", tile: "bg-pistachio/60", blurb: ["Belgian chocolate", "Custom messages", "Same-day slots"] },
  { slug: "desserts", label: "Desserts", path: "/desserts", headline: "Save room. Seriously.", sub: "Cheesecakes, brownies and plated sweets.", img: bakery, theme: "theme-berry", tile: "bg-berry/30", blurb: ["Small batches", "Real vanilla", "No shortcuts"] },
  { slug: "beverages", label: "Beverages", path: "/beverages", headline: "Pour some happiness.", sub: "Lassis, coolers, shakes and cold brew.", img: beverages, theme: "theme-fresh", tile: "bg-mint/70", blurb: ["Fresh fruit", "18h cold brew", "Low sugar options"] },
];

export type Product = {
  slug: string; name: string; desc: string; price: number; cat: CategorySlug; veg: boolean;
  rating: number; time: number; popular?: boolean; isNew?: boolean; img: string; tags?: string[];
};

const p = (slug: string, name: string, desc: string, price: number, cat: CategorySlug, veg: boolean, img: string, extra: Partial<Product> = {}): Product =>
  ({ slug, name, desc, price, cat, veg, img, rating: 4.5, time: 25, ...extra });

export const PRODUCTS: Product[] = [
  p("hyderabadi-mutton-dum", "Hyderabadi Mutton Dum", "Tender mutton, saffron basmati, fried onions in copper handi", 389, "biryani", false, "/images/dishes/user-biryani-showcase.jpg", { popular: true, rating: 4.8, time: 35 }),
  p("lucknowi-veg-biryani", "Lucknowi Subz Biryani", "Seasonal vegetables, aged basmati, kewra, mint", 269, "biryani", true, "/images/dishes/chicken-biryani.jpg", { time: 30 }),
  p("chicken-65-biryani", "Chicken 65 Biryani", "Crisp spicy chicken 65 over saffron basmati rice", 329, "biryani", false, "/images/dishes/tandoori-skewers.jpg", { isNew: true, tags: ["spicy"] }),
  p("paneer-tikka-biryani", "Paneer Tikka Biryani", "Clay-oven smoked paneer, caramelized brown onions, fragrant dum", 299, "biryani", true, biryani, { rating: 4.6 }),

  p("paneer-tikka", "Paneer Tikka", "Charcoal-grilled cottage cheese cubes, spiced bell peppers & fresh mint chutney", 249, "kitchen", true, "/images/dishes/paneer-tikka.jpg", { popular: true, rating: 4.9, time: 20 }),
  p("smoked-paneer-stack", "Smoked Paneer Stack", "Tandoori paneer slab, pickled onion, chipotle mayo", 229, "burgers", true, "/images/burger-layers/assembled-burger.png", { time: 20 }),
  p("double-crunch-chicken", "Double Crunch Chicken", "Buttermilk fried chicken, purple slaw, melted cheddar & hot honey", 259, "burgers", false, "/images/dishes/double-crunch-burger.jpg", { popular: true, tags: ["spicy"] }),
  p("truffle-mushroom-melt", "Truffle Mushroom Melt", "Sautéed garlic mushrooms, truffle aioli, melted swiss on brioche", 279, "burgers", true, heroBurger, { isNew: true }),

  p("margherita-classica", "Margherita Classica", "San Marzano tomatoes, fior di latte mozzarella, fresh basil, olive oil", 349, "pizza", true, "/images/dishes/margherita-pizza.jpg", { popular: true, rating: 4.8 }),
  p("hot-honey-pepperoni", "Hot Honey Pepperoni", "Crispy chicken pepperoni cups, hot honey drizzle, mozzarella", 449, "pizza", false, "/images/dishes/pepperoni-pizza.jpg", { tags: ["spicy"] }),
  p("burrata-pesto", "Burrata & Pesto", "Whole fresh burrata, Genovese basil pesto, cherry tomatoes, 48-hr crust", 499, "pizza", true, "/images/dishes/burrata-pesto-pizza.jpg", { isNew: true }),
  p("tandoori-paneer-pizza", "Tandoori Paneer", "Charred tikka paneer, bell peppers, mozzarella, mint swirl", 399, "pizza", true, pizza),

  p("pan-fried-veg-momos", "Pan-Fried Veg Momos", "8 pcs with crisp seared bottom, fiery chilli garlic chutney & sesame dip", 159, "momos", true, "/images/dishes/pan-fried-momos.jpg", { popular: true, time: 15 }),
  p("jhol-chicken-momos", "Jhol Chicken Momos", "8 pcs steaming dumplings submerged in sesame-tomato spiced jhol soup", 189, "momos", false, "/images/dishes/jhol-momos.jpg", { isNew: true, tags: ["spicy"] }),
  p("steamed-paneer-momos", "Steamed Paneer Momos", "8 pcs hand-pleated dumplings in bamboo steamer, coriander, ginger", 169, "momos", true, "/images/dishes/steamed-momos.jpg", { time: 15 }),
  p("tandoori-momos", "Tandoori Momos", "Charred in the 400°C clay tandoor, smoky rub, mint dip", 199, "momos", true, momos, { rating: 4.7 }),

  p("chilli-garlic-hakka", "Chilli Garlic Hakka", "Wok-tossed noodles, wok hei char, garlic slivers & house chilli oil", 199, "noodles", true, "/images/dishes/hakka-noodles.jpg", { popular: true, tags: ["spicy"] }),
  p("burnt-garlic-ramen", "Burnt Garlic Ramen", "Rich umami miso broth, springy ramen, soft ajitsuke egg, bok choy", 279, "noodles", false, "/images/dishes/steaming-ramen-bowl.jpg", { rating: 4.7 }),
  p("pad-thai", "Bangkok Pad Thai", "Flat rice noodles, tamarind glaze, crushed peanuts, crunchy bean sprouts", 259, "noodles", true, noodles, { isNew: true }),

  p("tandoori-butter-naan", "Tandoori Garlic Naan", "Clay tandoor blistered leavened bread, crushed garlic, Amul butter", 45, "kitchen", true, "/images/dishes/butter-garlic-naan.jpg", { popular: true, time: 10 }),
  p("handi-chicken-curry", "Handi Chicken Curry", "Slow-stewed bone-in chicken in earthen handi with roasted spices", 299, "kitchen", false, "/images/dishes/handi-chicken.jpg", { popular: true, time: 25 }),
  p("murgh-malai-tikka", "Murgh Malai Tikka", "Charcoal-grilled tender chicken in creamy cashew & cardamom marinade", 289, "kitchen", false, "/images/dishes/tandoori-skewers.jpg", { time: 20 }),

  p("pistachio-noir", "Pistachio Noir Cake", "Dark chocolate, pistachio crémeux, gold leaf (500g)", 899, "cakes", true, cake, { popular: true, rating: 4.9, time: 45 }),
  p("strawberry-shortcake", "Strawberry Shortcake", "Vanilla sponge, fresh cream, berries (500g)", 749, "cakes", true, cake, { time: 45 }),
  p("belgian-truffle", "Belgian Truffle Cake", "70% dark ganache (1kg)", 1299, "cakes", true, cake, { time: 60 }),

  p("burnt-basque-cheesecake", "Burnt Basque Cheesecake", "Caramelised top, salted caramel", 229, "desserts", true, bakery, { popular: true }),
  p("fudge-brownie", "Triple Fudge Brownie", "Warm, gooey, with vanilla gelato", 179, "desserts", true, bakery),
  p("strawberry-tart", "Strawberry Tart", "Crème pâtissière, glazed berries", 199, "desserts", true, bakery, { isNew: true }),
  p("butter-croissant", "Butter Croissant", "72-layer French butter croissant", 129, "desserts", true, bakery, { time: 10 }),
  p("choc-chip-cookie", "Brown Butter Cookie", "Sea salt, dark chocolate chunks", 89, "desserts", true, bakery, { time: 10 }),
  p("sourdough-loaf", "Country Sourdough", "Naturally leavened, 800g", 249, "desserts", true, bakery),

  p("mango-lassi", "Alphonso Mango Lassi", "Thick, cold, real Alphonso mango pulp & saffron", 129, "beverages", true, "/images/dishes/cold-drinks.jpg", { popular: true, time: 10 }),
  p("watermelon-cooler", "Watermelon Mint Cooler", "Fresh-pressed, black salt & garden mint", 119, "beverages", true, beverages, { time: 10 }),
  p("berry-smoothie", "Berry Blast Smoothie", "Mixed berries, creamy yoghurt, wild honey", 159, "beverages", true, "/images/dishes/cold-drinks.jpg", { isNew: true }),
  p("cold-brew-tonic", "Cold Brew Tonic", "Orange, rosemary, 18h cold brew", 149, "beverages", true, cafe, { time: 5 }),
  p("cappuccino", "Single-Origin Cappuccino", "Chikmagalur beans, silky microfoam", 159, "beverages", true, cafe, { time: 5 }),

  p("korean-fried-chicken", "Korean Fried Chicken", "Gochujang glaze, sesame, 8 pcs", 349, "kitchen", false, kitchen, { popular: true, tags: ["spicy"] }),
  p("loaded-fries", "Belgian French Fries", "Double-fried golden fries, sea salt, house garlic aioli", 149, "kitchen", true, "/images/dishes/french-fries.jpg", { popular: true, time: 10 }),
  p("masala-peri-fries", "Peri-Peri Masala Fries", "Crispy spiced fries, tangy chaat seasoning, lime", 169, "kitchen", true, "/images/dishes/hero-fries-box.png", { tags: ["spicy"], time: 10 }),
  p("paneer-wrap", "Crispy Paneer Wrap", "Slaw, chipotle, mint", 199, "kitchen", true, kitchen, { time: 15 }),
  p("mega-combo", "Mega Meal Combo", "Chicken box, fries, lemonade", 449, "kitchen", false, kitchen, { tags: ["combo"], isNew: true }),
  p("veg-combo", "Veggie Value Combo", "Wrap, fries, cooler", 329, "kitchen", true, kitchen, { tags: ["combo"] }),

  p("avocado-toast", "Smashed Avocado Toast", "Sourdough, chilli flakes, microgreens", 279, "cafe", true, cafe, { popular: true }),
  p("almond-croissant", "Almond Croissant", "Twice-baked, frangipane", 169, "cafe", true, cafe),
];

export const productBySlug = (s: string) => PRODUCTS.find((x) => x.slug === s);
export const byCat = (c: CategorySlug) => PRODUCTS.filter((x) => x.cat === c);

export type Restaurant = { slug: string; name: string; cuisine: string; price: 1 | 2 | 3; veg: boolean; rating: number; time: number; area: string; img: string; tagline: string; cats: CategorySlug[] };
export const RESTAURANTS: Restaurant[] = [
  { slug: "crave-crust-flagship", name: "Crave & Crust Grand Flagship", cuisine: "Artisan Dining · Rooftop Terrace", price: 2, veg: false, rating: 4.9, time: 25, area: "Park Street, Kolkata", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", tagline: "Grand exterior facade, chandelier dining hall & sky terrace.", cats: ["burgers", "pizza", "desserts"] },
  { slug: "the-dum-house", name: "The Royal Dum House", cuisine: "Heritage Mughlai · Private Dining", price: 3, veg: false, rating: 4.8, time: 35, area: "Salt Lake, Kolkata", img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80", tagline: "Opulent chandelier halls and royal family dining suites.", cats: ["biryani"] },
  { slug: "pleat-and-steam", name: "Pleat & Steam Asian Bistro", cuisine: "Himalayan & Pan-Asian", price: 2, veg: false, rating: 4.7, time: 20, area: "New Market, Kolkata", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80", tagline: "Warm intimate booth seating and live Asian show kitchen.", cats: ["momos", "noodles"] },
  { slug: "rosemary-bakehouse", name: "Rosemary Garden & Bakehouse", cuisine: "European Café · Glasshouse", price: 2, veg: true, rating: 4.9, time: 30, area: "Ballygunge, Kolkata", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80", tagline: "Sunlit botanical conservatory and cozy chill-out lounge.", cats: ["cakes", "desserts", "cafe"] },
  { slug: "wok-republic", name: "Wok Republic & Sky Lounge", cuisine: "Pan-Asian · Cocktail Bar", price: 3, veg: false, rating: 4.6, time: 30, area: "Camac Street, Kolkata", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80", tagline: "Sultry ambient lighting, plush velvet seating & skyline view.", cats: ["noodles"] },
  { slug: "green-glass-cafe", name: "Green Glass Rooftop Terrace", cuisine: "Rooftop Café · Sky Lounge", price: 2, veg: true, rating: 4.8, time: 15, area: "Lake Road, Kolkata", img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80", tagline: "Breezy open-air terrace, fairy canopy lights & chill stay zone.", cats: ["beverages", "cafe"] },
];

export const OFFERS = [
  { code: "CRAVE50", title: "50% off your first order", note: "Up to ₹150 · min ₹299", tone: "bg-coral text-white" },
  { code: "BIRYANIFEST", title: "Free raita & salan with every biryani", note: "All weekend", tone: "bg-mango text-espresso" },
  { code: "SWEETTOOTH", title: "Buy 2 desserts, get 1 free", note: "Bakery & desserts", tone: "bg-berry text-white" },
  { code: "COMBO99", title: "Combos from ₹99 extra", note: "Add fries + drink to any burger", tone: "bg-mint text-espresso" },
];

export const LOCATIONS = ["Park Street, Kolkata", "Salt Lake, Kolkata", "Ballygunge, Kolkata", "New Town, Kolkata"];
