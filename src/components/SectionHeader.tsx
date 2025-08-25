export default function SectionHeader({
  subtitle,
  title,
  description,
}: {
  subtitle: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-left">
      <p className="text-xs md:text-sm tracking-widest uppercase text-primary/90 font-semibold">
        {subtitle}
      </p>
      <h2 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-prose">
          {description}
        </p>
      ) : null}
    </div>
  );
}
