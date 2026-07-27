import { Button } from "@/components/ui/button";
import { RotateCw, ToggleLeft, ToggleRight } from "lucide-react";
import TextBlur from "@workspace/ui/components/otherBlocks/text-blur"
import { TextFrame } from "@workspace/ui/registry/radix-nova/text-frame/text-frame"
import { useState } from "react";


export default function StyledButtonPreview() {
    const [dashed, setDashed] = useState(false);
    return (
        <div className='relative w-full h-full flex items-center justify-center bg-background min-h-60 md:min-h-100 px-4'>
            {/* Line Style Toggle Button */}
            <Button
                variant="outline"
                size="icon"
                className="absolute right-1.5 top-1.5 cursor-pointer rounded-md w-fit px-1.5 shadow-lg bg-background/80 backdrop-blur-sm border-border hover:bg-accent flex gap-2 items-center"
                onClick={() => setDashed(!dashed)}
            >   
                {dashed ? "Dashed" : "Solid"}
                {dashed ? <ToggleLeft className='stroke-1' /> : <ToggleRight className='stroke-1' />}
            </Button>


            <h1 className='text-3xl sm:text-5xl md:text-7xl font-[Libre_Baskerville] tracking-tight max-w-3xl text-balance text-left selection:bg-foreground/10'>
                <TextBlur>Design that</TextBlur> <TextFrame className="[&_svg]:text-rose-400 dark:text-rose-400 text-rose-500 tracking-normal" lineStyle={dashed ? "dashed" : "solid"}>Elevates</TextFrame> <TextBlur>User Experience</TextBlur>
            </h1>
        </div>
    )
}