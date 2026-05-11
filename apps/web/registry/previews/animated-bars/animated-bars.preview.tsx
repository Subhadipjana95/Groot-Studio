"use client";

import React from "react";
import { AnimatedBars } from "@workspace/ui/registry/radix-nova/animated-bars/animated-bars";

export default function AnimatedBarsPreview() {
  return (
    <div className="w-full">
      <AnimatedBars numBars={20} className="h-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tighter sm:text-5xl">
            Pulsating Energy
          </h2>
          <p className="text-muted-foreground mt-2">Dynamic background with fluid bar animations</p>
        </div>
      </AnimatedBars>
    </div>
  );
}
