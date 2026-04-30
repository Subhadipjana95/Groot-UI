import { SlidingButton } from "@workspace/ui/registry/radix-nova/sliding-button/sliding-button";

export default function SlidingButtonPreview() {
  return (
    <div className="flex flex-col items-center gap-8 p-12">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <SlidingButton variant="default">
          Primary Action
        </SlidingButton>
        
        <SlidingButton variant="outline">
          Secondary Action
        </SlidingButton>
      </div>
    </div>
  );
}