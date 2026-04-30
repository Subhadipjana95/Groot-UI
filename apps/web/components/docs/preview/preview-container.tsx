"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { CodeBlock } from "@/components/docs/shared/code-block";
import { ReloadButton } from "@/components/docs/shared/reload-button";
import { PreviewToggle } from "./preview-toggle";
import { CopyPromptButton } from "./copy-prompt-button";

export function PreviewContainer({
  children,
  className,
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
  const [previewKey, setPreviewKey] = React.useState(0);

  const handleReload = React.useCallback(() => {
    setPreviewKey((prev) => prev + 1);
  }, []);

  return (
    <div className="space-y-2 mt-4">
      {componentCode && (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <PreviewToggle view={view} onViewChange={setView} />
          </div>
          <div className="flex items-center gap-2">
            <ReloadButton onReload={handleReload} />
            <CopyPromptButton registryUrl={registryUrl} />
          </div>
        </div>
      )}

      <div className={cn(view !== "preview" && "hidden")}>
        <div
          className={cn(
            "relative mt-2 max-w-3xl mx-auto w-full overflow-hidden rounded-xl border bg-muted/30 dark:bg-card flex items-center justify-center p-1 md:p-2",
            className
          )}
        >
          <div
            key={previewKey}
            className="relative z-10 w-full min-h-[250px] md:min-h-[400px] rounded-lg flex items-center justify-center bg-background p-1 md:p-2 overflow-hidden"
          >
            {children}
          </div>
        </div>
      </div>

      <div className={cn(view !== "code" && "hidden")}>
        <div className="relative mt-2 max-w-3xl mx-auto w-full">
          {componentCode && (
            <CodeBlock
              code={componentCode}
              className="my-0 w-full"
              expandable={true}
              collapsedHeight={400}
            />
          )}
        </div>
      </div>
    </div>
  );
}
