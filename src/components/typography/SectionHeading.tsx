"use client"
import { hoverScale, useSectionVariants, view } from "@/lib/section-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const SectionHeading = ({
  blackText,
  primaryText,
  className,
  blackTextClassName,
  primaryTextClassName,
  variant = "default",
}: {
  blackText: string,
  primaryText: string,
  className?: React.HTMLAttributes<HTMLHeadingElement>["className"],
  blackTextClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"],
  primaryTextClassName?: React.HTMLAttributes<HTMLHeadingElement>["className"],
  /**
   * default: primary part uses brand color; foreground: both parts use foreground for better contrast on tinted backgrounds
   */
  variant?: "default" | "foreground";
}) => {
  const { fromLeft } = useSectionVariants();
  return (
    <motion.h2
      variants={fromLeft}
      initial="hidden"
      whileInView="show"
      viewport={view}
      whileHover={hoverScale}
      className={cn("text-4xl md:text-5xl font-bold text-foreground leading-tight flex gap-2 justify-center", className)}
    >
      <span className={cn(blackTextClassName)}>{blackText}</span>{" "}
      <span className={cn("block", variant === "default" ? "text-primary" : "text-foreground", primaryTextClassName)}>{primaryText}</span>
    </motion.h2>
  );
};

export default SectionHeading;