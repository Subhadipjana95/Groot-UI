"use client";

import * as React from "react";
import { previewRegistry } from "@/registry/preview-registry";
import { registry } from "@/lib/registry";
import { Loader2, AlertCircle } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

/**
 * PreviewWrapper — mounts the correct dynamically-loaded preview component
 * for a given component name. Uses the auto-generated previewRegistry which
 * applies the correct next/dynamic options (ssr:true|false) per component.
 *
 * This is the shadcn pattern: each preview is a self-contained *.preview.tsx
 * file that renders the component with realistic demo props.
 */
export function PreviewWrapper({ slug, className }: { slug: string; className?: string }) {
  const [hasError, setHasError] = React.useState(false);

  const Preview = previewRegistry[slug as keyof typeof previewRegistry];

  // Find the config from the generated registry for the preview height
  const config = React.useMemo(
    () => registry.find((c) => c.name === slug),
    [slug]
  );

  if (!Preview) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-8 text-center border border-destructive/20 rounded-lg bg-destructive/5">
        <AlertCircle className="h-6 w-6 text-destructive/50" />
        <p className="text-sm font-medium text-destructive/80">
          Preview not registered for &quot;{slug}&quot;
        </p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-8 text-center border border-destructive/20 rounded-lg bg-destructive/5">
        <AlertCircle className="h-6 w-6 text-destructive/50" />
        <p className="text-sm font-medium text-destructive/80">
          Failed to render preview for &quot;{slug}&quot;
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full min-h-[inherit]",
        className
      )}
    >
      <ErrorBoundary onError={() => setHasError(true)}>
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground/50" />
            </div>
          }
        >
          <Preview />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

/**
 * Simple error boundary to catch render errors in preview components
 * without crashing the entire docs page.
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("PreviewWrapper render error:", error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
