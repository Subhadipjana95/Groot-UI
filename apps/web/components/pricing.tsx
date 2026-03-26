"use client"

import { Button } from "@workspace/ui/components/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for students and open-source projects.",
    features: ["50+ UI Components", "Basic Documentation", "Community Support", "Free Forever"],
    cta: "Start for Free",
    variant: "outline"
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for individual developers and freelancers.",
    features: ["150+ UI Components", "Comprehensive Docs", "Email Support", "Advanced Animations", "Export to Figma"],
    cta: "Join Pro",
    variant: "default",
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored to your large-scale project needs.",
    features: ["Unlimited Components", "Dedicated Support", "Custom Theme Engine", "Private Registry", "Consulting"],
    cta: "Contact Sales",
    variant: "outline"
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-20 pb-40 sm:px-6 lg:px-8">
      <div className="mb-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Choose Your <span className="text-primary italic">Plan</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Ready to scale? We have plans for developers and teams of all sizes.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border-2 p-8 transition-all hover:scale-105 ${
              plan.featured
                ? "border-primary shadow-2xl shadow-primary/20 scale-105 md:scale-110"
                : "border-muted-foreground/20"
            }`}
          >
            {plan.featured && (
              <div className="absolute top-0 right-10 -translate-y-1/2 transform rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="mb-8 flex flex-col items-center gap-4 text-center">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="mb-10 flex flex-1 flex-col gap-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              className={`w-full h-12 text-base font-bold transition-all hover:opacity-90 ${
                plan.featured ? "bg-primary text-primary-foreground" : ""
              }`}
              variant={plan.variant as any}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
