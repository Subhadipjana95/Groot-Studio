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
    minAmount: 50,
    sponsorUrl: "https://buy.polar.sh/polar_cl_2FP0jQNoZm2WktPebV1CEFsVaJ6sBE8PajSMu39fTnN"
  },
  {
    id: "gold",
    name: "Gold",
    icon: GoldIcon,
    color: "text-yellow-400",
    description: "High-impact sponsorship for major features.",
    minAmount: 40,
    sponsorUrl: "https://buy.polar.sh/polar_cl_AWXfZ0JpVWFWMlrcJC0hLBPMwRt9sVWPqkFfq0VZdEB"
  },
  {
    id: "silver",
    name: "Silver",
    icon: SilverIcon,
    color: "text-slate-300",
    description: "Helping us maintain and grow the library.",
    minAmount: 30,
    sponsorUrl: "https://buy.polar.sh/polar_cl_rfTM8TF98FsCw8qTMJelIbuFuw88d7A6hz2uq2g2rUl"
  },
  {
    id: "bronze",
    name: "Bronze",
    icon: BronzeIcon,
    color: "text-orange-400",
    description: "Supporting the community and open source.",
    minAmount: 20,
    sponsorUrl: "https://buy.polar.sh/polar_cl_cN2lS1AIkSL9k9zhtega2raCmLKryUR7Z4rvH4MpZjr"
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