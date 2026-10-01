"use client";

import React, { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  alpha: number;
  wobbleSpeed: number;
  wobbleAngle: number;
  wobbleDistance: number;
  colorType: "cyan" | "gold" | "white";
}

export default function InteractiveBubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const bubbleCount = Math.min(32, Math.floor(width / 45));
    const bubbles: Bubble[] = [];

    const createBubble = (initialY?: number): Bubble => {
      const typeRoll = Math.random();
      const colorType: "cyan" | "gold" | "white" =
        typeRoll > 0.65 ? "cyan" : typeRoll > 0.35 ? "gold" : "white";

      return {
        x: Math.random() * width,
        y: initialY !== undefined ? initialY : height + Math.random() * 200,
        radius: Math.random() * 9 + 4,
        speedY: Math.random() * 0.8 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.45 + 0.2,
        wobbleSpeed: Math.random() * 0.03 + 0.015,
        wobbleAngle: Math.random() * Math.PI * 2,
        wobbleDistance: Math.random() * 1.5 + 0.5,
        colorType,
      };
    };

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(createBubble(Math.random() * height));
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 6; i++) {
        bubbles.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          radius: Math.random() * 5 + 3,
          speedY: Math.random() * 1.8 + 1.2,
          speedX: (Math.random() - 0.5) * 1.2,
          alpha: 0.8,
          wobbleSpeed: 0.05,
          wobbleAngle: Math.random() * Math.PI * 2,
          wobbleDistance: 2,
          colorType: Math.random() > 0.5 ? "cyan" : "gold",
        });
      }
      if (bubbles.length > 50) {
        bubbles.splice(0, 6);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b, idx) => {
        b.y -= b.speedY;
        b.wobbleAngle += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.wobbleAngle) * b.wobbleDistance;

        const dx = mouseX - currentX;
        const dy = mouseY - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          b.x -= (dx / dist) * force * 2.5;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);

        let primaryColor = "rgba(54, 183, 201,";
        if (b.colorType === "gold") {
          primaryColor = "rgba(194, 160, 98,";
        } else if (b.colorType === "white") {
          primaryColor = "rgba(255, 255, 255,";
        }

        const grad = ctx.createRadialGradient(
          currentX - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          currentX,
          b.y,
          b.radius
        );
        grad.addColorStop(0, `${primaryColor} ${b.alpha * 0.8})`);
        grad.addColorStop(0.7, `${primaryColor} ${b.alpha * 0.25})`);
        grad.addColorStop(1, `${primaryColor} ${b.alpha * 0.05})`);

        ctx.fillStyle = grad;
        ctx.fill();

        ctx.lineWidth = 1;
        ctx.strokeStyle = `${primaryColor} ${b.alpha * 0.6})`;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          currentX - b.radius * 0.38,
          b.y - b.radius * 0.38,
          b.radius * 0.25,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.75})`;
        ctx.fill();

        ctx.restore();

        if (b.y + b.radius < -20) {
          bubbles[idx] = createBubble();
        }
      });

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
