import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { DATA } from "@/data/Root.data"

export function FAQ() {
  return (
    <section className="relative isolate w-full overflow-hidden text-center">
      <div className="flex flex-col justify-center items-center w-full gap-3 sm:gap-4 border-b border-border sm:pt-16 py-6 sm:py-12 px-3 sm:px-6">
        <h1 className="text-3xl md:text-5xl font-normal text-foreground">
          Frequently <span className="text-brand1 font-[gambarino] font-medium">Asked</span> Questions
        </h1>
        <p className="hidden sm:block text-center max-w-xs sm:max-w-lg text-muted-foreground text-sm sm:text-lg leading-snug mx-auto">
          Here are answers to some of the most common questions about our platform
        </p>
      </div>

      <div className="w-full mx-auto text-left">
        <Accordion type="single" collapsible className="w-full">
          {DATA.faq.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-border py-1 last:border-b-0 pl-4 sm:pl-10 pr-3 sm:pr-6"
            >
              <AccordionTrigger className="hover:no-underline text-foreground text-sm sm:text-base md:text-lg py-2 sm:py-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-2 sm:pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}