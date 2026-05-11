"use client";

import React from "react";
import { AnimatedBars } from "@workspace/ui/registry/radix-nova/animated-bars/animated-bars";

export default function AnimatedBarsVariant01Preview() {
  return (
    <div className="w-full">
      <AnimatedBars 
        numBars={40} 
        gradientFrom="rgb(59, 130, 246)" 
        backgroundColor="rgb(2, 6, 23)"
        animationDuration={2}
        className="h-[300px]"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-400 tracking-tighter sm:text-5xl">
            Digital Rhythm
          </h2>
          <p className="text-blue-300/40 mt-2">High-density bars with faster pulse</p>
        </div>
      </AnimatedBars>
    </div>
  );
}
