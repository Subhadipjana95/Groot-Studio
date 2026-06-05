import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cn } from "@workspace/ui/lib/utils"

type BrandButtonProps = {
  href?: string
  label: React.ReactNode
  className?: string
  asChild?: boolean
} & React.ComponentPropsWithoutRef<"a">

const BrandButton = React.forwardRef<HTMLAnchorElement, BrandButtonProps>(
  ({ href, label, className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        ref={ref}
        href={href}
        className={cn("bg-brand-color-2 dark:bg-brand-color-3 rounded-lg p-0.75 shadow-brand-color-1 dark:shadow-brand-color-1/30 hover:shadow-lg active:scale-[0.98] transition duration-200 inline-flex", className)}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span className="flex items-center justify-center gap-1 rounded-md bg-brand-gradient2 px-1.5 sm:px-3 py-1.5 sm:py-1.5 text-xs sm:text-sm text-background ring-1 ring-brand-color-1 text-shadow-md">
          {label}
        </span>
      </Comp>
    )
  }
)
BrandButton.displayName = "BrandButton"

export default BrandButton
