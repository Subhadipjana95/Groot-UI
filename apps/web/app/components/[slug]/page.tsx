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

export async function generateMetadata({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return {
      title: "Component Not Found - Groot UI",
    };
  }

  const title = `${component.title} - Groot UI`;
  const description = component.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `https://grootui.vercel.app/api/og?title=${encodeURIComponent(component.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://grootui.vercel.app/api/og?title=${encodeURIComponent(component.title)}`],
    },
  };
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
    <div className="container max-w-5xl py-10 lg:py-12">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <span className="hover:text-foreground transition-colors cursor-default">Components</span>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground font-medium">{component.category.name}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl text-foreground">
          {component.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-snug max-w-[85ch]">
          {component.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {component.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 rounded-md bg-secondary/50 text-secondary-foreground text-xs tracking-wider border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-12">
        <section className="scroll-m-20 w-full min-w-0" id="preview">
          <Heading id="preview" title="Preview" className="sr-only" />
          <PreviewContainer code={component.usage.code} registryUrl={component.registryUrl}>
            <ComponentPreview slug={component.slug} />
          </PreviewContainer>
        </section>

        <section className="scroll-m-20 w-full min-w-0">
          <Heading title="Installation" />
          <InstallBlock command={component.registryUrl} />
        </section>

        <section className="scroll-m-20 w-full min-w-0">
          <Heading title="Usage" />
          <UsageBlock 
            importCode={component.usage.import} 
            usageCode={component.usage.code} 
          />
        </section>

        <section className="scroll-m-20 w-full min-w-0">
          <Heading title="Props" />
          <PropsTable props={component.props} />
        </section>

        {component.dependencies && component.dependencies.length > 0 && (
          <section className="scroll-m-20 w-full min-w-0">
            <Heading title="Dependencies" />
            <DependenciesBlock dependencies={component.dependencies} />
          </section>
        )}
      </div>
    </div>
  );
}
