import { hoverScale, useSectionVariants, view } from "@/lib/section-animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const Paragraph = ({ children, className }: { children: React.ReactNode, className?: React.HTMLAttributes<HTMLDivElement>["className"] }) => {
  const { fromRight } = useSectionVariants();

  return (
    <motion.div
      className={cn("mt-4 md:text-lg leading-relaxed text-foreground cursor-pointer inline-block", className)}
      variants={fromRight}
      initial="hidden"
      whileInView="show"
      viewport={view}
      whileHover={hoverScale}
    >
      {children}
    </motion.div>
  );
};

export default Paragraph;
