import Link from "next/link";
import { ExternalLink, Download } from "lucide-react";
import { templateRegistry } from "@/lib/template-registry";
import { cn } from "@/lib/utils";
import { PageWrapper } from "@/components/utilities/page-wrapper";

export default function TemplatesPage() {
  return (
    <PageWrapper>
      <div className="container max-w-7xl pt-20 pb-16 px-4 md:px-8 mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <h1 className="text-3xl font-medium tracking-tight lg:text-5xl text-transparent bg-clip-text bg-brand-gradient">
            Templates
          </h1>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {templateRegistry.map((template) => (
            <div 
              key={template.name}
              className="flex flex-col md:flex-row gap-6 p-4 md:p-6 rounded-xl border bg-card hover:border-border/80 ring-3 ring-primary/10 transition-colors w-full"
            >
              <div className="flex flex-col flex-1 justify-center space-y-4 md:px-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{template.title}</h2>
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

              <div className="w-full md:w-[50%] lg:w-[55%] shrink-0 border rounded-lg overflow-hidden bg-muted aspect-16/10 relative group">
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
    </PageWrapper>
  );
}