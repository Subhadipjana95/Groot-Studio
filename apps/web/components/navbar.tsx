"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { SearchIcon, Menu } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { GradientButton } from "@workspace/ui/components/buttonVarients/gradient-button"
import { GitHubStars } from "@workspace/ui/components/socialStats/github-stars"
import { DiscordOnline } from "@workspace/ui/components/socialStats/discord-online"
import { NavSearchDialog } from "@/components/search-dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@workspace/ui/components/drawer"
import { DATA } from "@/data/Data"
import { registry } from "@/lib/registry"
import { templatesCount } from "@/lib/template-registry/meta"
import BrandButton from "@workspace/ui/components/buttonVarients/BrandButton"
import { Logo as LogoIcon } from "@/components/ui/icons/logo"

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
        <div className={cn("hidden mx-auto sm:flex h-16 items-center justify-between",
          pathname.includes("/components") ? "max-w-full lg:max-w-332 border-x pl-6" : "border-x max-w-96 lg:max-w-6xl px-2"
        )}>
          <div className="flex items-center h-full gap-4">
            {Logo}

            {/* Nav Links - Desktop */}
            <ul className="hidden list-none h-full md:grid grid-cols-3 divide-x divide-border border-x">
              {DATA.NAV_LINKS.map(({ href, label }) => {
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

          <div className="grid grid-cols-5 w-[25%] h-full divide-x divide-border border-l">
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

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 bg-secondary dark:bg-muted/80 cursor-pointer">
                <Menu className="size-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent
              className="h-full w-[280px] sm:w-[350px]"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <div className="flex flex-col h-full bg-background">
                <DrawerHeader className="w-full px-6 py-4 mb-4 text-left border-b">
                  <DrawerTitle>
                    {Logo}
                  </DrawerTitle>
                </DrawerHeader>

                <nav className="flex flex-col border rounded-lg mt-4 mx-6 overflow-hidden">
                  {DATA.NAV_LINKS.map(({ href, label }) => {
                    const isActive = pathname === href || ((href as string) !== "/" && pathname.startsWith(href))
                    return (
                      <DrawerClose key={href} asChild>
                        <Link
                          href={href}
                          className={cn(
                            "flex items-center justify-between px-3 py-4 text-xl font-medium border-b last:border-none transition-colors",
                            isActive
                              ? "bg-muted text-primary"
                              : "hover:bg-muted active:bg-muted/80 text-foreground"
                          )}
                        >
                          {label}
                        </Link>
                      </DrawerClose>
                    )
                  })}
                </nav>

                <div className="mt-auto space-y-2 mx-6 pt-8 pb-10">
                  <div className="w-full flex justify-end gap-2">
                    <GitHubStars repo={DATA.GITHUB_REPO_LINK} className="px-2 h-9" />
                    <DiscordOnline guildId={DATA.DISCORD_SERVER_ID} inviteURL={DATA.DISCORD_INVITE_LINK} className="px-2 h-9" />
                  </div>

                  {/* Auth & Pricing Button - hidden until auth implemented */}
                  <div className="hidden gap-3 flex-col">
                    <DrawerClose asChild>
                      <Link href="/auth" className="w-full">
                        <Button variant="secondary" className="w-full h-11 text-base">Login</Button>
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link href="/pricing" className="w-full">
                        <Button className="w-full h-11 text-base">Get All Access</Button>
                      </Link>
                    </DrawerClose>
                  </div>

                  {/* Donate Button */}
                  <DrawerClose asChild>
                    <Link href={DATA.donateURL!}>
                      <GradientButton
                        href={DATA.donateURL!}
                        openInNewTab={true}
                        aria-label="Support Groot Studio"
                      >
                        Donate
                      </GradientButton>
                    </Link>
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
