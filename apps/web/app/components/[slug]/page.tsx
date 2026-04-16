import { notFound } from "next/navigation";
import { components } from "@/lib/registry/components";
import { Heading } from "@/components/docs/shared/heading";
import { InstallBlock } from "@/components/docs/blocks/install-block";
import { UsageBlock } from "@/components/docs/blocks/usage-block";
import { PropsTable } from "@/components/docs/blocks/props-table";
import { DependenciesBlock } from "@/components/docs/blocks/dependencies-block";
import { PreviewContainer } from "@/components/docs/preview/preview-container";
import { ComponentPreview } from "@/components/docs/preview/component-preview";

interface ComponentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-10">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Components</span>
          <span>/</span>
          <span className="text-foreground font-medium">{component.category.name}</span>
        </div>
        <h1 className="text-4xl font-black lg:text-5xl">{component.title}</h1>
        <p className="text-xl text-muted-foreground">{component.description}</p>
      </div>

      <div className="grid gap-10">
        <section id="preview">
          <PreviewContainer>
            <ComponentPreview slug={component.slug} />
          </PreviewContainer>
        </section>

        <section id="installation">
          <Heading title="Installation" />
          <InstallBlock command={component.registryUrl} />
        </section>

        <section id="usage">
          <Heading title="Usage" />
          <UsageBlock 
            importCode={component.usage.import} 
            usageCode={component.usage.code} 
          />
        </section>

        <section id="props">
          <Heading title="Props" />
          <PropsTable props={component.props} />
        </section>

        {component.dependencies && component.dependencies.length > 0 && (
          <section id="dependencies">
            <Heading title="Dependencies" />
            <DependenciesBlock dependencies={component.dependencies} />
          </section>
        )}
      </div>
    </div>
  );
}
