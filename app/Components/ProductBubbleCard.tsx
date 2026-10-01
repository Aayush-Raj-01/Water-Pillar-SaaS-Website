"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductItem {
  id: string;
  image: string;
  title: string;
  desc: string;
  badge: string;
  tag: string;
  specs: string;
  accentColor: string;
}

interface ProductBubbleCardProps {
  product: ProductItem;
  index: number;
}

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

export default function ProductBubbleCard({ product, index }: ProductBubbleCardProps) {
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
    let width = (canvas.width = container.offsetWidth || 300);
    let height = (canvas.height = container.offsetHeight || 320);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const bubbles: MicroBubble[] = [];
    const maxAmbientBubbles = 8;
    const maxHoverBubbles = 28;

    const createBubble = (initialY?: number): MicroBubble => {
      const minX = width * 0.15;
      const maxX = width * 0.85;
      const randomX = minX + Math.random() * (maxX - minX);

      return {
        x: randomX,
        y: initialY !== undefined ? initialY : height + Math.random() * 40,
        radius: Math.random() * 6 + 3.5,
        speedY: Math.random() * 1.2 + 0.9,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.35 + 0.45,
        wobbleSpeed: Math.random() * 0.04 + 0.02,
        wobbleAngle: Math.random() * Math.PI * 2,
        wobbleDistance: Math.random() * 1.6 + 0.8,
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
      const speedMultiplier = hovering ? 1.7 : 1.0;

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

        const grad = ctx.createRadialGradient(
          currentX - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          currentX,
          b.y,
          b.radius
        );

        const a = hovering ? Math.min(1, b.alpha * 1.3) : b.alpha;
        grad.addColorStop(0, `rgba(255, 255, 255, ${a * 0.95})`);
        grad.addColorStop(0.35, `rgba(130, 225, 245, ${a * 0.65})`);
        grad.addColorStop(0.8, `rgba(194, 160, 98, ${a * 0.45})`);
        grad.addColorStop(1, `rgba(54, 183, 201, ${a * 0.7})`);

        ctx.fillStyle = grad;
        ctx.fill();

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

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      id={product.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-3xl bg-white border border-[#111820]/10 hover:border-[#C2A062] shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(194,160,98,0.22)] transition-all duration-500 hover:-translate-y-2 overflow-hidden select-none"
    >
      <div
        ref={containerRef}
        className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#F2EFE9]"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={index < 2}
          className="object-cover scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/95 backdrop-blur-md border border-[#C2A062]/40 text-[#A8885A] shadow-sm">
            {product.badge}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#111820]/80 backdrop-blur-md text-white/90 shadow-sm">
            {product.tag}
          </span>
        </div>

        <div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-[#36B7C9]/50 text-[#5ECFDF] text-[10px] font-semibold tracking-wider flex items-center gap-1.5 transition-all duration-300 z-20 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#36B7C9] animate-ping" />
          <span>Active Aeration</span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A062]" />
            <span className="text-[11px] font-mono font-medium text-[#C2A062] tracking-wider uppercase">
              {product.specs}
            </span>
          </div>

          <h3
            className="text-2xl font-bold text-[#111820] group-hover:text-[#A8885A] transition-colors leading-snug mb-2.5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {product.title}
          </h3>

          <p className="text-[#111820]/65 text-[13.5px] leading-relaxed mb-6 line-clamp-3">
            {product.desc}
          </p>
        </div>

        <div>
          <Link
            href={`https://wa.me/919834123136?text=Hello%20Water%20Bubble%20Pillar%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
              product.title
            )}.%20Please%20share%20dimensions%20and%20pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            id={`${product.id}-enquire-btn`}
            className="group/btn relative w-full h-11.5 sm:h-12 px-4 rounded-xl bg-[#C2A062] hover:bg-[#D4B57A] active:scale-[0.98] text-[#080C14] font-bold text-xs sm:text-[13px] tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(194,160,98,0.28)] hover:shadow-[0_8px_24px_rgba(194,160,98,0.45)] transition-all cursor-pointer select-none overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            <span className="whitespace-nowrap">Enquire Now</span>
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
