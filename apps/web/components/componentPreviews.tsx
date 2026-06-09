"use client"

import React from "react"
import { BentoGrid, type BentoItem } from "@workspace/ui/components/otherBlocks/bento-grid"
import { ThreeDButton } from "@workspace/ui/registry/radix-nova/3d-button/3d-button"
import { AvatarTooltips } from "@workspace/ui/registry/radix-nova/avatar-tooltips/avatar-tooltips"
import { DragButton } from "@workspace/ui/registry/radix-nova/drag-button/drag-button"
import { TextHoverEffect } from "@workspace/ui/registry/radix-nova/text-outline-glow/text-outline-glow"
import { GradientBackgroundText } from "@workspace/ui/registry/radix-nova/gradient-background-text/gradient-background-text"
import { GitHubStars } from "@workspace/ui/registry/radix-nova/github-stars-react/github-stars-react"
import { GithubCalendar } from "@workspace/ui/registry/radix-nova/github-calendar/github-calendar"
import { LogoGrid } from "@workspace/ui/registry/radix-nova/logo-grid/logo-grid"
import { AnimatedBars } from "@workspace/ui/registry/radix-nova/animated-bars/animated-bars"
import { Github, Twitter, DiscordIcon, Youtube, MessageCircle } from "@workspace/ui/components/icons/icon"


const PREVIEW_ITEMS: BentoItem[] = [
    {
        id: 1,
        content: (
            <div className="w-full h-full flex items-center justify-center bg-muted/10 group-hover:bg-muted/20 transition-colors duration-500 overflow-hidden">
                <AnimatedBars 
                    numBars={30} 
                    animationDuration={5}
                    className="w-full h-full border-none"
                >
                    <div className="max-w-xl text-center relative z-10 px-6 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium backdrop-blur-md">
                            <span className="size-1.5 rounded-full bg-rose-400 animate-pulse" />
                            Introducing Groot Studio
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                            Build your next <span className="text-rose-800">big idea</span> faster.
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <button className="px-6 py-2 rounded-lg text-sm font-medium text-foreground hover:text-foreground bg-card border hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer active:scale-95">
                                View Docs
                            </button>
                        </div>
                    </div>
                </AnimatedBars>
            </div>
        ),
        className: "md:col-span-6 lg:col-span-8 lg:row-span-4 min-h-[300px]"
    },
    {
        id: 2,
        content: (
            <div className="w-full h-full flex items-center justify-center p-6 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <AvatarTooltips
                    items={[
                        { id: 1, name: "GitHub", designation: "Developer Platform", icon: Github },
                        { id: 2, name: "Twitter", designation: "Social Media", icon: Twitter },
                        { id: 3, name: "Discord", designation: "Community", icon: DiscordIcon },
                        { id: 4, name: "YouTube", designation: "Content", icon: Youtube },
                    ]}
                />
            </div>
        ),
        className: "md:col-span-6 lg:col-span-4 lg:row-span-2 min-h-[120px]"
    },
    {
        id: 3,
        content: (
            <div className="w-full h-full flex flex-col gap-4 items-center justify-center p-6 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <GradientBackgroundText className="text-4xl md:text-5xl lg:text-6xl">
                    Groot Stud
                </GradientBackgroundText>
            </div>
        ),
        className: "md:col-span-6 lg:col-span-4 lg:row-span-2 min-h-[120px]"
    },
    {
        id: 4,
        content: (
            <div className="w-full h-full flex items-center justify-center p-8 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <DragButton
                    onDragComplete={() => console.log("Successful ✅")}
                    colorLight="#f5f56b"
                    colorDark="#cc0066"
                    className="w-full max-w-[200px]"
                >
                    Slide to Checkout
                </DragButton>
            </div>
        ),
        className: "md:col-span-3 lg:col-span-3 lg:row-span-2 min-h-[120px]"
    },
    {
        id: 5,
        content: (
            <div className="w-full h-full flex items-center justify-center p-6 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500">
                <div className="w-full h-full flex items-center justify-center">
                    <TextHoverEffect text="HOVER" fontSize={80} />
                </div>
            </div>
        ),
        className: "md:col-span-6 lg:col-span-5 lg:row-span-2 min-h-[200px]"
    },
    {
        id: 6,
        content: (
            <div className="w-full h-full flex items-center justify-center gap-4 p-4 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <ThreeDButton color1="#6366f1" color2="#4f46e5">
                    Primary
                </ThreeDButton>
                <ThreeDButton color1="#2dd4bf" color2="#14b8a6" className="text-foreground dark:text-background">
                    Secondary
                </ThreeDButton>
            </div>
        ),
        className: "md:col-span-3 lg:col-span-4 lg:row-span-1 min-h-[120px]"
    },
    {
        id: 7,
        content: (
            <div className="w-full h-full flex items-center justify-center p-4 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <GitHubStars repo="vercel/next.js" size="lg" className="bg-background" />
            </div>
        ),
        className: "md:col-span-3 lg:col-span-4 lg:row-span-1 min-h-[100px]"
    },
    {
        id: 8,
        content: (
            <div className="w-full h-full flex items-center justify-center py-3 sm:py-6 px-2 sm:px-[1.3rem] bg-muted/10 group-hover:bg-muted/20 transition-colors duration-500 overflow-hidden">
                <GithubCalendar username="Subhadipjana95" theme="sunset" showStats={false} className="border-none bg-transparent" />
            </div>
        ),
        className: "md:col-span-12 lg:col-span-8 lg:row-span-2 min-h-[240px]"
    },
    {
        id: 9,
        content: (
            <div className="w-full h-full flex items-center justify-center p-2 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <LogoGrid
                    logos={[
                        { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind" },
                        { src: "https://svgl.app/library/nuxt.svg", alt: "Nuxt" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", alt: "VS Code" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", alt: "Vue" },
                        { src: "https://svgl.app/library/angular.svg", alt: "Angular" },
                        { src: "https://svgl.app/library/figma.svg", alt: "Figma" },
                        { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", alt: "Slack" },
                        { src: "https://svgl.app/library/angular.svg", alt: "Angular" }
                    ]}
                    className="border-none grid-cols-4 w-full"
                />
            </div>
        ),
        className: "md:col-span-12 lg:col-span-4 lg:row-span-2 min-h-[140px]"
    },
]

export function ComponentPreviews() {
    return (
        <section className="relative pt-8 sm:pt-16 overflow-hidden border-b border-border/60">
            <div className="mx-auto max-w-full lg:max-w-6xl relative z-10">
                <BentoGrid
                    items={PREVIEW_ITEMS}
                    header={{
                        title: (
                            <h1 className="text-3xl md:text-5xl font-normal text-foreground">
                                Everything you need to <span className="text-brand1 font-[gambarino] font-medium">Ship Faster</span>
                            </h1>
                        ) as unknown as string,
                        subtitle: (
                            <p className="text-center max-w-[18rem] sm:max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug mx-auto">
                                A boutique collection of UI blocks, templates, and components <span className="hidden sm:inline-block">meticulously crafted for the modern web</span>
                            </p>
                        ) as unknown as string
                    }}
                />
            </div>
        </section>
    )
}

