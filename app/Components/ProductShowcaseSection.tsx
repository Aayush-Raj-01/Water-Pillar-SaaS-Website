"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductItem {
  id: string;
  edition: string;
  category: "cylindrical" | "square" | "pair" | "cluster";
  image: string;
  alt: string;
  badge: string;
  tag: string;
  specs: string;
  title: string;
  desc: string;
  features: string[];
  accentColor: string;
}

const productCollection: ProductItem[] = [
  {
    id: "home-product-cylindrical",
    edition: "Edition 01",
    category: "cylindrical",
    image: "/img/luxury_villa_staircase.jpg",
    alt: "Classic cylindrical water bubble pillar installed at luxury villa spiral staircase foyer",
    badge: "Signature Column",
    tag: "360° Omnidirectional",
    specs: "Dia: 200–500mm • Up to 12ft",
    title: "Classic Cylindrical Bubble Pillar",
    desc: "A timeless vertical bubble column offering continuous hypnotic aeration and synchronized 360° RGB spectrum illumination. Ideal for luxury villa foyers, grand staircases, and executive reception desks.",
    features: ["360° Panoramic View", "RGBW Spectrum", "100% Cast Acrylic"],
    accentColor: "#36B7C9",
  },
  {
    id: "home-product-square",
    edition: "Edition 02",
    category: "square",
    image: "/img/square_pillar_hotel.jpg",
    alt: "Square water bubble pillar monolith at luxury hotel reception desk",
    badge: "Modern Architecture",
    tag: "Geometric Monolith",
    specs: "Width: 250–600mm • Up to 10ft",
    title: "Square Bubble Pillar Monolith",
    desc: "Crisp architectural lines with flush crystal perimeter and synchronized RGB illumination. Engineered for contemporary executive suites, corporate reception lounges, and modern luxury residences.",
    features: ["Flush Crystal Edge", "DMX Lighting Sync", "Brushed Metal Base"],
    accentColor: "#C2A062",
  },
  {
    id: "home-product-pair",
    edition: "Edition 03",
    category: "pair",
    image: "/img/pillar_pair_wedding.jpg",
    alt: "Harmonized bubble pillar pair framing a luxury banquet entrance",
    badge: "Symmetrical Pair",
    tag: "Portal Entrance Frame",
    specs: "Dual Synchronized Columns • Up to 10ft",
    title: "Decorative Bubble Pillar Pair",
    desc: "Harmonized twin columns creating grand portal entrances, stage frames, and symmetrical architectural focal points. Coordinated DMX color transitions create an unforgettable visual welcome.",
    features: ["Dual Sync Control", "Grand Entrance Ready", "Custom Base Finishes"],
    accentColor: "#8B5CF6",
  },
  {
    id: "home-product-custom",
    edition: "Edition 04",
    category: "cluster",
    image: "/img/multi_pillar_spa.jpg",
    alt: "Multi-pillar water bubble installation in luxury wellness spa",
    badge: "Bespoke Array",
    tag: "Multi-Tier Cluster",
    specs: "3 to 7+ Column Cascades • Custom Heights",
    title: "Custom Multi-Column Cascade",
    desc: "Architectural multi-column arrangements planned to your exact room height, acrylic finishes, remote DMX lighting, and space layout. Functions as a breathtaking room divider or statement art installation.",
    features: ["Multi-Tier Heights", "Acoustic Partition", "Bespoke Common Base"],
    accentColor: "#10B981",
  },
];

interface MicroBubble {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  alpha: number;
  wobbleSpeed: number;
  wobbleAngle: number;
  wobbleDistance: number;
}

