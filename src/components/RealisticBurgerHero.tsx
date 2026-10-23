import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";

export function RealisticBurgerHero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [manualExplode, setManualExplode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth scroll-driven explosion tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Progress from 0 at top to 1 when scrolled 350px down
          const maxScroll = 350;
          const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D Mouse Parallax
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
    setHoveredLayer(null);
  }, []);

  // Effective explosion ratio (0 = Image 1 Assembled, 1 = Image 2 Exploded)
  const factor = manualExplode ? 1 : scrollProgress;

  // 3D tilt angles
  const rotateX = mousePos.y * -16 + factor * 5;
  const rotateY = mousePos.x * 20;

  // Crossfade between assembled burger (Image 1) and exploded layers (Image 2)
  const assembledOpacity = Math.max(0, 1 - factor * 3.5);
  const explodedOpacity = Math.min(1, factor * 2.5);

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-start w-full min-h-[580px] md:min-h-[620px] select-none pt-0 pb-4"
      style={{ perspective: "1400px" }}
    >
      {/* 3D Burger Canvas Scene */}
      <div
        className="relative w-[360px] sm:w-[420px] md:w-[470px] h-[500px] flex items-center justify-center transition-transform duration-200 ease-out -translate-y-2 md:-translate-y-4"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            ACCOMPANYING CRISPY FRENCH FRIES BOX
            Positioned right beside the burger on the side with prominent size
            and clear visibility of the golden fries & 'GOOD FOOD GOOD MOOD' box.
            Both burger and fries float slightly up & down.
            Smoothly hides on scroll when burger layers explode.
        ═══════════════════════════════════════════════════════════════ */}
        <div
          className="absolute left-1/2 top-1/2 w-[205px] sm:w-[245px] md:w-[270px] transition-all duration-300 ease-out pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: `translate(calc(-50% - min(180px, 28vw) - ${factor * 30}px), calc(-50% + 46px)) translate3d(0, 0, 5px) rotate(-6deg)`,
            opacity: assembledOpacity,
            zIndex: 35, // Right beside burger, subtle overlap behind burger bun (zIndex 40)
          }}
        >
          <div
            style={{
              animation: "float-fries-subtle 4.2s ease-in-out infinite",
            }}
            className="w-full"
          >
            <img
              src="/images/dishes/hero-fries-box.png"
              alt="Crispy golden French Fries in luxury black packaging box"
              className="w-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(214,168,95,0.3)]"
              loading="eager"
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STATE 1: ASSEMBLED BURGER (Matches Image 1 Exactly)
            Active when factor is 0 or low; floats slightly up & down
        ═══════════════════════════════════════════════════════════════ */}
        <div
          className="absolute left-1/2 top-1/2 w-[320px] sm:w-[370px] md:w-[410px] transition-opacity duration-300 ease-out pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: "translate(-50%, -50%) translate3d(0, 0, 10px)",
            opacity: assembledOpacity,
            zIndex: 40,
          }}
        >
          <div
            style={{
              animation: "float-burger-subtle 4.4s ease-in-out infinite 0.4s",
            }}
          >
            <img
              src="/images/burger-layers/assembled-burger.png"
              alt="Real 4K assembled gourmet burger"
              className="w-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(255,118,40,0.25)]"
              loading="eager"
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            STATE 2: EXPLODED 3D LAYERS (Matches Image 2 Exactly)
            Smoothly separates as factor increases (scroll down or click)
        ═══════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 pointer-events-auto transition-opacity duration-300"
          style={{
            transformStyle: "preserve-3d",
            opacity: explodedOpacity,
          }}
        >
          {/* ── 1. Top Bun + Special Sauce ── */}
          <div
            onMouseEnter={() => setHoveredLayer("top-bun")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[270px] sm:w-[320px] md:w-[345px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                -95 - 130 * factor
              }px, ${30 + 55 * factor}px) rotateX(${
                14 * factor
              }deg) scale(${1 + (hoveredLayer === "top-bun" ? 0.04 : 0)})`,
              zIndex: 35,
            }}
          >
            <img
              src="/images/burger-layers/1-top-bun.png"
              alt="Special Sauce and Brioche Bun Crown"
              className="w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(214,168,95,0.25)]"
              loading="eager"
            />
            {/* Label Line & Pill */}
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "top-bun"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-6 h-[1px] bg-[#D6A85F]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#F7F0E6]">Special Sauce & Bun</span>
                <span className="text-[10px] text-[#AAA39B]">Creamy house blend & sesame crown</span>
              </div>
            </div>
          </div>

          {/* ── 2. Fresh Crisp Lettuce ── */}
          <div
            onMouseEnter={() => setHoveredLayer("lettuce")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[280px] sm:w-[330px] md:w-[355px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                -50 - 75 * factor
              }px, ${20 + 35 * factor}px) rotateX(${
                7 * factor
              }deg) scale(${1 + factor * 0.03 + (hoveredLayer === "lettuce" ? 0.04 : 0)})`,
              zIndex: 30,
            }}
          >
            <img
              src="/images/burger-layers/2-lettuce.png"
              alt="Fresh curly lettuce"
              className="w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] drop-shadow-[0_0_20px_rgba(110,165,58,0.25)]"
              loading="eager"
            />
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "lettuce"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-6 h-[1px] bg-[#6ea53a]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#7fc444]">Fresh Lettuce</span>
                <span className="text-[10px] text-[#AAA39B]">Crisp, fresh and full of flavor</span>
              </div>
            </div>
          </div>

          {/* ── 3. Tomato Slices ── */}
          <div
            onMouseEnter={() => setHoveredLayer("tomatoes")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[270px] sm:w-[315px] md:w-[340px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                -20 - 30 * factor
              }px, ${10 + 20 * factor}px) rotateX(${
                -5 * factor
              }deg) scale(${1 + (hoveredLayer === "tomatoes" ? 0.04 : 0)})`,
              zIndex: 25,
            }}
          >
            <img
              src="/images/burger-layers/3-tomatoes.png"
              alt="Juicy tomato slices"
              className="w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] drop-shadow-[0_0_20px_rgba(255,118,40,0.25)]"
              loading="eager"
            />
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "tomatoes"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-6 h-[1px] bg-[#FF7628]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#FF7628]">Tomato Slices</span>
                <span className="text-[10px] text-[#AAA39B]">Juicy vine-ripened red wheels</span>
              </div>
            </div>
          </div>

          {/* ── 4. Onion Rings ── */}
          <div
            onMouseEnter={() => setHoveredLayer("onions")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[265px] sm:w-[310px] md:w-[335px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                10 + 10 * factor
              }px, ${5 + 15 * factor}px) rotateX(${
                -3 * factor
              }deg) scale(${1 + (hoveredLayer === "onions" ? 0.04 : 0)})`,
              zIndex: 20,
            }}
          >
            <img
              src="/images/burger-layers/4-onions.png"
              alt="Crunchy purple onion rings"
              className="w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.85)]"
              loading="eager"
            />
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "onions"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-6 h-[1px] bg-[#D44A94]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#E56AB0]">Onion Rings</span>
                <span className="text-[10px] text-[#AAA39B]">Crunchy, crisp and full of bite</span>
              </div>
            </div>
          </div>

          {/* ── 5. Cheese Slice ── */}
          <div
            onMouseEnter={() => setHoveredLayer("cheese")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[275px] sm:w-[325px] md:w-[350px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                35 + 40 * factor
              }px, ${5 * factor}px) rotateX(${
                4 * factor
              }deg) scale(${1 + (hoveredLayer === "cheese" ? 0.04 : 0)})`,
              zIndex: 15,
            }}
          >
            <img
              src="/images/burger-layers/5-cheese.png"
              alt="Rich melted cheddar cheese slice"
              className="w-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(255,180,40,0.3)]"
              loading="eager"
            />
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "cheese"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-6 h-[1px] bg-[#FFB428]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#FFB428]">Cheese Slice</span>
                <span className="text-[10px] text-[#AAA39B]">Rich, creamy and perfectly melted</span>
              </div>
            </div>
          </div>

          {/* ── 6. Premium Patty ── */}
          <div
            onMouseEnter={() => setHoveredLayer("patty")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[280px] sm:w-[330px] md:w-[355px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                60 + 80 * factor
              }px, ${0 * factor}px) scale(${
                1 + (hoveredLayer === "patty" ? 0.04 : 0)
              })`,
              zIndex: 10,
            }}
          >
            <img
              src="/images/burger-layers/6-patty.png"
              alt="Thick flame-grilled beef patty"
              className="w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(214,168,95,0.2)]"
              loading="eager"
            />
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "patty"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-6 h-[1px] bg-[#D6A85F]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#F7F0E6]">Premium Patty</span>
                <span className="text-[10px] text-[#AAA39B]">Flame-grilled with smoky char</span>
              </div>
            </div>
          </div>

          {/* ── 7. Bottom Bun ── */}
          <div
            onMouseEnter={() => setHoveredLayer("bottom-bun")}
            onMouseLeave={() => setHoveredLayer(null)}
            className="absolute left-1/2 top-1/2 w-[270px] sm:w-[320px] md:w-[345px] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: `translate(-50%, -50%) translate3d(0px, ${
                85 + 125 * factor
              }px, ${-35 * factor}px) rotateX(${
                -12 * factor
              }deg) scale(${1 + (hoveredLayer === "bottom-bun" ? 0.04 : 0)})`,
              zIndex: 5,
            }}
          >
            <img
              src="/images/burger-layers/7-bottom-bun.png"
              alt="Toasted brioche bottom bun"
              className="w-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(214,168,95,0.2)]"
              loading="eager"
            />
            <div
              className={`absolute left-full ml-3 sm:ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap flex items-center gap-2 transition-all duration-300 pointer-events-none ${
                factor > 0.4 || hoveredLayer === "bottom-bun"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <div className="w-4 h-[1px] bg-[#D6A85F]" />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#F7F0E6]">Bottom Bun</span>
                <span className="text-[10px] text-[#AAA39B]">Soft, toasted and the perfect base</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Burger Interactive Controls */}
      <div className="relative z-50 mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-3">
        {/* Toggle Explode / Assemble Button */}
        <button
          type="button"
          onClick={() => setManualExplode((prev) => !prev)}
          className="flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
          style={{
            background: manualExplode || scrollProgress > 0.4
              ? "linear-gradient(135deg, #FF7628 0%, #D6A85F 100%)"
              : "rgba(22, 22, 22, 0.9)",
            color: manualExplode || scrollProgress > 0.4 ? "#080808" : "#F7F0E6",
            border: "1px solid rgba(214, 168, 95, 0.45)",
            backdropFilter: "blur(16px)",
          }}
        >
          <span className="text-sm">
            {manualExplode || scrollProgress > 0.4 ? "🍔" : "💥"}
          </span>
          {manualExplode || scrollProgress > 0.4 ? "Assemble Burger" : "Explode Burger (Scroll / Click)"}
        </button>

        {/* 3D Lab shortcut link */}
        <Link
          to="/3d-food-lab"
          className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide text-[#AAA39B] hover:text-[#F7F0E6] transition-all border border-white/10 hover:border-[#D6A85F]/50 bg-white/5 backdrop-blur-md hover:bg-white/10"
        >
          <span>Open Menu Book 📖</span>
          <span className="text-[#D6A85F]">→</span>
        </Link>
      </div>

      {/* Real-time Explode Meter hint */}
      <div className="mt-3 flex items-center gap-2 text-[11px] text-[#AAA39B]/70">
        <span className="inline-block w-2 h-2 rounded-full bg-[#FF7628] animate-ping" />
        <span>
          {factor > 0.05
            ? `Exploded: ${Math.round(factor * 100)}% · Scroll up to assemble tightly`
            : "Assembled (Image 1) · Scroll down or click to explode into Image 2"}
        </span>
      </div>
    </div>
  );
}
