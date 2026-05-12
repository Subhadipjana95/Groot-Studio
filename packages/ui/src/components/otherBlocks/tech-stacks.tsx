"use client";

import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "motion/react";

export type TechItem = {
  readonly id: number;
  readonly name: string;
  readonly designation?: string;
  readonly icon: React.ElementType;
};

const TechTooltipItem = ({ item }: { item: TechItem }) => {
  const x = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), {
    stiffness: 100,
    damping: 15,
  });

  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), {
    stiffness: 100,
    damping: 15,
  });

  return (
    <div
      className="group relative -mr-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.6 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 20, scale: 0.6 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 10 }}
        style={{ translateX, rotate }}
        className="absolute bottom-14 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-md border bg-popover/50 backdrop-blur-sm px-2 py-1 text-xs text-popover-foreground shadow-xl"
      >
        <p className="whitespace-nowrap text-sm font-medium">
          {item.name}
        </p>
        <p className="whitespace-nowrap text-xs text-muted-foreground">
          {item.designation}
        </p>
      </motion.div>

      <div
        onMouseMove={(e) =>
          x.set(e.nativeEvent.offsetX - e.currentTarget.offsetWidth / 2)
        }
        className="relative flex h-12 w-12 cursor-default items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm shadow-sm transition duration-500 group-hover:z-30 group-hover:scale-105"
      >
        <Icon className="size-6" />
      </div>
    </div>
  );
};

export function TechStacks({ items }: { items: readonly TechItem[] }) {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <p className="text-sm underline text-muted-foreground font-medium">
        Built With
      </p>
      <div className="flex items-center justify-center -space-x-2">
        {items.map((item) => (
          <TechTooltipItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
