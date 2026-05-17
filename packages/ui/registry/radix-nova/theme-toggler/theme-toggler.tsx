"use client";

import { useRef, useEffect, useReducer } from "react";
import { createPortal } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Theme = "light" | "dark";

export interface ThemeTogglerProps {
  direction?: "vertical" | "horizontal";
  duration?: number;
  defaultTheme?: Theme;
  onThemeChange?: (theme: Theme) => void;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

function peekNextThemeBg(): string {
  const html = document.documentElement;
  html.classList.toggle("dark");
  const bg = getComputedStyle(document.body).backgroundColor;
  html.classList.toggle("dark");
  return bg || getComputedStyle(document.body).color || "currentColor";
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ThemeToggler({
  direction = "vertical",
  duration = 550,
  defaultTheme = "light",
  onThemeChange,
  className,
}: ThemeTogglerProps) {
  const [, forceRender] = useReducer((x: number) => x + 1, 0);
  const animatingRef = useRef(false);
  const curtainRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<Theme>(defaultTheme);

  const isV = direction === "vertical";
  const scale0 = isV ? "scaleY(0)" : "scaleX(0)";
  const scale1 = isV ? "scaleY(1)" : "scaleX(1)";
  const originIn = isV ? "top center" : "left center";
  const originOut = isV ? "bottom center" : "right center";

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    themeRef.current = isDark ? "dark" : "light";
    forceRender();
  }, []);

  const toggle = () => {
    if (animatingRef.current) return;
    const curtain = curtainRef.current;
    if (!curtain) return;
    animatingRef.current = true;

    const next: Theme = themeRef.current === "dark" ? "light" : "dark";
    curtain.style.background = peekNextThemeBg();

    curtain.style.transition = "none";
    curtain.style.transformOrigin = originIn;
    curtain.style.transform = scale0;

    curtain.getBoundingClientRect();
    curtain.style.transition = `transform ${duration}ms ${EASING}`;
    curtain.style.transform = scale1;

    setTimeout(() => {
      themeRef.current = next;
      document.documentElement.classList.toggle("dark", next === "dark");
      onThemeChange?.(next);
      forceRender();

      curtain.style.transformOrigin = originOut;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          curtain.style.transform = scale0;
        });
      });
    }, duration);

    setTimeout(() => {
      curtain.style.transition = "none";
      curtain.style.transform = scale0;
      curtain.style.transformOrigin = originIn;
      animatingRef.current = false;
    }, duration * 2 + 100);
  };

  const isDark = themeRef.current === "dark";

  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <div
            ref={curtainRef}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none"
            style={{ transform: scale0, transformOrigin: originIn, zIndex: 99999 }}
          />,
          document.body
        )}

      <button
        type="button"
        onClick={toggle}
        className={cn(
          "w-9 h-9 bg-muted text-muted-foreground border border-border flex items-center justify-center rounded-full cursor-pointer outline-none hover:bg-muted/50 transition-colors",
          className
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </>
  );
}