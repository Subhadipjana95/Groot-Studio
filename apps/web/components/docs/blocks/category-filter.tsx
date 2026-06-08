"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categoryNames: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
}

export function CategoryFilter({
  categoryNames,
  selectedCategory,
  onSelectCategory,
  className,
}: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);

      const observer = new MutationObserver(updateScrollButtons);
      observer.observe(container, { childList: true, subtree: true });

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
        observer.disconnect();
      };
    }
  }, [categoryNames]);

  return (
    <div
      className={cn(
        "relative flex items-center flex-1 min-w-0 w-full md:max-w-[50%] bg-muted/40 pr-1.5 pl-0.5 py-0.5 border border-dashed border-border/50 rounded-lg group",
        className
      )}
    >
      {/* Left Chevron */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3 z-20 p-1 rounded-full bg-background/90 hover:bg-background border border-border/60 text-muted-foreground hover:text-foreground shadow-sm backdrop-blur-sm cursor-pointer transition-all flex items-center justify-center hover:scale-105 active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft size={14} className="stroke-[2.5]" />
        </button>
      )}

      {/* Categories Scrollable Container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex items-center gap-2 overflow-x-auto scrollbar-hide py-1 select-none scroll-smooth w-full transition-all duration-300",
          canScrollLeft ? "pl-8" : "pl-1",
          canScrollRight ? "pr-8" : "pr-1"
        )}
        style={{
          maskImage: `linear-gradient(to right, 
            ${canScrollLeft ? "transparent" : "black"} 0px, 
            black ${canScrollLeft ? "32px" : "12px"}, 
            black calc(100% - ${canScrollRight ? "32px" : "12px"}), 
            ${canScrollRight ? "transparent" : "black"} 100%)`,
          WebkitMaskImage: `linear-gradient(to right, 
            ${canScrollLeft ? "transparent" : "black"} 0px, 
            black ${canScrollLeft ? "32px" : "12px"}, 
            black calc(100% - ${canScrollRight ? "32px" : "12px"}), 
            ${canScrollRight ? "transparent" : "black"} 100%)`,
        }}
      >
        <button
          onClick={() => onSelectCategory(null)}
          className={cn(
            "px-2.5 py-1 text-sm font-medium rounded-full transition-all border shrink-0 cursor-pointer",
            selectedCategory === null
              ? "bg-brand-gradient dark:bg-brand-gradient2 opacity-90 text-background border-background"
              : "bg-muted text-muted-foreground hover:text-foreground border-border/60"
          )}
        >
          All
        </button>
        {categoryNames.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-2.5 py-1 text-sm font-medium rounded-full transition-all border shrink-0 cursor-pointer",
              selectedCategory === category
                ? "bg-brand-gradient dark:bg-brand-gradient2 opacity-90 text-background border-background"
                : "bg-muted text-muted-foreground hover:text-foreground border-border/60"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Chevron */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3 z-20 p-1 rounded-full bg-background/90 hover:bg-background border border-border/60 text-muted-foreground hover:text-foreground shadow-sm backdrop-blur-sm cursor-pointer transition-all flex items-center justify-center hover:scale-105 active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight size={14} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
