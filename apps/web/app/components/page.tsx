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
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-4xl font-black tracking-tight lg:text-5xl">Components</h1>
        <p className="text-xl text-muted-foreground">
          Premium UI components built with Radix UI and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-12">
        {Object.entries(categories).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((component) => (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="group relative flex flex-col gap-2 rounded-xl border p-6 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {component.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {component.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {component.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
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