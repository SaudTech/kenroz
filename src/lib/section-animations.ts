import { useReducedMotion, Variants } from "framer-motion";

// Shared viewport settings for section animations
export const view = { once: false, amount: 0 };

// Hook providing common motion variants
export function useSectionVariants() {
  const reduceMotion = useReducedMotion();
  const distance = reduceMotion ? 0 : 60;

  const fromLeft: Variants = {
    hidden: { x: -distance, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  const fromRight: Variants = {
    hidden: { x: distance, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  };

  return { fromLeft, fromRight };
}

// Consistent hover effect used across sections
export const hoverScale = { scale: 1.02 };
