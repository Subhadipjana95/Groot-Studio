"use client"

import React, { useEffect } from "react"
import { ArrowUpRight, XIcon } from "lucide-react"
import { DATA } from "@/data/Root.data"
import { SPONSOR_TIERS } from "@/data/Sponsors.data"
import { GitHubIcon } from "@workspace/ui/components/icons/icon"
import Link from "next/link"
import { Logo } from "@/components/ui/icons/logo"

interface SponsorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SponsorDialog({ open, onOpenChange }: SponsorDialogProps) {
  const githubSponsorUrl = `https://github.com/sponsors/${DATA.GITHUB_USER_NAME}`

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" data-lenis-prevent>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/10 backdrop-blur-xs transition-opacity duration-300 aria-hidden:{!hidden}"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="sponsor-dialog-title"
        className="relative z-50 w-full sm:max-w-3xl border border-accent bg-background rounded-2xl shadow-2xl ring-3 ring-border/80 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <XIcon className="size-4" />
        </button>

        <div className="flex flex-col p-2">
          <div className="text-center max-w-lg mx-auto mt-2 mb-4">
            <h2 id="sponsor-dialog-title" className="text-2xl sm:text-3xl font-medium text-brand1">
              Sponsor Groot Studio
            </h2>
            <p className="sr-only">
              Sponsorship options to support Groot Studio's open-source work.
            </p>
          </div>

          {/* Three Option Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

            {/* Card 1: GitHub Sponsors */}
            <div className="col-span-1 flex flex-col justify-between h-full bg-card/80 border border-border/60 hover:border-border rounded-xl p-3 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center justify-center size-10 rounded-full bg-foreground/20 text-foreground transition-transform duration-300">
                    <GitHubIcon className="size-6" />
                  </div>
                  <h3 className="text-[1.2rem] font-medium text-foreground">GitHub Sponsors</h3>
                </div>
                <p className="text-xs text-muted-foreground leading- mb-6">
                  Support our ongoing open-source work directly through GitHub Sponsors.
                </p>
              </div>
              <Link
                href={githubSponsorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto flex items-center justify-center bg-secondary border rounded-lg py-2 cursor-pointer">
                <span className="flex items-center gap-1.5 font-medium">
                  Sponsor on GitHub
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </div>

            {/* Card 2: Tiered Sponsorship */}
            <div className="order-first md:order-0 group relative overflow-hidden isolate col-span-2 flex flex-col justify-between h-full bg-muted/30 dark:bg-muted/10 border border-border/60 hover:border-brand1/30 rounded-xl p-3 hover:shadow-lg transition-all duration-300">
              {/* Corner Glow Splashes */}
              <div className="absolute right-0 -top-12 w-36 h-36 rounded-full bg-brand1/20 dark:bg-brand1/30 blur-2xl pointer-events-none -z-10 group-hover:scale-110 group-hover:opacity-90 transition-all duration-500 transform-gpu" />

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex items-center justify-center size-10 rounded-full bg-brand1/10 text-brand1/70 border border-brand1/40 transition-transform duration-300">
                    <Logo className="size-6" />
                  </div>
                  <h3 className="text-[1.2rem] font-medium text-foreground">Sponsorship Tiers</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Official tiers featuring name/logo placement, private Discord support, and premium previews.
                </p>

                {/* Grid of Small Tiers Cards */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {SPONSOR_TIERS.map((tier) => {
                    const TierIcon = tier.icon
                    return (
                      <a
                        key={tier.id}
                        href={tier.sponsorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/tier flex items-center justify-between p-4 rounded-lg border border-border/80 bg-background/50 hover:bg-background hover:border-brand-color-2/30 dark:hover:border-brand-color-3/30 transition-all duration-200"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <TierIcon className="size-4 shrink-0" />
                          <span className="text-xs font-medium text-foreground truncate">{tier.name}</span>
                          <ArrowUpRight className="size-3 text-muted-foreground opacity-60 group-hover/tier:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-muted border border-border/60 text-muted-foreground">
                          ${tier.minAmount}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

