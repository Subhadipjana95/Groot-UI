import { PressButton } from "@workspace/ui/registry/radix-nova/press-button/press-button";

export default function PressButtonPreview() {
  return (
    <div className="flex flex-col items-center gap-12 p-12">
      {/* Custom Theming via Tailwind Classes */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <PressButton className="bg-pink-500 text-white shadow-[4px_4px_0_0_#9d174d] border-[#9d174d]">
          Custom Pink
        </PressButton>
        
        <PressButton >
          Default
        </PressButton>
        
        <PressButton className="bg-indigo-600 text-white shadow-[4px_4px_0_0_#3730a3] border-[#3730a3]">
          Custom Indigo
        </PressButton>
      </div>
    </div>
  );
}
