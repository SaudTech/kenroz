// hooks/useSectionVariants.ts
const useSectionVariants = () => {
  const slideInFromLeftWithDelay = (
    delay: number,
    distance: number = 80,
    duration: number = 0.7,
    bounce: boolean = false
  ) => {
    return {
      hidden: { opacity: 0, x: -distance, scale: 0.95 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: bounce
          ? {
              delay: delay * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 15, // controls “settling” bounce
              duration,
            }
          : {
              delay: delay * 0.15,
              duration,
              ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
            },
      },
      exit: {
        opacity: 0,
        x: -distance,
        scale: 0.95,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };
  };

  const slideInFromRightWithDelay = (
    delay: number,
    distance: number = 80,
    duration: number = 0.7,
    bounce: boolean = false
  ) => {
    return {
      hidden: { opacity: 0, x: distance, scale: 0.95 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: bounce
          ? {
              delay: delay * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration,
            }
          : {
              delay: delay * 0.15,
              duration,
              ease: [0.22, 1, 0.36, 1],
            },
      },
      exit: {
        opacity: 0,
        x: distance,
        scale: 0.95,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };
  };

  // ✅ New Variant → Animates when entering/leaving viewport
  const slideInFromRightWithDelayWhenInOrOutOfViewPort = (
    delay: number,
    threshold: number = 0.5,
    distance: number = 80,
    duration: number = 0.7,
    bounce: boolean = false
  ) => {
    return {
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
              duration,
            }
          : {
              delay: delay * 0.15,
              duration,
              ease: [0.22, 1, 0.36, 1],
            },
      },
      options: {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: threshold },
      },
    };
  };
  

  return {
    slideInFromLeftWithDelay,
    slideInFromRightWithDelay,
    slideInFromRightWithDelayWhenInOrOutOfViewPort,
  };
};

export default useSectionVariants;
