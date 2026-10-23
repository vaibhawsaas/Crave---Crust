// Demo business config — edit per client.
export const BRAND = {
  name: "CRAVE & CRUST",
  whatsapp: "919999999999", // demo number
  phone: "+91 99999 99999",
  address: "12 Park Street, Kolkata 700016",
  hours: [
    ["Mon – Thu", "11:00 – 23:00"],
    ["Fri – Sat", "11:00 – 01:00"],
    ["Sunday", "10:00 – 23:00"],
  ],
  deliveryFee: 40,
  freeDeliveryAbove: 499,
};

export type Ingredient = { id: string; name: string; price: number; qty: number; maxQty: number; removable: boolean };

export const BURGER_INGREDIENTS: Ingredient[] = [
  { id: "topbun", name: "Top sesame bun", price: 15, qty: 1, maxQty: 1, removable: false },
  { id: "mayo", name: "Mint mayonnaise", price: 8, qty: 1, maxQty: 2, removable: true },
  { id: "onion", name: "Fresh onion rings", price: 6, qty: 1, maxQty: 3, removable: true },
  { id: "tomato", name: "Tomato slices", price: 7, qty: 1, maxQty: 3, removable: true },
  { id: "lettuce", name: "Crisp lettuce", price: 5, qty: 1, maxQty: 2, removable: true },
  { id: "cheese", name: "Cheese slice", price: 12, qty: 1, maxQty: 3, removable: true },
  { id: "patty", name: "Aloo tikki patty", price: 25, qty: 1, maxQty: 3, removable: false },
  { id: "chutney", name: "Mint chutney", price: 5, qty: 1, maxQty: 2, removable: true },
  { id: "botbun", name: "Bottom toasted bun", price: 10, qty: 1, maxQty: 1, removable: false },
];

export type MenuItem = { id: string; name: string; desc: string; price: number; cat: string; veg: boolean; tag?: string };

export const MENU: MenuItem[] = [
  { id: "b1", name: "Paneer Tikka", desc: "Charcoal-grilled cottage cheese cubes, spiced peppers & mint chutney", price: 249, cat: "Kitchen", veg: true, tag: "Bestseller" },
  { id: "b2", name: "Smoked Paneer Stack", desc: "Tandoori paneer, pickled onion, chipotle", price: 229, cat: "Burgers", veg: true },
  { id: "b3", name: "Double Crunch Chicken", desc: "Buttermilk fried chicken, slaw, hot honey", price: 259, cat: "Burgers", veg: false, tag: "Spicy" },
  { id: "n1", name: "Chilli Garlic Hakka", desc: "Wok-tossed noodles, scallion, chilli oil", price: 199, cat: "Noodles", veg: true, tag: "Bestseller" },
  { id: "n2", name: "Burnt Garlic Ramen", desc: "Miso broth, soft egg, bok choy", price: 279, cat: "Noodles", veg: false },
  { id: "m1", name: "Pan-Fried Veg Momos", desc: "8 pcs, smoked tomato achar", price: 159, cat: "Momos", veg: true },
  { id: "m2", name: "Jhol Chicken Momos", desc: "8 pcs in sesame-chilli broth", price: 189, cat: "Momos", veg: false, tag: "New" },
  { id: "c1", name: "Pistachio Noir Slice", desc: "Dark chocolate, pistachio crémeux, gold leaf", price: 249, cat: "Desserts", veg: true },
  { id: "c2", name: "Burnt Basque Cheesecake", desc: "Caramelised top, salted caramel", price: 229, cat: "Desserts", veg: true },
  { id: "d1", name: "Cold Brew Tonic", desc: "Orange, rosemary, 18h cold brew", price: 149, cat: "Drinks", veg: true },
];
