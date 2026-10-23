import { useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

export type Filters = {
  q: string;
  diet: "all" | "veg" | "nonveg";
  max: number;
  popular: boolean;
  isNew: boolean;
  sort: "relevance" | "price-asc" | "price-desc" | "rating" | "time";
};

export const DEFAULT_FILTERS: Filters = {
  q: "",
  diet: "all",
  max: 2000,
  popular: false,
  isNew: false,
  sort: "relevance",
};

export function applyFilters(list: Product[], f: Filters) {
  const q = f.q.trim().toLowerCase();
  const out = list.filter(
    (p) =>
      (!q || `${p.name} ${p.desc} ${p.cat}`.toLowerCase().includes(q)) &&
      (f.diet === "all" || (f.diet === "veg" ? p.veg : !p.veg)) &&
      p.price <= f.max &&
      (!f.popular || p.popular) &&
      (!f.isNew || p.isNew),
  );
  const s = [...out];
  if (f.sort === "price-asc") s.sort((a, b) => a.price - b.price);
  if (f.sort === "price-desc") s.sort((a, b) => b.price - a.price);
  if (f.sort === "rating") s.sort((a, b) => b.rating - a.rating);
  if (f.sort === "time") s.sort((a, b) => a.time - b.time);
  return s;
}

function FilterChip({
  on,
  children,
  onClick,
}: {
  on: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
      style={{
        background: on ? "#D6A85F" : "rgba(255,255,255,0.05)",
        color: on ? "#080808" : "#AAA39B",
        border: `1px solid ${on ? "#D6A85F" : "rgba(255,255,255,0.1)"}`,
      }}
    >
      {children}
    </button>
  );
}

export function FilterableGrid({
  products,
  initialQ = "",
  showSearch = true,
}: {
  products: Product[];
  initialQ?: string;
  showSearch?: boolean;
}) {
  const [f, setF] = useState<Filters>({ ...DEFAULT_FILTERS, q: initialQ });
  const list = useMemo(() => applyFilters(products, f), [products, f]);
  const set = (p: Partial<Filters>) => setF((x) => ({ ...x, ...p }));

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {showSearch && (
          <div className="relative min-w-0 flex-1 sm:max-w-xs">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AAA39B] text-sm pointer-events-none">
              ⌕
            </span>
            <input
              value={f.q}
              onChange={(e) => set({ q: e.target.value })}
              placeholder="Search dishes…"
              aria-label="Search dishes"
              className="w-full rounded-full pl-10 pr-5 py-2.5 text-sm"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#F7F0E6",
                outline: "none",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(214,168,95,0.4)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
            />
          </div>
        )}

        <FilterChip on={f.diet === "veg"} onClick={() => set({ diet: f.diet === "veg" ? "all" : "veg" })}>
          🟢 Veg
        </FilterChip>
        <FilterChip on={f.diet === "nonveg"} onClick={() => set({ diet: f.diet === "nonveg" ? "all" : "nonveg" })}>
          🔴 Non-veg
        </FilterChip>
        <FilterChip on={f.popular} onClick={() => set({ popular: !f.popular })}>
          ★ Popular
        </FilterChip>
        <FilterChip on={f.isNew} onClick={() => set({ isNew: !f.isNew })}>
          ✦ New
        </FilterChip>

        <select
          aria-label="Max price"
          value={f.max}
          onChange={(e) => set({ max: +e.target.value })}
          className="rounded-full px-4 py-2 text-sm cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#AAA39B",
            outline: "none",
          }}
        >
          <option value={2000} style={{ background: "#111" }}>Any price</option>
          <option value={200} style={{ background: "#111" }}>Under ₹200</option>
          <option value={300} style={{ background: "#111" }}>Under ₹300</option>
          <option value={500} style={{ background: "#111" }}>Under ₹500</option>
        </select>

        <select
          aria-label="Sort by"
          value={f.sort}
          onChange={(e) => set({ sort: e.target.value as Filters["sort"] })}
          className="rounded-full px-4 py-2 text-sm cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#AAA39B",
            outline: "none",
          }}
        >
          <option value="relevance" style={{ background: "#111" }}>Relevance</option>
          <option value="price-asc" style={{ background: "#111" }}>Price: low to high</option>
          <option value="price-desc" style={{ background: "#111" }}>Price: high to low</option>
          <option value="rating" style={{ background: "#111" }}>Top rated</option>
          <option value="time" style={{ background: "#111" }}>Fastest</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm mb-4" style={{ color: "#AAA39B" }}>
        {list.length} {list.length === 1 ? "dish" : "dishes"}
      </p>

      {/* Grid */}
      {list.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      ) : (
        <div
          className="mt-8 rounded-2xl p-12 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="font-display text-2xl text-[#F7F0E6]">Nothing matches — yet.</p>
          <p className="mt-2 text-sm" style={{ color: "#AAA39B" }}>
            Try adjusting your filters or search.
          </p>
          <button
            onClick={() => setF(DEFAULT_FILTERS)}
            className="mt-5 text-[#D6A85F] text-sm underline underline-offset-4 hover:text-[#E8BF74] transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
