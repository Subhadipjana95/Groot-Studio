"use client"

import React from "react"
import Link from "next/link"
import { Mail, ChevronLeft } from "lucide-react"
import { DATA } from "@/lib/data/Data"

import { PageWrapper } from "@/components/utilities/page-wrapper"

interface FooterLink {
  name: string
  href: string
  tag?: string
}

interface SocialLink extends FooterLink {
  icon: React.ComponentType<{ className?: string }>
}

const FooterLinkItem = ({ link }: { link: FooterLink | SocialLink }) => (
  <Link href={link.href} className="group flex-row-reverse inline-flex md:flex-row items-center gap-2 hover:text-foreground transition-all duration-300">
    <ChevronLeft className="h-3 w-3 rotate-180 md:rotate-none opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    <div className="flex flex-row-reverse md:flex-row items-center gap-2">
      {link.tag && (
        <span className="rounded-full px-1.5 py-0.5 text-[9px] font-medium bg-brand-gradient text-background">
          {link.tag}
        </span>
      )}
      {'icon' in link && (
        <link.icon className="h-4 w-4 group-hover:text-foreground transition-colors opacity-60" />
      )}
      <span className="text-[15px]">{link.name}</span>
    </div>
  </Link>
)

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border/60 bg-background pt-8 md:pt-18">
      {/* --- Upper Portion --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 gap-y-6 md:gap-y-10 gap-x-6 md:grid-cols-4 lg:grid-cols-7 mb-6 md:mb-12">
        {/* Logo and Description */}
        <div className="col-span-2 md:col-span-4 lg:col-span-3 flex flex-col space-y-4 md:px-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-gradient p-1">
              <div className="flex h-full w-full items-center justify-center rounded-sm bg-background font-semibold text-foreground text-lg" style={{ fontFamily: 'var(--font-gambarino)' }}>
                G
              </div>
            </div>
            <span className="text-2xl font-medium tracking-tight">{DATA.title}</span>
          </div>
          <p className="max-w-md text-muted-foreground">
            {DATA.description}
          </p>
          <div className="hidden md:flex flex-col space-y-1 pt-2 text-sm">
            {/* <p className="text-muted-foreground group">A product by <span className="text-foreground font-medium underline underline-offset-4 decoration-border/50 group-hover:decoration-foreground">Groot Labs</span></p> */}
            <Link href="https://x.com/Subhadip53874" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Designed & Built by <span className="bg-brand-gradient bg-clip-text text-transparent font-medium">@Subhadip</span>
            </Link>
            <p>© {new Date().getFullYear()} Groot Studio Inc.</p>
          </div>
        </div>

        {/* Column 1 */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Product</h4>
          <ul className="flex flex-col items-start md:items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {(DATA.product as readonly FooterLink[]).map((link) => (
              <li key={link.name}>
                <FooterLinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Resources</h4>
          <ul className="flex flex-col items-start md:items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {(DATA.resources as readonly FooterLink[]).map((link) => (
              <li key={link.name}>
                <FooterLinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Company</h4>
          <ul className="flex flex-col items-start md:items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {(DATA.company as readonly FooterLink[]).map((link) => (
              <li key={link.name}>
                <FooterLinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <h4 className="font-semibold text-foreground tracking-tight">Socials</h4>
          <ul className="flex flex-col items-start md:items-end space-y-3 text-sm text-muted-foreground transition-colors">
            {(DATA.socials as readonly SocialLink[]).map((link) => (
              <li key={link.name}>
                <FooterLinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Footer CopyRight Section */}
        <div className="col-span-2 flex justify-between md:hidden text-sm">
          <div className="flex flex-col space-y-1">
            <p className="text-muted-foreground group">A product by <span className="text-foreground font-medium underline underline-offset-4 decoration-border/50 group-hover:decoration-foreground">Groot Labs</span></p>
            <Link href="https://x.com/Subhadip53874" target="_blank" rel="noopener noreferrer" className="text-right text-muted-foreground hover:text-foreground transition-colors">
              Designed & Built by <span className="bg-brand-gradient bg-clip-text text-transparent font-medium">@Subhadip</span>
            </Link>
            <p>© {new Date().getFullYear()} Groot Studio Inc.</p>
          </div>
        </div>
      </div>

      {/* Full-width divider line - Desktop Specific */}
      <div className="hidden md:block w-full border-t border-border/60" />


      {/* --- Lower Portion - Desktop Specific --- */}
      <PageWrapper className="hidden md:block">
        <div className="relative pb-22 md:pb-44">
          {/* Massive dipped text */}
          <div className="absolute -bottom-5 md:-bottom-16 left-0 right-0 pointer-events-none select-none overflow-hidden mask-[linear-gradient(to_top,transparent_0%,black_60%)]">
            <h2 className="text-[20vw] sm:text-[16vw] md:text-[14rem] xl:text-[16rem] font-bold uppercase text-center leading-none text-foreground/10 dark:text-foreground/20 tracking-tighter whitespace-nowrap md:translate-y-[12%] xl:translate-y-[15%]">
              Groot St.
            </h2>
          </div>
        </div>
      </PageWrapper>
    </footer>
  )
}