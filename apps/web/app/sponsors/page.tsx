import Link from "next/link"
import { SPONSOR_TIERS, DEMO_SPONSORS } from "@/data/Sponsors.data"
import { DATA } from "@/data/Root.data"
import { ExternalLink, Plus, Heart } from "lucide-react"
import { GitHubIcon } from "@/components/ui/icons/icon"
import SectionDivider from "@/components/utilities/SectionDivider"

async function getSponsors() {
  try {
    const response = await fetch(`https://sponsors.trnck.dev/sponsors/${DATA.GITHUB_USER_NAME}`, {
      next: { revalidate: 3600 }
    })
    if (!response.ok) return []
    const data = await response.json()

    // The API returns { sponsors: [...] }
    const sponsorsList = data.sponsors || (Array.isArray(data) ? data : [])
    return sponsorsList
  } catch (error) {
    console.error("Error fetching sponsors:", error)
    return []
  }
}

export default async function SponsorsPage() {
  const githubSponsors = await getSponsors()

  return (
    <div className="overflow-x-clip w-full">
      <main className="max-w-96 sm:max-w-6xl mx-auto relative pt-20 py-12 md:pt-24 border-x">

        {/* Hero */}
        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4 max-w-88 sm:max-w-3xl mx-auto text-center">
          <h1 className="font-normal font-sans text-3xl tracking-tight sm:text-5xl text-foreground">
            <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Support</span> the future of{" "}
            <span className="text-brand1 font-[gambarino] font-medium">Groot <span className="hidden sm:inline-block">Studio</span></span>
          </h1>
          <p className="text-center max-w-sm sm:max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug mx-auto">
            Groot Studio is sustained by the community. Your sponsorship helps us build high-quality components for everyone.
          </p>
        </div>

        <div className="w-full space-y-12 px-6 md:px-12 pt-8">
          {/* Manual Tiers */}
          {SPONSOR_TIERS.map((tier) => (
            <div key={tier.id} className="space-y-8">
              <div className="flex items-center">
                <div className="flex items-center gap-3 bg-muted/30 border border-dashed border-border/40 rounded-md p-1.5 pr-3">
                  <div className="flex justify-center items-center p-1.5 border rounded-sm bg-muted/50 shadow-md">
                    <tier.icon className={cn("size-6", tier.color)} />
                  </div>
                  <h2 className="text-2xl font-medium tracking-tight text-shadow-lg">
                    {tier.name} Sponsors
                  </h2>
                </div>
                <div className="h-px flex-1 border-t border-dashed border-border/60 dark:border-border/40" />
                <div className="h-6 w-6 p-[2px] bg-muted/30 border border-dashed border-border/40 rounded-[3px]">
                  <div className="h-full w-full bg-muted/30 border border-dashed border-border/40 rounded-xs" />
                </div>
              </div>

              <div className={cn(
                "grid",
                tier.id === "diamond" ? "grid-cols-2 md:grid-cols-4 gap-3" :
                  tier.id === "gold" ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3" :
                    "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2"
              )}>
                {DEMO_SPONSORS[tier.id]?.map((sponsor: any) => (
                  <SponsorCard key={sponsor.handle} sponsor={sponsor} tier={tier} />
                ))}

                {/* Placeholder Template Cards */}
                {Array.from({ length: tier.id === "diamond" ? 1 : tier.id === "gold" ? 2 : tier.id === "silver" ? 3 : tier.id === "bronze" ? 4 : 0 }).map((_, i) => (
                  <PlaceholderCard key={i} tier={tier} />
                ))}
              </div>
            </div>
          ))}

          {/* GitHub Sponsors */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex items-center gap-3 bg-muted/30 border border-dashed border-border/40 rounded-md p-1.5 pr-3">
                <div className="flex justify-center items-center p-1.5 border rounded-sm bg-muted/50 shadow-md">
                  <GitHubIcon className="size-6 text-brand2" />
                </div>
                <h2 className="text-2xl font-medium tracking-tight text-shadow-lg">
                  GitHub Sponsors
                </h2>
              </div>
              <div className="h-px flex-1 border-t border-dashed border-border/60 dark:border-border/40" />
              <div className="h-6 w-6 p-[2px] bg-muted/30 border border-dashed border-border/40 rounded-[3px]">
                <div className="h-full w-full bg-muted/30 border border-dashed border-border/40 rounded-xs" />
              </div>
            </div>

            {githubSponsors.length > 0 ? (
              <div className={cn(
                "grid gap-2",
                "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
              )}>
                {githubSponsors.map((sponsor: any) => (
                  <SponsorCard
                    key={sponsor.handle}
                    sponsor={sponsor}
                    tier={{ id: "bronze" }}
                  />
                ))}
                <PlaceholderCard tier={{ id: "bronze", sponsorUrl: `https://github.com/sponsors/${DATA.GITHUB_USER_NAME}` }} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 px-6 rounded-xl border border-dashed border-border/50 bg-muted/20 text-center group hover:bg-muted/30 transition-all duration-300">
                <div className="p-3 rounded-full bg-muted/20 border border-dashed border-border/40 group-hover:scale-105 transition-transform">
                  <Heart className="size-6 text-brand2 animate-pulse" />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm font-medium text-foreground/80">No GitHub sponsors yet.</p>
                  <p className="text-xs text-muted-foreground max-w-[300px]">
                    Be the first to support our work and get your avatar featured here!
                  </p>
                </div>
                <Link
                  href={`https://github.com/sponsors/${DATA.GITHUB_USER_NAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-medium hover:opacity-90 transition-all"
                >
                  Sponsor on GitHub
                  <ExternalLink className="size-3" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-muted-foreground/50 mx-auto text-center max-w-xs sm:max-w-full">
          Groot Labs © {new Date().getFullYear()} · Open Source & privacy-first ·{" "}
          <Link
            href="/about"
            className="hover:text-brand1 transition-colors duration-200"
          >
            About Groot Studio →
          </Link>
        </p>
      </main>
      <SectionDivider />
    </div>
  )
}

function SponsorCard({ sponsor, tier }: { sponsor: any, tier: any }) {
  return (
    <Link
      href={`https://github.com/${sponsor.handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col items-center justify-center gap-4 rounded-lg border border-border/50 bg-muted/20 p-3 transition-all duration-300 dark:hover:border-brand2/40 hover:border-brand1/40 hover:bg-muted/40 hover:shadow-xl dark:hover:shadow-brand2/5 hover:shadow-brand1/5",
        tier.id === "diamond" ? "min-h-[200px] p-4" : tier.id === "gold" ? "min-h-[180px]" : "min-h-[160px]"
      )}
    >
      <ExternalLink className="absolute top-3 right-3 size-3 text-muted-foreground/0 transition-all group-hover:text-muted-foreground/40" />

      <div className={cn(
        "relative flex items-center justify-center rounded-full bg-background p-1 shadow-sm border border-border/40",
        tier.id === "diamond" ? "size-20" : tier.id === "gold" ? "size-16" : "size-12"
      )}>
        <img
          src={sponsor.avatar || `https://github.com/${sponsor.handle}.png`}
          alt={sponsor.handle}
          className="size-full rounded-full object-cover"
        />
      </div>

      <div className="text-center space-y-0.5 overflow-hidden w-full">
        <p className="text-sm font-semibold tracking-tight truncate">
          {sponsor.name || sponsor.handle}
        </p>
        <p className="text-[10px] text-muted-foreground font-medium truncate">
          @{sponsor.handle}
        </p>
      </div>
    </Link>
  )
}

function PlaceholderCard({ tier }: { tier: any }) {
  return (
    <Link
      href={tier.sponsorUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col items-center justify-center rounded-lg border border-dashed border-border/50 bg-muted/20 transition-all duration-300 dark:hover:border-brand2/40 hover:border-brand1/40 hover:bg-muted/10 hover:shadow-xl dark:hover:shadow-brand2/5 hover:shadow-brand1/5",
        tier.id === "diamond" ? "min-h-[180px] p-6 gap-7" : tier.id === "gold" ? "min-h-[160px] gap-8" : "min-h-[140px] gap-8"
      )}
    >
      <div className={cn(
        "relative flex items-center justify-center rounded-full bg-background group-hover:bg-muted/40",
        tier.id === "diamond" ? "size-20" : tier.id === "gold" ? "size-16" : "size-12"
      )}>
        <Plus className="size-6 text-muted-foreground dark:group-hover:text-brand2 group-hover:text-brand1 transition-all duration-300 group-hover:rotate-180 ease-in-out" />
      </div>

      <div className="text-center space-y-0.5">
        <p className="text-xs font-medium text-muted-foreground tracking-tight">
          Be here
        </p>
      </div>
    </Link>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}