import { Heart, Trophy, Medal, Star } from "lucide-react"
import { DATA } from "@/data/Data"
import { DiamondIcon, GoldIcon, SilverIcon, BronzeIcon } from "@workspace/ui/components/icons/icon"



export const SPONSOR_TIERS = [
  {
    id: "diamond",
    name: "Diamond",
    icon: DiamondIcon,
    color: "text-blue-400",
    description: "The ultimate level of support for Groot Studio.",
    minAmount: 100,
    sponsorUrl: `${DATA.donateURL}`
  },
  {
    id: "gold",
    name: "Gold",
    icon: GoldIcon,
    color: "text-yellow-400",
    description: "High-impact sponsorship for major features.",
    minAmount: 50,
    sponsorUrl: `${DATA.donateURL}`
  },
  {
    id: "silver",
    name: "Silver",
    icon: SilverIcon,
    color: "text-slate-300",
    description: "Helping us maintain and grow the library.",
    minAmount: 20,
    sponsorUrl: `${DATA.donateURL}`
  },
  {
    id: "bronze",
    name: "Bronze",
    icon: BronzeIcon,
    color: "text-orange-400",
    description: "Supporting the community and open source.",
    minAmount: 1,
    sponsorUrl: `${DATA.donateURL}`
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