import { CodeBlock } from "@/components/docs/shared/code-block";

export function UsageBlock({ importCode, usageCode }: { importCode: string; usageCode: string }) {
  return (
    <div className="space-y-4">
      <CodeBlock code={importCode} />
      <CodeBlock code={usageCode} />
    </div>
  );
}
