import { Layout, Puzzle, Wand2 } from "lucide-react";
import SectionDivider from "@/components/utilities/SectionDivider";

export default function BlocksPage() {
  return (
    <div className="overflow-x-clip w-full">
      <div className="max-w-96 sm:max-w-6xl min-h-screen pt-20 sm:pt-24 py-16 mx-auto border-x">

        {/* Hero */}
        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4 max-w-88 sm:max-w-3xl mx-auto text-center">
          <h1 className="font-normal font-sans text-3xl tracking-tight sm:text-5xl text-foreground">
            <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Blocks</span> for your{" "}
            <span className="text-brand1 font-[gambarino] font-medium">Next Project</span>
          </h1>
          <p className="text-center max-w-sm sm:max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug mx-auto">
            Ready-to-use, fully responsive section blocks to assemble your next landing page in minutes.
          </p>
        </div>

        {/* Coming Soon Body */}
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center space-y-8">
          {/* Icon trio */}
          <div className="flex justify-center space-x-[-12px] mb-8">
            <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 backdrop-blur-sm -rotate-12 animate-bounce [animation-delay:-0.5s]">
              <Puzzle className="h-8 w-8 text-brand1" />
            </div>
            <div className="p-4 rounded-2xl bg-background border border-border shadow-2xl z-10 relative">
              <Layout className="h-10 w-10 text-amber-600 dark:text-brand2" />
            </div>
            <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 backdrop-blur-sm rotate-12 animate-bounce">
              <Wand2 className="h-8 w-8 text-brand1" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-normal text-foreground">
              Blocks Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              Full-page section blocks are being assembled right now — hero sections, feature grids, pricing tables, and more. Drop-in compositions ready for your next build.
            </p>
          </div>

          <div className="p-1 rounded-xl bg-linear-to-br from-brand1/40 via-border to-brand2/40 max-w-md mx-auto">
            <div className="bg-background rounded-lg p-3">
              <p className="text-sm text-muted-foreground/80 max-w-sm mx-auto uppercase tracking-tighter">
                Meanwhile, browse free components — new blocks ship weekly.
              </p>
            </div>
          </div>
        </div>

      </div>
      <SectionDivider />
    </div>
  );
}