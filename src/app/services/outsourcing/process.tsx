"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { hoverScale } from "@/lib/section-animations";
import useSectionVariants from "@/lib/useSectionVariants";
import { cn } from "@/lib/utils";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  glowMs?: number; // optional per-step duration (ms)
}

const DEFAULT_GLOW_MS = 5000; // fallback duration per step

// Reusable glow layer (sits behind the card)
const GlowLayer: React.FC<{ active: boolean; ms: number }> = ({
  active,
  ms,
}) => (
  <motion.div
    className="pointer-events-none absolute -inset-2 rounded-2xl bg-primary/80 filter blur-lg opacity-0"
    initial={false}
    animate={
      active
        ? { opacity: [0, 1, 0], scale: [0.98, 1.04, 0.98] }
        : { opacity: 0, scale: 1 }
    }
    transition={{ duration: 2, ease: "easeInOut" }}
    style={{ zIndex: 0 }}
  />
);

const ProcessAnimation: React.FC = () => {
  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Initiation & Planning",
      description:
        "Align on goals, scope out requirements, and assemble your dedicated team.",
      glowMs: 1400, // customize per step (optional)
    },
    {
      step: "02",
      title: "Setup & Onboarding",
      description:
        "Establish tools, access, and workflows for smooth collaboration.",
      glowMs: 1000,
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description:
        "Drive development forward with regular check-ins and quality reviews.",
      glowMs: 1600,
    },
    {
      step: "04",
      title: "Delivery & Support",
      description:
        "Launch your solution and provide ongoing maintenance and enhancements.",
      glowMs: 1200,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Observe viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Reset to first step when section enters view
  useEffect(() => {
    if (isInView) setActiveIndex(0);
  }, [isInView]);

  // Sequential driver: wait for current glow duration, then advance
  useEffect(() => {
    if (!isInView) return;
    const ms = process[activeIndex]?.glowMs ?? DEFAULT_GLOW_MS;
    const id = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % process.length);
    }, ms);
    return () => clearTimeout(id);
  }, [isInView, activeIndex, process]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const circleVariants = {
    hidden: { scale: 0.6, opacity: 0, filter: "blur(8px)" },
    visible: {
      scale: [0.6, 1.2, 1],
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.5, times: [0, 0.7, 1], ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, filter: "blur(8px)", scale: 0.8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stepCircleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 10, mass: 0.5 },
    },
  };

  const leftProcess = process.slice(0, Math.floor(process.length / 2));
  const rightProcess = process.slice(Math.floor(process.length / 2));
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  return (
    <section className="py-20 min-h-[calc(100vh-10vh)]" ref={containerRef}>
      <div className="text-center">
        <motion.h2
          className="text-4xl font-bold text-foreground mb-4"
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
          custom={0}
          whileHover={hoverScale}
        >
          Process Overview
        </motion.h2>
        <motion.p
          className="text-xl text-foreground mb-12 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
          custom={1}
          whileHover={hoverScale}
        >
          Detailed overview of the outsourcing process tailored to your project
          scope.
        </motion.p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-[5rem] lg:w-2/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {leftProcess.map((p, i) => {
              const globalIndex = i;
              const isActive = activeIndex === globalIndex;
              const ms = process[globalIndex]?.glowMs ?? DEFAULT_GLOW_MS;
              return (
                <motion.div
                  key={p.step}
                  className="flex items-center gap-6 relative"
                  variants={rowVariants}
                >
                  {/* Card wrapper with glow layer */}
                  <div className="relative flex-1 z-0">
                    <GlowLayer active={isActive} ms={ms} />
                    <div className="relative bg-card min-h-[160px] text-card-foreground border-2 border-primary p-6 rounded-xl shadow-md z-10">
                      <h3 className="font-semibold text-xl mb-1">{p.title}</h3>
                      <p className="text-base">{p.description}</p>
                    </div>
                  </div>

                  {/* Bigger step circle */}
                  <motion.div
                    className={cn(
                      "w-20 h-20 bg-primary absolute -right-8 z-10 hover:bg-card hover:text-card-foreground group transition-color duration-500 border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl text-primary-foreground shadow-md flex-shrink-0",
                      i === 0
                        ? "-bottom-5"
                        : i === leftProcess.length - 1
                        ? "-top-5"
                        : "bottom-2/4 translate-y-2/4"
                    )}
                    variants={stepCircleVariants}
                  >
                    {p.step}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Central Circle */}
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

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-20 lg:w-2/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {rightProcess.map((p, i) => {
              const globalIndex = i + leftProcess.length;
              const isActive = activeIndex === globalIndex;
              const ms = process[globalIndex]?.glowMs ?? DEFAULT_GLOW_MS;
              return (
                <motion.div
                  key={p.step}
                  className="flex items-center relative gap-6"
                  variants={rowVariants}
                >
                  {/* Bigger step circle */}
                  <motion.div
                    className={cn(
                      "w-20 h-20 bg-primary absolute -left-8 z-10 hover:bg-card hover:text-card-foreground group transition-color duration-500 border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl text-primary-foreground shadow-md flex-shrink-0",
                      i === 0
                        ? "-bottom-5"
                        : i === rightProcess.length - 1
                        ? "-top-5"
                        : "bottom-2/4 translate-y-2/4"
                    )}
                    variants={stepCircleVariants}
                  >
                    {p.step}
                  </motion.div>

                  {/* Card wrapper with glow layer */}
                  <div className="relative flex-1 z-0">
                    <GlowLayer active={isActive} ms={ms} />
                    <div className="relative text-center min-h-[160px] bg-card text-card-foreground border-2 border-primary p-6 rounded-xl shadow-md z-10">
                      <h3 className="font-semibold text-xl mb-1">{p.title}</h3>
                      <p className="text-base">{p.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAnimation;
// End of file