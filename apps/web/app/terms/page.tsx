import { DATA } from "@/data/Data"
import { PageWrapper } from "@/components/utilities/page-wrapper"

export default function TermsPage() {
    return (
        <PageWrapper className="overflow-hidden min-h-screen">
            <main className="max-w-4xl mx-auto px-6 md:px-12 relative pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-32">

                {/* Header */}
                <div className="mb-12 space-y-3 pb-4">
                    <p className="text-xs tracking-widest text-muted-foreground">
                        Last updated {new Date().toLocaleDateString()}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                        <span className="bg-brand-gradient bg-clip-text text-transparent">Terms</span> of Service
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                        Please read these terms carefully before using Groot Studio. By using the library, you agree to the following conditions.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-4 md:space-y-6">
                    {DATA.termsOfService.map(({ icon: Icon, title, content }) => (
                        <div
                            key={title}
                            className="group flex gap-5 rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border/80 hover:bg-card/80"
                        >
                            <div className="flex-none mt-0.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted/60 border border-border/50 group-hover:border-border transition-colors duration-300">
                                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
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
                <p className="mt-12 text-center text-xs text-muted-foreground/60">
                    Groot Labs © {new Date().getFullYear()} · Open source & privacy-first ·{" "}
                    <a
                        href="https://github.com/Subhadipjana95/groot-studio/blob/main/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-transparent hover:bg-clip-text hover:bg-brand-gradient transition-colors duration-300 cursor-pointer"
                    >
                        MIT License
                    </a>
                </p>
            </main>
        </PageWrapper>
    )
}