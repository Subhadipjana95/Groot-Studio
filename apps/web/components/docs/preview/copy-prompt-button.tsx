"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ClaudeIcon, CursorIcon, LovableIcon } from "@workspace/ui/components/icons/icon";
import { generatePrompt } from "@/lib/prompts";

const PROMPT_OPTIONS = [
  { id: "claude", name: "Claude Code", icon: ClaudeIcon },
  { id: "cursor", name: "Cursor (or any IDE)", icon: CursorIcon },
  { id: "lovable", name: "Lovable", icon: LovableIcon }
];

export function CopyPromptButton({ registryUrl }: { registryUrl?: string }) {
  const [selected, setSelected] = React.useState("cursor");
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async (toolId: string) => {
    setSelected(toolId);
    if (!registryUrl) return;

    try {
      // Extract the relative path from the registryUrl (e.g., https://grootstudio.com/r/name.json -> /r/name.json)
      let fetchPath = registryUrl;
      if (registryUrl.startsWith("http")) {
        const url = new URL(registryUrl);
        fetchPath = url.pathname;
      }

      const response = await fetch(fetchPath);
      if (!response.ok) throw new Error("Failed to fetch component data");
      const data = await response.json();

      const prompt = generatePrompt(toolId, data);

      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(prompt);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      } else {
        throw new Error("Clipboard API not available");
      }
    } catch (error) {
      console.error("Error copying prompt:", error);
      // Optional: fallback to a more primitive copy method or show alert
      alert("Failed to copy to clipboard. Please check console for details.");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input/60 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors outline-none"
        >
          {isCopied ? "Copied!" : "Copy prompt"}
          {isCopied ? <span className="relative flex h-4 w-4 items-center justify-center">
            <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
              <defs>
                <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand2)" />
                  <stop offset="100%" stopColor="var(--brand1)" />
                </linearGradient>
              </defs>
            </svg>
            <Check className="h-4 w-4 stroke-[url(#brand-gradient)]" />
          </span> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-fit rounded-lg border border-input/60 bg-card text-muted-foreground shadow-md p-1"
      >
        <div className="flex flex-col gap-0.5">
          {PROMPT_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.id}
              onClick={() => handleCopy(option.id)}
              className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-md p-2 text-xs font-medium outline-none transition-colors",
                "focus:bg-muted dark:focus:bg-background focus:text-foreground"
              )}
            >
              <div className="flex items-center gap-2.5">
                <option.icon className="h-4 w-4 opacity-80" />
                {option.name}
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
