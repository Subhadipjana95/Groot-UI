import Link from "next/link";
import { components } from "@/lib/registry/components";

export default function ComponentsPage() {
  // Group components by category
  const categories = components.reduce((acc, component) => {
    const categoryName = component.category.name;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(component);
    return acc;
  }, {} as Record<string, typeof components>);

  return (
    <div className="container max-w-5xl py-10">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">Components</h1>
        <p className="text-xl text-muted-foreground">
          Premium UI components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-12">
        {Object.entries(categories).map(([category, items]) => (
          <section key={category}>
            <h2 id={category.toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-medium mb-3 pb-1 scroll-m-20">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((component) => (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  prefetch={false}
                  className="group relative flex flex-col gap-2 rounded-xl border p-3 hover:bg-muted/50 transition-colors"
                >
                  <h3 id={component.slug} className="font-bold text-lg group-hover:text-primary transition-colors scroll-m-20">
                    {component.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {component.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {component.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-wider px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}