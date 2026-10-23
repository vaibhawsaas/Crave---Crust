import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { cart } from "@/lib/cart";

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  price: number;
  category: string;
  veg: boolean;
  bestseller?: boolean;
  spicy?: boolean;
  image: string;
  scriptBadge?: string;
  portionOptions: { name: string; price: number }[];
  spiceOptions: string[];
  ingredients: string[];
  highlights: { icon: string; title: string; subtitle: string }[];
}

// ── SPREAD 1 DISHES: ROYAL DUM BIRYANI & CLAY OVEN SOURDOUGH PIZZAS ──
export const ROYAL_BIRYANI_ITEMS: MenuItem[] = [
  {
    id: "royal-chicken-dum-biryani",
    name: "Royal Chicken Dum Biryani",
    tagline: "शाही चिकन दम बिर्याणी — Slow cooked with saffron rice, caramelized onions & herbs",
    desc: "A royal culinary legacy: 2-year aged long-grain basmati rice layered with tender farm chicken, marinated in Kashmiri saffron, pure cow ghee, browned onions (birista) and 18 handpicked whole spices, sealed under dough and slow-steamed over coal embers.",
    price: 299,
    category: "Biryani",
    veg: false,
    bestseller: true,
    image: "/images/dishes/user-biryani-showcase.jpg",
    scriptBadge: "Authentic Dum 🌿",
    portionOptions: [
      { name: "Half Plate (1 Person)", price: 299 },
      { name: "Full Copper Handi (2 Persons)", price: 529 },
      { name: "Royal Feast Handi (4 Persons)", price: 949 },
    ],
    spiceOptions: ["Royal Medium (Classic)", "Nawabi Mild", "Fiery Andhra Dum 🔥"],
    ingredients: [
      "2-Year Aged Daawat Basmati Rice",
      "Tender Farm Chicken",
      "Kashmir Saffron Threads",
      "Pure Cow Desi Ghee",
      "Fried Brown Onions (Birista)",
      "Star Anise, Shahi Jeera & Green Cardamom",
    ],
    highlights: [
      { icon: "♨️", title: "Freshly Prepared", subtitle: "Slow-cooked on dum" },
      { icon: "🌿", title: "Signature Spices", subtitle: "18 handpicked spices" },
      { icon: "🍗", title: "Premium Chicken", subtitle: "Tender bone-in cuts" },
      { icon: "🌾", title: "Aromatic Basmati", subtitle: "Extra long aged grains" },
    ],
  },
  {
    id: "hyderabadi-mutton-biryani",
    name: "Hyderabadi Mutton Biryani",
    tagline: "हैद्राबादी मटण बिर्याणी — Succulent baby goat meat layered with fragrant saffron rice",
    desc: "Slow-cooked cuts of tender goat shank marinated overnight in crushed raw papaya, golden onions, and shahi garam masala, layered with aged basmati rice inside a hammered copper handi.",
    price: 349,
    category: "Biryani",
    veg: false,
    bestseller: true,
    spicy: true,
    image: "/images/dishes/user-biryani-showcase.jpg",
    scriptBadge: "Kacche Gosht Dum 🏺",
    portionOptions: [
      { name: "Half Plate", price: 349 },
      { name: "Full Copper Handi", price: 629 },
      { name: "Royal Feast Pot", price: 1099 },
    ],
    spiceOptions: ["Nawabi Medium", "Dakhni Spicy 🔥"],
    ingredients: ["Baby Goat Meat", "Saffron Milk", "Desi Ghee", "Mace & Nutmeg", "Fresh Mint"],
    highlights: [
      { icon: "🍖", title: "Baby Goat Shanks", subtitle: "Tender fall-off-bone" },
      { icon: "🏺", title: "Copper Handi", subtitle: "Slow coal simmered" },
      { icon: "🌿", title: "Pure Saffron", subtitle: "Golden fragrant hue" },
      { icon: "🥣", title: "Mirchi Ka Salan", subtitle: "Served piping hot" },
    ],
  },
  {
    id: "dum-subz-biryani",
    name: "Subz Paneer Dum Biryani & Raita",
    tagline: "दम व्हेज बिर्याणी — Fresh vegetables, malai paneer & cucumber mint raita",
    desc: "Tender carrots, french beans, florets of cauliflower and malai paneer cubes tossed in browned onion masala, layered with aged basmati rice and saffron milk. Served with chilled cucumber boondi raita.",
    price: 249,
    category: "Biryani",
    veg: true,
    image: "/images/dishes/chicken-biryani.jpg",
    scriptBadge: "Pure Veg 🟢",
    portionOptions: [
      { name: "Half Plate", price: 249 },
      { name: "Full Plate", price: 429 },
    ],
    spiceOptions: ["Fragrant Mild", "Royal Medium"],
    ingredients: ["Farm Vegetables", "Malai Paneer", "Basmati Rice", "Kewra Water", "Mint", "Fresh Curd"],
    highlights: [
      { icon: "🧀", title: "Malai Paneer", subtitle: "Soft fresh cubes" },
      { icon: "🥕", title: "Garden Veggies", subtitle: "Handpicked produce" },
      { icon: "🌾", title: "Kewra Essence", subtitle: "Delicate royal fragrance" },
      { icon: "🥣", title: "Burani Raita", subtitle: "Garlic yoghurt dip" },
    ],
  },
];

