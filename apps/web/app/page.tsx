
import { Hero } from "@/components/hero"
import { ComponentPreviews } from "@/components/componentPreviews"
import { Testimonials } from "@/components/testimonial"
import { FAQ } from "@/components/faq"

export default function Page() {
  return (
    <>
      <div className="relative w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 border-r border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)]"
          style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 border-l border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)] "
          style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
        />
        <main className="max-w-7xl mx-auto overflow-x-hidden">
          <Hero />
          <ComponentPreviews />
          <Testimonials />
          <FAQ />
        </main>
      </div>
    </>
  )
}
