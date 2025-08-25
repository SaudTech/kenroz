"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Blob = ({className}: {className?: React.HTMLAttributes<HTMLDivElement>["className"]}) => {
    const view = { once: true, amount: 0.6, margin: "0px 0px -10% 0px" as const };

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 -z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={view}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={cn("h-72 w-72 rounded-full bg-primary/10 blur-3xl", className)} />
    </motion.div>
  );
};

export default Blob;
