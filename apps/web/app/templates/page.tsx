import Link from "next/link";
import { ExternalLink, Download } from "lucide-react";
import { templateRegistry } from "@/lib/template-registry";
import { cn } from "@/lib/utils";
import SectionDivider from "@/components/utilities/SectionDivider";

export default function TemplatesPage() {
  return (
    <div className="overflow-x-clip w-full">
      <div className="max-w-96 sm:max-w-6xl min-h-screen pt-20 sm:pt-24 py-16 mx-auto border-x">
        {/* Hero */}
        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4 max-w-88 sm:max-w-3xl mx-auto text-center">
          <h1 className="font-normal font-sans text-3xl tracking-tight sm:text-5xl text-foreground">
            <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Templates</span> for your{" "}
            <span className="text-brand1 font-[gambarino] font-medium">Next Project</span>
          </h1>
          <p className="text-center max-w-sm sm:max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug mx-auto">
            Beautifully crafted, production-ready website templates to jumpstart your development workflow.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full px-4 md:px-8 py-8">
          {templateRegistry.map((template) => (
            <div
              key={template.name}
              className="flex flex-col md:flex-row gap-6 p-2 rounded-xl border bg-card/60 hover:border-border/80 ring-2 ring-primary/10 transition-colors w-full"
            >
              <div className="flex flex-col flex-1 justify-center space-y-2 sm:space-y-4 px-2 md:pl-8 md:pr-4 py-2 md:py-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{template.title}</h2>
                  <p className="text-muted-foreground mt-3 text-base md:text-lg leading-snug">
                    {template.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full border border-dashed">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Preview"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Preview
                  </Link>
                  <a
                    href={template.downloadUrl}
                    download={`${template.name}.zip`}
                    aria-label="Download"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-10 px-6 py-2"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>

              <div className="w-full md:w-[50%] lg:w-[55%] shrink-0 border border-border/50 rounded-lg overflow-hidden bg-muted aspect-16/10 relative group">
                {template.image || template.imageDark ? (
                  <>
                    {template.image && (
                      <img
                        src={template.image}
                        alt={template.title}
                        className={cn("w-full h-full object-cover transition-transform duration-700", template.imageDark ? "dark:hidden" : "")}
                      />
                    )}
                    {template.imageDark && (
                      <img
                        src={template.imageDark}
                        alt={template.title}
                        className={cn("w-full h-full object-cover transition-transform duration-700", template.image ? "hidden dark:block" : "")}
                      />
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-bold text-2xl md:text-4xl uppercase tracking-tighter">
                    {template.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </div>
  );
}