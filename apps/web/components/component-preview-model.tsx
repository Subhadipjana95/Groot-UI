"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { GlowCard } from "@workspace/ui/components/otherBlocks/glow-card"

interface ComponentPreviewProps {
  component: React.ReactNode
  code: string
}

export function ComponentPreview({ component, code }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Example Preview</h3>
        <TabsList className="h-8 bg-muted/50">
          <TabsTrigger value="preview" className="px-3 text-xs">Preview</TabsTrigger>
          <TabsTrigger value="code" className="px-3 text-xs">Code</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview" className="mt-0 focus-visible:ring-0">
        <GlowCard className="p-0 border shadow-md bg-muted/20">
          <div className="flex items-center justify-center rounded-xl p-10 min-h-[400px]">
            {component}
          </div>
        </GlowCard>
      </TabsContent>

      <TabsContent value="code" className="mt-0 focus-visible:ring-0">
        <div className="relative group overflow-hidden rounded-xl border bg-black shadow-lg">
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
          <pre className="p-6 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}