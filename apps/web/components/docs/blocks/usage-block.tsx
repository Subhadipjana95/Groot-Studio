import { CodeBlock } from "@/components/docs/shared/code-block";

interface UsageBlockProps {
  usage: {
    import: string;
    importFileName?: string;
    importHighlightLines?: number[];
    code: string;
    codeFileName?: string;
    codeHighlightLines?: number[];
    extra?: {
      title?: string;
      code: string;
      fileName?: string;
      highlightLines?: number[];
    }[];
  };
}

export function UsageBlock({ usage }: UsageBlockProps) {
  // Respect key insertion order of the usage object from the configuration
  const steps = Object.keys(usage).flatMap((key) => {
    if (key === "import") {
      return [{
        title: "Import the component",
        code: usage.import,
        fileName: usage.importFileName,
        highlightLines: usage.importHighlightLines
      }];
    }
    if (key === "code") {
      return [{
        title: "Use the component",
        code: usage.code,
        fileName: usage.codeFileName,
        highlightLines: usage.codeHighlightLines
      }];
    }
    if (key === "extra" && usage.extra) {
      return usage.extra;
    }
    return [];
  });
  
  return (
    <div className="mt-6 flex flex-col gap-8">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={i} className="flex gap-4 relative">
            <div className="relative flex flex-col items-center flex-none">
              <div className="h-7 w-7 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-xs text-muted-foreground z-10 shrink-0">
                {i + 1}
              </div>
              {!isLast && (
                <div className="absolute top-7 bottom-[-32px] w-px bg-border" />
              )}
            </div>
            <div className="w-full min-w-0 flex flex-col gap-2">
              {step.title && (
                <h3 className="font-medium text-md text-foreground leading-7">
                  {step.title}
                </h3>
              )}
              <CodeBlock
                code={step.code}
                fileName={step.fileName}
                highlightLines={step.highlightLines}
                className="my-0 w-full"
                language="tsx"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
