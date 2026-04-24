import { cn } from "@workspace/ui/lib/utils";

export function Heading({ 
  title, 
  id, 
  className 
}: { 
  title: string; 
  id?: string;
  className?: string;
}) {
  const generatedId = id || title.toLowerCase().replace(/\s+/g, '-');
  return (
    <h2
      id={generatedId}
      className={cn(
        "font-heading mt-12 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
        {title}
    </h2>
  );
}
