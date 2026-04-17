export default function ChangelogPage() {
  const changelog = [
    {
      date: "Apr 16, 2026",
      title: "Initial release",
      description: "Added the first public release with core components and blocks.",
      image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776286826/Groot-UI_Preview_ojjktb.webp"
    },
    {
      date: "Apr 15, 2026",
      title: "Beta Testing",
      description: "Finalized the core animation engine and stabilized the documentation system for public use.",
    }
  ];

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 border-r border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)]"
        style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 border-l border-border/40 dark:border-border/60 bg-[repeating-linear-gradient(-45deg,rgb(0_0_0/0.08)_0,rgb(0_0_0/0.08)_1px,transparent_1px,transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.04)_0,rgb(255_255_255/0.04)_1px,transparent_1px,transparent_8px)] "
        style={{ width: "max(0px, calc((100% - 80rem) / 2))" }}
      />
      <div className="max-w-7xl mx-auto py-12 pt-32  px-6 flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">Changelog</h1>
          <p className="text-xl text-muted-foreground">
            Latest updates and improvements to Groot UI.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {changelog.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
              {/* Date Badge */}
              <div className="shrink-0 pt-1 relative flex flex-col items-center self-stretch">
                <div className="inline-flex items-center rounded-lg border border-border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground/80 z-10 shrink-0">
                  {item.date}
                </div>
                {index < changelog.length - 1 && (
                  <div className="absolute top-[1.76rem] bottom-[-85px] w-px bg-border" />
                )}
              </div>

              {/* Grid content for Image + Text */}
              <div className="flex flex-col md:flex-row gap-8 items-start w-full">
                {item.image && (
                  <div className="shrink-0 w-full md:w-80 aspect-video md:aspect-video relative rounded-lg overflow-hidden border border-border/50 bg-muted/20">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}