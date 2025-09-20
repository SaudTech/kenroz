"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface GlowImageProps extends ImageProps {
  glowClassName?: string;
  containerClassName?: string;
}

export default function GlowImage({
  glowClassName,
  containerClassName,
  className,
  ...props
}: GlowImageProps) {
  return (
    <motion.div
      className={cn(
        "relative inline-block aspect-auto overflow-visible rounded-2xl border shadow-lg",
        containerClassName
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Glow background */}
      <motion.div
        className={cn(
          "absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-70 bg-gradient-to-r from-blue-400 via-purple-500/50 to-cyan-400",
          glowClassName
        )}
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />

      {/* Image wrapper */}
      <motion.div
        className="relative rounded-2xl"
        whileHover={{ filter: "brightness(1.15) contrast(1.05)" }}
        transition={{ duration: 0.4 }}
      >
        <Image
          {...props}
          className={cn("object-cover rounded-2xl", className)}
        />
      </motion.div>
    </motion.div>
  );
}
