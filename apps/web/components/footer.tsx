"use client"

import React from "react"
import Link from "next/link"
import { footerHeader, footerColumns, footerBottom } from "@/data/Footer.data"
import BrandButton from "@workspace/ui/components/buttonVarients/BrandButton"
import { Logo } from "@workspace/ui/components/icons/logo"
import SectionDivider from "./utilities/SectionDivider"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.017 3.017 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export function Footer() {
  const pathname = usePathname()
  return (
    <footer className={cn("relative overflow-hidden w-full selection:bg-brand1/15 selection:text-brand1/75"
    )}>

      <div className={cn("mx-auto relative max-w-96 border-x border-border",
        pathname.includes("/components") ? "sm:max-w-216" : "sm:max-w-6xl"
      )}>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 py-4 px-6">
          <div className="flex flex-col text-left">
            <h3 className="text-md font-medium text-foreground">{footerHeader.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{footerHeader.description}</p>
          </div>
          <BrandButton
            asChild
            label={footerHeader.ctaButton.label}
            className="shrink-0"
          >
            <Link href={footerHeader.ctaButton.href} />
          </BrandButton>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-y divide-y sm:divide-y-0 md:divide-x divide-border">
          {footerColumns.map((col, index) => (
            <div key={index} className="p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 text-left">
              <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2.5">
                {col.links.map((link, idx) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={idx}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-brand-color-3 dark:hover:text-brand-color-1/70 transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-xs sm:text-sm text-muted-foreground hover:text-brand-color-3 dark:hover:text-brand-color-1/70 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4 px-6">

          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center p-0.5 rounded-sm bg-brand-color-2 dark:bg-brand-color-1 text-background shrink-0">
              <Logo className="h-4.5 w-4.5" />
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {footerBottom.copyright}
            </span>
          </div>

          <div className="hidden md:flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-8">
            <div className="flex gap-4">
              {footerBottom.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="https://x.com/Subhadip53874" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-color-3 dark:hover:text-brand-color-1/70 transition-colors">
                <XIcon />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-color-3 dark:hover:text-brand-color-1/70 transition-colors">
                <YoutubeIcon />
              </a>
              <a href="https://www.linkedin.com/in/subhadipjana095" className="text-muted-foreground hover:text-brand-color-3 dark:hover:text-brand-color-1/70 transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

        </div>
      </div>

      <SectionDivider innerClassName={pathname.includes("/components") ? "md:max-w-216" : ""} />
      {/* --- Lower Portion - Desktop Specific --- */}
      <div className="hidden sm:block relative pb-22 md:pb-44 mx-auto">
        {/* Massive dipped text */}
        <div className="absolute -bottom-5 md:-bottom-16 left-0 right-0 pointer-events-none select-none overflow-hidden mask-[linear-gradient(to_top,transparent_0%,black_60%)]">
          <h2 className="text-[20vw] md:text-[11rem] xl:text-[13rem] font-sans font-bold uppercase text-center tracking-tighter leading-none text-foreground/10 dark:text-foreground/20 whitespace-nowrap translate-x-[-0.75%] md:translate-y-[5.25%] xl:translate-y-[7.4%]">
            Groot Studio
          </h2>
        </div>
      </div>
    </footer>
  )
}