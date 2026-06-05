import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { DATA } from "@/lib/data/Data"

export function FAQ() {
  return (
    <section className="relative isolate w-full overflow-hidden text-center">
      <div className="flex flex-col justify-center items-center w-full gap-3 sm:gap-4 border-b border-border pt-16 py-12 px-6">
        <h1 className="text-2xl md:text-5xl font-normal text-foreground">
          Frequently <span className="text-brand1 font-[gambarino] font-medium">Asked</span> Questions
        </h1>
        <p className='text-md text-muted-foreground max-w-sm'>
          Here are answers to some of the most common questions about our platform
        </p>
      </div>

      <div className="w-full mx-auto text-left">
        <Accordion type="single" collapsible className="w-full">
          {DATA.faq.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border-b border-border py-1 last:border-b-0 pl-10 pr-6"
            >
              <AccordionTrigger className="hover:no-underline text-foreground text-sm sm:text-base md:text-lg py-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}