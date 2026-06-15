"use client"

import { useState, use } from "react"
import Link from "next/link"
import SponsorOnboardingForm from "./onboarding-form"
import { SPONSOR_TIERS } from "@/data/Sponsors.data"
import { CheckCircle2, CornerDownRight } from "lucide-react"

const VALID_TIERS = ["diamond", "gold", "silver", "bronze"] as const
type TierId = (typeof VALID_TIERS)[number]

interface SponsorOnboardingSuccessProps {
    tier: string
}

export function SponsorOnboardingSuccess({ tier }: SponsorOnboardingSuccessProps) {
    const resolvedTier = VALID_TIERS.includes(tier as TierId) ? (tier as TierId) : "bronze"
    const tierData = SPONSOR_TIERS.find((t) => t.id === resolvedTier)!
    const TierIcon = tierData.icon

    return (
        <div className="relative flex flex-col items-center justify-center p-6 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl scale-150" />
                <div className="relative flex items-center justify-center size-20 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    <CheckCircle2 className="size-10 text-emerald-500" />
                </div>
            </div>
            <h2 className="text-2xl font-medium tracking-tight mb-2">
                Thank you for sponsoring
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm leading-snug">
                Your submission has been received. We&apos;ll verify your payment and
                get your logo up on the sponsors page shortly.
            </p>
            <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50">
                <TierIcon className="size-5" />
                <span className="text-sm font-medium capitalize">{resolvedTier} Sponsor</span>
            </div>

            <div className="absolute bottom-0 right-0">
                <Link
                    href="/"
                    className="text-xs text-ring border-[0.5px] rounded-lg border-border/50 px-2 py-1 bg-muted/50 hover:text-muted-foreground transition-colors font-medium flex items-center gap-1"
                >
                    <CornerDownRight className="size-4" />
                    Home
                </Link>
            </div>
        </div>
    )
}

export default function SponsorOnboardingPage({
    searchParams,
}: {
    searchParams: Promise<{ tier?: string }>
}) {
    const { tier = "bronze" } = use(searchParams)
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className="overflow-x-clip w-full">
            <main className="max-w-100 sm:max-w-2xl mx-auto relative">
                {/* Form Card */}
                {isSubmitted ? (
                    <div className="w-full h-screen flex flex-col items-center justify-center">
                        <div className="rounded-2xl bg-muted/40 border border-border/50 p-4">
                            <SponsorOnboardingSuccess tier={tier} />
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Header */}
                        <div className="my-8 sm:my-6 space-y-3 text-center px-6">
                            <h1 className="font-normal font-sans text-2xl tracking-tight sm:text-4xl text-foreground">
                                Complete your{" "}
                                <span className="text-brand1 font-[gambarino] font-medium">Sponsorship</span>
                            </h1>
                        </div>

                        <div className="mx-4 sm:mx-8 rounded-2xl bg-muted/40 border border-border/50 p-4 sm:p-8">
                            <SponsorOnboardingForm tier={tier} onSuccess={() => setIsSubmitted(true)} />
                        </div>
                        {/* Footer note */}
                        <p className="my-4 sm:my-10 text-xs text-muted-foreground/50 text-center px-6">
                            Your details are only used to verify payment and display your logo.
                            We respect your privacy.
                        </p>
                    </div>
                )}
            </main>
        </div>
    )
}