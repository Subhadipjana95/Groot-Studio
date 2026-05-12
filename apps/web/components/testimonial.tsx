"use client"

import { useState } from "react"
import { TestimonialCard } from "@/components/ui/otherBlocks/testimonial-card"
import { DATA } from "@/lib/data/Data"
import { ChevronDown } from "lucide-react"

export function Testimonials() {
    const [expanded, setExpanded] = useState(false)

    return (
        <section className="pt-12 pb-8 md:py-18 overflow-hidden select-none border-b border-border/60">
            <div className="mx-auto max-w-7xl px-4 md:px-12">

                {/* Title */}
                <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight lg:text-5xl">
                        Loved by the <span className="bg-brand-gradient bg-clip-text text-transparent">Community</span>
                    </h2>
                    <p className="text-muted-foreground text-md md:text-lg max-w-2xl mx-auto">
                        Build by makers, loved by thousands of developers around the globe.
                    </p>
                </div>

                {/* Testimonials */}
                {/* Clipping wrapper with CSS mask — mobile only */}
                <div
                    className={[
                        "lg:max-h-none lg:overflow-visible lg:mask-none",
                        expanded
                            ? "max-h-[9999px] overflow-visible"
                            : "max-h-[550px] overflow-hidden mask-[linear-gradient(to_bottom,black_75%,transparent_100%)]",
                        "transition-[max-height] duration-700 ease-in-out",
                    ].join(" ")}
                >
                    {/* columns layout: 2 on mobile, 4 on desktop */}
                    <div className="columns-2 lg:columns-4 gap-3">
                        {DATA.testimonials.map((testimonial, index) => (
                            <div key={index} className="break-inside-avoid mb-3">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More / Show Less — mobile only */}
                <div className="lg:hidden flex justify-center mt-6">
                    <button
                        onClick={() => setExpanded(prev => !prev)}
                        className="group relative inline-flex items-center gap-2 rounded-full
                                   border border-border/60 bg-card hover:border-border
                                   px-4 py-1.5 text-xs font-medium text-foreground
                                   transition-all duration-300 hover:shadow-md active:scale-95"
                    >
                        <span
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                                       transition-opacity duration-300
                                       bg-[radial-gradient(ellipse_at_center,hsl(var(--brand)/0.12),transparent_70%)]"
                        />
                        <span className="relative">
                            {expanded ? "Show Less" : "View More"}
                        </span>
                        <ChevronDown
                            className={`size-4 relative transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                        />
                    </button>
                </div>

            </div>
        </section>
    )
}