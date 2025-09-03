import { cn } from "@/lib/utils";

export default function SectionHeader({
  subtitle,
  title,
  description,
  titleClassName,
  descriptionClassName
}: {
  subtitle: string;
  title: string;
  description?: string;
  titleClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"];
  descriptionClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"];
}) {
  return (
    <div className="text-left">
      {/* <p className="text-xs md:text-sm tracking-widest uppercase text-primary/90 font-semibold">
        {subtitle}
      </p> */}
      <h2
        className={cn(
          "mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed text-foreground max-w-prose",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
