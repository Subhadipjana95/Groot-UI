"use client";

import React from "react";
import { DragButton } from "@workspace/ui/registry/radix-nova/drag-button/drag-button";
import { ShoppingCart } from "lucide-react";

export default function DragButtonPreview() {
  const [status, setStatus] = React.useState("Slide to Checkout");

  const handleComplete = () => {
    setStatus("Order Placed!");
    setTimeout(() => {
      setStatus("Slide to Pay");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <DragButton
        onDragComplete={handleComplete}
        colorLight="#a5b4fc" // Indigo 300
        colorDark="#4338ca"  // Indigo 700
      >
        {status}
      </DragButton>
      <DragButton
        onDragComplete={() => console.log("Checkout complete")}
        successIcon={<ShoppingCart className="size-5" />}
        variant="outline"
        colorLight="#74d4ff" // blue 400
        colorDark="#ec003f"  // red 500
      >
        Slide to Checkout
      </DragButton>
    </div>
  );
}