export const CLAY_OVEN_ITEMS: MenuItem[] = [
  {
    id: "tandoori-butter-naan",
    name: "Tandoori Butter Garlic Naan",
    tagline: "बटर लसूण नान — Crispy blistered naan with crushed garlic & Amul butter",
    desc: "Hand-stretched leavened flatbread slapped onto the inner clay walls of our 400°C tandoor, topped with minced garlic, fresh coriander and generous dollops of Amul butter.",
    price: 45,
    category: "Breads",
    veg: true,
    bestseller: true,
    image: "/images/dishes/butter-garlic-naan.jpg",
    scriptBadge: "Clay Tandoor 🫓",
    portionOptions: [
      { name: "Single Naan", price: 45 },
      { name: "Basket of 3", price: 120 },
      { name: "Basket of 5", price: 189 },
    ],
    spiceOptions: ["Garlic Butter Classic", "Extra Crispy", "Cheese Stuffed (+₹40)"],
    ingredients: ["Fine Flour", "Fresh Garlic", "Amul Butter", "Nigella Seeds", "Cilantro"],
    highlights: [
      { icon: "🫓", title: "400°C Tandoor", subtitle: "Crisp char bubbles" },
      { icon: "🧄", title: "Fresh Garlic", subtitle: "Aromatic crust" },
      { icon: "🧈", title: "Amul Butter", subtitle: "Melting hot glaze" },
      { icon: "🌿", title: "Soft Inside", subtitle: "Airy leavened dough" },
    ],
  },
  {
    id: "burrata-pesto-pizza",
    name: "Truffle Burrata Pesto Pizza",
    tagline: "बुर्राटा पेस्टो पिझ्झा — 48-hr sourdough crust with whole fresh burrata",
    desc: "48-hour fermented sourdough crust baked at 450°C, topped with San Marzano tomato sauce, fior di latte mozzarella, whole fresh cream burrata ball, Genovese basil pesto and white truffle oil drizzle.",
    price: 499,
    category: "Pizza",
    veg: true,
    bestseller: true,
    image: "/images/dishes/burrata-pesto-pizza.jpg",
    scriptBadge: "Artisan Sourdough 🍕",
    portionOptions: [
      { name: "10 Inch (Medium)", price: 499 },
      { name: "12 Inch (Large)", price: 699 },
    ],
    spiceOptions: ["Classic Italian", "Chilli Flakes & Hot Honey"],
    ingredients: ["48-hr Sourdough", "Fresh Burrata", "Genovese Pesto", "San Marzano Tomatoes", "White Truffle Oil"],
    highlights: [
      { icon: "🍕", title: "Wood-Fired Crust", subtitle: "Leopard spotted blister" },
      { icon: "🧀", title: "Whole Burrata", subtitle: "Creamy liquid center" },
      { icon: "🌿", title: "Pine Nut Pesto", subtitle: "Fresh Genovese basil" },
      { icon: "✨", title: "White Truffle", subtitle: "Earthy luxury drizzle" },
    ],
  },
  {
    id: "handi-chicken-curry",
    name: "Special Handi Chicken Curry",
    tagline: "हंडी चिकन मसाला — Slow cooked tomato & cashew brown onion gravy",
    desc: "Tender chicken pieces simmered in an earthen handi with roasted onions, ground black pepper, coriander seeds and crushed fenugreek leaves.",
    price: 299,
    category: "Curries",
    veg: false,
    bestseller: true,
    image: "/images/dishes/handi-chicken.jpg",
    scriptBadge: "Handi Special 🏺",
    portionOptions: [
      { name: "Half Handi", price: 299 },
      { name: "Full Handi", price: 529 },
    ],
    spiceOptions: ["Medium Spiced", "Kolhapuri Spicy 🔥🔥"],
    ingredients: ["Chicken on Bone", "Brown Onion Paste", "Cashew Cream", "Kasuri Methi", "Whole Spices"],
    highlights: [
      { icon: "🏺", title: "Earthen Pot", subtitle: "Clay handi flavor" },
      { icon: "🍗", title: "Slow Stewed", subtitle: "Tender bone-in cuts" },
      { icon: "🧅", title: "Rich Gravy", subtitle: "Zero artificial colors" },
      { icon: "🧈", title: "Desi Makhan", subtitle: "Swirled on top" },
    ],
  },
  {
    id: "tarka-dal-makhani",
    name: "Tarka Dal Makhani Slow Dum",
    tagline: "दाल मखनी — 16-hr charcoal simmered black lentils",
    desc: "Whole black urad lentils slow-cooked overnight with ginger, tomato puree and white butter, finished with dairy cream and garlic cumin tadka.",
    price: 229,
    category: "Curries",
    veg: true,
    image: "/images/dishes/handi-chicken.jpg",
    portionOptions: [{ name: "Standard Bowl", price: 229 }],
    spiceOptions: ["Velvety Mild", "Tadka Spiced"],
    ingredients: ["Black Lentils", "White Butter", "Dairy Cream", "Tomatoes", "Kasuri Methi"],
    highlights: [
      { icon: "♨️", title: "16-Hr Dum", subtitle: "Simmered overnight" },
      { icon: "🧈", title: "White Butter", subtitle: "Ultra rich texture" },
      { icon: "🫘", title: "Whole Lentils", subtitle: "Nutritious & hearty" },
      { icon: "🌾", title: "Pairs with Naan", subtitle: "Classic companion" },
    ],
  },
];

// ── SPREAD 2 DISHES: STARTERS & MAIN COURSE ──
export const STARTERS_ITEMS: MenuItem[] = [
  {
    id: "french-fries-classic",
    name: "French Fries (Belgian Cut)",
    tagline: "Crispy golden Belgian fries, served with house garlic aioli dip",
    desc: "Crispy golden Belgian-cut fries, double fried to perfection and served with house garlic mayonnaise dip.",
    price: 149,
    category: "Starters",
    veg: true,
    image: "/images/dishes/french-fries.jpg",
    portionOptions: [{ name: "Standard Basket", price: 149 }],
    spiceOptions: ["Classic Salted", "Herbed Rosemary"],
    ingredients: ["Farm Potatoes", "Sea Salt", "Garlic Aioli"],
    highlights: [
      { icon: "🍟", title: "Double Fried", subtitle: "Maximum crispiness" },
      { icon: "🧂", title: "Sea Salt", subtitle: "Zero preservatives" },
      { icon: "🥣", title: "House Dip", subtitle: "Garlic aioli" },
      { icon: "🥔", title: "Farm Potatoes", subtitle: "Fresh cut daily" },
    ],
  },
  {
    id: "masala-fries-special",
    name: "Masala Peri-Peri Fries",
    tagline: "Spiced fries with a tangy twist & secret peri-peri blend",
    desc: "Spiced golden fries tossed in our secret tangy chaat and peri-peri seasoning with a squeeze of fresh lime.",
    price: 169,
    category: "Starters",
    veg: true,
    image: "/images/dishes/hero-fries-box.png",
    portionOptions: [{ name: "Regular Bowl", price: 169 }],
    spiceOptions: ["Tangy Zesty", "Fiery Desi 🔥"],
    ingredients: ["Belgian Potatoes", "House Masala", "Lime", "Cilantro"],
    highlights: [
      { icon: "🌶️", title: "Tangy Rub", subtitle: "Secret chaat spice" },
      { icon: "🍟", title: "Crisp Crust", subtitle: "Crunchy bite" },
      { icon: "🍋", title: "Fresh Lime", subtitle: "Zesty citrus" },
      { icon: "🥣", title: "Spicy Dip", subtitle: "Chilli mayo" },
    ],
  },
  {
    id: "veg-spring-rolls-crisp",
    name: "Veg Spring Rolls",
    tagline: "Crispy golden rolls filled with fresh julienned vegetables & glass noodles",
    desc: "Crispy fried golden rolls stuffed with shredded fresh garden vegetables, scallions and glass noodles. Served with sweet chilli dip.",
    price: 199,
    category: "Starters",
    veg: true,
    image: "/images/dishes/pan-fried-momos.jpg",
    portionOptions: [{ name: "6 Pcs Platter", price: 199 }],
    spiceOptions: ["Sweet Chilli (Mild)", "Schezwan Dip 🔥"],
    ingredients: ["Cabbage", "Carrot", "Glass Noodles", "Spring Onion", "Wonton Wrap"],
    highlights: [
      { icon: "🥢", title: "Hand Rolled", subtitle: "Crisp golden pastry" },
      { icon: "🥕", title: "Fresh Veggies", subtitle: "Crunchy juliennes" },
      { icon: "🌶️", title: "Sweet Chilli", subtitle: "Tangy dip" },
      { icon: "✨", title: "Light Fry", subtitle: "Zero greasiness" },
    ],
  },
  {
    id: "paneer-tikka-sizzler",
    name: "Smoky Paneer Tikka",
    tagline: "Smoky grilled malai cottage cheese cubes with peppers & mint chutney",
    desc: "Smoky grilled malai cottage cheese cubes marinated in hung curd, deggi mirch and roasted carom seeds, skewered with bell peppers and onions.",
    price: 249,
    category: "Starters",
    veg: true,
    image: "/images/dishes/tandoori-skewers.jpg",
    portionOptions: [{ name: "6 Chunks (Standard)", price: 249 }],
    spiceOptions: ["Tandoori Medium", "Fiery Angara 🔥"],
    ingredients: ["Fresh Malai Paneer", "Hung Curd", "Deggi Mirch", "Ajwain", "Capsicum"],
    highlights: [
      { icon: "🧀", title: "Malai Paneer", subtitle: "Melt in mouth" },
      { icon: "♨️", title: "Live Charcoal", subtitle: "Clay tandoor char" },
      { icon: "🌿", title: "Mint Laccha", subtitle: "Served hot" },
      { icon: "🍋", title: "Chaat Masala", subtitle: "Butter squeeze" },
    ],
  },
];

