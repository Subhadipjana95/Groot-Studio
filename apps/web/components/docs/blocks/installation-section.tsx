"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { InstallBlock } from "@/components/docs/blocks/install-block";
import { ManualInstallBlock } from "@/components/docs/blocks/manual-install-block";

type InstallMode = "cli" | "manual";

interface InstallationSectionProps {
  registryUrl: string;
  installAlias?: string;
  componentName: string;
  componentCode?: string;
  npmDependencies?: string[];
  registryDependencies?: string[];
  hasReactVariant?: boolean;
}

export function InstallationSection({
  registryUrl,
  installAlias,
  componentName,
  componentCode,
  npmDependencies,
  registryDependencies,
  hasReactVariant = false,
}: InstallationSectionProps) {
  const [mode, setMode] = React.useState<InstallMode>("cli");

  return (
    <section className="scroll-m-20 w-full min-w-0">
      <div className="flex items-center gap-3">
        <h2
          id="installation"
          className="font-heading mt-12 scroll-m-20 text-2xl font-medium tracking-tight first:mt-0"
        >
          Installation
        </h2>
        <div className="flex items-center bg-muted/50 p-[3px] rounded-md border border-input/60">
          <button
            onClick={() => setMode("cli")}
            className={cn(
              "flex items-center gap-2 px-2 py-1 text-xs font-medium rounded-sm",
              mode === "cli"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            CLI
          </button>
          <button
            onClick={() => setMode("manual")}
            className={cn(
              "flex items-center gap-2 px-2 py-1 text-xs font-medium rounded-sm",
              mode === "manual"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Manual
          </button>
        </div>
      </div>

      {mode === "cli" ? (
        <InstallBlock 
          command={registryUrl} 
          installAlias={installAlias} 
          hasReactVariant={hasReactVariant} 
        />
      ) : (
        componentCode && (
          <ManualInstallBlock
            componentName={componentName}
            componentCode={componentCode}
            npmDependencies={npmDependencies}
            registryDependencies={registryDependencies}
          />
        )
      )}
    </section>
  );
}
