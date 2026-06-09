"use client"

import React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Dialog, DialogContent, DialogTitle } from "@workspace/ui/components/dialog"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DATA } from "@/data/Data"
import { registry } from "@/lib/registry"


interface NavSearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NavSearchDialog({ open, onOpenChange }: NavSearchDialogProps) {
  const router = useRouter()
  const openRef = React.useRef(open)
  openRef.current = open

  const onOpenChangeRef = React.useRef(onOpenChange)
  onOpenChangeRef.current = onOpenChange

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChangeRef.current(!openRef.current)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="gap-0 p-0 sm:max-w-lg border-6 border-input rounded-xl overflow-hidden"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Search</DialogTitle>
        <Command className="rounded-xl">
          <CommandInput placeholder="Search components, pages, settings..." />
          <CommandList
            className="max-h-[380px] min-h-[280px] overflow-y-auto overscroll-contain scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] mask-[linear-gradient(to_bottom,transparent,black_20px,black_calc(100%-60px),transparent_97.1%)]"
            onWheel={(e) => e.stopPropagation()}
          >
            <CommandEmpty className="flex min-h-[200px] flex-col items-center justify-center">
              <SearchIcon className="mb-2 size-6 text-muted-foreground" aria-hidden />
              <p className="text-xs text-muted-foreground">No results found</p>
            </CommandEmpty>
            <CommandGroup heading="Quick Actions">
              {DATA.SEARCH_DATA.map((item) => {
                const { id, title, description, category, icon: Icon } = item;
                const destination = 'destination' in item ? item.destination as string : undefined;
                const isExternal = destination?.startsWith("http")
                const content = (
                  <CommandItem
                    value={title}
                    className="flex cursor-pointer items-center gap-3 py-2"
                    onSelect={() => {
                      onOpenChange(false)
                      if (destination) {
                        if (isExternal) {
                          window.open(destination, "_blank", "noopener,noreferrer")
                        } else {
                          router.push(destination)
                        }
                      }
                    }}
                  >
                    {Icon && <Icon className="size-4 text-muted-foreground" aria-hidden />}
                    <div className="flex flex-col">
                      <span className="max-w-[250px] truncate text-sm font-medium">{title}</span>
                      <span className="text-xs text-muted-foreground">{description}</span>
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">{category}</span>
                  </CommandItem>
                )
                return <React.Fragment key={id}>{content}</React.Fragment>
              })}
            </CommandGroup>

            <CommandGroup heading="Components">
              {registry.map((component) => {
                const { name, title, description, category, tags } = component;
                const destination = `/components/${name}`;
                const content = (
                  <CommandItem
                    value={`${title} ${description} ${category.name} ${tags.join(" ")}`}
                    className="flex cursor-pointer items-center gap-3 py-2"
                    onSelect={() => {
                      onOpenChange(false)
                      router.push(destination)
                    }}
                  >
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="truncate text-sm font-medium">{title}</span>
                      <span className="text-xs text-muted-foreground truncate">{description}</span>
                    </div>
                    <div className="ml-auto flex flex-col items-end gap-1">
                      <span className="text-xs text-muted-foreground">{category.name}</span>
                      <div className="flex gap-1">
                        {tags.slice(0, 2).map((tag: string) => (
                          <span key={tag} className="text-[10px] bg-muted/50 px-1.5 py-0.5 rounded-md border border-border/50 text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </CommandItem>
                );

                return <React.Fragment key={name}>{content}</React.Fragment>;
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
