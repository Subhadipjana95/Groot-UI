"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { CodeBlock } from "@/components/docs/blocks/usage-block";
import { PreviewToggle } from "./preview-toggle";
import { CopyPromptButton } from "./copy-prompt-button";

export function PreviewContainer({ 
  children,
  className,
  code
}: { 
  children: React.ReactNode;
  className?: string;
  code?: string;
}) {
  const [view, setView] = React.useState<"preview" | "code">("preview");

  return (
    <div className="space-y-2 mt-4">
      {code && (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <PreviewToggle view={view} onViewChange={setView} />
          </div>
          <div className="flex items-center gap-2">
            <CopyPromptButton />
          </div>
        </div>
      )}
      
      {view === "preview" ? (
        <div 
          className={cn(
            "relative mt-2 max-w-3xl mx-auto w-full overflow-hidden rounded-xl border bg-muted/30 dark:bg-card flex items-center justify-center p-2",
            className
          )}
        >
          <div className="relative z-10 w-full min-h-[400px] rounded-lg flex items-center justify-center bg-background p-2 overflow-hidden">
            {children}
          </div>
        </div>
      ) : (
        <div className="relative mt-2 max-w-3xl mx-auto w-full">
          {code && <CodeBlock code={code} className="my-0 w-full min-h-[400px]" />}
        </div>
      )}
    </div>
  );
}
