"use client";

import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

import { hoverScale } from "@/lib/section-animations";
import { cn } from "@/lib/utils";

type MotionListItemProps = ComponentProps<typeof motion.li>;

export interface ServiceCardProps extends MotionListItemProps {
  children: ReactNode;
}

export function ServiceCard({
  className,
  whileHover = hoverScale,
  viewport,
  whileTap,
  children,
  ...props
}: ServiceCardProps) {
  return (
    <motion.li
      whileHover={whileHover}
      viewport={viewport ?? { once: true }}
      whileTap={whileTap ?? { scale: 0.97 }}
      className={cn(
        "p-8 bg-card text-card-foreground rounded-2xl flex flex-col text-left border border-border shadow-lg",
        "transition-shadow duration-300 hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.li>
  );
}

export function ServiceCardIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center mx-auto rounded-xl mb-4",
        className ?? "bg-gradient-to-br from-primary to-secondary"
      )}
    >
      {children}
    </div>
  );
}

export default ServiceCard;
