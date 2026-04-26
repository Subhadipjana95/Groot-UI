import type { PropDefinition } from "@workspace/ui/types/registry";
import { Check, X } from "lucide-react";

export function PropsTable({ props }: { props: PropDefinition[] }) {
  if (!props || props.length === 0) {
    return (
      <div className="mt-4 rounded-lg border border-dashed p-8 text-center">
        <p className="text-sm text-muted-foreground italic">No props available for this component.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-lg border">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-card">
          <tr className="border-b bg-muted/50 transition-colors">
            <th className="h-12 px-2 md:px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Prop</th>
            <th className="h-12 px-2 md:px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Type</th>
            <th className="h-12 px-2 md:px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Default</th>
            <th className="h-12 px-2 md:px-4 text-center align-middle font-medium text-muted-foreground tracking-wider text-sm">Required</th>
            <th className="h-12 px-2 md:px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Description</th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0 bg-card/40">
          {props.map((prop) => (
            <tr key={prop.name} className="border-b transition-colors hover:bg-muted/30">
              <td className="p-2 md:p-4 align-middle font-mono font-bold text-primary">{prop.name}</td>
              <td className="p-2 md:p-4 align-middle">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-secondary-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="p-2 md:p-4 align-middle font-mono text-xs text-muted-foreground">
                {prop.default !== "-" ? (
                  <code className="rounded bg-muted/50 px-1.5 py-0.5">{prop.default}</code>
                ) : (
                  "-"
                )}
              </td>
              <td className="p-2 md:p-4 align-middle text-center">
                {prop.required ? (
                  <span className="relative mx-auto flex h-4 w-4 items-center justify-center">
                    <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
                      <defs>
                        <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="var(--brand2)" />
                          <stop offset="100%" stopColor="var(--brand1)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <Check className="h-4 w-4 stroke-[url(#brand-gradient)]" />
                  </span>
                ) : (
                  <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                )}
              </td>
              <td className="p-2 md:p-4 align-middle text-muted-foreground leading-relaxed">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
