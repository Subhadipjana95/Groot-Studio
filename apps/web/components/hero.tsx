"use client"

import BrandButton from "@workspace/ui/components/buttonVarients/BrandButton"
import { BadgeTag } from "@workspace/ui/components/badge-tag"
import Link from "next/link"
import { Logo } from "@workspace/ui/components/icons/logo"
import NeutralButton from "@/components/ui/buttonVarients/NeutralButton"
import HeroGlow from "@workspace/ui/components/otherBlocks/HeroGlow"


export function Hero() {

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-8 overflow-hidden pt-32 py-18 isolate">
      <HeroGlow />

      <Link href="/components">
        <BadgeTag
          version={"v1.0.2"}
          text="For Fast Moving Developers"
        />
      </Link>

      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="text-center text-4xl md:text-6xl max-w-xl font-[gambarino]">
          <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)]">Beautifully</span> Crafted Blocks for <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)]">Modern</span> UI
        </h1>
        <p className="text-center max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug">
          Groot Studio - a Library of High-Performing, SEO Friendly Components designed for Modern Developers.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <NeutralButton
          asChild
          label="Templates"
          className="font-medium"
          innerClassName="py-[9px]"
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
          className="font-medium"
        >
          <Link href="/components" />
        </BrandButton>
      </div>
      {/* <TechStacks items={DATA.TECH_STACK} /> */}
    </section>
  )
}
