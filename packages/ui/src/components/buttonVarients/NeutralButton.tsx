import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cn } from "@workspace/ui/lib/utils"

type NeutralButtonProps = {
  href?: string
  label: React.ReactNode
  className?: string
  innerClassName?: string
  asChild?: boolean
} & React.ComponentPropsWithoutRef<"a">

const NeutralButton = React.forwardRef<HTMLAnchorElement, NeutralButtonProps>(
  ({ href, label, className, innerClassName, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        ref={ref}
        href={href}
        className={cn("bg-secondary rounded-lg p-0.5 shadow-accent hover:shadow-lg active:scale-[0.98] transition duration-200 inline-flex", className)}
        {...props}
      >
        <Slottable>{children}</Slottable>
        <span className={cn("rounded-md border bg-radial from-background to-accent/60 text-muted-foreground transition-colors ring-1 ring-accent text-shadow-md px-1.5 sm:px-3 py-1.5 text-xs sm:text-sm", innerClassName)}>
          {label}
        </span>
      </Comp>
    )
  }
)
NeutralButton.displayName = "NeutralButton"

export default NeutralButton
