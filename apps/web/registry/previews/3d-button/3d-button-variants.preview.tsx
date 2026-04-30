import { ThreeDButton } from "@workspace/ui/registry/radix-nova/3d-button/3d-button";

export default function ThreeDButtonVariantsPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-4">
      <ThreeDButton color1="#cc0066" color2="#660033">
        Pink Variant
      </ThreeDButton>
      <ThreeDButton color1="#004d99" color2="#00264d">
        Blue Variant
      </ThreeDButton>
      <ThreeDButton color1="#1aff53" color2="#006622">
        Green Variant
      </ThreeDButton>
      <ThreeDButton color1="#f5f56b" color2="#999900">
        Yellow Variant
      </ThreeDButton>
    </div>
  );
}
