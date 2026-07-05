import { Heading } from "@/components/docs/shared/heading";
import { PreviewContainer } from "@/components/docs/preview/preview-container";
import { ComponentPreview } from "@/components/docs/preview/component-preview";

interface ExamplesSectionProps {
  examples?: {
    slug: string;
    title: string;
    previewCode?: string;
  }[];
  componentCode?: string;
  registryUrl?: string;
}

export function ExamplesSection({ examples, componentCode, registryUrl }: ExamplesSectionProps) {
  if (!examples || examples.length === 0) return null;

  return (
    <section className="scroll-m-20 w-full min-w-0" id="examples">
      {/* <Heading title="Examples" className="mb-4" /> */}
      <div className="space-y-4">
        {examples.map((example) => (
          <div key={example.slug} className="space-y-2 pt-8 border-t border-border/40 first:border-t-0 first:pt-0">
            <h3 id={example.slug} className="text-2xl font-medium tracking-tight scroll-m-20">
              {example.title}
            </h3>
            <PreviewContainer
              previewCode={example.previewCode}
              componentCode={componentCode}
              registryUrl={registryUrl}
              showCopyPrompt={false}
              className="mt-0"
            >
              <ComponentPreview slug={example.slug} />
            </PreviewContainer>
          </div>
        ))}
      </div>
    </section>
  );
}
