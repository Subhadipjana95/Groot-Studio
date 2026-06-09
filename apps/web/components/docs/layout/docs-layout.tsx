import { ReactNode } from "react";
import { Sidebar } from "@/components/docs/layout/sidebar";
import { TOC } from "@/components/docs/layout/toc";
import { InnerLenisScroll } from "@/components/utilities/lenis-provider";
import { SponsorCard } from "@/components/sponsor-card";
import SectionDivider from "@/components/utilities/SectionDivider";

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full overflow-x-clip">
      <div className="mx-auto w-full max-w-[1440px] px-4">
        <div className="md:grid md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_240px] gap-6 items-start">
          {/* Navigation Sidebar */}
          <div className="sticky top-22 hidden h-[calc(100vh-7rem)] bg-muted/40 border border-border ring-3 ring-muted/60 md:block rounded-xl mb-6 p-1.5">
            <div className="h-full w-full flex-1 min-h-0 bg-background border border-border/80 rounded-lg mx-auto overflow-hidden">
              <InnerLenisScroll
                className="h-full w-full overflow-y-auto scrollbar-hide pr-4 pt-2 mask-[linear-gradient(to_bottom,black_90%,transparent_100%)]"
              >
                <div className="w-full">
                  <Sidebar />
                </div>
              </InnerLenisScroll>
            </div>
          </div>

          {/* Main Components Content */}
          <main className="relative mx-auto w-full max-w-4xl pt-12 py-6 lg:py-12 px-0 md:px-8 min-w-0 sm:border-x">
            {children}
          </main>

          {/* Table of Contents & Sponsor Card */}
          <div className="sticky top-22 hidden text-sm xl:flex flex-col items-center max-h-[calc(100vh-7rem)] bg-muted/20 border border-border ring-3 ring-muted/60 w-fit p-2 gap-2 rounded-xl mb-6 overflow-hidden">
            <TOC />
            <div className="w-full shrink-0">
              <SponsorCard />
            </div>
          </div>
        </div>
      </div>
      <SectionDivider innerClassName="md:max-w-216" />
    </div>
  );
}
