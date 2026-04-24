"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

interface PreviewToggleProps {
  view: "preview" | "code";
  onViewChange: (view: "preview" | "code") => void;
}

export function PreviewToggle({ view, onViewChange }: PreviewToggleProps) {
  return (
    <div className="flex items-center bg-muted/50 p-[3px] rounded-md border border-input/60">
      <button 
        onClick={() => onViewChange("preview")}
        className={cn(
          "flex items-center gap-2 px-2 py-1 text-xs font-medium rounded-sm transition-colors", 
          view === "preview" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        )}
      >
        Preview
      </button>
      <button 
        onClick={() => onViewChange("code")}
        className={cn(
          "flex items-center gap-2 px-2 py-1 text-xs font-medium rounded-sm transition-colors", 
          view === "code" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
        )}
      >
        Code
      </button>
    </div>
  );
}