function ShowcaseCard({ product, index }: { product: ProductItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = (canvas.width = container.offsetWidth || 300);
    let height = (canvas.height = container.offsetHeight || 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animId);
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const bubbles: MicroBubble[] = [];
    const maxAmbientBubbles = 7;
    const maxHoverBubbles = 26;

    const createBubble = (initialY?: number): MicroBubble => {
      const minX = width * 0.15;
      const maxX = width * 0.85;
      const randomX = minX + Math.random() * (maxX - minX);

      return {
        x: randomX,
        y: initialY !== undefined ? initialY : height + Math.random() * 30,
        radius: Math.random() * 5.5 + 3, // 3px to 8.5px
        speedY: Math.random() * 1.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.35 + 0.5,
        wobbleSpeed: Math.random() * 0.04 + 0.02,
        wobbleAngle: Math.random() * Math.PI * 2,
        wobbleDistance: Math.random() * 1.5 + 0.8,
      };
    };

    for (let i = 0; i < maxAmbientBubbles; i++) {
      bubbles.push(createBubble(Math.random() * height));
    }

    let spawnTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const hovering = isHoveredRef.current;
      const targetCount = hovering ? maxHoverBubbles : maxAmbientBubbles;
      const speedMultiplier = hovering ? 1.6 : 1.0;

      spawnTimer++;
      if (hovering && spawnTimer % 5 === 0 && bubbles.length < targetCount) {
        bubbles.push(createBubble());
      } else if (!hovering && spawnTimer % 18 === 0 && bubbles.length < targetCount) {
        bubbles.push(createBubble());
      }

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.wobbleAngle += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.wobbleAngle) * b.wobbleDistance;
        b.y -= b.speedY * speedMultiplier;

        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);

        // Spherical translucent water bubble gradient
        const grad = ctx.createRadialGradient(
          currentX - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          currentX,
          b.y,
          b.radius
        );

        const a = hovering ? Math.min(1, b.alpha * 1.25) : b.alpha;
        grad.addColorStop(0, `rgba(255, 255, 255, ${a * 0.95})`);
        grad.addColorStop(0.35, `rgba(130, 225, 245, ${a * 0.65})`);
        grad.addColorStop(0.8, `rgba(194, 160, 98, ${a * 0.45})`);
        grad.addColorStop(1, `rgba(54, 183, 201, ${a * 0.7})`);

        ctx.fillStyle = grad;
        ctx.fill();

        // White specular reflection highlight
        ctx.beginPath();
        ctx.arc(
          currentX - b.radius * 0.35,
          b.y - b.radius * 0.35,
          b.radius * 0.28,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${a * 0.95})`;
        ctx.fill();

        ctx.restore();

        if (b.y < -15) {
          if (bubbles.length > targetCount) {
            bubbles.splice(i, 1);
          } else {
            bubbles[i] = createBubble();
          }
        }
      }

      if (isVisible) {
        animId = requestAnimationFrame(render);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      id={product.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl bg-white border border-[#E2DDD3] hover:border-[#C2A062] shadow-[0_4px_24px_rgba(17,24,32,0.05)] hover:shadow-[0_20px_45px_rgba(194,160,98,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden select-none"
    >
      {/* Top Hairline Gold Glow */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C2A062] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ── 1. ARCHITECTURAL PHOTOGRAPH & CANVAS CONTAINER ── */}
      <div
        ref={containerRef}
        className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#ECE7DE]"
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          priority={index < 2}
          className="object-cover scale-100 group-hover:scale-106 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Ambient tonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

        {/* Diagonal shimmer sheen on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Interactive Rising Bubbles Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#0B111A]/80 backdrop-blur-md border border-white/15 text-white shadow-sm">
            {product.tag}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md border border-[#C2A062]/40 text-[#A8885A] shadow-sm">
            {product.edition}
          </span>
        </div>

        {/* Active Bubble Aeration Indicator (on hover) */}
        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0B111A]/85 backdrop-blur-md border border-[#36B7C9]/50 text-[#5ECFDF] text-[10px] font-semibold tracking-wider flex items-center gap-1.5 transition-all duration-300 z-20 shadow-md ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#36B7C9] animate-ping" />
          <span>Active Aeration</span>
        </div>
      </div>

      {/* ── 2. EDITORIAL CONTENT ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Dimension Specs Chip */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#F8F5EE] border border-[#E8E1D5] text-[#916E36] text-[11px] font-mono font-medium tracking-wide w-fit mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062]" />
            <span>{product.specs}</span>
          </div>

          {/* Title */}
          <h3
            className="text-2xl font-bold text-[#111820] group-hover:text-[#A8885A] transition-colors leading-snug mb-2.5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p
            className="text-[#111820]/65 text-[13.5px] leading-relaxed mb-4 line-clamp-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {product.desc}
          </p>

          {/* Architectural Feature Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.features.map((feat, fi) => (
              <span
                key={fi}
                className="text-[10.5px] font-semibold text-[#111820]/75 bg-[#F2EFE9] border border-[#E5DFD5]/60 px-2.5 py-1 rounded-md tracking-wide"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. PREMIER OBSIDIAN & GOLD ACTION BUTTON ── */}
        <div>
          <Link
            href={`https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
              product.title
            )}%20(${encodeURIComponent(product.specs)}).%20Please%20share%20dimensions%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            id={`${product.id}-enquire-btn`}
            className="group/btn relative w-full h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-[#111820] hover:bg-[#C2A062] text-[#F7F4EE] hover:text-[#0B111A] font-bold text-xs sm:text-[12.5px] tracking-wider uppercase flex items-center justify-center gap-2 sm:gap-2.5 border border-[#C2A062]/40 hover:border-[#C2A062] shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(194,160,98,0.35)] transition-all duration-300 cursor-pointer select-none overflow-hidden"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {/* WhatsApp Icon */}
            <svg
              className="w-4 h-4 fill-current shrink-0 text-[#25D366] group-hover/btn:text-[#0B111A] transition-all duration-300 group-hover/btn:scale-110"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>

            <span className="whitespace-nowrap">Enquire on WhatsApp</span>

            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"all" | "cylindrical" | "square" | "pair" | "cluster">("all");

  const filterTabs = [
    { id: "all", label: "All Editions (4)" },
    { id: "cylindrical", label: "Cylindrical Columns" },
    { id: "square", label: "Square Monoliths" },
    { id: "pair", label: "Symmetrical Pairs" },
    { id: "cluster", label: "Multi-Column Clusters" },
  ] as const;

  const filteredProducts =
    activeTab === "all"
      ? productCollection
      : productCollection.filter((p) => p.category === activeTab);

  return (
    <section id="product-range" className="section-ivory pt-10 sm:pt-14 pb-14 sm:pb-18 relative overflow-hidden">
      {/* Ambient background lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-[#C2A062]/8 blur-3xl pointer-events-none rounded-full" />

      <div className="container-site relative z-10">
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-3 mx-auto">
            <span className="w-8 h-px bg-[#C2A062]" />
            <p
              className="text-[#C2A062] text-xs tracking-[0.25em] uppercase font-bold text-center"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Curated Architectural Editions
            </p>
            <span className="w-8 h-px bg-[#C2A062]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111820] leading-tight mb-4 text-center w-full"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Explore Our Water Bubble Pillars
          </h2>

          <p
            className="text-[#111820]/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-center"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Precision-engineered acrylic water features with hypnotic rising aeration and synchronized RGB spectrum illumination—crafted to your exact spatial proportions.
          </p>

          {/* Gold Decorative Center Line */}
          <div
            className="w-16 h-0.5 bg-[#C2A062] rounded-full mx-auto mt-5"
            style={{ margin: "20px auto 0 auto" }}
          />
        </div>

        {/* ── ATELIER CATEGORY FILTER TABS ── */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#111820] text-[#C2A062] border border-[#C2A062] shadow-sm"
                    : "bg-white/80 hover:bg-white text-[#111820]/75 hover:text-[#111820] border border-[#111820]/10 hover:border-[#C2A062]/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                }`}
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── SHOWCASE GRID ── */}
        <div
          className={`grid gap-6 xl:gap-7 justify-center ${
            filteredProducts.length === 1
              ? "grid-cols-1 max-w-md mx-auto"
              : filteredProducts.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {filteredProducts.map((p, i) => (
            <ShowcaseCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
