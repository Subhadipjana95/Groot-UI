import { ReactNode } from "react";

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1">
      {children}
    </div>
  );
}
