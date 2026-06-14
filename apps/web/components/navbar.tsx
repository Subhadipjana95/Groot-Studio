"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { SearchIcon, Menu, X } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { GitHubStars } from "@workspace/ui/components/socialStats/github-stars"
import { NavSearchDialog } from "@/components/search-dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from "@workspace/ui/components/drawer"
import { DATA } from "@/data/Root.data"
import { navbarData } from "@/data/Navbar.data"
import BrandButton from "@workspace/ui/components/buttonVarients/BrandButton"
import { Logo as LogoIcon } from "@/components/ui/icons/logo"

const menuLinks = [
  { label: "Documentation", href: navbarData.resources.find((r) => r.name === "Docs")?.href || "/components/installation" },
  { label: "Components", href: navbarData.product.find((p) => p.name === "Components")?.href || "/components" },
  { label: "Templates", href: navbarData.product.find((p) => p.name === "Templates")?.href || "/templates" },
  { label: "Sponsors", href: navbarData.resources.find((r) => r.name === "Sponsors")?.href || "/sponsors" },
  { label: "Changelog", href: navbarData.resources.find((r) => r.name === "Changelog")?.href || "/changelog" },
  { label: "Blog", href: navbarData.resources.find((r) => r.name === "Blog")?.href || "https://www.a063.xyz/blog" },
  { label: "Pricing", href: navbarData.product.find((p) => p.name === "Pricing")?.href || "/pricing" }
]

const sectionLinks = [
  { label: "About Us", href: navbarData.company.find((c) => c.name === "About Us")?.href || "/about" },
  { label: "Cookie Policy", href: navbarData.company.find((c) => c.name === "Cookie Policy")?.href || "/cookie-policy" },
  { label: "Privacy Policy", href: navbarData.company.find((c) => c.name === "Privacy Policy")?.href || "/privacy" },
  { label: "Terms of Service", href: navbarData.company.find((c) => c.name === "Service Terms")?.href || "/terms" },
  { label: "GitHub", href: navbarData.socials.find((s) => s.name === "GitHub")?.href || "https://github.com/Subhadipjana95/Groot-Studio" },
  { label: "Twitter", href: navbarData.socials.find((s) => s.name === "Twitter")?.href || "https://x.com/Subhadip53874" },
  { label: "Discord", href: DATA.DISCORD_INVITE_LINK || "https://discord.gg/5nJmZYA5f2" },
]

