import { DATA } from "@/data/Data";
import SectionDivider from "@/components/utilities/SectionDivider";



export default function PrivacyPage() {
    return (
        <div className="overflow-x-clip w-full">
            <main className='max-w-6xl mx-auto relative pt-20 py-12 md:pt-24 sm:border-x px-6 md:px-12'>

                {/* Header */}
                <div className="mb-12 space-y-4 max-w-3xl">
                    <p className="text-xs tracking-widest text-muted-foreground px-1.5 py-0.5 border-[0.5px] border-border/40 bg-muted/60 rounded w-fit">
                        Last updated {new Date().toLocaleDateString()}
                    </p>
                    <h1 className="font-normal font-sans text-4xl tracking-tight sm:text-5xl text-foreground">
                        <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Privacy</span> Policy
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        Groot Studio is built for developers, by developers. We believe in minimal data collection, full transparency and zero hidden tracking.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-4 md:space-y-6">
                    {DATA.privacyPolicies.map(({ icon: Icon, title, content }) => (
                        <div
                            key={title}
                            className="group flex gap-5 rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border/80 hover:bg-card/80"
                        >
                            <div className="flex-none mt-0.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/60 border border-border/50 group-hover:border-brand1/40 transition-colors duration-300">
                                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-brand1/80 transition-colors duration-300" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-base font-medium text-foreground tracking-tight">
                                    {title}
                                </h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <p className="mt-8 sm:mt-12 text-center text-xs text-muted-foreground/60">
                    Groot Labs © {new Date().getFullYear()} · Open source & privacy-first · <a href="https://github.com/Subhadipjana95/groot-studio/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-brand1 transition-colors duration-300 cursor-pointer">MIT License</a>
                </p>
            </main>
            <SectionDivider />
        </div>
    )
}