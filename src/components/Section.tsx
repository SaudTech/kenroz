import { cn } from "@/lib/utils";

export const Section = ({
    children,
    id,
    className = "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    is: _is,
  }: {
    children: React.ReactNode;
    id?: string;
    className?: string;
    is: "odd" | "even";
  }) => {
    return (
      <section
        id={id}
        className={cn(
          "w-full min-h-[calc(100vh-64px)] h-full border-none overflow-hidden scroll-mt-[64px]",
          className
        )}
      >
        {children}
      </section>
    );
  };
  