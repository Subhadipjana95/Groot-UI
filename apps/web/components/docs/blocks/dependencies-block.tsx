export function DependenciesBlock({ dependencies }: { dependencies: string[] }) {
  if (!dependencies || dependencies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {dependencies.map((dep) => (
        <span key={dep} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-mono">
          {dep}
        </span>
      ))}
    </div>
  );
}
