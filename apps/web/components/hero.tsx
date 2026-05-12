"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ButtonWithIcon } from "@workspace/ui/components/buttonVarients/button-witn-icon"
import { GradientText } from "@workspace/ui/components/textAnimations/gradient-text"
import { BadgeTag } from "@workspace/ui/components/badge-tag"
import Link from "next/link"
import { TechStacks } from "@workspace/ui/components/otherBlocks/tech-stacks"
import { AnimatedBars } from "@workspace/ui/registry/radix-nova/animated-bars/animated-bars"
import { DATA } from "@/lib/data/Data"

const DARK_COLORS  = "#f0c060, #e8788a, #d4d4c8, #c8545c, #e8b060"
const LIGHT_COLORS = "#e3981b, #f27494, #d64d6f, #e0923a"

export function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const gradientColors = mounted && resolvedTheme === "light" ? LIGHT_COLORS : DARK_COLORS

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center font-sans gap-4 overflow-x-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-30 border-b border-border/60">
      <AnimatedBars numBars={16} className="absolute inset-0 z-0 h-full w-full rounded-none border-none bg-transparent! min-h-0 pointer-events-none" />

      <Link href="/components">
        <BadgeTag
          version={
            <svg
              viewBox="0 0 512 512"
              className="size-3.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: "#FFCE3E" }}
                d="M223.593,494.331l10.747-187.034H110.666c-12.888,0-20.932-14.036-14.391-25.159L257.348,8.226 c8.839-15.029,32.062-8.026,31.059,9.421L277.661,204.68h123.674c12.888,0,20.932,14.036,14.391,25.159L254.652,503.752 C245.783,518.834,222.591,511.78,223.593,494.331z"
              />
              <g>
                <path
                  style={{ fill: "#FEE856" }}
                  d="M75.685,453.913c-6.52-6.52-6.52-17.091,0-23.611l29.256-29.256c6.519-6.52,17.09-6.52,23.611,0 c6.52,6.52,6.52,17.091,0,23.611l-29.256,29.256C92.776,460.432,82.205,460.433,75.685,453.913z"
                />
                <path
                  style={{ fill: "#FEE856" }}
                  d="M104.941,126.341L75.685,97.085c-6.52-6.52-6.52-17.09,0-23.611c6.519-6.52,17.09-6.52,23.611,0 l29.256,29.256c6.52,6.52,6.52,17.09,0,23.611C122.032,132.86,111.461,132.861,104.941,126.341z"
                />
              </g>
              <path
                style={{ fill: "#E87E04" }}
                d="M401.334,204.679H277.661l10.746-187.034c1.003-17.447-22.22-24.45-31.059-9.421L256,10.517v490.943 l159.726-271.622C422.266,218.715,414.222,204.679,401.334,204.679z"
              />
              <g>
                <path
                  style={{ fill: "#FFCE3E" }}
                  d="M412.705,453.913l-29.256-29.256c-6.52-6.52-6.52-17.09,0-23.611c6.519-6.52,17.09-6.52,23.611,0 l29.256,29.256c6.52,6.52,6.52,17.09,0,23.611C429.797,460.432,419.224,460.433,412.705,453.913z"
                />
                <path
                  style={{ fill: "#FFCE3E" }}
                  d="M383.449,126.341c-6.52-6.52-6.52-17.09,0-23.611l29.256-29.256c6.519-6.52,17.091-6.52,23.611,0 c6.52,6.52,6.52,17.09,0,23.611l-29.256,29.256C400.541,132.86,389.968,132.861,383.449,126.341z"
                />
              </g>
            </svg>
          }
          text="v1.0.2"
        />
      </Link>

      <h1 className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl max-w-3xl leading-tighter mt-3">
        <GradientText colors={gradientColors} className="text-4xl md:text-5xl lg:text-6xl">Beautifully Crafted</GradientText>{" "}Blocks for Modern UI
      </h1>
      <p className="text-center max-w-2xl tracking-tight text-muted-foreground text-lg sm:text-xl md:text-xl">
        Hand-crafted, High-Performing & SEO friendly components.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <Link href="/templates">
          <ButtonWithIcon
            text="View Templates"
            variant="default"
            iconPosition="left"
            className="h-13 text-base shadow-sm bg-background/80 text-foreground"
          />
        </Link>
        <Link href="/components">
          <ButtonWithIcon
            text="View Components"
            variant="default"
            iconPosition="right"
            className="h-13 text-base shadow-sm bg-background/80 text-foreground"
          />
        </Link>
      </div>
      <TechStacks items={DATA.TECH_STACK} />
    </section>
  )
}
