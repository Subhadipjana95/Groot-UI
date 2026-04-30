"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-foreground hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
  {
    variants: {
      
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface PressButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const PressButton = React.forwardRef<HTMLButtonElement, PressButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PressButton.displayName = "PressButton";

export { PressButton, buttonVariants };