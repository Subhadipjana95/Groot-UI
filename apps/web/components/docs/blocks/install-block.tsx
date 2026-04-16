"use client";

import * as React from "react";
import { CopyButton } from "@/components/docs/shared/copy-button";
import { Terminal } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

const packageManagers: { id: PackageManager; label: string }[] = [
  { id: "npm", label: "npm" },
  { id: "pnpm", label: "pnpm" },
  { id: "yarn", label: "yarn" },
  { id: "bun", label: "bun" },
];

export function InstallBlock({ command: slug }: { command: string }) {
  const [selectedPm, setSelectedPm] = React.useState<PackageManager>("npm");

  const getCommand = (pm: PackageManager) => {
    switch (pm) {
      case "npm":
        return `npx shadcn@latest add ${slug}`;
      case "pnpm":
        return `pnpm dlx shadcn@latest add ${slug}`;
      case "yarn":
        return `yarn shadcn@latest add ${slug}`;
      case "bun":
        return `bunx --bun shadcn@latest add ${slug}`;
      default:
        return `npx shadcn@latest add ${slug}`;
    }
  };

  const currentCommand = getCommand(selectedPm);

  return (
    <div className="relative mt-6 overflow-hidden rounded-lg border border-input/60 bg-muted/50">
      <div className="flex items-center justify-between border-b border-border/50 pl-3 pr-1 pt-1.5 pb-1">
        <div className="flex items-center gap-3">
          <div className="flex h-5 w-5 items-center justify-center rounded-xs bg-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-accent" />
          </div>
          <div className="flex items-center gap-1">
            {packageManagers.map((pm) => (
              <button
                key={pm.id}
                onClick={() => setSelectedPm(pm.id)}
                className={cn(
                  "px-2 py-[3px] text-sm transition-colors rounded-sm",
                  selectedPm === pm.id
                    ? "bg-background text-foreground border border-input/70"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {pm.label}
              </button>
            ))}
          </div>
        </div>
        <CopyButton value={currentCommand} variant="outline" className="absolute top-1 right-1 h-7 w-7 rounded-sm" />
      </div>
      <div className="px-3 py-3 font-mono text-sm leading-relaxed text-muted-foreground">
        <code>{currentCommand}</code>
      </div>
    </div>
  );
}
