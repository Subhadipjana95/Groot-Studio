import { PageWrapper } from "@/components/utilities/page-wrapper";
import { DATA } from "@/data/Data";

export default function ChangelogPage() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto py-12 pt-24 md:pt-32 px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">Changelog</h1>
          <p className="text-xl text-muted-foreground">
            Latest updates and improvements to Groot Studio.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {DATA.changelog.map((item, index) => (
            <div key={index} className="flex gap-4 md:gap-12 items-start group">
              {/* Date Badge */}
              <div className="shrink-0 pt-1 relative flex flex-col items-center self-stretch">
                <div className="inline-flex items-center rounded-lg border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground/80 z-10 shrink-0">
                  {item.date}
                </div>
                {index < DATA.changelog.length - 1 && (
                  <div className="absolute top-[1.76rem] bottom-[-85px] w-px bg-border" />
                )}
              </div>

              {/* Grid content for Image + Text */}
              <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                {'image' in item && item.image && (
                  <div className="shrink-0 w-full md:w-80 aspect-video md:aspect-video relative rounded-lg overflow-hidden border border-border/50 bg-muted/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}