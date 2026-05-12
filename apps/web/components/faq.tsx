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
    <section className="container mx-auto px-4 py-12 md:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="space-y-2 md:space-y-4 text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight lg:text-5xl">
            Frequently Asked <span className="bg-brand-gradient bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-md md:text-lg max-w-2xl mx-auto">
            Everything you need to know about Groot Studio.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="bg-card dark:bg-card/50 w-full rounded-2xl border border-border/70 shadow-xl overflow-hidden"
          defaultValue="item-1"
        >
          {DATA.faq.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="relative px-6 border-b border-border/70 last:border-0"
            >
              <AccordionTrigger className="py-6 text-left text-[17px] font-medium hover:underline hover:underline-offset-4">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-[15px] leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-center text-muted-foreground font-medium mt-8">
          Can't find what you're looking for? Contact our{' '}
          <a href="mailto:[codesubhadip95@gmail.com]" className="font-semibold bg-brand-gradient bg-clip-text text-transparent hover:underline hover:underline-offset-4 transition-colors">
            customer support team
          </a>
        </p>
      </div>
    </section>
  );
}