export function Navbar() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)

  React.useEffect(() => { setMounted(true) }, [])

  const toggleTheme = React.useCallback(() => {
    if (!mounted) return
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [mounted, resolvedTheme, setTheme])

  const Logo = (
    <Link href="/" aria-label="Groot Studio home" className="flex items-center group h-full">
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="brand-gradient2-svg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-color-2)" />
            <stop offset="100%" stopColor="var(--brand-color-3)" />
          </linearGradient>
        </defs>
      </svg>
      <LogoIcon className="w-7 h-7 [&_path]:fill-[url(#brand-gradient2-svg)] [&_path]:stroke-[url(#brand-gradient2-svg)]" />
      <span className="text-lg text-muted-foreground tracking-tight group-hover:text-primary">Studio.</span>
    </Link>
  )

  const ModeToggler = (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="h-9 w-9 cursor-pointer bg-transparent text-muted-foreground hover:bg-transparent group-hover:text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5"
        aria-hidden
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3l0 18" />
        <path d="M12 9l4.65 -4.65" />
        <path d="M12 14.3l7.37 -7.37" />
        <path d="M12 19.6l8.85 -8.85" />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b bg-background selection:bg-brand1/15 selection:text-brand1/75">
        {/* Desktop Version */}
        <div className={cn("hidden mx-auto sm:flex h-16 items-center justify-between",
          pathname.includes("/components") ? "max-w-full lg:max-w-216 border-x px-2" : "border-x max-w-96 lg:max-w-6xl px-2"
        )}>
          <div className="flex items-center h-full gap-4">
            {Logo}

            {/* Nav Links - Desktop */}
            <ul className="hidden list-none h-full md:grid grid-cols-3 divide-x divide-border border-x">
              {navbarData.NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href || ((href as string) !== "/" && pathname.startsWith(href))
                return (
                  <li key={href} className="h-full flex items-center justify-center">
                    <Link
                      href={href}
                      className={cn(
                        "h-full w-full text-[15px] transition-colors flex items-center justify-center gap-1 px-2 ",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-primary/10 hover:text-primary text-muted-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={cn("grid grid-cols-5  h-full divide-x divide-border border-l",
            pathname.includes("/components") ? "w-[33%]" : "w-[25%]"
          )}>
            {/* Search Button - Desktop */}
            <div className="col-span-1 h-full flex items-center justify-center hover:bg-primary/10 cursor-pointer group"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon className="size-4 text-muted-foreground group-hover:text-primary" aria-hidden />
            </div>

            {/* Mode Toggler - Desktop */}
            <div className="col-span-1 h-full flex items-center justify-center hover:bg-primary/10 cursor-pointer group">
              {ModeToggler}
            </div>

            <GitHubStars repo={DATA.GITHUB_REPO_LINK} className="col-span-1 border-none h-full rounded-none hover:bg-primary/10 hover:text-primary text-muted-foreground" />

            {/* Donate Button */}
            <div className="col-span-2 h-full flex items-center justify-center border-l">
              <BrandButton
                href={DATA.donateURL!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Support Groot Studio"
                label="Donate"
                className="font-medium ml-1.5"
              />
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden flex h-14 items-center justify-between border-b-[0.5px] border-border bg-background w-full">
          {/* Left: Logo only */}
          <div className="h-full flex items-center px-4 border-r">
            <Link href="/" aria-label="Groot Studio home" className="flex items-center group h-full">
              <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
                <defs>
                  <linearGradient id="brand-gradient2-svg-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-color-2)" />
                    <stop offset="100%" stopColor="var(--brand-color-3)" />
                  </linearGradient>
                </defs>
              </svg>
              <LogoIcon className="w-7 h-7 [&_path]:fill-[url(#brand-gradient2-svg-mobile)] [&_path]:stroke-[url(#brand-gradient2-svg-mobile)]" />
            </Link>
          </div>

          {/* Drawer and controls on the right */}
          <Drawer direction="right">
            <div className="flex items-center h-full divide-x divide-border border-l">
              <div className="h-full flex items-center px-3">
                <GitHubStars repo={DATA.GITHUB_REPO_LINK} className="bg-transparent border-none hover:bg-transparent px-1 h-9" />
              </div>
              <div className="h-full flex items-center px-2">
                {ModeToggler}
              </div>
              <div className="h-full flex items-center px-3">
                <DrawerTrigger asChild>
                  <BrandButton
                    label={
                      <span className="flex items-center gap-1.5 font-medium">
                        <Menu className="size-4" />
                        Menu
                      </span>
                    }
                    className="cursor-pointer"
                  />
                </DrawerTrigger>
              </div>
            </div>

            <DrawerContent
              className="h-full w-full max-w-none border-none rounded-none bg-background/90 backdrop-blur-lg data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:max-w-none"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                Groot Studio mobile navigation menu, including documentation, templates, and social links.
              </DrawerDescription>
              <div className="flex flex-col h-full">
                {/* Header inside Drawer */}
                <div className="flex h-14 items-center justify-between border-b w-full shrink-0">
                  <div className="h-full flex items-center px-4 border-r">
                    <Link href="/" aria-label="Groot Studio home" className="flex items-center group h-full">
                      <LogoIcon className="w-5.5 h-5.5 [&_path]:fill-[url(#brand-gradient2-svg-mobile)] [&_path]:stroke-[url(#brand-gradient2-svg-mobile)]" />
                      <span className="text-[15px] font-normal text-muted-foreground tracking-tight group-hover:text-primary ml-1">Studio.</span>
                    </Link>
                  </div>
                  <div className="flex items-center h-full divide-x divide-border border-l">
                    <div className="h-full flex items-center px-3">
                      <GitHubStars repo={DATA.GITHUB_REPO_LINK} className="bg-transparent border-none hover:bg-transparent px-1 h-9" />
                    </div>
                    <div className="h-full flex items-center px-2">
                      {ModeToggler}
                    </div>
                    <div className="h-full flex items-center px-3">
                      <DrawerClose asChild>
                        <BrandButton
                          label={
                            <span className="flex items-center gap-1.5 font-medium">
                              <X className="size-4" />
                              Close
                            </span>
                          }
                          className="cursor-pointer"
                        />
                      </DrawerClose>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div
                  className="flex-1 overflow-y-auto px-6 py-8 scrollbar-hide space-y-8"
                  data-vaul-no-drag
                  data-lenis-prevent
                >
                  {/* Menu Links */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium tracking-wide text-muted-foreground/60">Menu</h4>
                    <div className="flex flex-col space-y-4">
                      {menuLinks.map(({ href, label }) => {
                        const isActive = pathname === href || ((href as string) !== "/" && pathname.startsWith(href))
                        const isExternal = href.startsWith("http");
                        return (
                          <DrawerClose key={href} asChild>
                            <Link
                              href={href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className={cn(
                                "text-3xl font-medium tracking-tight transition-colors w-fit hover:text-primary",
                                isActive ? "text-primary" : "text-foreground"
                              )}
                            >
                              {label}
                            </Link>
                          </DrawerClose>
                        )
                      })}
                    </div>
                  </div>

                  {/* Sections Links */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium tracking-wide text-muted-foreground/60">Sections</h4>
                    <div className="flex flex-col space-y-4">
                      {sectionLinks.map(({ href, label }) => {
                        const isActive = pathname === href || ((href as string) !== "/" && pathname.startsWith(href))
                        const isExternal = href.startsWith("http");
                        return (
                          <DrawerClose key={href} asChild>
                            <Link
                              href={href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className={cn(
                                "text-3xl font-medium tracking-tight transition-colors w-fit hover:text-primary",
                                isActive ? "text-primary" : "text-foreground"
                              )}
                            >
                              {label}
                            </Link>
                          </DrawerClose>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Donate Button at the Bottom */}
                <div className="p-6 border-t mt-auto shrink-0 bg-background/50 backdrop-blur-xs flex justify-center">
                  <DrawerClose asChild>
                    <BrandButton
                      href={DATA.donateURL!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Support Groot Studio"
                      label="Donate"
                      className="w-full font-medium"
                      innerClassName="text-lg"
                    />
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>

      <NavSearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
