
import { Hero } from "@/components/hero"
import { ComponentPreviews } from "@/components/componentPreviews"
import { Testimonials } from "@/components/testimonial"
import { FAQ } from "@/components/faq"
import { PageWrapper } from "@/components/utilities/page-wrapper"

export default function Page() {
  return (
    <>
      <PageWrapper>
        <main className="max-w-7xl mx-auto overflow-x-hidden">
          <Hero />
          <ComponentPreviews />
          {/* <Testimonials /> */}
          <FAQ />
        </main>
      </PageWrapper>
    </>
  )
}
