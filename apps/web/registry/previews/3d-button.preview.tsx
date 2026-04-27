import { ThreeDButton } from "@workspace/ui/registry/radix-nova/3d-button/3d-button";

export default function ThreeDButtonPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-10 min-h-[200px]">
      <ThreeDButton 
        color1="oklch(71.8% 0.202 349.761)" 
        color2="oklch(51.4% 0.222 16.935)"
      >
        Pink 3D
      </ThreeDButton>

      <ThreeDButton 
        color1="oklch(68.5% 0.169 237.323)" 
        color2="oklch(39.8% 0.195 277.366)"
      >
        Blue 3D
      </ThreeDButton>

      <ThreeDButton 
        color1="oklch(70.4% 0.14 182.503)" 
        color2="oklch(43.7% 0.078 188.216)"
        className="text-black/80 font-medium"
      >
        Green 3D
      </ThreeDButton>

      <ThreeDButton 
        color1="oklch(79.5% 0.184 86.047)" 
        color2="oklch(50.5% 0.213 27.518)"
      >
        Yellow 3D
      </ThreeDButton>
    </div>
  );
}
