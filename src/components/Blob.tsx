import { cn } from "@/lib/utils";

type BlobProps = {
  align?: "left" | "right";
  className?: string;
};

const gradients: Record<NonNullable<BlobProps["align"]>, string> = {
  left: `radial-gradient(60% 60% at 20% 40%, rgba(59, 130, 246, 0.55), transparent 70%),
    radial-gradient(45% 45% at 65% 25%, rgba(129, 140, 248, 0.35), transparent 70%),
    radial-gradient(55% 55% at 40% 80%, rgba(16, 185, 129, 0.25), transparent 75%)`,
  right: `radial-gradient(60% 60% at 80% 40%, rgba(59, 130, 246, 0.55), transparent 70%),
    radial-gradient(45% 45% at 35% 25%, rgba(129, 140, 248, 0.35), transparent 70%),
    radial-gradient(55% 55% at 60% 80%, rgba(16, 185, 129, 0.25), transparent 75%)`,
};

export function Blob({ align = "left", className }: BlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -inset-x-16 -inset-y-16 -z-10 opacity-60 blur-3xl",
        className
      )}
      style={{ background: gradients[align] }}
    />
  );
}
