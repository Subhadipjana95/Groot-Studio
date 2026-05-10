'use client';

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CursorTrail } from "@workspace/ui/registry/radix-nova/cursor-trail/cursor-trail";

export default function CursorTrailPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-background text-foreground">
      <p className="z-10 text-xl font-base tracking-tight pointer-events-none">
        Wiggle your mouse around.
      </p>
      {mounted && createPortal(
        <CursorTrail className="fixed inset-0 z-50 pointer-events-none" />,
        document.body
      )}
    </div>
  );
}
