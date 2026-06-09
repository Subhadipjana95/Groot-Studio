"use client"

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@workspace/ui/components/buttonVarients/gradient-button";
import BrandButton from "@/components/ui/buttonVarients/BrandButton";
import { Logo } from "@/components/ui/icons/logo";
import HeroGlow from "@workspace/ui/components/otherBlocks/HeroGlow";

export function SponsorCard({ target = 4000, duration = 2000 }: { target?: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    if (range <= 0) return;
    const increment = Math.ceil(end / (duration / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);

  const display = count < 1000 ? count : `${Math.floor(count / 1000)}k`;

  return (
    <div className="group relative h-80 max-h-96 overflow-hidden rounded-lg bg-background shadow-lg transition-all border border-brand-color-3/20 isolate group">
      {/* Hero Glow Background */}
      <HeroGlow />

      {/* Inner Content */}
      <div className="relative z-10 flex h-full flex-col px-5 pb-5 pt-4">
        {/* Counter Section */}
        <div className="mb-auto flex justify-between items-end w-full">
          <div>
            <span className="flex items-center justify-center p-0.5 rounded-sm bg-brand-gradient dark:bg-brand-gradient2 text-background shrink-0 opacity-80 group-hover:opacity-100 transition duration-150">
              <Logo className="h-5 w-5" />
            </span>
          </div>
          <div className="w-fit h-fit rounded-sm bg-brand-gradient dark:bg-brand-gradient2 px-1.5 py-1 text-xs font-medium text-background mt-1 opacity-80 group-hover:opacity-100 transition duration-150">
            Sponsors
          </div>
        </div>

        {/* Sponsor Content */}
        <div className="mt-auto">
          <h3 className="mb-2 text-xl font-medium text-foreground">
            Become a Sponsor
          </h3>
          <p className="mb-5 text-xs leading-normal text-muted-foreground/80">
            Support the development of Groot Studio and get your <span className="text-transparent bg-clip-text bg-brand-gradient2">Logo & Name</span> featured here.
          </p>
          <BrandButton href="/sponsors"
            label="Sponsor us"
            className="w-full mt-3 font-medium opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out" />
        </div>
      </div>
    </div>
  );
}
