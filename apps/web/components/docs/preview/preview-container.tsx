import { cn } from "@workspace/ui/lib/utils";

export function PreviewContainer({ 
  children,
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "relative mt-6 min-h-[350px] w-full overflow-hidden rounded-xl border bg-muted/50 flex items-center justify-center p-4",
        className
      )}
    >
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
