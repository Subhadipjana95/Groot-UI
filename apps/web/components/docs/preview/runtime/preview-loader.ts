import { previewMap } from "./preview-map";

/**
 * Resolves a component loader from the preview map.
 * Throws an error if the slug is not found.
 */
export function resolvePreviewLoader(slug: string) {
  const preview = previewMap[slug];

  if (!preview) {
    throw new Error(`Component preview for slug "${slug}" not found in previewMap.`);
  }

  return preview;
}

/**
 * Loads the component module dynamically.
 */
export async function loadPreviewComponent(slug: string) {
  const { loader, componentName } = resolvePreviewLoader(slug);
  const module = await loader();

  if (componentName) {
    return module[componentName];
  }

  return module.default || module;
}
