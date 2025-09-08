"use client"
import { hoverScale, useSectionVariants, view } from "@/lib/section-animations";
import { motion } from "framer-motion";

const SectionHeading = ({ blackText, primaryText }: { blackText: string, primaryText: string }) => {
  const { fromLeft } = useSectionVariants();
  return (
    <motion.h2
      variants={fromLeft}
      initial="hidden"
      whileInView="show"
      viewport={view}
      whileHover={hoverScale}
      className="text-4xl md:text-5xl font-bold text-foreground leading-tight flex gap-2 justify-center"
    >
      {blackText} <span className="block text-primary">{primaryText}</span>
    </motion.h2>
  );
};

export default SectionHeading;