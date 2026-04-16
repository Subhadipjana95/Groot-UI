export function ComponentPreview({ slug }: { slug: string }) {
  return (
    <div className="flex items-center justify-center min-h-[300px] w-full bg-grid-white/10">
      <div className="text-muted-foreground italic">
        Preview for <span className="text-foreground font-bold">{slug}</span> coming soon...
      </div>
    </div>
  );
}
