import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { registry, getComponent } from "@/lib/registry";
import { Heading } from "@/components/docs/shared/heading";
import { InstallationSection } from "@/components/docs/blocks/installation-section";
import { UsageBlock } from "@/components/docs/blocks/usage-block";
import { PropsTable } from "@/components/docs/blocks/props-table";
import { DependenciesBlock } from "@/components/docs/blocks/dependencies-block";
import { ExamplesSection } from "@/components/docs/blocks/examples-section";
import { PreviewContainer } from "@/components/docs/preview/preview-container";
import { ComponentPreview } from "@/components/docs/preview/component-preview";

interface ComponentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getComponent(slug);

  if (!component) {
    return {
      title: "Component Not Found - Groot Studio",
    };
  }

  const title = `${component.title} - Groot Studio`;
  const description = component.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `https://grootstudio.vercel.app/api/og?title=${encodeURIComponent(component.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://grootstudio.vercel.app/api/og?title=${encodeURIComponent(component.title)}`],
    },
  };
}


/**
 * Reads the preview file source code for a given component slug.
 * Runs at build time (server component), so fs access is safe.
 */
function getPreviewCode(slug: string): string | undefined {
  const previewsDir = path.join(process.cwd(), "registry", "previews");
  const fileName = `${slug}.preview.tsx`;

  // 1. Try the component's own subfolder first: previews/{slug}/{slug}.preview.tsx
  try {
    const directPath = path.join(previewsDir, slug, fileName);
    return fs.readFileSync(directPath, "utf-8");
  } catch { /* not found — continue */ }

  // 2. Scan all subdirectories (handles variants like "github-calendar-variant01"
  //    living inside the "github-calendar" folder)
  try {
    const dirs = fs.readdirSync(previewsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory());
    for (const dir of dirs) {
      const candidate = path.join(previewsDir, dir.name, fileName);
      if (fs.existsSync(candidate)) {
        return fs.readFileSync(candidate, "utf-8");
      }
    }
  } catch { /* fallthrough */ }

  return undefined;
}

/**
 * generateStaticParams — pre-renders every component docs page at build time.
 * This is the key to Aceternity/shadcn-level snappiness:
 * pages land on Vercel's CDN as static HTML, zero runtime latency.
 */
export async function generateStaticParams() {
  return registry.map((component) => ({
    slug: component.name,
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getComponent(slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="container max-w-5xl py-10 lg:py-12">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hover:text-foreground transition-colors cursor-default">Components</span>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground font-medium">{component.category.name}</span>
        </div>
        <h1 className="text-3xl font-medium tracking-tight lg:text-4xl text-foreground">
          {component.title}
        </h1>
        <p className="text-sm md:text-lg text-muted-foreground leading-tight line-clamp-2 max-w-[85ch]">
          {component.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-secondary/50 text-muted-foreground text-xs tracking-wider border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:gap-10">
        <section className="scroll-m-20 w-full min-w-0" id="preview">
          <Heading id="preview" title="Preview" className="sr-only" />
          <PreviewContainer
            usageCode={component.usage.code}
            componentCode={component.files?.[0]?.content}
            previewCode={getPreviewCode(component.name)}
            registryUrl={component.registryUrl}
          >
            <ComponentPreview slug={component.name} />
          </PreviewContainer>
        </section>

        <InstallationSection
          registryUrl={component.registryUrl}
          installAlias={component.installAlias}
          componentName={component.name}
          componentCode={component.files?.[0]?.content}
          npmDependencies={component.npmDependencies}
          registryDependencies={component.registryDependencies}
          hasReactVariant={component.hasReactVariant}
        />

        <ExamplesSection
          examples={component.examples?.map((ex) => ({
            ...ex,
            previewCode: getPreviewCode(ex.slug),
          }))}
          componentCode={component.files?.[0]?.content}
          registryUrl={component.registryUrl}
        />

        <section className="scroll-m-20 w-full min-w-0">
          <Heading title="Usage" />
          <UsageBlock
            importCode={component.usage.import}
            usageCode={component.usage.code}
          />
        </section>

        <section className="scroll-m-20 w-full min-w-0">
          <Heading title="Props" />
          <PropsTable props={component.props} />
        </section>

        {component.npmDependencies && component.npmDependencies.length > 0 && (
          <section className="scroll-m-20 w-full min-w-0">
            <Heading title="Dependencies" />
            <DependenciesBlock dependencies={component.npmDependencies} />
          </section>
        )}
      </div>
    </div>
  );
}
