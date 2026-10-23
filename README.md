<div align="center">

# 🍔 CRAVE & CRUST 🍕

### *Next-Generation Interactive Gourmet Dining & Cloud Kitchen Experience*

[![React 19](https://img.shields.io/badge/React-19.2.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start%20%26%20Router-ff4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<p align="center">
  <a href="#-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#%EF%B8%8F-customization">Customization</a>
</p>

---

</div>

## 🌟 Overview

**Crave & Crust** is an ultra-premium, interactive web application designed for modern cloud kitchens, gourmet bistros, and multi-cuisine restaurant brands. Built from the ground up with high visual fidelity, 3D interactive experiences, and blazing-fast performance.

---

## ✨ Features

- 🔬 **Interactive 3D Burger Lab**:
  - Full exploded-layer 3D customization powered by **Three.js** and **@react-three/fiber**.
  - Add, remove, and adjust ingredients (buns, patties, fresh veggies, sauces, cheese) with live price updates.

- 🍜 **Dynamic Visual Food Showcase**:
  - Realistic animated food heroes including steaming ramen bowls and gravity-defying burger builds.
  - Smooth CSS-driven micro-interactions and scroll-triggered reveals using `IntersectionObserver`.

- 📖 **Interactive Digital Menu Book**:
  - Tactile, flip-through editorial menu experience for exploring chef specials, signature dishes, and drinks.

- 🎨 **Adaptive Per-Category Themes**:
  - Dynamic `.theme-*` CSS color palette shifts depending on the cuisine category (Burgers, Pizza, Biryani, Momos, Bakery, Cafes).

- 🛒 **Zero-Latency Client Cart**:
  - Fast, responsive drawer-based cart with `localStorage` persistence.
  - Automatic delivery threshold & free delivery fee calculations.

- 📱 **Mobile-First & Accessible**:
  - Fluid responsiveness across mobile, tablet, and desktop viewports.
  - Accessible dialogs, drawers, dropdowns, and sheets built with **Radix UI** primitives.

---

## 🛠 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & SSR** | [React 19](https://react.dev/), [TanStack Start](https://tanstack.com/start), [TanStack Router](https://tanstack.com/router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **3D & Visuals** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Design Tokens, Vanilla CSS Variables |
| **UI Components** | [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Embla Carousel](https://www.embla-carousel.com/), [Sonner](https://sonner.emilkowal.ski/) |
| **Build & Tooling** | [Vite](https://vitejs.dev/), [Nitro](https://nitro.unjs.io/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) |
| **Testing** | [Vitest](https://vitest.dev/), Testing Library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vaibhawsaas/Crave---Crust.git

# 2. Enter project directory
cd Crave---Crust

# 3. Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

Visit **`http://localhost:3000`** in your browser.

### Other Scripts

| Command | Action |
| :--- | :--- |
| `npm run build` | Builds the optimized production bundle with Vite & Nitro |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |
| `npm run format` | Auto-formats code with Prettier |
| `npm test` | Runs test suites with Vitest |

---

## 📂 Project Structure

```
├── public/                 # Static assets (3D textures, dish images, robots.txt)
│   └── images/             # High-res photography & burger layers
├── src/
│   ├── assets/             # Brand illustrations & imagery
│   ├── components/         # Reusable UI & Feature components
│   │   ├── BurgerLab.tsx   # 3D interactive customizer
│   │   ├── BurgerScene.tsx # Three.js canvas & camera scene
│   │   ├── CartDrawer.tsx  # Slide-out shopping cart
│   │   ├── MenuBook.tsx    # Flip menu book component
│   │   └── ui/             # Radix-based accessible design system
│   ├── hooks/              # Custom React hooks (e.g. use-mobile)
│   ├── lib/
│   │   ├── brand.ts        # Business config, contact info & timings
│   │   ├── catalog.ts      # Menu items, cuisines, categories & offers
│   │   ├── cart.ts         # Cart store & persistence
│   │   └── utils.ts        # Class merging and format helpers
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── 3d-food-lab.tsx # 3D customizer route
│   │   ├── index.tsx       # Homepage with hero & featured menus
│   │   ├── product.$slug   # Individual item details
│   │   └── ...             # Category routes (pizza, burgers, biryani, etc.)
│   └── styles.css          # Semantic CSS tokens & category themes
└── vite.config.ts          # Vite & TanStack Router configuration
```

---

## ⚙️ Customization

### Re-branding for New Clients
You can completely re-skin this template without changing core code:

1. **Brand Details & Hours**: Update `src/lib/brand.ts` with brand name, WhatsApp ordering number, address, and delivery thresholds.
2. **Catalog & Menu**: Modify categories, items, and pricing in `src/lib/catalog.ts`.
3. **Theming**: Tweak color variables under `.theme-*` selectors in `src/styles.css`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
