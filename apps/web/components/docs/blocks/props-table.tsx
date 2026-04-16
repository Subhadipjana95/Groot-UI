import { Prop } from "@/lib/registry/types";

export function PropsTable({ props }: { props: Prop[] }) {
  if (!props || props.length === 0) return <p className="text-muted-foreground italic">No props available.</p>;

  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="w-full text-sm text-left">
        <thead className="bg-muted/50 border-b">
          <tr>
            <th className="p-3 font-semibold">Prop</th>
            <th className="p-3 font-semibold">Type</th>
            <th className="p-3 font-semibold">Default</th>
            <th className="p-3 font-semibold text-center">Required</th>
            <th className="p-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="p-3 font-mono font-bold text-primary">{prop.name}</td>
              <td className="p-3 font-mono text-xs">{prop.type}</td>
              <td className="p-3 font-mono text-xs italic">{prop.default || "-"}</td>
              <td className="p-3 text-center">{prop.required ? "✅" : "❌"}</td>
              <td className="p-3 text-muted-foreground">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
