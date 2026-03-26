"use client"

import { Button } from "@workspace/ui/components/button"
import { ArrowRight, Copy, Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-10 overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-60 lg:pb-48">
      {/* Background Decor */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-accent opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border bg-background/5 px-3 py-1 text-sm font-medium transition-colors hover:bg-background/10">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
          <span className="text-muted-foreground mr-1">New:</span> 
          <span>v1.0.0 is now live!</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </div>

        <h1 className="mt-8 max-w-4xl bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
          Build stunning interfaces with <span className="text-primary italic">Groot UI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl md:text-2xl">
          The ultimate component library for high-performing, accessible, and stunning web apps. Hand-crafted components designed for modern developers.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button size="lg" className="h-12 border px-8 text-lg font-semibold shadow-xs">
            Start Building Free
          </Button>
          <Button size="lg" variant="outline" className="h-12 border px-8 text-lg font-semibold">
            View Components
          </Button>
        </div>

        {/* Demo command block */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-md overflow-hidden rounded-xl border bg-black/80 p-1 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono text-white/50">Terminal</span>
            </div>
            <div className="flex items-center justify-between p-4 font-mono text-sm sm:text-base">
              <code className="text-white">
                <span className="text-primary">npx</span> shadcn@latest add https://groot-ui.vercel.app/r/glow-card.json
              </code>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white/50 hover:text-white">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-size-[32px_32px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
    </section>
  )
}
