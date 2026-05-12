"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface DiscordOnlineProps {
  guildId: string;
  className?: string;
  label?: string;
  inviteURL?: string;
}

const CACHE_KEY = (id: string) => `groot-studio:discord-online:${id}`;
const CACHE_TTL = 60 * 1000;

function getCached(guildId: string): number | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY(guildId));
    if (!raw) return null;
    const { value, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return value;
  } catch {
    return null;
  }
}

function setCache(guildId: string, value: number) {
  try {
    localStorage.setItem(
      CACHE_KEY(guildId),
      JSON.stringify({ value, timestamp: Date.now() }),
    );
  } catch {}
}

export function DiscordOnline({
  guildId,
  className,
  label = "members online in our Discord",
  inviteURL = "https://discord.com/invite",
}: DiscordOnlineProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const cached = getCached(guildId);
    if (cached !== null) {
      setCount(cached);
      return;
    }

    fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)
      .then((res) => res.json())
      .then((data) => {
        const presence = Number(data?.presence_count) || 0;
        setCount(presence);
        setCache(guildId, presence);
      })
      .catch(() => setCount(0));
  }, [guildId]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={cn("h-9 gap-1.5 pr-1.5 pl-2 border-border dark:border-input hover:bg-input", className)}
            asChild
          >
            <a href={inviteURL} target="_blank" rel="noopener noreferrer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.030zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                </span>
                <span className="text-[0.8125rem] text-muted-foreground tabular-nums">
                  {count === null ? "—" : count.toLocaleString()}
                </span>
              </span>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="font-sans">
          {count === null ? "Loading..." : `${count.toLocaleString()} ${label}`}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
