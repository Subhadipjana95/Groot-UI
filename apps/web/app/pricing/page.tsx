import { Button } from "@workspace/ui/components/button";
import { Check, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

const plans = [
  {
    name: "Free",
    price: "0",
    originalPrice: "0",
    description: "Access to all free components",
    features: [
      "Access to all free components",
      "Copy and paste, no complexity",
      "Built with Next.js, React, Tailwind CSS & Framer Motion",
      "Fully responsive and customizable",
      "Documentation and examples included"
    ],
    cta: "Browse free components",
    variant: "outline",
    icon: Sparkles
  },
  {
    name: "Annual Access",
    price: "169",
    originalPrice: "249",
    description: "Paid yearly",
    features: [
      "Access to 200+ premium Component Blocks",
      "Access to 12+ ready-to-use Templates",
      "1 year of updates and new features",
      "AI-ready prompts for Lovable, V0 and more",
      "Private Discord community access",
      "Copy and paste, no complexity",
      "Built with Next.js, React, Tailwind CSS & Framer Motion",
      "Fully responsive and customizable"
    ],
    cta: "Get Annual Access",
    variant: "outline",
    icon: Zap
  },
  {
    name: "Lifetime Access",
    price: "199",
    originalPrice: "299",
    description: "One-time Purchase",
    features: [
      "Access to 200+ premium Blocks",
      "Access to 12+ ready-to-use Templates",
      "Lifetime updates for all content",
      "Access to all future releases",
      "Private Discord community access",
      "48-hour dedicated support turnaround",
      "AI-ready prompts for Lovable, V0 and more",
      "Copy and paste, no complexity",
      "Built with Next.js, React, Tailwind CSS & Framer Motion",
      "Fully responsive and customizable"
    ],
    cta: "Get Lifetime Access",
    featured: true,
    variant: "default",
    icon: ShieldCheck
  }
];

const Pricing = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      {/* Background patterns matching the brand theme */}
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

      <main className='max-w-7xl mx-auto px-12 relative flex flex-col items-center pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40'>
        <div className="w-full mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Simple Transparent Pricing
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Choose the plan that best fits your workflow. From solo makers to world-class agencies.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 items-start pb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative group flex flex-col rounded-2xl border border-border/60 bg-card p-2 transition-all duration-500",
                plan.featured && "border-brand1/30 bg-background shadow-2xl z-10"
              )}
            >
              {plan.featured && (
                <div className="absolute top-6 right-6 transform rounded-sm bg-brand-gradient px-2 py-1 text-[10px] font-bold text-background uppercase tracking-widest shadow-lg">
                  Most popular
                </div>
              )}

              <div className="bg-muted/50 p-2 rounded-xl px-3 mb-6 space-y-4 shadow-lg border border-border">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 py-4">
                  <div className="flex items-start">
                    <span className="text-xl font-medium mt-1 pr-1 text-muted-foreground">$</span>
                    <span className="text-6xl font-bold tracking-tighter text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  {plan.originalPrice !== plan.price && (
                    <span className="text-2xl text-muted-foreground/40 line-through font-medium">
                      ${plan.originalPrice}
                    </span>
                  )}
                </div>

                <Button
                  className={cn(
                    "w-full h-12 rounded-md text-sm font-semibold",
                    plan.featured 
                      ? "bg-brand-gradient text-background hover:shadow-xl hover:shadow-brand1/10" 
                      : "bg-secondary-foreground hover:bg-secondary-foreground/80 border border-foreground"
                  )}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="mt-auto space-y-4 px-4 pt-6 pb-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 group/feature">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/10">
                      <Check className="h-3 w-3 text-muted-foreground/60 group-hover/feature:text-brand1 transition-colors" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-32 w-full max-w-4xl rounded-3xl border border-border/40 bg-muted/10 p-12 text-center space-y-4">
          <h2 className="text-2xl font-bold">Trusted by developers worldwide</h2>
          <p className="text-muted-foreground text-lg">
            Join over 1,000+ developers building beautiful interfaces with Groot UI.
          </p>
        </div> */}
      </main>
    </div>
  );
};

export default Pricing;