export const MAIN_COURSE_ITEMS: MenuItem[] = [
  {
    id: "paneer-butter-masala-rich",
    name: "Paneer Butter Masala",
    tagline: "Creamy and rich cottage cheese in a buttery tomato cashew gravy",
    desc: "Creamy and rich cottage cheese cubes slow-simmered in a velvety tomato and cashew butter gravy with fenugreek leaves.",
    price: 249,
    category: "Curries",
    veg: true,
    image: "/images/dishes/handi-chicken.jpg",
    portionOptions: [{ name: "Full Handi", price: 249 }],
    spiceOptions: ["Mild Creamy", "Royal Medium"],
    ingredients: ["Malai Paneer", "Makhani Gravy", "Amul Butter", "Cashew Cream"],
    highlights: [
      { icon: "🧈", title: "White Butter", subtitle: "Velvety smooth" },
      { icon: "🧀", title: "Malai Paneer", subtitle: "Tender cubes" },
      { icon: "🍅", title: "Fresh Tomatoes", subtitle: "Sweet & tangy" },
      { icon: "🌿", title: "Kasuri Methi", subtitle: "Fragrant herb finish" },
    ],
  },
  {
    id: "chicken-butter-masala-classic",
    name: "Chicken Butter Masala",
    tagline: "Tender tandoor-roasted chicken in a classic buttery tomato sauce",
    desc: "Tender tandoor-roasted chicken pieces folded into a classic silky buttery tomato sauce with cream and roasted spices.",
    price: 299,
    category: "Curries",
    veg: false,
    image: "/images/dishes/handi-chicken.jpg",
    portionOptions: [{ name: "Full Handi", price: 299 }],
    spiceOptions: ["Classic Butter Cream", "Medium Spiced"],
    ingredients: ["Tandoori Chicken Chunks", "Makhani Sauce", "Butter", "Honey"],
    highlights: [
      { icon: "🍗", title: "Tandoori Chicken", subtitle: "Boneless cuts" },
      { icon: "🧈", title: "Pure Dairy Butter", subtitle: "Silky gravy" },
      { icon: "🍅", title: "Ripe Tomatoes", subtitle: "Natural flavor" },
      { icon: "🌿", title: "Cardamom & Honey", subtitle: "Subtle balance" },
    ],
  },
  {
    id: "masala-chaas-chilled",
    name: "Chilled Masala Chaas",
    tagline: "Spiced buttermilk with roasted cumin, fresh mint & ginger",
    desc: "Traditional spiced buttermilk churned with fresh mint, coriander, roasted cumin seeds, black salt and green chillies.",
    price: 79,
    category: "Beverages",
    veg: true,
    image: "/images/dishes/cold-drinks.jpg",
    portionOptions: [{ name: "Tall Glass (350ml)", price: 79 }],
    spiceOptions: ["Refreshing Mint"],
    ingredients: ["Fresh Curd", "Roasted Cumin", "Black Salt", "Mint", "Coriander"],
    highlights: [
      { icon: "🥛", title: "Fresh Churned", subtitle: "100% natural curd" },
      { icon: "🌿", title: "Digestive Spices", subtitle: "Roasted cumin" },
      { icon: "❄️", title: "Chilled", subtitle: "Cooling beverage" },
      { icon: "🌱", title: "Fresh Mint", subtitle: "Garden aroma" },
    ],
  },
];

// ── ASIAN STEAM & FRY: MOMOS ──
export const MOMOS_ITEMS: MenuItem[] = [
  {
    id: "pan-fried-veg-momos",
    name: "Crispy Pan-Fried Momos",
    tagline: "क्रिस्पी पॅन-फ्राइड मोमोज — Golden-crisp seared bottoms with fiery Sichuan dip",
    desc: "Hand-pleated Tibetan dumplings filled with finely minced garden vegetables and ginger, pan-seared to a golden crunchy base while remaining soft and juicy on top. Served with spicy Sichuan chilli garlic chutney and creamy sesame dip.",
    price: 159,
    category: "Momos",
    veg: true,
    bestseller: true,
    image: "/images/dishes/pan-fried-momos.jpg",
    scriptBadge: "Hand-Pleated 🥟",
    portionOptions: [
      { name: "6 Pieces", price: 159 },
      { name: "8 Pieces Platter", price: 199 },
    ],
    spiceOptions: ["Fiery Sichuan Dip 🔥", "Creamy Sesame (Mild)"],
    ingredients: ["Farm Cabbage", "Carrot", "Spring Onions", "Ginger", "Chilli Garlic Oil", "Sesame"],
    highlights: [
      { icon: "🥟", title: "Crisp Bottom", subtitle: "Golden pan-seared" },
      { icon: "🌶️", title: "Sichuan Chutney", subtitle: "Fiery red dip" },
      { icon: "🥢", title: "Hand Pleated", subtitle: "Fresh daily batch" },
      { icon: "🥣", title: "Sesame Mayo", subtitle: "Cooling dip" },
    ],
  },
  {
    id: "jhol-chicken-momos",
    name: "Authentic Jhol Chicken Momos",
    tagline: "झोल चिकन मोमोज — Steaming dumplings in roasted tomato & sesame broth",
    desc: "Plump, juicy minced chicken dumplings submerged in a steaming, aromatic golden-orange sesame, roasted tomato and Sichuan pepper jhol soup. Garnished with fresh coriander and chilli oil.",
    price: 189,
    category: "Momos",
    veg: false,
    bestseller: true,
    spicy: true,
    image: "/images/dishes/jhol-momos.jpg",
    scriptBadge: "Himalayan Special 🥣",
    portionOptions: [
      { name: "6 Pieces with Jhol", price: 189 },
      { name: "8 Pieces Feast Bowl", price: 239 },
    ],
    spiceOptions: ["Tangy Medium", "Kathmandu Spicy 🔥🔥"],
    ingredients: ["Chicken Keema", "Roasted Sesame", "Country Tomatoes", "Timur Pepper", "Coriander"],
    highlights: [
      { icon: "🥣", title: "Warm Jhol Soup", subtitle: "Sesame-tomato broth" },
      { icon: "🍗", title: "Juicy Chicken", subtitle: "Tender mince filling" },
      { icon: "🌶️", title: "Timur Spiced", subtitle: "Himalayan pepper" },
      { icon: "♨️", title: "Piping Hot", subtitle: "Soul-warming bowl" },
    ],
  },
  {
    id: "steamed-paneer-momos",
    name: "Steamed Malai Paneer Momos",
    tagline: "स्टीम्ड पनीर मोमोज — Soft bamboo-steamed dumplings with herbs",
    desc: "Delicate hand-folded parcels stuffed with crumbled fresh malai paneer, chopped scallions, and fresh green herbs, steamed gently inside authentic bamboo baskets.",
    price: 169,
    category: "Momos",
    veg: true,
    image: "/images/dishes/steamed-momos.jpg",
    scriptBadge: "Bamboo Steamed 🎋",
    portionOptions: [
      { name: "6 Pieces", price: 169 },
      { name: "8 Pieces", price: 219 },
    ],
    spiceOptions: ["Classic Mild", "Spicy Schezwan 🔥"],
    ingredients: ["Malai Paneer", "Bamboo Shoots", "Coriander", "Ginger", "Sesame Oil"],
    highlights: [
      { icon: "🎋", title: "Bamboo Steamer", subtitle: "Gentle natural steam" },
      { icon: "🧀", title: "Fresh Paneer", subtitle: "Soft herb filling" },
      { icon: "🥣", title: "Tomato Achar", subtitle: "Smoky house dip" },
      { icon: "✨", title: "Zero Oil", subtitle: "Light & healthy" },
    ],
  },
];

