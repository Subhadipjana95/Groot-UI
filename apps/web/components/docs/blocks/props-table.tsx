import { Prop } from "@/lib/registry/types";
import { Check, X } from "lucide-react";

export function PropsTable({ props }: { props: Prop[] }) {
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
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Prop</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Type</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Default</th>
            <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground tracking-wider text-sm">Required</th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground tracking-wider text-sm">Description</th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0 bg-card/40">
          {props.map((prop) => (
            <tr key={prop.name} className="border-b transition-colors hover:bg-muted/30">
              <td className="p-4 align-middle font-mono font-bold text-primary">{prop.name}</td>
              <td className="p-4 align-middle">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-secondary-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="p-4 align-middle font-mono text-xs text-muted-foreground">
                {prop.default !== "-" ? (
                  <code className="rounded bg-muted/50 px-1.5 py-0.5">{prop.default}</code>
                ) : (
                  "-"
                )}
              </td>
              <td className="p-4 align-middle text-center">
                {prop.required ? (
                  <Check className="mx-auto h-4 w-4 text-emerald-500" />
                ) : (
                  <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                )}
              </td>
              <td className="p-4 align-middle text-muted-foreground leading-relaxed">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
