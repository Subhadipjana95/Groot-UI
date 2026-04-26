"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { CodeBlock } from "@/components/docs/blocks/usage-block";
import { PreviewToggle } from "./preview-toggle";
import { CopyPromptButton } from "./copy-prompt-button";

export function PreviewContainer({ 
  children,
  className,
  usageCode,
  componentCode,
  registryUrl
}: { 
  children: React.ReactNode;
  className?: string;
  usageCode?: string;
  componentCode?: string;
  registryUrl?: string;
}) {
  const [view, setView] = React.useState<"preview" | "code">("preview");
  const [codeType, setCodeType] = React.useState<"usage" | "source">("usage");

  const displayCode = codeType === "usage" ? usageCode : componentCode;

  return (
    <div className="space-y-2 mt-4">
      {(usageCode || componentCode) && (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <PreviewToggle view={view} onViewChange={setView} />
            
            {view === "code" && usageCode && componentCode && (
              <div className="flex items-center bg-muted/50 p-1 rounded-lg border ml-2">
                <button
                  onClick={() => setCodeType("usage")}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-md transition-all",
                    codeType === "usage" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Usage
                </button>
                <button
                  onClick={() => setCodeType("source")}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-md transition-all",
                    codeType === "source" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Source
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <CopyPromptButton registryUrl={registryUrl} />
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
          {displayCode && <CodeBlock code={displayCode} className="my-0 w-full min-h-[400px]" />}
        </div>
      )}
    </div>
  );
}