// ── WOK & RAMEN: NOODLES ──
export const NOODLES_ITEMS: MenuItem[] = [
  {
    id: "chilli-garlic-hakka",
    name: "Chilli Garlic Hakka Noodles",
    tagline: "चिली गार्लिक नूडल्स — Wok-tossed noodles with wok hei char & garlic slivers",
    desc: "Long springy noodles tossed over roaring flames in a blazing Chinese wok with fragrant roasted garlic chips, fiery dried red chillies, crunchy bell peppers, shredded carrots and house chilli oil.",
    price: 199,
    category: "Noodles",
    veg: true,
    bestseller: true,
    spicy: true,
    image: "/images/dishes/hakka-noodles.jpg",
    scriptBadge: "Wok Hei Blazing 🥢",
    portionOptions: [
      { name: "Regular Wok Bowl", price: 199 },
      { name: "Large Sharing Platter", price: 329 },
    ],
    spiceOptions: ["Signature Medium", "Fiery Desi Chinese 🔥🔥"],
    ingredients: ["Handmade Noodles", "Fried Garlic", "Whole Red Chillies", "Bell Peppers", "Scallions"],
    highlights: [
      { icon: "🔥", title: "Wok Hei", subtitle: "Blazing wok char" },
      { icon: "🧄", title: "Golden Garlic", subtitle: "Crispy fried slivers" },
      { icon: "🌶️", title: "Chilli Oil", subtitle: "Secret house infused" },
      { icon: "🥢", title: "Fresh Veggies", subtitle: "Crunchy juliennes" },
    ],
  },
  {
    id: "burnt-garlic-ramen",
    name: "Burnt Garlic Miso Ramen",
    tagline: "रामिन बाऊल — 12-hr rich miso broth with ajitsuke egg & bok choy",
    desc: "Springy ramen noodles swimming in a 12-hour simmered savory miso broth, topped with burnt garlic oil (mayu), soft-boiled marinated ajitsuke egg, tender bok choy, menma and nori sheet.",
    price: 279,
    category: "Noodles",
    veg: false,
    bestseller: true,
    image: "/images/dishes/steaming-ramen-bowl.jpg",
    scriptBadge: "12-Hr Simmered 🍜",
    portionOptions: [
      { name: "Standard Ramen Bowl", price: 279 },
      { name: "Extra Toppings Bowl", price: 349 },
    ],
    spiceOptions: ["Classic Umami", "Spicy Tantanmen 🔥"],
    ingredients: ["Ramen Noodles", "Miso Broth", "Burnt Garlic Mayu", "Ajitsuke Egg", "Bok Choy", "Nori"],
    highlights: [
      { icon: "🍜", title: "12-Hr Broth", subtitle: "Rich silky base" },
      { icon: "🥚", title: "Ajitsuke Egg", subtitle: "Custardy yolk center" },
      { icon: "🧄", title: "Mayu Oil", subtitle: "Deep roasted garlic" },
      { icon: "🥬", title: "Crisp Bok Choy", subtitle: "Fresh farm greens" },
    ],
  },
];

// ── GOURMET BURGERS ──
export const BURGER_ITEMS: MenuItem[] = [
  {
    id: "double-crunch-chicken-burger",
    name: "Double Crunch Chicken Burger",
    tagline: "डबल क्रंच चिकन बर्गर — Buttermilk fried chicken, purple slaw & hot honey",
    desc: "Double-crunch golden buttermilk fried chicken thigh fillet drenched in spicy hot honey glaze, topped with creamy purple cabbage slaw, melted aged cheddar and garlic herb aioli on a toasted brioche bun.",
    price: 259,
    category: "Burgers",
    veg: false,
    bestseller: true,
    spicy: true,
    image: "/images/dishes/double-crunch-burger.jpg",
    scriptBadge: "Chef Signature 🍔",
    portionOptions: [
      { name: "Single Burger", price: 259 },
      { name: "Combo (Fries + Beverage)", price: 349 },
    ],
    spiceOptions: ["Hot Honey & Herb", "Fiery Ghost Pepper 🔥🔥"],
    ingredients: ["Fried Chicken Thigh", "Brioche Bun", "Hot Honey", "Purple Slaw", "Cheddar Cheese"],
    highlights: [
      { icon: "🍗", title: "Double Fried", subtitle: "Ultra-crispy batter" },
      { icon: "🍯", title: "Hot Honey Glaze", subtitle: "Sweet & spicy punch" },
      { icon: "🧀", title: "Aged Cheddar", subtitle: "Melting hot slice" },
      { icon: "🍞", title: "Brioche Bun", subtitle: "Daily baked fresh" },
    ],
  },
  {
    id: "paneer-tikka",
    name: "Smoky Paneer Tikka",
    tagline: "पनीर टिक्का — Charcoal grilled cottage cheese, peppers & mint dip",
    desc: "Tender malai paneer cubes marinated in hung curd and roasted spices, skewered with bell peppers and onions, charred to perfection in the clay tandoor.",
    price: 249,
    category: "Kitchen",
    veg: true,
    image: "/images/dishes/paneer-tikka.jpg",
    scriptBadge: "Tandoor Special ✨",
    portionOptions: [
      { name: "Half Plate (4 pcs)", price: 159 },
      { name: "Full Plate (8 pcs)", price: 249 },
    ],
    spiceOptions: ["Classic Tandoori", "Fiery Angara 🔥"],
    ingredients: ["Fresh Malai Paneer", "Hung Curd", "Kashmiri Chilli", "Bell Peppers", "Mint Chutney"],
    highlights: [
      { icon: "🍢", title: "Clay Tandoor", subtitle: "Charcoal-smoked char" },
      { icon: "🧀", title: "Malai Paneer", subtitle: "Melt-in-mouth soft" },
      { icon: "🌿", title: "Mint Chutney", subtitle: "Fresh coriander & mint" },
      { icon: "🍋", title: "Zesty Garnish", subtitle: "Lemon & chaat masala" },
    ],
  },
];

// ── ARTISAN PIZZAS ──
export const PIZZA_ITEMS: MenuItem[] = [
  {
    id: "margherita-classica",
    name: "Margherita Classica Neapolitan",
    tagline: "मार्गरिटा क्लासिका — San Marzano tomatoes, fior di latte & fresh basil",
    desc: "48-hour cold-fermented sourdough crust baked in our 450°C wood-fired oven for 90 seconds. Topped with crushed San Marzano plum tomatoes, fresh fior di latte mozzarella pools, fragrant basil and extra virgin olive oil.",
    price: 349,
    category: "Pizza",
    veg: true,
    bestseller: true,
    image: "/images/dishes/margherita-pizza.jpg",
    scriptBadge: "Neapolitan Wood-Fired 🍕",
    portionOptions: [
      { name: "10 Inch (Medium)", price: 349 },
      { name: "12 Inch (Large)", price: 499 },
    ],
    spiceOptions: ["Classic Italian (Mild)", "Chilli Flakes & Oregano"],
    ingredients: ["48-hr Sourdough", "San Marzano Tomatoes", "Fior di Latte", "Fresh Basil", "EVOO"],
    highlights: [
      { icon: "🔥", title: "450°C Oven", subtitle: "90-second blister" },
      { icon: "🍅", title: "San Marzano", subtitle: "Sweet Italian tomatoes" },
      { icon: "🧀", title: "Fior di Latte", subtitle: "Creamy fresh mozzarella" },
      { icon: "🌿", title: "Sweet Basil", subtitle: "Garden picked aroma" },
    ],
  },
  {
    id: "hot-honey-pepperoni",
    name: "Hot Honey Pepperoni Pizza",
    tagline: "हॉट हनी पेपेरोनी — Crispy pepperoni cups, mozzarella & chilli honey drizzle",
    desc: "Wood-fired sourdough crust topped with zesty chicken pepperoni that cups and chars at the edges, melted mozzarella, tomato sauce and a drizzle of chilli hot honey.",
    price: 449,
    category: "Pizza",
    veg: false,
    bestseller: true,
    spicy: true,
    image: "/images/dishes/pepperoni-pizza.jpg",
    scriptBadge: "American Artisan 🍕",
    portionOptions: [
      { name: "10 Inch (Medium)", price: 449 },
      { name: "12 Inch (Large)", price: 599 },
    ],
    spiceOptions: ["Hot Honey Classic", "Extra Ghost Chilli Drizzle 🔥"],
    ingredients: ["Chicken Pepperoni", "Hot Honey", "Mozzarella", "Tomato Sauce", "Sourdough Crust"],
    highlights: [
      { icon: "🍕", title: "Cupped Pepperoni", subtitle: "Crisp blistered rims" },
      { icon: "🍯", title: "Hot Honey", subtitle: "Chilli infused honey" },
      { icon: "🧀", title: "Stringy Cheese", subtitle: "100% dairy mozzarella" },
      { icon: "✨", title: "Wood Fire Char", subtitle: "Airy crust bubbles" },
    ],
  },
];

