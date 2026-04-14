import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ComponentPreviews } from "@/components/previews"
import { Pricing } from "@/components/pricing"
import { CTAAndTestimonials } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="relative flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="max-w-full flex-1 overflow-x-hidden">
        <Hero />
        <ComponentPreviews />
        <Pricing />
        <CTAAndTestimonials />
      </main>
      <Footer />
    </div>
  )
}
