"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ClaudeIcon, CursorIcon, LovableIcon } from "@workspace/ui/components/icons/icon";



const PROMPT_OPTIONS = [
  { id: "claude", name: "Claude Code", icon: ClaudeIcon },
  { id: "cursor", name: "Cursor (or any IDE)", icon: CursorIcon },
  { id: "lovable", name: "Lovable", icon: LovableIcon }
];

export function CopyPromptButton() {
  const [selected, setSelected] = React.useState("cursor");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-input/60 bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors outline-none"
        >
          Copy prompt
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-fit rounded-lg border border-input/60 bg-card text-muted-foreground shadow-md p-1"
      >
        <div className="flex flex-col gap-0.5">
          {PROMPT_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-md p-2 text-xs font-medium outline-none transition-colors",
                "focus:bg-muted dark:focus:bg-background focus:text-foreground"
              )}
            >
              <div className="flex items-center gap-2.5">
                <option.icon className="h-4 w-4 opacity-80" />
                {option.name}
              </div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
