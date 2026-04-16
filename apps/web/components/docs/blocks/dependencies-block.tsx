import { Package } from "lucide-react";

export function DependenciesBlock({ dependencies }: { dependencies: string[] }) {
  if (!dependencies || dependencies.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {dependencies.map((dep) => (
        <div 
          key={dep} 
          className="group flex items-center gap-2 px-3 py-1.5 bg-secondary/50 hover:bg-secondary border border-border rounded-lg transition-colors cursor-default"
        >
          <Package className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium font-mono text-secondary-foreground">
            {dep}
          </span>
        </div>
      ))}
    </div>
  );
}
