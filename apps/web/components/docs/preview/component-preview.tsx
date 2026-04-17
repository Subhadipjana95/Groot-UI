import { PreviewWrapper } from "./runtime/preview-wrapper";

export function ComponentPreview({ slug }: { slug: string }) {
  return (
    <PreviewWrapper slug={slug} />
  );
}
