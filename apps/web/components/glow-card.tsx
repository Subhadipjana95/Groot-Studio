import { cn } from "@workspace/ui/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-white/5 p-6",
        "shadow-[0_0_30px_rgba(120,80,255,0.15)]",
        "hover:shadow-[0_0_40px_rgba(120,80,255,0.3)]",
        "transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  )
}