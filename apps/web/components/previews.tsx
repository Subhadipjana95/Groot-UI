"use client"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Calendar, Layers, ShieldCheck, Sparkles, Zap, Smartphone, Monitor, UserCircle } from "lucide-react"

export function ComponentPreviews() {
  return (
    <section id="features" className="container mx-auto px-4 py-20 pb-32 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Everything you need to <span className="text-primary italic">Ship Faster</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Hand-crafted components, meticulously designed to be accessible, responsive, and easy to use.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Bento Grid Item: Large Card */}
        <Card className="group relative flex flex-col justify-between overflow-hidden border-2 transition-all hover:border-primary/50 md:col-span-2">
          <CardHeader>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Sparkles className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">Animated Components</CardTitle>
            <CardDescription className="text-base">
              Bring your apps to life with built-in Framer Motion support and buttery-smooth transitions.
            </CardDescription>
          </CardHeader>
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rotate-12 bg-primary/20 p-6 blur-3xl" />
          <CardContent className="h-48 overflow-hidden">
            <div className="grid grid-cols-2 gap-4">
                <div className="h-20 w-full animate-pulse rounded-lg bg-muted-foreground/10" />
                <div className="h-20 w-full animate-pulse rounded-lg bg-muted-foreground/10" style={{ animationDelay: "0.2s" }} />
                <div className="h-20 w-full animate-pulse rounded-lg bg-muted-foreground/10" style={{ animationDelay: "0.4s" }} />
                <div className="h-20 w-full animate-pulse rounded-lg bg-muted-foreground/10" style={{ animationDelay: "0.6s" }} />
            </div>
          </CardContent>
        </Card>

        {/* Bento Grid Item: High Performance */}
        <Card className="flex flex-col border-2 transition-all hover:border-primary/50 lg:col-span-1">
          <CardHeader>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors">
              <Zap className="h-6 w-6" />
            </div>
            <CardTitle>Lightning Fast</CardTitle>
            <CardDescription>
              Optimized for performance and SSR. Zero bloat, only essential code.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bento Grid Item: Accessibility */}
        <Card className="flex flex-col border-2 transition-all hover:border-primary/50 lg:col-span-1">
          <CardHeader>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <CardTitle>Accessible by Design</CardTitle>
            <CardDescription>
              Full WAI-ARIA compliance. We take care of ARIA roles and labels so you don't have to.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bento Grid Item: Responsive */}
        <Card className="flex flex-col border-2 transition-all hover:border-primary/50 xl:col-span-2">
            <div className="flex flex-1 p-6 pb-0">
                <div className="flex h-full w-full flex-col justify-end gap-6 overflow-hidden rounded-t-xl bg-muted p-8 shadow-inner">
                   <div className="flex gap-4">
                        <Monitor className="h-10 w-10 text-primary" />
                        <Smartphone className="h-10 w-10 text-muted-foreground" />
                   </div>
                   <div className="space-y-2">
                        <div className="h-4 w-3/4 animate-pulse rounded bg-muted-foreground/20" />
                        <div className="h-4 w-1/2 animate-pulse rounded bg-muted-foreground/20" />
                   </div>
                </div>
            </div>
          <CardHeader className="p-6">
            <CardTitle>Responsive Components</CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Works seamlessly on any device. Mobile, Tablet, or Desktop.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bento Grid Item: Developer Experience */}
        <Card className="flex flex-col border-2 transition-all hover:border-primary/50">
          <CardHeader>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors">
              <Layers className="h-6 w-6" />
            </div>
            <CardTitle>Modern Tech Stack</CardTitle>
            <CardDescription>
              Built with React 19, Next.js 15, and Tailwind CSS.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bento Grid Item: Dark Mode */}
        <Card className="flex flex-col border-2 border-primary/50 shadow-lg shadow-primary/10 transition-all hover:border-primary/80 lg:col-span-1">
          <CardHeader>
             <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors">
              <Calendar className="h-6 w-6" />
            </div>
            <CardTitle>Dark Mode Ready</CardTitle>
            <CardDescription>
              First-class support for dark mode. No more custom logic.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-6">
              <div className="flex h-16 w-32 overflow-hidden rounded-full border-2 bg-linear-to-r from-background to-black transition-all group-hover:scale-105" />
          </CardContent>
        </Card>
      </div>

       {/* Demo Components Preview Area */}
      <div className="mt-20 overflow-hidden rounded-3xl border-2 bg-muted/30 p-4 md:p-8 lg:mt-32">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
           <div className="space-y-1">
                <h3 className="text-2xl font-bold">Interactive Showcase</h3>
                <p className="max-w-md text-muted-foreground">
                    Try out some of our pre-built components right here.
                </p>
           </div>
           <Button variant="outline" className="border-2 font-semibold">Explore Component Library</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-6 rounded-2xl bg-background p-6 shadow-xl transition-all hover:shadow-2xl md:p-8">
                <div className="flex items-center gap-3">
                    <UserCircle className="h-10 w-10 text-primary" />
                    <div>
                        <div className="font-bold">User Profile</div>
                        <div className="text-xs text-muted-foreground">Active now</div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="h-2 w-full rounded bg-muted" />
                    <div className="h-2 w-3/4 rounded bg-muted" />
                    <div className="h-2 w-1/2 rounded bg-muted" />
                </div>
                <Button className="mt-4 w-full">Edit Profile</Button>
            </div>

            <div className="rounded-2xl bg-background p-6 shadow-xl transition-all hover:shadow-2xl md:p-8">
                 <div className="mb-6 flex items-center justify-between">
                    <div className="font-bold">Activity Feed</div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">3</span>
                </div>
                 <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4">
                             <div className="h-10 w-10 rounded-full bg-muted" />
                             <div className="flex-1 space-y-2">
                                <div className="h-2 w-full rounded bg-muted" />
                                <div className="h-2 w-2/3 rounded bg-muted" />
                             </div>
                        </div>
                    ))}
                </div>
            </div>

             <div className="flex flex-col justify-between rounded-2xl bg-background p-6 shadow-xl transition-all hover:shadow-2xl md:p-8">
                <div className="space-y-4">
                    <div className="font-bold">Upgrade Plan</div>
                    <p className="text-sm text-muted-foreground">Get more features for your team. Start your 30-day trial.</p>
                </div>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        <span className="text-sm">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        <span className="text-sm">99.9% Uptime</span>
                    </div>
                </div>
                <Button className="mt-8 w-full bg-linear-to-r from-primary to-accent">Get Pro</Button>
            </div>
        </div>
      </div>
    </section>
  )
}
