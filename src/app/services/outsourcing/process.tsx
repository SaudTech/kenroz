"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";

export interface ProcessStep {
  step?: string;           // optional: if omitted, will auto-number
  title: string;
  description: string;
  glowMs?: number;         // optional per-step duration (ms)
}

type ProcessAnimationProps = {
  id?: string;
  className?: string;
  title: string;
  subtitle: string;
  centerLabel: string;
  steps: ProcessStep[];        // required
  defaultGlowMs?: number;      // default 5000ms
  inViewThreshold?: number;    // default 0.2
};

const DEFAULT_GLOW_MS = 5000;

// Reusable glow layer (sits behind the card)
const GlowLayer: React.FC<{ active: boolean; ms: number }> = ({ active, ms }) => (
  <motion.div
    className="pointer-events-none absolute -inset-2 rounded-2xl bg-primary/80 filter blur-lg opacity-0"
    initial={false}
    animate={
      active
        ? { opacity: [0, 1, 0], scale: [0.98, 1.04, 0.98] }
        : { opacity: 0, scale: 1 }
    }
    transition={{ duration: Math.min((ms || DEFAULT_GLOW_MS) / 1000, 2.5), ease: "easeInOut" }}
    style={{ zIndex: 0 }}
  />
);

const ProcessAnimation: React.FC<ProcessAnimationProps> = ({
  id,
  className,
  title,
  subtitle,
  centerLabel,
  steps,
  defaultGlowMs = DEFAULT_GLOW_MS,
  inViewThreshold = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Normalize steps: auto-number if step missing
  const normalized = useMemo<Required<ProcessStep>[]>(() => {
    return steps.map((s, i) => ({
      step: s.step ?? String(i + 1).padStart(2, "0"),
      title: s.title,
      description: s.description,
      glowMs: s.glowMs ?? defaultGlowMs,
    }));
  }, [steps, defaultGlowMs]);

  // Split into two columns
  const mid = Math.floor(normalized.length / 2);
  const left = normalized.slice(0, mid);
  const right = normalized.slice(mid);

  // Observe viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: inViewThreshold }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => {
      if (containerRef.current) obs.unobserve(containerRef.current);
      obs.disconnect();
    };
  }, [inViewThreshold]);

  // Reset to first step when section enters view
  useEffect(() => {
    if (isInView) setActiveIndex(0);
  }, [isInView]);

  // Sequential driver: wait for current glow duration, then advance
  useEffect(() => {
    if (!isInView || normalized.length === 0) return;
    const ms = normalized[activeIndex]?.glowMs ?? defaultGlowMs;
    const id = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % normalized.length);
    }, ms);
    return () => clearTimeout(id);
  }, [isInView, activeIndex, normalized, defaultGlowMs]);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };
  const circleVariants = {
    hidden: { scale: 0.6, opacity: 0, filter: "blur(8px)" },
    visible: {
      scale: [0.6, 1.2, 1],
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.5, times: [0, 0.7, 1], ease: "easeOut" as const },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, filter: "blur(8px)", scale: 0.8 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };
  const rowVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };
  const stepCircleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120, damping: 10, mass: 0.5 } },
  };

  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } = useSectionVariants();

  return (
    <section id={id} className={cn("py-20 min-h-[calc(100vh-10vh)]", className)} ref={containerRef}>
      <div className="text-center">
        <motion.h2
          className="text-4xl font-bold text-foreground mb-4"
          initial="hidden"
          whileInView="visible"
          variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
          custom={0}
          whileHover={hoverScale}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="text-xl text-foreground mb-12 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
            custom={1}
            whileHover={hoverScale}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-[5rem] lg:w-2/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {left.map((p, i) => {
              const globalIndex = i;
              const isActive = activeIndex === globalIndex;
              const ms = normalized[globalIndex]?.glowMs ?? defaultGlowMs;
              return (
                <motion.div key={`${p.step}-${p.title}`} className="flex items-center gap-6 relative" variants={rowVariants} viewport={{ once: true }}>
                  <div className="relative flex-1 z-0">
                    <GlowLayer active={isActive} ms={ms} />
                    <div className="relative bg-card min-h-[160px] text-center text-card-foreground border-2 border-primary p-6 rounded-xl shadow-md z-10">
                      <h3 className="font-semibold text-xl mb-1">{p.title}</h3>
                      <p className="text-base">{p.description}</p>
                    </div>
                  </div>
                  <motion.div
                    className={cn(
                      "w-20 h-20 bg-primary absolute -right-8 z-10 hover:bg-card text-card-foreground group transition-colors duration-500 border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0",
                      i === 0 ? "-bottom-5" : i === left.length - 1 ? "-top-5" : "bottom-2/4 translate-y-2/4"
                    )}
                    variants={stepCircleVariants}
                    viewport={{ once: true }}
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
              className="bg-primary hover:bg-card border-4 border-primary transition-colors duration-500 text-card-foreground w-40 h-40 md:w-60 md:h-60 rounded-full flex items-center justify-center font-semibold shadow-lg text-center p-6 relative z-10"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={circleVariants}
              viewport={{ once: true }}
            >
              <motion.div variants={textVariants} className="text-base md:text-2xl" viewport={{ once: true }}>
                {centerLabel}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-20 lg:w-2/5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {right.map((p, i) => {
              const globalIndex = i + left.length;
              const isActive = activeIndex === globalIndex;
              const ms = normalized[globalIndex]?.glowMs ?? defaultGlowMs;
              return (
                <motion.div key={`${p.step}-${p.title}`} className="flex items-center relative gap-6" variants={rowVariants} viewport={{ once: true }}>
                  <motion.div
                    className={cn(
                      "w-20 h-20 bg-primary absolute -left-8 z-10 hover:bg-card text-card-foreground group transition-colors duration-500 border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0",
                      i === 0 ? "-bottom-5" : i === right.length - 1 ? "-top-5" : "bottom-2/4 translate-y-2/4"
                    )}
                    variants={stepCircleVariants}
                    viewport={{ once: true }}
                  >
                    {p.step}
                  </motion.div>
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
