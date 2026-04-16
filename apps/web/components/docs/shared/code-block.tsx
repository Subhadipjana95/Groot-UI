export function CodeBlock({ code }: { code: string }) {
  return <pre className="bg-muted p-4 rounded-md">{code}</pre>;
}
