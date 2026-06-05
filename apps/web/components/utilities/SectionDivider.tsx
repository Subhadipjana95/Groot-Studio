import { cn } from "@/lib/utils"

type SectionDividerProps = {
  className?: string
  innerClassName?: string
}

const SectionDivider = ({ className, innerClassName }: SectionDividerProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 border-y bg-background h-12 sm:h-16 z-10",
        className
      )}
    >
      <div className={cn("relative mx-auto h-full w-full max-w-88 md:max-w-6xl border-x",
        innerClassName
      )}>
        <div className="absolute -top-2 left-0 h-4 sm:h-5 w-4 sm:w-5 -translate-x-1/2 rounded-[4px] sm:rounded-sm border border-border/70 bg-background z-10" />
        <div className="absolute bottom-0 left-0 h-4 sm:h-5 w-4 sm:w-5 -translate-x-1/2 translate-y-1/2 rounded-[4px] sm:rounded-sm border border-border/70 bg-background z-10" />
        <div className="absolute -top-2 right-0 h-4 sm:h-5 w-4 sm:w-5 translate-x-1/2 rounded-[4px] sm:rounded-sm border border-border/70 bg-background z-10" />
        <div className="absolute right-0 bottom-0 h-4 sm:h-5 w-4 sm:w-5 translate-x-1/2 translate-y-1/2 rounded-[4px] sm:rounded-sm border border-border/70 bg-background z-10" />
      </div>
    </div>
  )
}

export default SectionDivider
