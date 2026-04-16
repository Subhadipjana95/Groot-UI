export function InstallBlock({ command }: { command: string }) {
  return (
    <div className="bg-muted p-4 rounded-md font-mono text-sm relative group overflow-x-auto">
      <code>{command}</code>
    </div>
  );
}
