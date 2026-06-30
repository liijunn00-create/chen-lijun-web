"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

type GlowStop = {
  color: string;
  x: number;
  y: number;
  radius: number;
  drift: number;
};

const glows: GlowStop[] = [
  { color: "rgba(132, 177, 210, 0.72)", x: 0.12, y: 0.2, radius: 0.58, drift: 0.22 },
  { color: "rgba(184, 158, 224, 0.68)", x: 0.78, y: 0.16, radius: 0.64, drift: 0.29 },
  { color: "rgba(240, 160, 96, 0.52)", x: 0.74, y: 0.82, radius: 0.56, drift: 0.25 },
  { color: "rgba(124, 212, 218, 0.4)", x: 0.36, y: 0.62, radius: 0.74, drift: 0.18 },
];

const fieldColors = [
  "rgba(107, 151, 190, 0.18)",
  "rgba(174, 144, 220, 0.17)",
  "rgba(239, 145, 82, 0.12)",
  "rgba(255, 255, 255, 0.28)",
];

function drawGlow(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
) {
  const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.34, color.replace(/[\d.]+\)$/u, "0.36)"));
  gradient.addColorStop(0.68, color.replace(/[\d.]+\)$/u, "0.12)"));
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

export function NoisyGlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const noise3D = createNoise3D();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let quality = 0.5;
    let raf = 0;
    let lastFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      quality = window.innerWidth < 768 ? 0.58 : 0.74;
      width = Math.max(360, Math.floor(window.innerWidth * quality));
      height = Math.max(520, Math.floor(window.innerHeight * quality));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const paint = (timestamp: number) => {
      if (!reducedMotion && timestamp - lastFrame < 32) {
        raf = window.requestAnimationFrame(paint);
        return;
      }

      lastFrame = timestamp;
      const time = reducedMotion ? 12 : timestamp * 0.000085;
      const longSide = Math.max(width, height);

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";
      context.fillStyle = "#e8edf2";
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = "source-over";
      for (const glow of glows) {
        const nx = noise3D(glow.x * 2, glow.y * 2, time * glow.drift);
        const ny = noise3D(glow.y * 2 + 11, glow.x * 2 + 7, time * glow.drift);
        const x = (glow.x + nx * 0.18) * width;
        const y = (glow.y + ny * 0.2) * height;
        const radius = glow.radius * longSide * (0.74 + Math.abs(nx) * 0.22);
        drawGlow(context, x, y, radius, glow.color);
      }

      context.globalCompositeOperation = "overlay";
      const cell = window.innerWidth < 768 ? 3 : 4;
      for (let y = -cell; y < height + cell; y += cell) {
        for (let x = -cell; x < width + cell; x += cell) {
          const n = noise3D(x * 0.009, y * 0.009, time);
          const ridge = Math.abs(noise3D(x * 0.026 + 4, y * 0.026 - 2, time * 1.9));
          const colorIndex = Math.max(0, Math.min(fieldColors.length - 1, Math.floor((n + 1) * 1.96)));
          context.fillStyle = fieldColors[colorIndex];
          context.globalAlpha = 0.16 + ridge * 0.28;
          context.fillRect(x, y, cell, cell);
        }
      }

      context.globalCompositeOperation = "source-over";
      const speck = window.innerWidth < 768 ? 3 : 3;
      for (let y = 0; y < height; y += speck) {
        for (let x = 0; x < width; x += speck) {
          const n = noise3D(x * 0.1, y * 0.1, time * 3.2);
          if (Math.abs(n) < 0.48) continue;
          context.fillStyle = n > 0 ? "rgba(255, 255, 255, 0.28)" : "rgba(45, 50, 62, 0.07)";
          context.globalAlpha = Math.min(0.34, Math.abs(n) * 0.42);
          context.fillRect(x, y, 1, 1);
        }
      }

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      const scan = context.createLinearGradient(0, 0, width, height);
      scan.addColorStop(0, "rgba(255, 255, 255, 0.2)");
      scan.addColorStop(0.5, "rgba(255, 255, 255, 0)");
      scan.addColorStop(1, "rgba(225, 230, 238, 0.12)");
      context.fillStyle = scan;
      context.fillRect(0, 0, width, height);

      if (!reducedMotion) {
        raf = window.requestAnimationFrame(paint);
      }
    };

    resize();
    paint(0);

    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      raf = window.requestAnimationFrame(paint);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="noisy-glow-shell" aria-hidden="true">
      <canvas ref={canvasRef} className="noisy-glow-canvas" />
      <div className="noisy-glow-grain" />
    </div>
  );
}
