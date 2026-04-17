import { Box, Hammer, Laptop, Sparkles } from "lucide-react";

export default function TemplatesPage() {
  return (
    <div className="relative w-full min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center overflow-hidden">
      {/* Background patterns matching the docs theme */}
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

      <div className="relative z-10 max-w-2xl px-6 text-center space-y-8">
        <div className="flex justify-center space-x-[-12px] mb-8">
          <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 backdrop-blur-sm -rotate-12 animate-bounce [animation-delay:-0.5s]">
            <Hammer className="h-8 w-8 text-brand1" />
          </div>
          <div className="p-4 rounded-2xl bg-background border border-border shadow-2xl z-10 relative">
            <Box className="h-10 w-10 text-amber-600 dark:text-brand2" />
          </div>
          <div className="p-4 rounded-2xl bg-muted/50 border border-border/60 backdrop-blur-sm rotate-12 animate-bounce">
            <Sparkles className="h-8 w-8 text-brand1" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Templates in Progress
          </h1>
          <p className="text-lg text-muted-foreground">
            Our workshop is bustling with activity. Groot's master architect is currently deep in the draft phase, 
            carving out standard-breaking starting points for your next masterpiece.
          </p>
        </div>

        <div className="p-1 rounded-xl bg-linear-to-br from-brand1/40 via-border to-brand2/40 max-w-md mx-auto">
          <div className="bg-background rounded-lg p-3">
            <p className="text-sm text-muted-foreground/80 max-w-sm mx-auto uppercase tracking-tighter">
              Check back shortly. The workshop doors open soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}