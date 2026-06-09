import SectionDivider from "@/components/utilities/SectionDivider";
import { DATA } from "@/data/Data";

export default function ChangelogPage() {
  return (
    <div className="overflow-x-clip w-full">
      <div className="max-w-96 sm:max-w-6xl min-h-screen pt-20 sm:pt-24 py-16 mx-auto border-x">
        <div className="mb-1 sm:mb-6 space-y-4 max-w-3xl mx-auto text-center">
          <h1 className="font-normal font-sans text-4xl tracking-tight sm:text-5xl text-foreground">
            Latest <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Updates</span> &{" "}
            <span className="text-brand1 font-[gambarino] font-medium">Improvements</span>
          </h1>
          <p className="hidden sm:block text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Latest updates and improvements to Groot Studio.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full px-3 sm:px-8 md:px-16 py-6 sm:py-12">
          {DATA.changelog.map((item, index) => (
            <div key={index} className="flex gap-4 md:gap-12 items-start group">
              {/* Date Badge */}
              <div className="shrink-0 pt-1 relative flex flex-col items-center self-stretch">
                <div className="inline-flex items-center rounded-md border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground/80 z-10 shrink-0">
                  {item.date}
                </div>
                {index < DATA.changelog.length - 1 && (
                  <div className="absolute top-[1.76rem] bottom-[-40px] w-px bg-border" />
                )}
              </div>

              {/* Grid content for Image + Text */}
              <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                {'image' in item && item.image && (
                  <div className="shrink-0 w-full md:w-80 aspect-video md:aspect-video relative rounded-sm overflow-hidden border border-border/50 bg-muted/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-medium tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider />
    </div>
  );
}