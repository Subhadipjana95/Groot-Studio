"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.3, duration: 0.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export function InnerLenisScroll({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <ReactLenis 
      options={{ lerp: 0.5, duration: 0.5, smoothWheel: true }} 
      className={className} 
      {...props}
    >
      {children}
    </ReactLenis>
  );
}
