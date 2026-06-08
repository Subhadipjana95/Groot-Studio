import { InstallBlock } from "@/components/docs/blocks/install-block";
import { CodeBlock } from "@/components/docs/shared/code-block";

export default function InstallationPage() {
  return (
    <div className="flex flex-col gap-8 pt-12">

      {/* Header */}
      <h1 className="font-normal font-sans text-4xl tracking-tight sm:text-5xl text-foreground text-center"><span className="text-brand1 [text-shadow:0_0_12px_var(--brand1)] font-[gambarino] font-medium">Installation </span>Guide</h1>

      {/* Steps */}
      <div className="flex flex-col gap-12 mt-2">
        {/* Step 1 */}
        <section className="flex gap-6 relative group">
          <div className="relative flex flex-col items-center flex-none">
            <div className="h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-sm z-10 shrink-0">
              1
            </div>
            <div className="absolute top-8 bottom-[-48px] w-px bg-border" />
          </div>
          <div className="flex flex-col gap-4 w-full min-w-0">
            <h2 id="create-project" className="text-2xl font-medium tracking-tight scroll-m-20">Create project</h2>
            <p className="text-muted-foreground">
              Run the <code className="bg-muted px-1.5 py-0.5 rounded-sm font-mono text-sm leading-none">init</code> command to create a new Next.js project or to setup an existing one:
            </p>
            <InstallBlock command="" type="init" />
          </div>
        </section>

        {/* Step 2 */}
        <section className="flex gap-6 relative group">
          <div className="relative flex flex-col items-center flex-none">
            <div className="h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-sm z-10 shrink-0">
              2
            </div>
            <div className="absolute top-8 bottom-[-48px] w-px bg-border" />
          </div>
          <div className="flex flex-col gap-4 w-full min-w-0">
            <h2 id="add-components" className="text-2xl font-medium tracking-tight scroll-m-20">Add components</h2>
            <p className="text-muted-foreground">
              You can now start adding components to your project.
            </p>
            <InstallBlock command="@grootstudio/3d-button" type="add" />
          </div>
        </section>

        {/* Step 3 */}
        <section className="flex gap-6 relative group">
          <div className="relative flex flex-col items-center flex-none">
            <div className="h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-sm z-10 shrink-0">
              3
            </div>
            {/* No line after the last step */}
          </div>
          <div className="flex flex-col gap-4 w-full min-w-0">
            <h2 id="import-component" className="text-2xl font-medium tracking-tight scroll-m-20">Import component</h2>
            <p className="text-muted-foreground">
              The command above will add the <code className="bg-muted px-1.5 py-0.5 rounded-sm font-mono text-sm">ThreeDButton</code> component to your project. You can then import it like this:
            </p>
            <div className="mt-2 text-sm">
              <CodeBlock
                code={`import { ThreeDButton } from "@/components/3d-button"

export default function Demo() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <ThreeDButton 
        color1="oklch(79.5% 0.184 86.047)" 
        color2="oklch(50.5% 0.213 27.518)"
      >
        Get Started
      </ThreeDButton>
    </div>
  )}`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
