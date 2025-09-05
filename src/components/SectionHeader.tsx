import { cn } from "@/lib/utils";
import Paragraph from "./typography/Paragraph";

export default function SectionHeader({
  title,
  description,
  titleClassName,
  descriptionClassName
}: {
  title: string;
  description?: string;
  titleClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"];
  descriptionClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"];
}) {
  return (
    <div className="text-left">
      <h2
        className={cn(
          "mt-2 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <Paragraph
          className={cn(
            // "mt-4 text-base md:text-lg leading-relaxed text-foreground max-w-prose",
            descriptionClassName
          )}
        >
          {description}
        </Paragraph>
      ) : null}
    </div>
  );
}
