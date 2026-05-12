"use client"

import React, { memo } from "react"
import { cn } from "@workspace/ui/lib/utils"

// --- Types ---

export interface BentoItem {
    id: string | number
    className?: string
    /** Custom content to render within the bento card */
    content?: React.ReactNode
}

interface BentoGridProps {
    items: BentoItem[]
    className?: string
    /** Optional title/description if you want the grid to handle its own header */
    header?: {
        title: string
        subtitle?: string
    }
}

// --- Sub-components ---

const BentoCard = memo(({ item }: { item: BentoItem }) => {
    return (
        <div
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl",
                "bg-background border border-border",
                "transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5",
                item.className
            )}
        >
            <div className="relative flex flex-col h-full overflow-hidden">
                {item.content}
            </div>
        </div>
    )
})

BentoCard.displayName = "BentoCard"

// --- Main Component ---

export function BentoGrid({ items, className, header }: BentoGridProps) {
    return (
        <div className={cn("relative w-full", className)}>
            {header && (
                <div className="text-center space-y-4 mb-16 px-4">
                    <h2 className="text-4xl font-medium tracking-tight sm:text-5xl text-foreground">
                        {header.title}
                    </h2>
                    {header.subtitle && (
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {header.subtitle}
                        </p>
                    )}
                </div>
            )}

            <div 
                className={cn(
                    "grid grid-cols-1 md:grid-cols-12 gap-2 auto-rows-[minmax(120px,auto)]",
                    "p-1" // Small padding to not clip hover shadows
                )}
                role="list"
                aria-label="Component preview grid"
            >
                {items.map((item) => (
                    <BentoCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
