"use client";

import React from "react";
import { AnimatedLayout, type CollectionItem } from "@workspace/ui/registry/radix-nova/animated-layout/animated-layout";
import { CodeXml, Brush } from "lucide-react";

const ITEMS: CollectionItem[] = [
  {
    id: "1",
    title: "Shadcn UI",
    subtitle: "Components Library",
    badge: "345",
    image:
      "https://github.com/Subhadipjana95.png",
    icon: CodeXml,
  },
  {
    id: "2",
    title: "Figma",
    subtitle: "Design Tool",
    badge: "105",
    image:
      "https://github.com/Subhadipjana95.png",
    icon: Brush,
  },
  {
    id: "3",
    title: "Notion",
    subtitle: "Productivity",
    badge: "280",
    image:
      "https://github.com/Subhadipjana95.png",
    icon: Brush,
  },
  {
    id: "4",
    title: "Linear",
    subtitle: "Project Tracker",
    badge: "190",
    image:
      "https://github.com/Subhadipjana95.png",
    icon: CodeXml,
  },
];

export default function AnimatedLayoutPreview() {
  return (
    <div className="w-full flex items-center justify-center">
      <AnimatedLayout items={ITEMS} heading="My Tasks" defaultView="list" />
    </div>
  );
}
