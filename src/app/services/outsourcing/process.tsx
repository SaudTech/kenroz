import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const ProcessAnimation: React.FC = () => {
  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Initiation & Planning",
      description:
        "Align on goals, scope out requirements, and assemble your dedicated team.",
    },
    {
      step: "02",
      title: "Setup & Onboarding",
      description:
        "Establish tools, access, and workflows for smooth collaboration.",
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description:
        "Drive development forward with regular check-ins and quality reviews.",
    },
    {
      step: "04",
      title: "Delivery & Support",
      description:
        "Launch your solution and provide ongoing maintenance and enhancements.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    hidden: {
      scale: 0.6,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      scale: [0.6, 1.2, 1],
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        times: [0, 0.7, 1],
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stepCircleVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  const leftProcess = process.slice(0, Math.floor(process.length / 2));
  const rightProcess = process.slice(
    Math.floor(process.length / 2),
    process.length
  );

  return (
    <section className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
        >
          Outsourcing Process
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Left Column - 3 Steps */}
          <motion.div
            className="flex flex-col gap-16 lg:w-2/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {leftProcess.map((p, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-6"
                variants={cardVariants}
              >
                {/* Step Content */}
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{p.description}</p>
                </div>

                {/* Circle Number - Positioned on the right side for left column */}
                <motion.div
                  className="w-14 h-14 bg-white border-4 border-red-600 rounded-full flex items-center justify-center font-bold text-red-600 shadow-md flex-shrink-0"
                  variants={stepCircleVariants}
                >
                  {p.step}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Central Circle with Connecting Lines */}
          <div className="relative my-12 lg:my-0 lg:w-1/5 flex justify-center">
            <motion.div
              className="bg-primary text-white w-40 h-40 md:w-60 md:h-60 rounded-full flex items-center justify-center font-semibold shadow-lg text-center p-6 relative z-10"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={circleVariants}
            >
              <motion.div
                variants={textVariants}
                className="text-base md:text-2xl"
              >
                Outsourcing Process
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 3 Steps */}
          <motion.div
            className="flex flex-col gap-16 lg:w-2/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {rightProcess.map((p, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-6"
                variants={cardVariants}
              >
                {/* Circle Number - Positioned on the left side for right column */}
                <motion.div
                  className="w-14 h-14 bg-white border-4 border-red-600 rounded-full flex items-center justify-center font-bold text-red-600 shadow-md flex-shrink-0"
                  variants={stepCircleVariants}
                >
                  {p.step}
                </motion.div>

                {/* Step Content */}
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAnimation;
