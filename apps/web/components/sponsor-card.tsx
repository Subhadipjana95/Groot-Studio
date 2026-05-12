"use client"

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@workspace/ui/components/buttonVarients/gradient-button";

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
    <div className="group relative h-80 max-h-96 overflow-hidden rounded-xl bg-background shadow-lg transition-all border border-border/50">
      {/* Wavy Breathing Glow */}
      <div className="absolute z-0 h-48 w-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient blur-[60px] animate-wavy-breathe pointer-events-none" />

      {/* Inner Content */}
      <div className="relative z-10 flex h-full flex-col p-5">
        {/* Counter Section */}
        <div className="mb-auto flex justify-between w-full">
        <div>
          <div className="text-3xl font-semibold tracking-tight text-foreground/90 tabular-nums">
            {display}
          </div>
          <div className="text-xs font-medium tracking-widest text-muted-foreground/60">
            Views
          </div>
        </div>
        <div className="w-fit h-fit rounded-sm bg-brand-gradient opacity-70 px-1.5 py-0.5 text-xs font-medium text-background mt-1">
            Sponsors
          </div>
          </div>

        {/* Sponsor Content */}
        <div className="mt-auto">
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Become a Sponsor
          </h3>
          <p className="mb-5 text-xs leading-relaxed text-muted-foreground/80">
            Support the development of Groot Studio and get your <span className="text-transparent bg-clip-text bg-brand-gradient">Logo & Name</span> featured here.
          </p>
          <GradientButton href="/sponsors" openInNewTab={true} className="mt-3 opacity-60 hover:opacity-80 transition-all duration-200 ease-in-out">
            Sponsor us<ArrowRight className="ml-1 h-4 w-4" />
          </GradientButton>
        </div>
      </div>

      <style>{`
        @keyframes wavy-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.15; }
          33% { transform: translate(-45%, -55%) scale(1.3); opacity: 0.3; }
          66% { transform: translate(-55%, -45%) scale(1.1); opacity: 0.25; }
        }
        .animate-wavy-breathe {
          animation: wavy-breathe 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
