"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { registry } from "@/lib/registry";
import {
  Sidebar as BaseSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider
} from "@workspace/ui/components/sidebar";

export function Sidebar() {
  const pathname = usePathname();

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

  return (
    <SidebarProvider className="min-h-0 w-full">
      <BaseSidebar collapsible="none" className="w-full bg-transparent border-none">
        <SidebarContent className="scrollbar-hide pb-6 overflow-visible">
          <SidebarGroup className="pt-0 w-full flex flex-col items-start overflow-visible">
            <SidebarMenu className="items-start">
              <SidebarMenuItem>
                <SidebarMenuButton className="font-medium text-muted-foreground/80 hover:text-muted-foreground/60 cursor-default bg-muted/50 border hover:border-dashed w-fit h-7 mb-1">
                  Getting Started
                </SidebarMenuButton>
                <SidebarMenuSub className="items-start">
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={pathname === "/components"} className="w-fit">
                      <Link href="/components">
                        <div className="px-0.5">
                          Overview
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={pathname === "/components/installation"} className="w-fit">
                      <Link href="/components/installation">
                        <div className="px-0.5">
                          Installation
                        </div>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              {sortedCategories.map(([category, items]) => (
                <SidebarMenuItem key={category} className="group flex flex-col items-start">
                  <SidebarMenuButton className="font-medium text-muted-foreground/80 hover:text-muted-foreground/60 active:text-muted-foreground/60 cursor-default bg-muted/50 border hover:border-dashed w-fit h-7 my-1">
                    {category}
                  </SidebarMenuButton>
                  <SidebarMenuSub className="items-start">
                    {items.map((item) => (
                      <SidebarMenuSubItem key={item.name}>
                        <SidebarMenuSubButton asChild isActive={pathname === `/components/${item.name}`} className="w-fit">
                          <Link href={`/components/${item.name}`} className="flex items-center gap-2">
                            <div className="flex items-center gap-2 min-w-0 px-0.5">
                              <span className="whitespace-nowrap">{item.title}</span>
                              {item.label && (
                                <span className="rounded-full px-1.5 py-1 text-[9px] font-medium bg-brand-gradient text-background dark:text-background shrink-0 leading-none whitespace-nowrap">
                                  {item.label}
                                </span>
                              )}
                            </div>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </BaseSidebar>
    </SidebarProvider>
  );
}