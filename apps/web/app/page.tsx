
import { Hero } from "@/components/hero"
import { ComponentPreviews } from "@/components/componentPreviews"
import { FAQ } from "@/components/faq"
import SectionDivider from "@/components/utilities/SectionDivider"
import TechStacks from "@/components/TechStacks"

export default function Page() {
  return (
    <div className="overflow-x-clip w-full">
      <main className="mx-auto relative max-w-96 sm:max-w-6xl border-x border-border">
        <Hero />
        <SectionDivider />
        <TechStacks />
        <SectionDivider />
        <ComponentPreviews />
        <SectionDivider />
        {/* <Testimonials /> */}
        <FAQ />
        <SectionDivider />
      </main>
    </div>
  )
}
