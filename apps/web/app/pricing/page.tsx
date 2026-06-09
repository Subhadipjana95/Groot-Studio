import { Button } from "@workspace/ui/components/button";
import { Check } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { DATA } from "@/data/Data"
import SectionDivider from "@/components/utilities/SectionDivider";

const Pricing = () => {
  return (
    <div className="overflow-x-clip w-full">
      <main className='max-w-96 sm:max-w-6xl mx-auto relative pt-20 py-12 md:pt-24 border-x'>
        <div className="mb-6 space-y-4 mx-auto text-center">
          <h1 className="font-normal font-sans text-4xl tracking-tight sm:text-5xl text-foreground">
            Simple Transparent <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Pricing</span>
          </h1>
          <p className="hidden sm:block max-w-lg text-lg text-muted-foreground leading-normal mx-auto">
            Choose the plan that best fits your workflow. From solo makers to world-class agencies.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 items-start py-4 px-6 md:px-12">
          {DATA.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative group flex flex-col rounded-2xl border border-border/60 bg-card p-2 transition-all duration-500",
                'featured' in plan && plan.featured && "border-brand1/30 bg-background shadow-2xl z-10"
              )}
            >
              {'featured' in plan && plan.featured && (
                <div className="absolute top-6 right-6 transform rounded-sm bg-brand-gradient dark:bg-brand-gradient2 px-2 py-1 text-[10px] font-bold text-background uppercase tracking-widest shadow-lg">
                  Most popular
                </div>
              )}

              <div className="bg-muted/50 p-2 rounded-xl px-3 mb-3 sm:mb-6 space-y-4 shadow-lg border border-border">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 py-4">
                  <div className="flex items-start">
                    <span className="text-xl font-medium mt-1 pr-1 text-muted-foreground">$</span>
                    <span className="text-6xl font-bold tracking-tighter text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  {plan.originalPrice !== plan.price && (
                    <span className="text-2xl text-muted-foreground/40 line-through font-medium">
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>

                <Button
                  className={cn(
                    "w-full h-12 rounded-md text-sm font-semibold",
                    'featured' in plan && plan.featured
                      ? "bg-brand-gradient dark:bg-brand-gradient2 text-background hover:shadow-xl hover:shadow-brand1/10"
                      : "bg-secondary-foreground hover:bg-secondary-foreground/80 border border-foreground"
                  )}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="mt-auto space-y-3 sm:space-y-4 px-4 pt-4 pb-2 sm:pt-6 sm:pb-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 group/feature">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/10">
                      <Check className="h-3 w-3 text-muted-foreground/60 group-hover/feature:text-brand1 transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <SectionDivider />
    </div>
  );
};

export default Pricing;
