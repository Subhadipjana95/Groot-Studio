"use client"

import { ButtonWithIcon } from "@workspace/ui/components/buttonVarients/button-witn-icon"
import { GradientText } from "@workspace/ui/components/textAnimations/gradient-text"
import { GradientBackgroundText } from "@workspace/ui/components/textAnimations/gradient-background-text"
import { BadgeTag } from "@workspace/ui/components/badge-tag"
import Link from "next/link"
import { TechStacks } from "@workspace/ui/components/otherBlocks/tech-stacks"
import { HeroGlare } from "@workspace/ui/components/otherBlocks/hero-glare"
import { DATA } from "@/lib/data/Data"

export function Hero() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center font-sans gap-6 overflow-x-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-44 lg:pb-24 border-b border-border/60">
      <HeroGlare />

      <Link href="/components">
        <BadgeTag
          version="v1.0.1"
          text="Check out initial blocks "
        />
      </Link>

      <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl max-w-3xl">
        Build{" "}
        <GradientText colors="#cc0066, #1aff53, #004d99, #f5f56b, #a600e6" className="text-4xl lg:text-6xl">
          Stunning
        </GradientText>
        {" "}interfaces with{" "}
        <GradientBackgroundText
          colors="#ff6b6b, #ffd93d, #6bcb77, #4d96ff"
          className="text-4xl lg:text-5xl"
        >
          Groot Studio
        </GradientBackgroundText>{" "}Blocks
      </h1>

      <p className="text-center max-w-2xl tracking-tight text-muted-foreground text-lg sm:text-xl md:text-xl">
        Hand-crafted, high-performing, SEO friendly & accessible components designed for modern developers.
      </p>

      <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <Link href="/templates">
          <ButtonWithIcon
            text="View Templates"
            variant="outline"
            iconPosition="left"
            className="h-13 text-base shadow-sm"
          />
        </Link>
        <Link href="/components">
          <ButtonWithIcon
            text="View Components"
            variant="default"
            iconPosition="right"
            className="h-13 text-base shadow-sm"
          />
        </Link>
      </div>
      <TechStacks items={DATA.TECH_STACK} />
    </section>
  )
}
