import { Button } from "@workspace/ui/components/button";
import { Check } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { PageWrapper } from "@/components/utilities/page-wrapper";
import { DATA } from "@/data/Data"

const Pricing = () => {
  return (
    <PageWrapper className="overflow-hidden min-h-screen">
      <main className='max-w-7xl mx-auto px-6 md:px-12 relative flex flex-col items-center pt-24 pb-6 md:pt-32 md:pb-16'>
        <div className="w-full mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Simple Transparent Pricing
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Choose the plan that best fits your workflow. From solo makers to world-class agencies.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 items-start pb-12">
          {DATA.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative group flex flex-col rounded-2xl border border-border/60 bg-card p-2 transition-all duration-500",
                'featured' in plan && plan.featured && "border-brand1/30 bg-background shadow-2xl z-10"
              )}
            >
              {'featured' in plan && plan.featured && (
                <div className="absolute top-6 right-6 transform rounded-sm bg-brand-gradient px-2 py-1 text-[10px] font-bold text-background uppercase tracking-widest shadow-lg">
                  Most popular
                </div>
              )}

              <div className="bg-muted/50 p-2 rounded-xl px-3 mb-6 space-y-4 shadow-lg border border-border">
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
                      ? "bg-brand-gradient text-background hover:shadow-xl hover:shadow-brand1/10"
                      : "bg-secondary-foreground hover:bg-secondary-foreground/80 border border-foreground"
                  )}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="mt-auto space-y-4 px-4 pt-6 pb-3">
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
    </PageWrapper>
  );
};

export default Pricing;