export function MenuBook() {
  // Starts CLOSED as requested by user
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0); // 0: Biryanis & Pizzas, 1: Starters & Mains
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null);

  // Selected dish for full presentation showcase modal
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [selectedPortionIndex, setSelectedPortionIndex] = useState(0);
  const [selectedSpiceIndex, setSelectedSpiceIndex] = useState(0);

  // Quick toast feedback on Add to Cart
  const [addedToast, setAddedToast] = useState<string | null>(null);

  // Optional quick list drawer
  const [showQuickList, setShowQuickList] = useState(true);
  const [catalogCategoryFilter, setCatalogCategoryFilter] = useState<string>("all");

  const totalSpreads = 2;

  // Handle page turn with realistic 180-degree physical flip
  const handleNextSpread = () => {
    if (currentSpreadIndex < totalSpreads - 1) {
      setFlipDirection("next");
      setTimeout(() => {
        setCurrentSpreadIndex((prev) => prev + 1);
        setFlipDirection(null);
      }, 650);
    }
  };

  const handlePrevSpread = () => {
    if (currentSpreadIndex > 0) {
      setFlipDirection("prev");
      setTimeout(() => {
        setCurrentSpreadIndex((prev) => prev - 1);
        setFlipDirection(null);
      }, 650);
    }
  };

  // Open dish showcase modal
  const handleOpenDish = (dish: MenuItem) => {
    setSelectedDish(dish);
    setSelectedPortionIndex(0);
    setSelectedSpiceIndex(0);
  };

  // Add to Cart handler
  const handleAddToCart = (dish: MenuItem) => {
    const portion = dish.portionOptions[selectedPortionIndex] ?? dish.portionOptions[0];
    const portionPrice = portion?.price ?? dish.price;
    const portionName = portion?.name ?? "Standard";

    cart.add({
      key: `${dish.id}-${portionName.toLowerCase().replace(/\s+/g, "-")}`,
      name: `${dish.name} (${portionName})`,
      unit: portionPrice > 0 ? portionPrice : dish.price,
      note: `${dish.spiceOptions[selectedSpiceIndex] ?? "Standard"}`,
    });

    setAddedToast(`Added ${dish.name} (${portionName}) to Cart! 🛒`);
    setTimeout(() => setAddedToast(null), 3000);
  };

  // Keyboard navigation for realistic book experience
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedDish) {
        if (e.key === "Escape") setSelectedDish(null);
        return;
      }
      if (!isBookOpen) {
        if (e.key === "Enter" || e.key === " ") setIsBookOpen(true);
        return;
      }
      if (e.key === "ArrowRight") handleNextSpread();
      if (e.key === "ArrowLeft") handlePrevSpread();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDish, isBookOpen, currentSpreadIndex]);

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#F7F0E6] py-6 sm:py-8 px-2 sm:px-6 select-none overflow-x-hidden">
      {/* ── TOP ACTION BAR / CONTROLS ── */}
      <div className="relative max-w-6xl mx-auto mb-4 flex flex-wrap items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#AAA39B] hover:text-[#D6A85F] transition-colors"
          >
            <span>←</span>
            <span>Home</span>
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-serif italic text-[#D6A85F]">
            Crave & Crust • Hardcover Menu Book
          </span>
        </div>

        {/* Spread Navigation Tabs & Book State Toggle */}
        <div className="flex items-center gap-2">
          {isBookOpen ? (
            <>
              {/* Spread Quick Buttons */}
              <div className="flex items-center gap-1 bg-[#141210] p-1 rounded-full border border-[#D6A85F]/30 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    if (currentSpreadIndex !== 0) {
                      setFlipDirection("prev");
                      setTimeout(() => {
                        setCurrentSpreadIndex(0);
                        setFlipDirection(null);
                      }, 650);
                    }
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    currentSpreadIndex === 0
                      ? "bg-[#D6A85F] text-[#080808] font-bold shadow-md"
                      : "text-[#AAA39B] hover:text-[#F7F0E6]"
                  }`}
                >
                  Pages 1-2: Biryanis & Pizzas
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (currentSpreadIndex !== 1) {
                      setFlipDirection("next");
                      setTimeout(() => {
                        setCurrentSpreadIndex(1);
                        setFlipDirection(null);
                      }, 650);
                    }
                  }}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    currentSpreadIndex === 1
                      ? "bg-[#D6A85F] text-[#080808] font-bold shadow-md"
                      : "text-[#AAA39B] hover:text-[#F7F0E6]"
                  }`}
                >
                  Pages 3-4: Starters & Mains
                </button>
              </div>

              {/* Close Book Button */}
              <button
                type="button"
                onClick={() => setIsBookOpen(false)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#181614] hover:bg-[#25221e] border border-[#D6A85F]/30 text-xs font-semibold text-[#D6A85F] hover:text-[#F7F0E6] transition-all cursor-pointer shadow-sm"
              >
                <span>📕</span>
                <span>Close Cover</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsBookOpen(true)}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#D6A85F] to-[#FF7628] hover:brightness-110 text-[#080808] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              <span>📖</span>
              <span>Open Menu Book</span>
              <span>→</span>
            </button>
          )}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 1. CLOSED BOOK COVER VIEW (EXACT USER COVER PHOTO) ── */}
      {/* ────────────────────────────────────────────────────────── */}
      {!isBookOpen ? (
        <div className="relative max-w-lg mx-auto my-6 px-4 menu-perspective-container">
          <div
            onClick={() => setIsBookOpen(true)}
            className="menu-hardcover-cover group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-700 shadow-[0_35px_100px_rgba(0,0,0,0.95)] border border-[#D6A85F]/40"
          >
            {/* Photorealistic 3D Menu Cover (User Image 2) */}
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-black">
              <img
                src="/images/menu-cover-user.jpg"
                alt="Crave & Crust Menu Cover"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gold Corner Protectors */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D6A85F] pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D6A85F] pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D6A85F] pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D6A85F] pointer-events-none" />

              {/* Floating Interactive Callout */}
              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 w-full px-6 text-center">
                <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6A85F] via-[#FF7628] to-[#D6A85F] text-[#080808] font-bold text-xs uppercase tracking-widest shadow-[0_8px_30px_rgba(214,168,95,0.7)] group-hover:shadow-[0_12px_45px_rgba(255,118,40,0.9)] group-hover:scale-105 transition-all">
                  <span>📖</span>
                  <span>Tap to Open Menu Book</span>
                  <span>→</span>
                </div>
                <p className="text-[11px] text-[#F7F0E6] mt-2 font-serif italic drop-shadow-md">
                  Click anywhere or press <kbd className="px-1.5 py-0.5 rounded bg-black/70 text-[#D6A85F] font-mono text-[10px] border border-[#D6A85F]/30">Enter</kbd> to flip inside
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ────────────────────────────────────────────────────────── */
        /* ── 2. PURE OPEN 4K BOOK VIEW (NO OUTSIDE BACKGROUND!) ── */
        /* ────────────────────────────────────────────────────────── */
        <div className="relative max-w-6xl mx-auto menu-perspective-container">
          {/* Subtle instruction pill */}
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181614] border border-[#D6A85F]/30 text-[11px] text-[#D6A85F] font-serif italic shadow-sm">
              <span>✦</span>
              <span>Click any dish or image on the pages to view full recipe, ingredients & order</span>
              <span>✦</span>
            </span>
          </div>

          {/* Pure Open Menu Book Wrapper */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.98)] border border-[#D6A85F]/20">
            {/* Center Curved Spine Shadow */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 lg:w-12 z-30 menu-spine-shadow pointer-events-none" />

            {/* ── SPREAD 0: ROYAL DUM BIRYANI & CLAY OVEN SOURDOUGH PIZZAS ── */}
            {currentSpreadIndex === 0 && (
              <div
                className={`relative aspect-[16/9] w-full select-none ${
                  flipDirection === "next" ? "anim-page-turn-forward" : ""
                } ${flipDirection === "prev" ? "anim-page-turn-backward" : ""}`}
              >
                {/* 4K Isolated Master Menu Spread (Zero Background!) */}
                <img
                  src="/images/menu-spread-biryani-isolated.jpg"
                  alt="Royal Dum Biryani & Clay Oven Pizzas Spread"
                  className="w-full h-full object-cover"
                />

                {/* ── LEFT PAGE INTERACTIVE HOTSPOTS (ROYAL DUM BIRYANI) ── */}
                {/* Hotspot 1: Royal Chicken Dum Biryani (Text & Handi Bowl) */}
                <div
                  onClick={() => handleOpenDish(ROYAL_BIRYANI_ITEMS[0]!)}
                  className="group absolute top-[28%] left-[12%] w-[36%] h-[16%] rounded-lg cursor-pointer transition-all hover:bg-[#D6A85F]/10 hover:ring-1 hover:ring-[#D6A85F]/60"
                  title="Royal Chicken Dum Biryani • Click to view details & order"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-2 px-2.5 py-0.5 rounded-full bg-black/90 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-xl pointer-events-none">
                    ✦ Chicken Dum Biryani • Tap to Order
                  </span>
                </div>

                {/* Copper Handi Photo Hotspot */}
                <div
                  onClick={() => handleOpenDish(ROYAL_BIRYANI_ITEMS[0]!)}
                  className="group absolute top-[44%] left-[12%] w-[25%] h-[45%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_30px_rgba(214,168,95,0.5)]"
                  title="Copper Handi Dum Biryani • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    ♨️ Handi Biryani 🌿
                  </span>
                </div>

                {/* Hotspot 2: Hyderabadi Mutton Biryani (Text & Shank Plate) */}
                <div
                  onClick={() => handleOpenDish(ROYAL_BIRYANI_ITEMS[1]!)}
                  className="group absolute top-[36%] left-[12%] w-[36%] h-[12%] rounded-lg cursor-pointer transition-all hover:bg-[#D6A85F]/10 hover:ring-1 hover:ring-[#D6A85F]/60"
                  title="Hyderabadi Mutton Biryani • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-2 px-2.5 py-0.5 rounded-full bg-black/90 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-xl pointer-events-none">
                    ✦ Mutton Biryani • Tap to Order
                  </span>
                </div>

                {/* Mutton Shank Photo Hotspot */}
                <div
                  onClick={() => handleOpenDish(ROYAL_BIRYANI_ITEMS[1]!)}
                  className="group absolute top-[68%] left-[32%] w-[16%] h-[23%] rounded-2xl cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_25px_rgba(214,168,95,0.4)]"
                  title="Slow Cooked Mutton Shank • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-lg pointer-events-none">
                    🍖 Mutton Shank
                  </span>
                </div>

                {/* Hotspot 3: Subz Biryani / Raita Bowl */}
                <div
                  onClick={() => handleOpenDish(ROYAL_BIRYANI_ITEMS[2]!)}
                  className="group absolute top-[52%] left-[36%] w-[12%] h-[17%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_25px_rgba(214,168,95,0.4)]"
                  title="Cucumber Mint Raita / Subz Biryani • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-lg pointer-events-none">
                    🥣 Burani Raita
                  </span>
                </div>

                {/* ── RIGHT PAGE INTERACTIVE HOTSPOTS (CLAY OVEN & PIZZAS) ── */}
                {/* Hotspot 4: Tandoori Garlic Naan (Basket & Text) */}
                <div
                  onClick={() => handleOpenDish(CLAY_OVEN_ITEMS[0]!)}
                  className="group absolute top-[33%] left-[52%] w-[20%] h-[32%] rounded-2xl cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_30px_rgba(214,168,95,0.4)]"
                  title="Tandoori Garlic Naan Basket • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    🫓 Garlic Naan Basket
                  </span>
                </div>

                {/* Hotspot 5: Handi Chicken Curry / Tarka Dal */}
                <div
                  onClick={() => handleOpenDish(CLAY_OVEN_ITEMS[2]!)}
                  className="group absolute top-[40%] left-[72%] w-[16%] h-[24%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_30px_rgba(214,168,95,0.4)]"
                  title="Handi Chicken Curry / Tarka Dal • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    🏺 Handi Chicken Curry
                  </span>
                </div>

                {/* Hotspot 6: Burrata Pesto Pizza (Wood Board & Text) */}
                <div
                  onClick={() => handleOpenDish(CLAY_OVEN_ITEMS[1]!)}
                  className="group absolute top-[61%] left-[66%] w-[22%] h-[29%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_35px_rgba(214,168,95,0.5)]"
                  title="Wood-Fired Truffle Burrata Pesto Pizza • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    🍕 Burrata Pesto Pizza
                  </span>
                </div>

                {/* Right Page Text Column Hotspot */}
                <div
                  onClick={() => handleOpenDish(CLAY_OVEN_ITEMS[1]!)}
                  className="group absolute top-[64%] left-[53%] w-[14%] h-[22%] rounded-lg cursor-pointer transition-all hover:bg-[#D6A85F]/10 hover:ring-1 hover:ring-[#D6A85F]/60"
                  title="View Pizzas & Curries"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-0 px-2 py-0.5 rounded-full bg-black/90 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/40 whitespace-nowrap pointer-events-none">
                    ✦ Tap to Order
                  </span>
                </div>

                {/* Interactive Page Turn Triggers on Corners */}
                <button
                  type="button"
                  onClick={handleNextSpread}
                  className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/80 hover:bg-[#D6A85F] text-[#D6A85F] hover:text-[#080808] border border-[#D6A85F]/40 text-xs font-bold transition-all shadow-lg cursor-pointer flex items-center gap-1.5"
                  title="Flip to Starters & Main Course"
                >
                  <span>Turn Page</span>
                  <span>➔</span>
                </button>
              </div>
            )}

            {/* ── SPREAD 1: STARTERS & MAIN COURSE ── */}
            {currentSpreadIndex === 1 && (
              <div
                className={`relative aspect-[16/9] w-full select-none ${
                  flipDirection === "next" ? "anim-page-turn-forward" : ""
                } ${flipDirection === "prev" ? "anim-page-turn-backward" : ""}`}
              >
                {/* 4K Isolated Master Menu Spread (Zero Background!) */}
                <img
                  src="/images/menu-spread-starters-isolated.jpg"
                  alt="Starters & Main Course Spread"
                  className="w-full h-full object-cover"
                />

                {/* ── LEFT PAGE INTERACTIVE HOTSPOTS (STARTERS) ── */}
                {/* Hotspot 1: French Fries Basket */}
                <div
                  onClick={() => handleOpenDish(STARTERS_ITEMS[0]!)}
                  className="group absolute top-[47%] left-[13%] w-[20%] h-[40%] rounded-2xl cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_30px_rgba(214,168,95,0.4)]"
                  title="Belgian French Fries • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    🍟 Crispy Fries Basket
                  </span>
                </div>

                {/* Hotspot 2: Veg Spring Rolls Plate */}
                <div
                  onClick={() => handleOpenDish(STARTERS_ITEMS[2]!)}
                  className="group absolute top-[45%] left-[32%] w-[16%] h-[22%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_25px_rgba(214,168,95,0.4)]"
                  title="Veg Spring Rolls • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-lg pointer-events-none">
                    🥢 Veg Spring Rolls
                  </span>
                </div>

                {/* Hotspot 3: Smoky Paneer Tikka Sizzler */}
                <div
                  onClick={() => handleOpenDish(STARTERS_ITEMS[3]!)}
                  className="group absolute top-[67%] left-[29%] w-[20%] h-[23%] rounded-2xl cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_25px_rgba(214,168,95,0.4)]"
                  title="Smoky Paneer Tikka • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-lg pointer-events-none">
                    🧀 Smoky Paneer Tikka
                  </span>
                </div>

                {/* Starters Text Hotspot */}
                <div
                  onClick={() => handleOpenDish(STARTERS_ITEMS[1]!)}
                  className="group absolute top-[28%] left-[13%] w-[35%] h-[18%] rounded-lg cursor-pointer transition-all hover:bg-[#D6A85F]/10 hover:ring-1 hover:ring-[#D6A85F]/60"
                  title="Masala Peri-Peri Fries • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-2 px-2.5 py-0.5 rounded-full bg-black/90 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-xl pointer-events-none">
                    ✦ Masala Peri-Peri Fries
                  </span>
                </div>

                {/* ── RIGHT PAGE INTERACTIVE HOTSPOTS (MAIN COURSE) ── */}
                {/* Hotspot 4: Butter Chicken Handi */}
                <div
                  onClick={() => handleOpenDish(MAIN_COURSE_ITEMS[1]!)}
                  className="group absolute top-[47%] left-[52%] w-[22%] h-[29%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_30px_rgba(214,168,95,0.4)]"
                  title="Chicken Butter Masala • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    🍗 Chicken Butter Masala
                  </span>
                </div>

                {/* Hotspot 5: Paneer Butter Masala Bowl */}
                <div
                  onClick={() => handleOpenDish(MAIN_COURSE_ITEMS[0]!)}
                  className="group absolute top-[66%] left-[70%] w-[18%] h-[24%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_30px_rgba(214,168,95,0.4)]"
                  title="Paneer Butter Masala • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[10px] font-bold border border-[#D6A85F]/60 whitespace-nowrap shadow-2xl pointer-events-none">
                    🧀 Paneer Butter Masala
                  </span>
                </div>

                {/* Hotspot 6: Chilled Masala Chaas Glass */}
                <div
                  onClick={() => handleOpenDish(MAIN_COURSE_ITEMS[2]!)}
                  className="group absolute top-[43%] left-[76%] w-[11%] h-[27%] rounded-2xl cursor-pointer transition-all hover:ring-2 hover:ring-[#D6A85F] hover:shadow-[0_0_25px_rgba(214,168,95,0.4)]"
                  title="Chilled Masala Chaas • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/95 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/50 whitespace-nowrap shadow-lg pointer-events-none">
                    🥛 Masala Chaas 🌿
                  </span>
                </div>

                {/* Main Course Text Hotspot */}
                <div
                  onClick={() => handleOpenDish(MAIN_COURSE_ITEMS[1]!)}
                  className="group absolute top-[30%] left-[53%] w-[33%] h-[15%] rounded-lg cursor-pointer transition-all hover:bg-[#D6A85F]/10 hover:ring-1 hover:ring-[#D6A85F]/60"
                  title="Signatures • Click to view details"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-0 px-2 py-0.5 rounded-full bg-black/90 text-[#D6A85F] text-[9px] font-bold border border-[#D6A85F]/40 whitespace-nowrap pointer-events-none">
                    ✦ Main Course Signatures
                  </span>
                </div>

                {/* Interactive Back Page Turn Trigger */}
                <button
                  type="button"
                  onClick={handlePrevSpread}
                  className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/80 hover:bg-[#D6A85F] text-[#D6A85F] hover:text-[#080808] border border-[#D6A85F]/40 text-xs font-bold transition-all shadow-lg cursor-pointer flex items-center gap-1.5"
                  title="Flip back to Royal Dum Biryani"
                >
                  <span>⬅</span>
                  <span>Previous Page</span>
                </button>
              </div>
            )}
          </div>

          {/* ── BOTTOM PHYSICAL CONTROLS & PAGE NAVIGATOR ── */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-3 py-3 rounded-xl bg-[#11100e] border border-[#D6A85F]/25 shadow-lg">
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={currentSpreadIndex === 0}
                onClick={handlePrevSpread}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currentSpreadIndex === 0
                    ? "opacity-40 cursor-not-allowed bg-white/5 text-[#AAA39B]"
                    : "bg-[#1f1c19] hover:bg-[#D6A85F] text-[#D6A85F] hover:text-[#080808] border border-[#D6A85F]/30 shadow-md"
                }`}
              >
                <span>⬅</span>
                <span>Turn Left Page</span>
              </button>

              <button
                type="button"
                disabled={currentSpreadIndex >= totalSpreads - 1}
                onClick={handleNextSpread}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  currentSpreadIndex >= totalSpreads - 1
                    ? "opacity-40 cursor-not-allowed bg-white/5 text-[#AAA39B]"
                    : "bg-[#1f1c19] hover:bg-[#D6A85F] text-[#D6A85F] hover:text-[#080808] border border-[#D6A85F]/30 shadow-md"
                }`}
              >
                <span>Turn Right Page</span>
                <span>➔</span>
              </button>
            </div>

            {/* Current Page Label */}
            <div className="text-center font-serif text-xs text-[#D6A85F]">
              {currentSpreadIndex === 0 ? (
                <span>Pages 1 & 2 of 4: Royal Dum Biryani & Clay Oven Pizzas</span>
              ) : (
                <span>Pages 3 & 4 of 4: Starters & Main Course</span>
              )}
            </div>

            {/* Quick List Toggle & Close Cover */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowQuickList(!showQuickList)}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#AAA39B] hover:text-[#F7F0E6] border border-white/10 transition-all cursor-pointer"
              >
                {showQuickList ? "Hide Item List ▲" : "📜 Quick Item List ▼"}
              </button>

              <button
                type="button"
                onClick={() => setIsBookOpen(false)}
                className="px-3.5 py-2 rounded-lg bg-[#D6A85F]/15 hover:bg-[#D6A85F]/30 text-xs text-[#D6A85F] font-bold border border-[#D6A85F]/40 transition-all cursor-pointer"
              >
                📕 Close Book
              </button>
            </div>
          </div>

          {/* ── EXPANDABLE QUICK ITEM CATALOG DRAWER ── */}
          {showQuickList && (
            <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-[#141210] border border-[#D6A85F]/30 shadow-2xl animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#D6A85F]/20">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#D6A85F] tracking-wide">
                    Complete Crave & Crust Menu Collection
                  </h3>
                  <p className="text-[11px] text-[#AAA39B] mt-0.5">
                    Click any dish to customize portions, spices & add directly to your order
                  </p>
                </div>

                {/* Category Filter Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: "all", label: "All Items" },
                    { id: "Biryani", label: "Dum Biryani" },
                    { id: "Pizza", label: "Wood-Fired Pizza" },
                    { id: "Momos", label: "Momos" },
                    { id: "Noodles", label: "Wok Noodles" },
                    { id: "Burgers", label: "Burgers" },
                    { id: "Starters", label: "Starters" },
                    { id: "Curries", label: "Curries" },
                    { id: "Beverages", label: "Beverages" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setCatalogCategoryFilter(tab.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        catalogCategoryFilter === tab.id
                          ? "bg-[#D6A85F] text-[#080808] font-bold shadow-md"
                          : "bg-white/5 text-[#AAA39B] hover:text-[#F7F0E6] border border-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Items Grid with Rich Food Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {[
                  ...ROYAL_BIRYANI_ITEMS,
                  ...CLAY_OVEN_ITEMS,
                  ...MOMOS_ITEMS,
                  ...NOODLES_ITEMS,
                  ...BURGER_ITEMS,
                  ...PIZZA_ITEMS,
                  ...STARTERS_ITEMS,
                  ...MAIN_COURSE_ITEMS,
                ]
                  .filter(
                    (it, idx, arr) =>
                      arr.findIndex((x) => x.id === it.id) === idx &&
                      (catalogCategoryFilter === "all" || it.category === catalogCategoryFilter)
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenDish(item)}
                      className="group p-3 rounded-2xl bg-black/50 hover:bg-[#1a1714] border border-white/5 hover:border-[#D6A85F]/50 cursor-pointer transition-all duration-300 shadow-md hover:shadow-2xl flex items-center gap-3"
                    >
                      {/* Dish Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#D6A85F]/30 group-hover:border-[#D6A85F] transition-colors">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span
                          className={`absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full ${
                            item.veg ? "bg-emerald-500" : "bg-rose-500"
                          } border border-black shadow-sm`}
                          title={item.veg ? "Pure Veg" : "Non-Veg"}
                        />
                      </div>

                      {/* Dish Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-xs font-serif font-bold text-[#F7F0E6] group-hover:text-[#D6A85F] transition-colors line-clamp-1">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[10px] text-[#AAA39B] mt-0.5 line-clamp-1 italic font-serif">
                          {item.tagline}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-serif font-bold text-xs text-[#D6A85F]">
                            ₹{item.price}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider font-bold text-[#D6A85F]/80 group-hover:text-[#FF7628] transition-colors">
                            View & Order →
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 3. DETAILED DISH SHOWCASE MODAL (MATCHES USER IMAGE 1) ── */}
      {/* ────────────────────────────────────────────────────────── */}
      {selectedDish && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#181614] via-[#12110f] to-[#0a0a09] border border-[#D6A85F]/50 rounded-3xl p-5 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Cross */}
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-[#AAA39B] hover:text-[#F7F0E6] flex items-center justify-center text-sm transition-all cursor-pointer border border-white/10 z-10"
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* ── TOP BRAND HEADER ── */}
            <div className="flex items-center justify-between pb-4 border-b border-[#D6A85F]/20">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl text-[#D6A85F]">👨‍🍳</span>
                <div>
                  <h3 className="font-serif text-lg tracking-wider font-bold text-[#D6A85F] leading-tight">
                    CRAVE & CRUST
                  </h3>
                  <p className="text-[9px] uppercase tracking-widest text-[#AAA39B]">
                    Good Food · Great Mood
                  </p>
                </div>
              </div>
              <div className="text-[11px] uppercase font-bold tracking-wider text-[#D6A85F]/80 pr-10">
                Menu Showcase
              </div>
            </div>

            {/* ── TITLE & GOLD SEAL HEADER ── */}
            <div className="flex items-start justify-between gap-4 mt-4 mb-2">
              <div>
                <span className="font-serif italic text-base sm:text-lg text-[#D6A85F] block">
                  {selectedDish.scriptBadge ?? "Authentic 🌿"}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F0E6] mt-0.5">
                  {selectedDish.name}
                </h2>
              </div>

              {/* Circular Gold Seal (Exact match to "PREMIUM QUALITY INGREDIENTS") */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#D6A85F]/60 p-1 shrink-0 text-center flex flex-col items-center justify-center bg-radial from-[#3a2e1c]/40 to-black/60 shadow-lg">
                <span className="text-[8px] sm:text-[9px] uppercase font-bold text-[#D6A85F] tracking-widest leading-tight block">
                  Premium
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase font-bold text-[#D6A85F] tracking-widest leading-tight block">
                  Quality
                </span>
                <span className="text-[7px] uppercase text-[#AAA39B] tracking-wider leading-tight block">
                  Ingredients
                </span>
                <span className="text-[10px] text-[#D6A85F] mt-0.5">🌿</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#AAA39B] leading-relaxed mb-4">
              {selectedDish.desc}
            </p>

            {/* Price with portion indicator */}
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D6A85F]">
                  ₹
                  {(
                    selectedDish.portionOptions[selectedPortionIndex] ??
                    selectedDish.portionOptions[0]
                  )?.price ?? selectedDish.price}
                </span>
                <span className="text-xs sm:text-sm text-[#AAA39B] italic font-serif">
                  (
                  {(
                    selectedDish.portionOptions[selectedPortionIndex] ??
                    selectedDish.portionOptions[0]
                  )?.name ?? "Standard"}
                  )
                </span>
              </div>
            </div>

            {/* ── CENTRAL DISH SHOWCASE PHOTO ── */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#D6A85F]/40 shadow-2xl my-3">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    selectedDish.veg
                      ? "bg-emerald-950/80 text-emerald-400 border-emerald-500/40"
                      : "bg-rose-950/80 text-rose-400 border-rose-500/40"
                  }`}
                >
                  {selectedDish.veg ? "Pure Veg 🟢" : "Non-Veg 🔴"}
                </span>
              </div>
            </div>

            {/* ── PORTION & SPICE SELECTORS ── */}
            <div className="my-4 pt-3 border-t border-[#D6A85F]/20">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Portion Selector */}
                <div>
                  <span className="text-[11px] font-bold text-[#D6A85F] uppercase tracking-wider block mb-1.5">
                    Select Portion:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.portionOptions.map((opt, i) => (
                      <button
                        key={opt.name}
                        type="button"
                        onClick={() => setSelectedPortionIndex(i)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                          selectedPortionIndex === i
                            ? "bg-[#D6A85F] text-[#080808] font-bold shadow-md"
                            : "bg-white/5 text-[#AAA39B] hover:text-[#F7F0E6] border border-white/10"
                        }`}
                      >
                        {opt.name} · ₹{opt.price}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spice / Variety Level */}
                <div>
                  <span className="text-[11px] font-bold text-[#D6A85F] uppercase tracking-wider block mb-1.5">
                    Spice Variety:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedDish.spiceOptions.map((sp, i) => (
                      <button
                        key={sp}
                        type="button"
                        onClick={() => setSelectedSpiceIndex(i)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                          selectedSpiceIndex === i
                            ? "bg-[#FF7628] text-white font-bold"
                            : "bg-white/5 text-[#AAA39B] hover:text-[#F7F0E6] border border-white/10"
                        }`}
                      >
                        {sp}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── 4 PILLARS HIGHLIGHTS ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 pt-3 border-t border-[#D6A85F]/20 text-center">
              {selectedDish.highlights.map((h) => (
                <div key={h.title} className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xl block mb-1">{h.icon}</span>
                  <p className="text-xs font-bold text-[#F7F0E6] leading-tight">{h.title}</p>
                  <p className="text-[10px] text-[#AAA39B] leading-tight mt-0.5">{h.subtitle}</p>
                </div>
              ))}
            </div>

            {/* ── INGREDIENTS LIST ── */}
            <div className="my-3 py-2 bg-black/40 rounded-xl px-3 border border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-[#D6A85F] font-bold block mb-1">
                Authentic Ingredients:
              </span>
              <p className="text-xs text-[#AAA39B] leading-relaxed">
                {selectedDish.ingredients.join(" · ")}
              </p>
            </div>

            {/* ── FOOTER CALLOUT & ADD TO CART BUTTON ── */}
            <div className="mt-5 pt-4 border-t border-[#D6A85F]/25 flex items-center justify-between gap-4">
              <div className="font-serif italic text-sm sm:text-base text-[#D6A85F]">
                Real Ingredients. True Taste.
              </div>

              <button
                type="button"
                onClick={() => handleAddToCart(selectedDish)}
                className="flex items-center gap-2 rounded-full px-6 py-3 bg-[#D6A85F] hover:bg-[#FF7628] text-[#080808] hover:text-[#F7F0E6] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_25px_rgba(214,168,95,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Add to Cart</span>
                <span>🛒</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Instant Toast Notification ── */}
      {addedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-xl bg-[#111111] border border-[#D6A85F] text-[#F7F0E6] shadow-2xl text-xs font-bold animate-slide-up">
          <span className="text-emerald-400">✓</span>
          <span>{addedToast}</span>
        </div>
      )}
    </div>
  );
}
