"use client";

import React, { useState } from "react";
import Link from "next/link";
import { registry } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { CategoryFilter } from "@/components/docs/blocks/category-filter";

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Group components by category
  const categories = registry.reduce((acc, component) => {
    const categoryName = component.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(component);
    return acc;
  }, {} as Record<string, typeof registry>);

  const sortedCategories = Object.entries(categories).sort(([a], [b]) => 
    a.localeCompare(b)
  );

  const categoryNames = Object.keys(categories).sort();

  const filteredCategories = selectedCategory 
    ? sortedCategories.filter(([category]) => category === selectedCategory)
    : sortedCategories;

  return (
    <div className="container max-w-5xl py-10">
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex flex-col md:items-center justify-between gap-4">
          <h1 className="font-normal font-sans text-4xl tracking-tight sm:text-5xl text-foreground">
            <span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Components</span> for your{" "}
            <span className="text-brand1 font-[gambarino] font-medium">Next App</span>
          </h1>

          {/* <CategoryFilter
            categoryNames={categoryNames}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          /> */}
        </div>
      </div>

      <div className="grid gap-12">
        {filteredCategories.map(([category, items]) => (
          <section key={category}>
            <h2 id={category.toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-medium mb-3 pb-1 scroll-m-20">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4">
              {items.map((component) => (
                <Link
                  key={component.name}
                  href={`/components/${component.name}`}
                  prefetch={false}
                  className="group relative flex flex-col rounded-lg border bg-card hover:border-input hover:border-dashed transition-all duration-300 overflow-hidden"
                >
                  {component.image || component.imageDark ? (
                    <div className="aspect-video w-full p-[2px] overflow-hidden border-b group-hover:border-dashed transition-all duration-300 bg-muted">
                      {component.image && (
                        <img
                          src={component.image}
                          alt={component.title}
                          className={cn(
                            "h-full w-full object-cover transition-transform duration-500 rounded-t-md shadow-lg",
                            component.imageDark ? "dark:hidden" : ""
                          )}
                        />
                      )}
                      {component.imageDark && (
                        <img
                          src={component.imageDark}
                          alt={component.title}
                          className={cn(
                            "h-full w-full object-cover transition-transform duration-500 rounded-t-md shadow-lg",
                            component.image ? "hidden dark:block" : ""
                          )}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-muted/30 flex items-center justify-center border-b group-hover:border-dashed transition-all duration-300">
                       <span className="text-muted-foreground/20 font-bold text-2xl uppercase tracking-tighter select-none">
                         {component.name.split('-')[0]}
                       </span>
                    </div>
                  )}
                  
                  <div className="px-4 pb-3 pt-2 flex flex-col flex-1 gap-1">
                    <div className="flex flex-col gap-1">
                      <h3 id={component.name} className="font-medium text-md group-hover:text-primary transition-colors scroll-m-20">
                        {component.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-tight line-clamp-2">
                        {component.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-2 flex flex-wrap gap-[3px]">
                      {component.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wide px-1 py-0.5 rounded-sm bg-secondary text-muted-foreground border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}