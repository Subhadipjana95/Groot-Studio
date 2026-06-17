import { Heart, Trophy, Medal, Star } from "lucide-react"
import { DATA } from "@/data/Root.data"
import { DiamondIcon, GoldIcon, SilverIcon, BronzeIcon } from "@workspace/ui/components/icons/icon"



export const SPONSOR_TIERS = [
  {
    id: "diamond",
    name: "Diamond",
    icon: DiamondIcon,
    color: "text-blue-400",
    description: "The ultimate level of support for Groot Studio.",
    minAmount: 50,
    sponsorUrl: "https://www.creem.io/payment/prod_5cZbaJ2b5dBLrCGmadRoKR?redirect_url=https%3A%2F%2Fgrootstudio.dev%2Fsponsors%2Fonboarding%3Ftier%3Ddiamond"
    // Success URL - https://grootstudio.dev/sponsors/onboarding?tier=diamond
  },
  {
    id: "gold",
    name: "Gold",
    icon: GoldIcon,
    color: "text-yellow-400",
    description: "High-impact sponsorship for major features.",
    minAmount: 40,
    sponsorUrl: "https://www.creem.io/payment/prod_17g0LbXQdBBXwx0OrQjk3G?redirect_url=https%3A%2F%2Fgrootstudio.dev%2Fsponsors%2Fonboarding%3Ftier%3Dgold"
    // Success URL - https://grootstudio.dev/sponsors/onboarding?tier=gold
  },
  {
    id: "silver",
    name: "Silver",
    icon: SilverIcon,
    color: "text-slate-300",
    description: "Helping us maintain and grow the library.",
    minAmount: 30,
    sponsorUrl: "https://www.creem.io/payment/prod_7goeMcCA7sY5SIDfCbKjBl?redirect_url=https%3A%2F%2Fgrootstudio.dev%2Fsponsors%2Fonboarding%3Ftier%3Dsilver"
    // Success URL - https://grootstudio.dev/sponsors/onboarding?tier=silver

  },
  {
    id: "bronze",
    name: "Bronze",
    icon: BronzeIcon,
    color: "text-orange-400",
    description: "Supporting the community and open source.",
    minAmount: 20,
    sponsorUrl: "https://www.creem.io/payment/prod_4VU9fN5EOUlhqp88AOj3s9?redirect_url=https%3A%2F%2Fgrootstudio.dev%2Fsponsors%2Fonboarding%3Ftier%3Dbronze"
    // Success URL - https://grootstudio.dev/sponsors/onboarding?tier=bronze
  }
]

export const DEMO_SPONSORS: Record<string, any[]> = {
  diamond: [
    // { handle: "shadcn", name: "Shadcn UI", avatar: "https://github.com/shadcn.png" },
    // { handle: "vercel", name: "Vercel", avatar: "https://github.com/vercel.png" },
  ],
  gold: [
    // { handle: "supabase", name: "Supabase", avatar: "https://github.com/supabase.png" },
  ],
  silver: [
    // { handle: "supabase", name: "Supabase", avatar: "https://github.com/supabase.png" },
  ],
  bronze: [
    // { handle: "supabase", name: "Supabase", avatar: "https://github.com/supabase.png" },
  ]
}