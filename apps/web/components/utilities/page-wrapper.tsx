const STRIPE_LIGHT =
  "bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)]";
const STRIPE_DARK =
  "dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.08)_0,rgb(255_255_255/0.08)_1px,transparent_1px,transparent_8px)]";
const STRIPE_WIDTH = "max(0px, calc((100% - 80rem) / 2))";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      {/* Left stripe panel */}
      <div
        aria-hidden
        className={`hidden md:block pointer-events-none absolute inset-y-0 left-0 border-r border-border/60 dark:border-border/70 ${STRIPE_LIGHT} ${STRIPE_DARK}`}
        style={{ width: STRIPE_WIDTH }}
      />
      {/* Right stripe panel */}
      <div
        aria-hidden
        className={`hidden md:block pointer-events-none absolute inset-y-0 right-0 border-l border-border/60 dark:border-border/70 ${STRIPE_LIGHT} ${STRIPE_DARK}`}
        style={{ width: STRIPE_WIDTH }}
      />
      {children}
    </div>
  );
}
