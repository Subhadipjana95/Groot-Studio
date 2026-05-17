"use client";

import React, { useState } from "react";
import { ThemeToggler } from "@workspace/ui/registry/radix-nova/theme-toggler/theme-toggler";

export default function ThemeTogglerPreview() {
  const [direction, setDirection] = useState<"vertical" | "horizontal">(
    "vertical"
  );

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      {/* Direction Selector */}
      <div className="flex gap-1 bg-muted p-1 rounded-lg">
        {(["vertical", "horizontal"] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDirection(d)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${
              direction === d
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Toggle Button */}
      <ThemeToggler direction={direction} duration={550} />
    </div>
  );
}
