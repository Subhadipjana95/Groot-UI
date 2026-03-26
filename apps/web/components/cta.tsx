"use client"

import { Button } from "@workspace/ui/components/button"

const testimonials = [
  {
    name: "Alex Rivers",
    title: "Lead Developer at TechFlow",
    content: "Groot UI has completely transformed how our team builds components. The developer experience is just top-notch.",
    avatar: "AR"
  },
  {
    name: "Samantha Lee",
    title: "Founding Engineer at Bloom",
    content: "The components are not only beautiful but really accessible. We went from a blank canvas to a full MVP in record time.",
    avatar: "SL"
  },
  {
    name: "John Smith",
    title: "Product Designer at Figma",
    content: "Finally, a UI library that prioritizes design as much as it does performance. I'm excited about the possibilities.",
    avatar: "JS"
  }
]

export function CTAAndTestimonials() {
  return (
    <section className="container mx-auto px-4 py-20 pb-40 sm:px-6 lg:px-8">
      <div className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          What developers <span className="text-primary italic">Are Saying</span>
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-3xl border-2 border-muted-foreground/10 bg-muted/20 p-8 pt-12 transition-all hover:bg-muted/40"
            >
              <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                {testimonial.avatar}
              </div>
              <p className="mb-8 text-lg font-medium leading-8 text-muted-foreground italic">
                "{testimonial.content}"
              </p>
              <div className="flex flex-col">
                <span className="font-bold">{testimonial.name}</span>
                <span className="text-sm text-muted-foreground">{testimonial.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-primary/10 border-2 border-primary/20 p-10 md:p-20 shadow-2xl">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(var(--primary),0.05),transparent_100%)]" />
         <div className="relative z-10 flex flex-col items-center gap-10 text-center">
            <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl max-w-4xl">
                   Ready to Build Your <br /> <span className="text-primary">Next Big Idea?</span>
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                    Join over 10,000+ developers building faster with Groot UI. No credit card required.
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary text-primary-foreground shadow-2xl shadow-primary/20">
                    Get Started Now
                </Button>
                <Button variant="ghost" size="lg" className="h-16 px-10 text-xl font-bold hover:bg-primary/5 transition-colors">
                    Schedule a Demo
                </Button>
            </div>
         </div>

         {/* Backdrop effect */}
         <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
         <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-50" />
      </div>
    </section>
  )
}
