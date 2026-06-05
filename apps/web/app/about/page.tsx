import Link from "next/link"
import { DATA } from "@/data/Data"
import { PageWrapper } from "@/components/utilities/page-wrapper"

export default function AboutPage() {
    return (
        <PageWrapper className="overflow-hidden">
            <main className="max-w-4xl mx-auto px-6 md:px-12 relative pt-20 pb-20 md:pt-28 lg:pt-36">

                {/* Hero */}
                <div className="mb-14 space-y-4 max-w-2xl">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground">
                        About the project
                    </p>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                        Built for developers,{" "}
                        <span className="bg-brand-gradient bg-clip-text text-transparent">by a developer</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Groot Studio is an open-source component library and design system built for modern web developers.
                        Every component is handcrafted with Next.js, Tailwind CSS, and Framer Motion — ready to copy,
                        paste, and ship.
                    </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
                    {DATA.stats.map(({ label, value }) => (
                        <div
                            key={label}
                            className="rounded-xl border border-border/50 bg-card p-5 space-y-1"
                        >
                            <p className="text-3xl font-semibold tracking-tight bg-brand-gradient bg-clip-text text-transparent">
                                {value}
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Mission */}
                <div className="rounded-xl border border-border/50 bg-card p-7 mb-10 space-y-3">
                    <h2 className="text-base font-semibold text-foreground tracking-tight">Mission</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The goal is simple: eliminate repetitive UI work. Instead of rebuilding the same hero,
                        pricing table, or testimonial section from scratch on every project, Groot Studio gives you
                        battle-tested, accessible, production-ready starting points you actually own — no proprietary
                        runtime, no lock-in, just code.
                    </p>
                </div>

                {/* Find us */}
                <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Find us</p>
                    <div className="flex flex-wrap gap-3">
                        {DATA.socials.map(({ name, href, icon: Icon }) => (
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
                <p className="mt-14 text-xs text-muted-foreground/50 text-center">
                    Groot Labs © {new Date().getFullYear()} · Open Source & privacy-first ·{" "}
                    <Link
                        href="/sponsors"
                        className="hover:text-transparent hover:bg-clip-text hover:bg-brand-gradient transition-colors duration-200"
                    >
                        Support the project →
                    </Link>
                </p>
            </main>
        </PageWrapper>
    )
}