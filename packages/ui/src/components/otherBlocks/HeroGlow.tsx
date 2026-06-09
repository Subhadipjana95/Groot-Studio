import React from 'react'

const HeroGlow = () => {
  return (
     <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-40 top-1/3 -z-10 flex items-end justify-center"
      >
        {/* Bottom-left glow */}
        <div className="hero-glow-primary absolute left-0 -bottom-30 h-50 w-100 rounded-xl blur-3xl sm:h-70 sm:w-140" />

        {/* Bottom-center glows */}
        <div className="hero-glow-secondary absolute left-1/2 -bottom-40 h-80 w-190 rounded-full blur-3xl sm:h-100 sm:w-220" />
        <div className="hero-glow-secondary absolute left-1/2 -bottom-48 h-110 w-190 rounded-full blur-3xl sm:h-120 sm:w-200" />
        <div className="hero-glow-secondary absolute left-1/2 -bottom-32 h-75 w-190 animate-pulse rounded-full blur-3xl opacity-50 sm:h-80 sm:w-160" />
        
        {/* Bottom border line soft gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-44 bg-[linear-gradient(to_top,color-mix(in_oklch,var(--brand-color-2)_25%,transparent),transparent)]" />
      </div>
  )
}

export default HeroGlow