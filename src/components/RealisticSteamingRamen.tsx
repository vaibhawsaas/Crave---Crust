import { useEffect, useRef, useState } from "react";

/**
 * RealisticSteamingRamen
 * Renders the authentic Japanese Ramen bowl with continuous, organic,
 * photo-realistic hot vapour/steam rising from the broth and lifted noodles.
 */
export function RealisticSteamingRamen() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = 540);
    let height = (canvas.height = 540);

    // Particle definition for realistic steam wisps
    interface SteamParticle {
      x: number;
      y: number;
      initialX: number;
      vx: number;
      vy: number;
      radius: number;
      initialRadius: number;
      maxRadius: number;
      life: number;
      maxLife: number;
      opacity: number;
      phase: number;
      driftSpeed: number;
    }

    const PARTICLE_COUNT = 48;
    const particles: SteamParticle[] = [];

    const createParticle = (spawnInitialProgress = false): SteamParticle => {
      // Spawn around hot broth surface and base of lifted noodles
      // Bowl center is at ~50% x, broth surface is ~55%-68% y
      const spreadX = (Math.random() - 0.5) * (width * 0.44);
      const startX = width * 0.5 + spreadX;
      const startY = height * 0.62 + (Math.random() - 0.5) * 35;
      const initialRadius = 14 + Math.random() * 12;
      const maxLife = 160 + Math.random() * 90;
      const life = spawnInitialProgress ? Math.random() * maxLife : 0;

      return {
        x: startX,
        y: startY,
        initialX: startX,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.75 + Math.random() * 0.85), // Gentle upward thermal buoyant drift
        radius: initialRadius,
        initialRadius,
        maxRadius: 52 + Math.random() * 40, // Expands as it cools & rises
        life,
        maxLife,
        opacity: 0.28 + Math.random() * 0.22,
        phase: Math.random() * Math.PI * 2,
        driftSpeed: 0.015 + Math.random() * 0.02,
      };
    };

    // Pre-populate particles so steam is already flowing on first paint
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }

    let time = 0;

    const render = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Render each soft steam puff
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!p) continue;
        p.life++;

        if (p.life >= p.maxLife) {
          particles[i] = createParticle(false);
          continue;
        }

        // Progress from 0 (spawn) to 1 (evaporated)
        const progress = p.life / p.maxLife;

        // Upward movement with slight horizontal sway
        p.y += p.vy;
        p.x = p.initialX + Math.sin(time * p.driftSpeed + p.phase) * (18 * progress) + p.vx * p.life;

        // Radius expands smoothly as heat diffuses into the surrounding air
        p.radius = p.initialRadius + (p.maxRadius - p.initialRadius) * Math.pow(progress, 0.8);

        // Alpha envelope: fade in quickly -> linger as mist -> fade out cleanly
        let alpha = 0;
        if (progress < 0.18) {
          alpha = (progress / 0.18) * p.opacity;
        } else if (progress < 0.5) {
          alpha = p.opacity;
        } else {
          alpha = (1 - (progress - 0.5) / 0.5) * p.opacity;
        }

        // Draw soft volumetric radial gradient
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(255, 252, 245, ${alpha * 0.55})`);
        gradient.addColorStop(0.35, `rgba(255, 248, 235, ${alpha * 0.3})`);
        gradient.addColorStop(0.68, `rgba(250, 245, 235, ${alpha * 0.1})`);
        gradient.addColorStop(1, "rgba(250, 245, 235, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center w-full max-w-lg mx-auto select-none"
    >
      {/* ── Warm Ambient Backlight Aura ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(255, 118, 40, 0.22) 0%, rgba(214, 168, 95, 0.14) 40%, transparent 72%)",
          transform: isHovered ? "scale(1.15)" : "scale(1.0)",
          filter: "blur(36px)",
        }}
        aria-hidden="true"
      />

      {/* ── Concentric Luxury Golden Frame Ring ── */}
      <div
        className="absolute inset-4 rounded-full border border-[#D6A85F]/25 pointer-events-none transition-transform duration-700"
        style={{
          transform: isHovered ? "scale(1.04) rotate(4deg)" : "scale(1.0)",
          boxShadow: "0 0 40px rgba(214, 168, 95, 0.15)",
        }}
        aria-hidden="true"
      />

      {/* ── Main Ramen Bowl Image (User Uploaded Exact 4K Photo) ── */}
      <div className="relative z-10 w-full overflow-hidden rounded-3xl p-1 transition-transform duration-500 ease-out">
        <img
          src="/images/dishes/steaming-ramen-bowl.jpg"
          alt="Authentic 18-Hour Simmered Japanese Tonkotsu Ramen with Springy Hand-Pulled Noodles, Ajitsuke Tamago, and Scallions"
          className="w-full h-auto object-contain transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.04) translateY(-4px)" : "scale(1.0)",
            filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.95)) drop-shadow(0 0 35px rgba(255,118,40,0.25))",
            maskImage: "radial-gradient(ellipse 92% 88% at 50% 55%, black 72%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 92% 88% at 50% 55%, black 72%, transparent 100%)",
          }}
          loading="lazy"
        />

        {/* ── Physics-Simulated Dynamic Continuous Vapour / Steam Canvas ── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
          style={{
            filter: "blur(4px)",
            opacity: 0.95,
          }}
          aria-hidden="true"
        />

        {/* ── Ambient Volumetric Heat Shimmer Layer ── */}
        <div
          className="absolute left-1/2 top-[22%] -translate-x-1/2 w-3/4 h-3/5 pointer-events-none z-15"
          style={{
            background: "radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.12) 0%, rgba(255,235,210,0.06) 35%, transparent 70%)",
            filter: "blur(18px)",
            animation: "aura-breathe 4s ease-in-out infinite",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Steam & Freshness Badge ── */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#D6A85F]/40 shadow-xl pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#FF7628] animate-ping" />
        <span className="text-[11px] font-bold text-[#F7F0E6] tracking-wider uppercase">
          ♨️ Always Piping Hot · 18h Broth
        </span>
      </div>
    </div>
  );
}
