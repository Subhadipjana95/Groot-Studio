"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyButton } from "./copy-button";
import { cn } from "@workspace/ui/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
  language?: string;
  expandable?: boolean;
  collapsedHeight?: number;
  fileName?: string;
  highlightLines?: number[];
}

export function CodeBlock({
  code,
  className,
  language = "tsx",
  expandable = false,
  collapsedHeight = 400,
  fileName,
  highlightLines,
}: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(!expandable);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const style = React.useMemo(() => {
    const baseStyle = resolvedTheme === "dark" ? materialDark : materialLight;
    const cleanStyle = { ...baseStyle };

    // Remove background from all elements in the style object
    Object.keys(cleanStyle).forEach(key => {
      if (cleanStyle[key]) {
        delete cleanStyle[key].background;
        delete cleanStyle[key].backgroundColor;
      }
    });

    return cleanStyle;
  }, [resolvedTheme]);

  return (
    <div
      className={cn(
        "group relative my-4 flex flex-col overflow-hidden rounded-lg border border-input/60 bg-muted/30 dark:bg-muted/50 transition-all duration-300",
        className,
        !isExpanded && "overflow-hidden"
      )}
      style={!isExpanded ? { height: collapsedHeight } : { height: "auto" }}
    >
      <div className={cn(
        "z-40 flex items-center justify-between pl-3 pr-1 py-1",
        fileName
          ? "border-b border-input/60"
          : "absolute inset-x-2 top-2"
      )}>
        {fileName ? (
          <div className="flex items-center gap-2">
            <span className="flex h-5 items-end justify-end rounded-[3px] bg-blue-500/15 pl-1.5 pr-[2px] text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400">
              TS
            </span>
            <span className="text-sm font-mono text-muted-foreground">
              {fileName}
            </span>
          </div>
        ) : <div />}
        <div className="flex items-center gap-1.5">
          {expandable && isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="h-7 px-2 text-xs font-medium rounded-sm bg-background border border-input/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
            >
              Collapse
            </button>
          )}
          <div className="rounded-sm bg-background">
            <CopyButton variant="outline" value={code} className="h-7 w-7 rounded-sm bg-background hover:bg-muted" />
          </div>
        </div>
      </div>

      {mounted && (
        <div className={cn(
          "flex-1 min-h-0 overflow-x-auto scrollbar-hide py-3 transition-all",
          "mask-[linear-gradient(to_right,black_85%,transparent_100%)]",
          expandable && !isExpanded && "mask-[linear-gradient(to_bottom,black_65%,transparent_100%),linear-gradient(to_right,black_85%,transparent_100%)] mask-intersect"
        )}>
          <SyntaxHighlighter
            language={language}
            style={style}
            className="scrollbar-hide"
            codeTagProps={{
              style: {
                background: "transparent",
              },
            }}
            customStyle={{
              margin: 0,
              padding: "0 1rem",
              background: "transparent",
              fontSize: "14px",
              lineHeight: "1.7",
            }}
            showLineNumbers={true}
            lineNumberStyle={{
              minWidth: "2rem",
              paddingRight: "1rem",
              textAlign: "right",
              color: "var(--primary)",
              opacity: 0.8,
              userSelect: "none",
              borderRight: "none",
            }}
            wrapLines={true}
            lineProps={(lineNumber) => {
              const isHighlighted = highlightLines?.includes(lineNumber);
              return {
                style: {
                  display: "block",
                  width: "100%",
                  backgroundColor: isHighlighted ? "rgba(255, 255, 255, 0.05)" : "transparent",
                  borderLeft: isHighlighted ? "2px solid var(--ring)" : "2px solid transparent",
                  paddingLeft: "0.25rem",
                  margin: "0 -1rem",
                },
              };
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      )}

      {expandable && !isExpanded && (
        <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center p-6 pointer-events-none">
          <button
            onClick={() => setIsExpanded(true)}
            className="pointer-events-auto h-7 px-2 text-xs font-medium rounded-sm bg-background border border-input/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            Expand
          </button>
        </div>
      )}
    </div>
  );
}
