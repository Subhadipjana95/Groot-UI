"use client";

import * as React from "react";
import { RotateCw } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";

interface ReloadButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onReload: () => void;
}

export function ReloadButton({
  onReload,
  className,
  ...props
}: ReloadButtonProps) {
  const [isSpinning, setIsSpinning] = React.useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    onReload();
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <Button
      className={cn(
        "pointer-events-auto h-[1.9rem] py-1 px-1.5 rounded-md bg-muted/30 border border-input/60 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all",
        className
      )}
      onClick={handleClick}
      aria-label="Reload preview"
      {...props}
    >
      <RotateCw
        className={cn(
          "h-3.5 w-3.5 transition-transform duration-500 ease-out",
          isSpinning && "animate-spin"
        )}
      />
    </Button>
  );
}
