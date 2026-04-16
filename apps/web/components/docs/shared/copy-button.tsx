"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: "outline" | "ghost" | "default";
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  return (
    <Button
      size="icon"
      variant={variant}
      className={cn(
        "relative z-10 h-8 w-8 text-muted-foreground hover:bg-muted hover:text-secondary-foreground",
        className
      )}
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <span className="relative flex h-4 w-4 items-center justify-center">
          <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
            <defs>
              <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--brand2)" />
                <stop offset="100%" stopColor="var(--brand1)" />
              </linearGradient>
            </defs>
          </svg>
          <Check className="h-4 w-4 stroke-[url(#brand-gradient)]" />
        </span>
      ) : (
        <Copy className="h-2 w-2" />
      )}
    </Button>
  );
}
