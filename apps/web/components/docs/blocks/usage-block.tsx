export function UsageBlock({ importCode, usageCode }: { importCode: string; usageCode: string }) {
  return (
    <div className="space-y-4">
      <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
        <code>{importCode}</code>
      </div>
      <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
        <code>{usageCode}</code>
      </div>
    </div>
  );
}
