"use client";

import React, { useState } from "react";
import Link from "next/link";
import { registry } from "@/lib/registry";
import { cn } from "@/lib/utils";

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden">
          <h1 className="text-3xl font-medium tracking-tight lg:text-5xl text-transparent bg-clip-text bg-brand-gradient shrink-0">
            Components
          </h1>

          {/* Category Filter */}
          <div className="relative flex items-center flex-1 min-w-0 w-full md:max-w-[50%] bg-muted/40 pr-1.5 pl-0.5 py-0.5 border border-dashed border-border/50 rounded-lg group">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pl-1 py-1 select-none scroll-smooth mask-[linear-gradient(to_right,transparent,black_12px,black_calc(100%-100px),transparent)]">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "px-2.5 py-1 text-sm font-medium rounded-full transition-all border shrink-0",
                  selectedCategory === null
                    ? "bg-brand-gradient opacity-90 text-background border-background"
                    : "bg-muted text-muted-foreground hover:text-foreground border-border/60"
                )}
              >
                All
              </button>
              {categoryNames.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-2.5 py-1 text-sm font-medium rounded-full transition-all border shrink-0",
                    selectedCategory === category
                      ? "bg-brand-gradient opacity-90 text-background border-background"
                      : "bg-muted text-muted-foreground hover:text-foreground border-border/60"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
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