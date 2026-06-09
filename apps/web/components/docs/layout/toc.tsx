"use client"

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";
import { InnerLenisScroll } from "@/components/utilities/lenis-provider";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export function TOC() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; title: string; level: number }[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [collapsedHeadings, setCollapsedHeadings] = useState<Set<string>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setCollapsedHeadings((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Auto-scroll TOC to active item
  useEffect(() => {
    if (activeId) {
      const activeElement = document.getElementById(`toc-item-${activeId}`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeId]);

  useEffect(() => {
    // Reset active ID on route change
    setActiveId("");

    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll("main h2, main h3"))
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          title: el.textContent || "",
          level: Number(el.tagName.charAt(1)),
        }));
      setHeadings(elements);

      // 2. Set up observer to track scroll position
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0% 0% -80% 0%" }
      );

      elements.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 10);
  };

  return (
    <div className="w-full flex-1 min-h-0 flex flex-col bg-background border border-border/80 rounded-lg mx-auto overflow-hidden">
      <InnerLenisScroll
        onScroll={handleScroll}
        className={cn(
          "w-full flex-1 min-h-0 overflow-y-auto scrollbar-hide pr-2",
          isScrolled
            ? "mask-[linear-gradient(to_bottom,transparent,black_5%,black_85%,transparent)]"
            : "mask-[linear-gradient(to_bottom,black_85%,transparent)]"
        )}
      >
        <div className="flex flex-col gap-6 pb-4 px-2 pt-2">
          {/* Table of Contents Section */}
          <div className="space-y-2">
            {
              pathname !== "/components"  && <p className="flex items-center rounded-md px-2 text-sm font-medium text-muted-foreground/80 hover:text-muted-foreground/60 active:text-muted-foreground/60 cursor-default bg-muted/50 border w-fit h-7 mt-1 mx-1 mb-0">
                On This Page
              </p>
            }
            {headings.length > 0 ? (() => {
              const groupedHeadings: { id: string; title: string; level: number; children: { id: string; title: string; level: number }[] }[] = [];
              let currentGroup: { id: string; title: string; level: number; children: { id: string; title: string; level: number }[] } | null = null;

              headings.forEach(h => {
                if (h.level === 2) {
                  currentGroup = { ...h, children: [] };
                  groupedHeadings.push(currentGroup);
                } else if (h.level === 3 && currentGroup) {
                  currentGroup.children.push(h);
                }
              });

              return (
                <ul className="mx-2 flex flex-col gap-1 pt-2 pb-0.5">
                  {groupedHeadings.map((group) => {
                    const isCollapsed = collapsedHeadings.has(group.id);
                    const hasChildren = group.children.length > 0;

                    return (
                      <li key={group.id} className="flex flex-col gap-1">
                        <div id={`toc-item-${group.id}`}>
                          <button
                            onClick={() => handleClick(group.id)}
                            className={cn(
                              "flex h-7 w-full justify-between items-center gap-2 overflow-hidden rounded-md pl-2 pr-1 text-left text-sm transition-all group",
                              activeId === group.id
                                ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                : "text-muted-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
                            )}
                          >
                            <span className="truncate">{group.title}</span>
                            {hasChildren && (
                              <div
                                role="button"
                                onClick={(e) => toggleCollapse(e, group.id)}
                                className="flex shrink-0 items-center justify-center h-5 w-5 group-hover:bg-background rounded-sm transition-colors text-muted-foreground"
                              >
                                <ChevronDown
                                  className={cn(
                                    "h-3.5 w-3.5 transition-transform duration-200",
                                    isCollapsed && "-rotate-90"
                                  )}
                                />
                              </div>
                            )}
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {!isCollapsed && hasChildren && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="flex flex-col gap-">
                                {group.children.map((child) => (
                                  <li id={`toc-item-${child.id}`} key={child.id} className="ml-4 border-l border-sidebar-border pl-1">
                                    <button
                                      onClick={() => handleClick(child.id)}
                                      className={cn(
                                        "flex h-7 w-full justify-between items-center gap-2 overflow-hidden rounded-sm px-2 text-left text-sm transition-all",
                                        activeId === child.id
                                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                          : "text-muted-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
                                      )}
                                    >
                                      <span className="truncate text-muted-foreground/90 max-w-30">{child.title}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              );
            })() : null}
          </div>
        </div>
      </InnerLenisScroll>
    </div>
  );
}
