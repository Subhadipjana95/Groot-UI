import { ReactNode } from "react";
import { DocsLayout } from "@/components/docs/layout/docs-layout";

export default function ComponentsLayout({ children }: { children: ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}
