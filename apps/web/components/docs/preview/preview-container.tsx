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
        "relative mt-6 max-w-3xl mx-auto w-full overflow-hidden rounded-xl border bg-muted/30 dark:bg-card flex items-center justify-center p-2",
        className
      )}
    >
      <div className="relative z-10 w-full min-h-[350px] rounded-lg flex items-center justify-center bg-background p-2 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
