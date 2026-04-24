"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { resolvePreviewLoader } from "./preview-loader";
import { components } from "@/lib/registry/components";
import { Loader2, AlertCircle } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

/**
 * PreviewWrapper handles the dynamic loading, prop injection,
 * and error handling for component previews.
 */
export function PreviewWrapper({ slug, className }: { slug: string; className?: string }) {
  const [error, setError] = React.useState<string | null>(null);

  // 1. Resolve configuration and handle initial component setup
  const { DynamicComponent, configError, componentConfig } = React.useMemo(() => {
    try {
      const config = components.find((c) => c.slug === slug);
      const preview = resolvePreviewLoader(slug);

      const Comp = dynamic(
        async () => {
          try {
            const module = await preview.loader();
            if (preview.componentName) {
              return module[preview.componentName];
            }
            return module.default || module;
          } catch (err: any) {
            console.error(`Failed to load component "${slug}":`, err);
            throw err;
          }
        },
        {
          ssr: false,
          loading: () => (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground/50" />
            </div>
          ),
        }
      );

      return { DynamicComponent: Comp, configError: null, componentConfig: config };
    } catch (err: any) {
      return { DynamicComponent: null, configError: err.message, componentConfig: null };
    }
  }, [slug]);

  // Handle configuration errors via effect to avoid illegal state updates during render
  React.useEffect(() => {
    if (configError) {
      setError(configError);
    } else {
      setError(null);
    }
  }, [configError]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-8 text-center border border-destructive/20 rounded-lg bg-destructive/5">
        <AlertCircle className="h-6 w-6 text-destructive/50" />
        <p className="text-sm font-medium text-destructive/80">
          Failed to load preview: {error}
        </p>
      </div>
    );
  }

  if (!DynamicComponent) return null;

  const previewProps = componentConfig?.preview?.props || {};

  return (
    <div className={cn("relative flex items-center justify-center w-full min-h-[inherit]", className)}>
      <React.Suspense fallback={<Loader2 className="h-6 w-6 animate-spin" />}>
        <DynamicComponent {...previewProps} />
      </React.Suspense>
    </div>
  );
}
