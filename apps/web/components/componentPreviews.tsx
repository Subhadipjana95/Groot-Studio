"use client"

import React from "react"
import { BentoGrid, type BentoItem } from "@workspace/ui/components/otherBlocks/bento-grid"
import { StyledButton } from "@workspace/ui/registry/radix-nova/styled-button/styled-button"
import { AvatarTooltips } from "@workspace/ui/registry/radix-nova/avatar-tooltips/avatar-tooltips"
import { DragButton } from "@workspace/ui/registry/radix-nova/drag-button/drag-button"
import { TextHoverEffect } from "@workspace/ui/registry/radix-nova/text-outline-glow/text-outline-glow"
import { GitHubStars } from "@workspace/ui/registry/radix-nova/github-stars-react/github-stars-react"
import { GithubCalendar } from "@workspace/ui/registry/radix-nova/github-calendar/github-calendar"
import { LogoGrid } from "@workspace/ui/registry/radix-nova/logo-grid/logo-grid"
import { AnimatedBars } from "@workspace/ui/registry/radix-nova/animated-bars/animated-bars"
import { Github, Twitter, DiscordIcon, Youtube, MessageCircle } from "@workspace/ui/components/icons/icon"
import { Logo } from "@/components/ui/icons/logo"
import NeutralButton from "@/components/ui/buttonVarients/NeutralButton"
import ImageCursorTrail from "@workspace/ui/registry/radix-nova/image-trail/image-trail"
import { GradientText } from "@/components/ui/textAnimations/gradient-text"
import { DiscordOnline } from "@/components/ui/socialStats/discord-online"


const images = [
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383165/8a93491afd90a09985eaddce102b329b_efq8me.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383230/e5b9651df49a4940fbe124fd0a8df131_gvdvvx.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383249/3cfb769f842fb198f4e04e2a3d10be30_c8z9w4.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383361/ac04f0cd44103b4842b42e3d3eeb56d8_idq2x6.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383590/4967f9c721decc9415f4727448c5dd91_x3cgv3.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383546/4776e136af2fca9f4fce218289953224_szaihc.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383714/8c3b369438f3ea034311f6ad63cea0ba_loyee8.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383627/b5e62228f6f5a2b99dee39063b8238b4_tgve5o.jpg",
    "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1779383508/e4e2e5463ccfefc3905eb5363edc6117_y1wowo.jpg",
];


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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-400/10 dark:bg-rose-800/10 border border-rose-600/20 text-rose-500/60 text-xs font-medium backdrop-blur-md">
                            <span className="size-1.5 rounded-full bg-rose-600/60 animate-pulse" />
                            Introducing Groot Studio
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight leading-tight font-[gambarino]">
                            Build your next <span className="text-rose-800 ">Big Idea</span> faster
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            <NeutralButton label="Explore Docs" className="font-medium hover:shadow-none select-none cursor-pointer"
                                innerClassName="py-[11px] sm:py-[9px]" />
                        </div>
                    </div>
                </AnimatedBars>
            </div>
        ),
        className: "md:col-span-6 lg:col-span-8 lg:row-span-2 min-h-[120px]"
    },
    {
        id: 2,
        content: (
            <div className="relative w-full h-full flex items-center justify-center p-2 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <p className="font-medium pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-sm tracking-tight text-center p-1 px-2 bg-muted/30 border rounded-md">
                    Wiggle your mouse around
                </p>
                <ImageCursorTrail
                    items={images}
                    maxNumberOfImages={6}
                    distance={30}
                    imgClass="sm:w-20 w-14 sm:h-24 h-18 border border-background"
                    className="z-50 pointer-events-none"
                />
            </div>
        ),
        className: "md:col-span-6 lg:col-span-4 lg:row-span-2 min-h-[200px]"
    },
    {
        id: 3,
        content: (
            <div className="w-full h-full flex flex-col gap-4 items-center justify-center p-6 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <GradientText className="text-6xl sm:text-[5rem]">
                    GROOT
                </GradientText>
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
                    <TextHoverEffect text="GROOT" fontSize={80} />
                </div>
            </div>
        ),
        className: "md:col-span-6 lg:col-span-5 lg:row-span-2 min-h-[200px]"
    },
    {
        id: 6,
        content: (
            <div className="w-full h-full flex items-center justify-center gap-4 p-4 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                <StyledButton href="#" variant="blue" size="md" className='flex items-center gap-1 px-3 pr-4'>
                    <Logo className='w-5 h-5 text-background' />
                    Groot Studio
                </StyledButton>
            </div>
        ),
        className: "md:col-span-3 lg:col-span-4 lg:row-span-1 min-h-[120px]"
    },
    {
        id: 7,
        content: (
            <div className="flex w-full h-full items-center justify-center gap-2">
                <div className="w-full h-full flex items-center justify-center p-2 border rounded-xl bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                    <GitHubStars repo="vercel/next.js" size="lg" className="bg-background" />
                </div>
                <div className="w-full h-full flex items-center justify-center p-2 border rounded-xl bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden">
                    <DiscordOnline guildId="1151315619246002176" inviteURL="https://discord.gg/5nJmZYA5f2" className="bg-background" />
                </div>
            </div>
        ),
        className: "md:col-span-3 lg:col-span-4 lg:row-span-1 min-h-[100px] border-none"
    },
    {
        id: 8,
        content: (
            <div className="w-full h-full flex items-center justify-center p-4 bg-muted/20 group-hover:bg-muted/10 transition-colors duration-500 overflow-hidden relative">
                <AvatarTooltips
                    items={[
                        { id: 1, name: "GitHub", icon: Github },
                        { id: 2, name: "Twitter", icon: Twitter },
                        { id: 3, name: "Discord", icon: DiscordIcon },
                        { id: 4, name: "YouTube", icon: Youtube },
                    ]}
                />
            </div>
        ),
        className: "md:col-span-6 lg:col-span-4 lg:row-span-1 min-h-[100px]"
    },
    {
        id: 9,
        content: (
            <div className="w-full h-full flex items-center justify-center py-3 sm:py-6 px-2 sm:px-[1.3rem] bg-muted/10 group-hover:bg-muted/20 transition-colors duration-500 overflow-hidden">
                <GithubCalendar username="Subhadipjana95" theme="sunset" showStats={false} className="border-none bg-transparent" />
            </div>
        ),
        className: "md:col-span-12 lg:col-span-8 lg:row-span-2 min-h-[240px]"
    },
    {
        id: 10,
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

