"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type TextPressureProps = {
  text: string;
  className?: string;
  textColor?: string;
  strokeColor?: string;
  flex?: boolean;
  scale?: boolean;
  fit?: boolean;
  alpha?: boolean;
  stroke?: boolean;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  minFontSize?: number;
};

type CharStyle = CSSProperties & {
  "--opacity": number;
};

const DEFAULT_MOUSE = { x: -1000, y: -1000 };

export function TextPressure({
  text,
  className = "",
  textColor = "currentColor",
  strokeColor = "currentColor",
  flex = false,
  scale = true,
  fit = false,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = false,
  minFontSize = 16,
}: TextPressureProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const charRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const mouseRef = useRef(DEFAULT_MOUSE);
  const cursorRef = useRef(DEFAULT_MOUSE);
  const animationRef = useRef<number | null>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);
  const [scaleY, setScaleY] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  const chars = useMemo(() => text.split(""), [text]);

  const resizeText = useCallback(() => {
    if (!fit || !containerRef.current) return;

    const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
    if (!containerWidth || !containerHeight) return;

    const newFontSize = Math.max(containerWidth / Math.max(chars.length * 0.55, 1), minFontSize);
    setFontSize(newFontSize);

    requestAnimationFrame(() => {
      const textHeight = containerRef.current?.scrollHeight ?? newFontSize;
      setScaleY(scale && textHeight > 0 ? Math.min(containerHeight / textHeight, 1) : 1);
    });
  }, [chars.length, fit, minFontSize, scale]);

  useEffect(() => {
    resizeText();
    if (!fit) return;

    const observer = new ResizeObserver(resizeText);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [fit, resizeText]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(media.matches);
    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);
    return () => media.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) cursorRef.current = { x: touch.clientX, y: touch.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      charRefs.current.forEach((char) => {
        if (!char) return;
        char.style.fontVariationSettings = `'wght' 680, 'wdth' 100, 'ital' 0`;
        char.style.transform = "none";
        char.style.textShadow = "none";
        char.style.setProperty("--opacity", "1");
      });
      return;
    }

    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 14;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 14;

      charRefs.current.forEach((char) => {
        if (!char) return;

        const rect = char.getBoundingClientRect();
        const charCenterX = rect.x + rect.width / 2;
        const charCenterY = rect.y + rect.height / 2;
        const distance = Math.hypot(mouseRef.current.x - charCenterX, mouseRef.current.y - charCenterY);
        const maxDistance = Math.max(rect.width * 9, 170);
        const proximity = Math.max(0, 1 - distance / maxDistance);

        const weightValue = weight ? Math.round(430 + proximity * 560) : 680;
        const widthValue = width ? Math.round(88 + proximity * 55) : 100;
        const italicValue = italic ? proximity.toFixed(2) : "0";
        const opacityValue = alpha ? 0.62 + proximity * 0.38 : 1;
        const stretchX = 1 + proximity * 0.11;
        const stretchY = 1 + proximity * 0.07;
        const lift = -proximity * 2.8;
        const glowAlpha = proximity * 0.2;
        const glowDrop = Math.round(proximity * 9);
        const glowBlur = Math.round(proximity * 20);

        char.style.fontVariationSettings = `'wght' ${weightValue}, 'wdth' ${widthValue}, 'ital' ${italicValue}`;
        char.style.transform = `translate3d(0, ${lift.toFixed(2)}px, 0) scale(${stretchX.toFixed(3)}, ${stretchY.toFixed(3)})`;
        char.style.textShadow = `0 ${glowDrop}px ${glowBlur}px rgba(133, 108, 164, ${glowAlpha.toFixed(3)})`;
        char.style.setProperty("--opacity", opacityValue.toString());
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [alpha, italic, reducedMotion, weight, width]);

  const wrapperStyle: CSSProperties = fit
    ? {
        fontSize: fontSize ? `${fontSize}px` : undefined,
        transform: `scale(1, ${scaleY})`,
        transformOrigin: "center top",
      }
    : {};

  return (
    <span
      ref={containerRef}
      className={`text-pressure ${flex ? "text-pressure-flex" : ""} ${fit ? "text-pressure-fit" : ""} ${className}`}
      style={wrapperStyle}
      aria-label={text}
    >
      {chars.map((char, index) => {
        const charStyle: CharStyle = {
          color: stroke ? "transparent" : textColor,
          WebkitTextStroke: stroke ? `1px ${strokeColor}` : undefined,
          "--opacity": 1,
        };

        return (
          <span
            aria-hidden="true"
            className="text-pressure-char"
            key={`${char}-${index}`}
            ref={(element) => {
              charRefs.current[index] = element;
            }}
            style={charStyle}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}
