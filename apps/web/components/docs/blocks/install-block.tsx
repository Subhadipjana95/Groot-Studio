"use client";

import * as React from "react";
import { CopyButton } from "@/components/docs/shared/copy-button";
import { Terminal } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const packageManagers: { id: PackageManager; label: string }[] = [
  { id: "npm", label: "npm" },
  { id: "pnpm", label: "pnpm" },
  { id: "yarn", label: "yarn" },
  { id: "bun", label: "bun" },
];

export function InstallBlock({
  command: slug,
  installAlias,
  type = "add",
  className,
  hasReactVariant = false
}: {
  command: string;
  installAlias?: string;
  type?: "add" | "init" | "install";
  className?: string;
  hasReactVariant?: boolean;
}) {
  const [selectedPm, setSelectedPm] = React.useState<PackageManager>("npm");
  const [framework, setFramework] = React.useState<"nextjs" | "reactjs">("nextjs");

  const getCommand = (pm: PackageManager) => {
    let currentSlug = slug;
    
    if (installAlias) {
      currentSlug = `@grootstudio/${installAlias}`;
      if (framework === "reactjs" && hasReactVariant) {
        currentSlug = `${currentSlug}-react`;
      }
    } else {
      if (framework === "reactjs" && hasReactVariant) {
        currentSlug = slug.replace(".json", "-react.json");
      }
    }

    if (type === "install") {
      switch (pm) {
        case "npm":
          return `npm install ${currentSlug}`.trim();
        case "pnpm":
          return `pnpm add ${currentSlug}`.trim();
        case "yarn":
          return `yarn add ${currentSlug}`.trim();
        case "bun":
          return `bun add ${currentSlug}`.trim();
        default:
          return `npm install ${currentSlug}`.trim();
      }
    }
    switch (pm) {
      case "npm":
        return `npx shadcn@latest ${type} ${currentSlug}`.trim();
      case "pnpm":
        return `pnpm dlx shadcn@latest ${type} ${currentSlug}`.trim();
      case "yarn":
        return `yarn shadcn@latest ${type} ${currentSlug}`.trim();
      case "bun":
        return `bunx --bun shadcn@latest ${type} ${currentSlug}`.trim();
      default:
        return `npx shadcn@latest ${type} ${currentSlug}`.trim();
    }
  };

  const currentCommand = getCommand(selectedPm);

  return (
    <div className={cn("relative mt-6 overflow-hidden rounded-lg border border-input/60 bg-muted/30 dark:bg-muted/50", className)}>
      <div className="flex items-center justify-between border-b border-border/50 pl-3 pr-1 pt-1.5 pb-1">
        <div className="flex items-center gap-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-xs bg-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-accent" />
          </div>
          <div className="flex items-center">
            {packageManagers.map((pm) => (
              <button
                key={pm.id}
                onClick={() => setSelectedPm(pm.id)}
                className={cn(
                  "px-2 py-[3px] text-sm transition-colors rounded-sm",
                  selectedPm === pm.id
                    ? "bg-background text-foreground border border-input/70"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {pm.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {hasReactVariant && (
            <div className="h-7 flex items-center bg-background/50 p-[2px] rounded-md border border-input/50">
              <button
                onClick={() => setFramework("nextjs")}
                className={cn(
                  "px-2 py-[2px] text-[10px] uppercase font-medium transition-colors rounded-sm",
                  framework === "nextjs"
                    ? "bg-muted/30 dark:bg-muted/50 text-primary border border-input/40"
                    : "text-muted-foreground cursor-pointer"
                )}
              >
                Next.js
              </button>
              <button
                onClick={() => setFramework("reactjs")}
                className={cn(
                  "px-2 py-[3px] text-[10px] uppercase font-medium transition-colors rounded-sm",
                  framework === "reactjs"
                    ? "bg-muted/30 dark:bg-muted/50 text-primary border border-input/40"
                    : "text-muted-foreground cursor-pointer"
                )}
              >
                React.js
              </button>
            </div>
          )}
          <CopyButton value={currentCommand} variant="outline" className="h-7 w-7 rounded-sm" />
        </div>
      </div>
      <div className="px-3 py-3 font-mono text-sm leading-relaxed text-muted-foreground">
        <code>{currentCommand}</code>
      </div>
    </div>
  );
}
