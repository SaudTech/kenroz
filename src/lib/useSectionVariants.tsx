import { Variants } from "framer-motion";

const useSectionVariants = () => {
  const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const slideInFromLeftWithDelay = (
    delay: number,
    distance: number = 80,
    duration: number = 0.7,
    bounce: boolean = false
  ): Variants => ({
    hidden: { opacity: 0, x: -distance, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: bounce
        ? {
            delay: delay * 0.15,
            type: "spring" as const, // narrow the literal
            stiffness: 120,
            damping: 15, // control “settling” bounce
          }
        : {
            delay: delay * 0.15,
            duration,
            ease: EASE, // cubic-bezier
          },
    },
    exit: {
      opacity: 0,
      x: -distance,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  });

  const slideInFromRightWithDelay = (
    delay: number,
    distance: number = 80,
    duration: number = 0.7,
    bounce: boolean = false
  ): Variants => ({
    hidden: { opacity: 0, x: distance, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: bounce
        ? {
            delay: delay * 0.15,
            type: "spring" as const,
            stiffness: 120,
            damping: 15,
          }
        : {
            delay: delay * 0.15,
            duration,
            ease: EASE,
          },
    },
    exit: {
      opacity: 0,
      x: distance,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  });

  // If you use this one, don’t feed the whole object to `variants`.
  // Use the .variants on the motion element, and spread .options onto the element props.
  const slideInFromRightWithDelayWhenInOrOutOfViewPort = (
    delay: number,
    threshold: number = 0.5,
    distance: number = 80,
    duration: number = 0.7,
    bounce: boolean = false
  ) => {
    const variants: Variants = {
      hidden: { opacity: 0, x: distance, scale: 0.95 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: bounce
          ? {
              delay: delay * 0.15,
              type: "spring" as const,
              stiffness: 120,
              damping: 15,
            }
          : {
              delay: delay * 0.15,
              duration,
              ease: EASE,
            },
      },
    };

    const options = {
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport: { once: true, amount: threshold } as const,
    };

    return { variants, options };
  };

  return {
    slideInFromLeftWithDelay,
    slideInFromRightWithDelay,
    slideInFromRightWithDelayWhenInOrOutOfViewPort,
  };
};

export default useSectionVariants;