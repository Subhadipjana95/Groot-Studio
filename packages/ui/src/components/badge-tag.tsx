"use client";

import React, { useMemo } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface BadgeTagProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: React.ReactNode;
  text: string;
  icon?: React.ReactNode;
  gradientColors?: string;
}

const keyframesStyle = `
@keyframes badge-gradient-border {
  0%, 100% { border-radius: 37% 29% 27% 27% / 28% 25% 41% 37%; }
  25% { border-radius: 47% 29% 39% 49% / 61% 19% 66% 26%; }
  50% { border-radius: 57% 23% 47% 72% / 63% 17% 66% 33%; }
  75% { border-radius: 28% 49% 29% 100% / 93% 20% 64% 25%; }
}
@keyframes badge-gradient-1 {
  0%, 100% { top: 0; right: 0; }
  50% { top: 50%; right: 25%; }
  75% { top: 25%; right: 50%; }
}
@keyframes badge-gradient-2 {
  0%, 100% { top: 0; left: 0; }
  60% { top: 75%; left: 25%; }
  85% { top: 50%; left: 50%; }
}
@keyframes badge-gradient-3 {
  0%, 100% { bottom: 0; left: 0; }
  40% { bottom: 50%; left: 25%; }
  65% { bottom: 25%; left: 50%; }
}
@keyframes badge-gradient-4 {
  0%, 100% { bottom: 0; right: 0; }
  50% { bottom: 25%; right: 40%; }
  90% { bottom: 50%; right: 25%; }
}
`;

const ORB_BASE =
  "pointer-events-none absolute h-[200%] w-[200%] mix-blend-normal blur-md";

export function BadgeTag({ 
  version = "Version 1.0", 
  text, 
  icon, 
  className,
  gradientColors = "#e01e4e,  #ed909b",
  ...props 
}: BadgeTagProps) {
    const colorArray = useMemo(
      () => gradientColors.split(",").map((c) => c.trim()),
      [gradientColors]
    );

    return (
        <div 
            className={cn(
                "inline-flex items-center gap-2.5 rounded-full bg-background border border-border p-1 text-sm text-foreground transition-colors hover:bg-muted/50 cursor-pointer", 
                className
            )} 
            {...props}
        >
            <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
            <div className="relative overflow-hidden bg-background border border-border shadow-sm shadow-accent rounded-full px-2 py-1 flex items-center justify-center">
                <span className="relative z-10 text-xs font-semibold tracking-wide text-background drop-shadow-sm">{version}</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-100"
                >
                  <span
                    className={cn(ORB_BASE, "-top-1/2 animate-[badge-gradient-border_6s_ease-in-out_infinite,badge-gradient-1_12s_ease-in-out_infinite_alternate]")}
                    style={{ backgroundColor: colorArray[0] }}
                  />
                  <span
                    className={cn(ORB_BASE, "right-0 top-0 animate-[badge-gradient-border_6s_ease-in-out_infinite,badge-gradient-2_12s_ease-in-out_infinite_alternate]")}
                    style={{ backgroundColor: colorArray[1] }}
                  />
                  <span
                    className={cn(ORB_BASE, "bottom-0 left-0 animate-[badge-gradient-border_6s_ease-in-out_infinite,badge-gradient-3_12s_ease-in-out_infinite_alternate]")}
                    style={{ backgroundColor: colorArray[2] }}
                  />
                  <span
                    className={cn(ORB_BASE, "-bottom-1/2 right-0 animate-[badge-gradient-border_6s_ease-in-out_infinite,badge-gradient-4_12s_ease-in-out_infinite_alternate]")}
                    style={{ backgroundColor: colorArray[3] || colorArray[0] }}
                  />
                </span>
            </div>
            <p className="pr-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {text}
            </p>
            {icon && <div className="pr-2 text-muted-foreground">{icon}</div>}
        </div>
    );
}
