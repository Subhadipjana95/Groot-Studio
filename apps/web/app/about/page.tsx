import Link from "next/link"
import { DATA } from "@/data/Root.data"
import { aboutData } from "@/data/About.data"
import { navbarData } from "@/data/Navbar.data"
import SectionDivider from "@/components/utilities/SectionDivider"

export default function AboutPage() {
    return (
        <div className="overflow-x-clip w-full">
            <main className='max-w-6xl mx-auto relative pt-20 py-12 md:pt-24 sm:border-x px-6 md:px-12'>

                {/* Hero */}
                <div className="mb-12 space-y-4 max-w-3xl">
                    <h1 className="font-normal font-sans text-4xl tracking-tight sm:text-5xl text-foreground">
                        Built for developers, by a{" "}
                        <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium"> developer</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Groot Studio is an open-source component library and design system built for modern web developers.
                        Every component is handcrafted with Next.js, Tailwind CSS, and Framer Motion - ready to copy,
                        paste, and ship.
                    </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
                    {aboutData.stats.map(({ label, value }) => (
                        <div
                            key={label}
                            className="rounded-xl border border-border/50 bg-card p-5 space-y-1"
                        >
                            <p className="text-3xl font-semibold tracking-tight text-brand1/80">
                                {value}
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Mission */}
                <div className="rounded-xl border border-border/50 bg-card p-7 mb-10 space-y-3">
                    <h2 className="text-base font-medium text-foreground tracking-tight">{aboutData.mission.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {aboutData.mission.content}
                    </p>
                </div>

                {/* Find us */}
                <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Find Us</p>
                    <div className="flex flex-wrap gap-3">
                        {navbarData.socials.map(({ name, href, icon: Icon }) => (
                            <Link
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card
                                           px-5 py-2 text-sm font-medium text-foreground
                                           hover:border-border transition-all duration-200 hover:shadow-sm"
                            >
                                <Icon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer note */}
                <p className="mt-6 sm:mt-14 text-xs text-muted-foreground/50 text-center">
                    Groot Labs © {new Date().getFullYear()} · Open Source & privacy-first ·{" "}
                    <Link
                        href="/sponsors"
                        className="hover:text-brand1 transition-colors duration-200"
                    >
                        Support the project →
                    </Link>
                </p>
            </main>
            <SectionDivider />
        </div>
    )
}