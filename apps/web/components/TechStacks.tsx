"use client"

import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { DATA } from "@/data/Data"

function TechStacks() {
  return (
    <section className='relative flex items-center justify-between overflow-hidden isolate'>
      <div className="flex flex-1 px-4 max-w-xs">
        <p className="text-muted-foreground text-sm leading-snug max-w-xs">
          Powering modern web interfaces with industry-leading technologies
        </p>
      </div>
      <TooltipProvider delayDuration={0}>
        <div className="flex items-center justify-center gap-3 border-l h-full px-4 py-2">
          {DATA.TECH_STACK.map((item) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.id} delayDuration={0}>
                <TooltipTrigger asChild>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-brand-color-1/5 cursor-pointer hover:bg-muted/80 transition-colors group">
                    <Icon className="size-5 text-foreground grayscale-100 contrast-150 group-hover:grayscale-0 transition-all duration-150" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{item.name}</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </section>
  )
}

export default TechStacks