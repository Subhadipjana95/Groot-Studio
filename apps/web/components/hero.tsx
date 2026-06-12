"use client"

import BrandButton from "@workspace/ui/components/buttonVarients/BrandButton"
import { BadgeTag } from "@workspace/ui/components/badge-tag"
import Link from "next/link"
import { Logo } from "@workspace/ui/components/icons/logo"
import NeutralButton from "@/components/ui/buttonVarients/NeutralButton"
import HeroGlow from "@workspace/ui/components/otherBlocks/HeroGlow"


export function Hero() {

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8 overflow-hidden pt-24 sm:pt-32 py-12 sm:py-18 isolate">
      <HeroGlow />

      <Link href="/components">
        <BadgeTag
          version={"v1.0.2"}
          text="For Fast Moving Developers"
        />
      </Link>

      <div className="text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="text-center text-4xl md:text-6xl max-w-xl font-[gambarino]">
          <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)]">Beautifully</span> Crafted Blocks for <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)]">Modern</span> UI
        </h1>
        <p className="text-center max-w-xs sm:max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug">
          Groot Studio - <span className="hidden sm:inline-block">a</span> Library of High-Performing, SEO <span className="inline-block sm:hidden">Friendly </span><span className="hidden sm:inline-block">Optimised</span>  Components Designed for Modern <span className="hidden sm:inline-block">Developers</span> <span className="inline-block sm:hidden">Devs</span>
        </p>
      </div>

      <div className="flex  items-center justify-center gap-3 flex-row">
        <NeutralButton
          asChild
          label="Templates"
          className="font-medium select-none cursor-pointer"
          innerClassName="py-[11px] sm:py-[9px]"
        >
          <Link href="/templates" />
        </NeutralButton>
        <BrandButton
          asChild
          label={
            <>
              <Logo className="text-background -ml-1" />
              <span>Components</span>
            </>
          }
          className="font-medium select-none cursor-pointer"
        >
          <Link href="/components" />
        </BrandButton>
      </div>
    </section>
  )
}
