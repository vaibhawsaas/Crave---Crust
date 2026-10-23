<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All menu, category, restaurant and offer data lives in `src/lib/catalog.ts`; business config in `src/lib/brand.ts` — so the template can be re-skinned per client by editing data only.
- Per-page colour themes are `.theme-*` classes in `src/styles.css` that override semantic tokens; pages pick a theme instead of hardcoding colours.
- Cart is a client-side store in `src/lib/cart.ts` (localStorage) — no backend yet.
- Keep homepage reveal and marquee motion CSS-led, trigger reveals with IntersectionObserver, and honor reduced-motion preferences without adding an animation dependency; this preserves lightweight, accessible brand motion.
