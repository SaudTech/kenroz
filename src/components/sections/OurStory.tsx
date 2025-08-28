"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Calendar, CircleCheckBig, ThumbsUp } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-effect";

function SectionHeader({
  subtitle,
  title,
  isOpen,
  onToggle,
  headerId,
}: {
  subtitle: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  headerId: string;
}) {
  return (
    <div className="text-left">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${headerId}-panel`}
        className="mt-1 w-full flex items-center justify-between gap-4 text-left"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground cursor-pointer inline-block"
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h2>
      </button>
    </div>
  );
}

const stats = [
  { label: "5+ Years of experience", icon: Calendar },
  { label: "14+ Projects", icon: CircleCheckBig },
  { label: "Delivering Excellence", icon: ThumbsUp },
];
const distance = 60;
const view = { once: false, amount: 0 };

const fromLeft: Variants = {
  hidden: { x: -distance, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
};
export default function OurStory() {
  const [activeKey, setActiveKey] = useState<"story" | "why">("story");
  const reduceMotion = useReducedMotion();

  const toggle = useCallback((key: "story" | "why") => {
    setActiveKey(() => key);
  }, []);

  const distance = reduceMotion ? 0 : 60;
  const view = { once: false, amount: 0 };

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

  const slideVariants = {
    collapsed: { height: 0, opacity: 0, y: -4 },
    open: { height: "auto", opacity: 1, y: 0 },
  };

  const words = [{ text: "Who" }, { text: "We" }, { text: "Are" }];

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Typewriter Heading */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={{ scale: 1.02 }}
          className="inline-block w-full text-center"
        >
          <TypewriterEffect
            words={words}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground"
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side */}
          <div className="lg:col-span-6 space-y-12">
            {/* Our Journey */}
            <div id="our-story">
              <motion.div variants={fromLeft} initial="hidden" whileInView="show" viewport={view}>
                <SectionHeader
                  subtitle="Our Journey"
                  title="We started our journey years back"
                  isOpen={activeKey === "story"}
                  onToggle={() => toggle("story")}
                  headerId="our-story"
                />
              </motion.div>

              <motion.div
                key="story-panel"
                id="our-story-panel"
                role="region"
                aria-labelledby="our-story"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={slideVariants}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-visible"
              >
                <motion.div
                  className="mt-4 font-bold md:text-lg leading-relaxed text-black cursor-pointer inline-block"
                  variants={fromRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={{ scale: 1.02 }}
                >
                  For over a decade, we’ve helped many businesses to grow in
                  various ways like branding, graphics design, web design,
                  mobile development, etc. Established in 2020, Kenroz is
                  headquartered in Hyderabad, India. Kenroz is your prime
                  destination for all your web design, mobile applications,
                  cloud applications, Software Development, SEO and Digital
                  Marketing needs.
                </motion.div>
              </motion.div>
            </div>

            {/* Why Us */}
            <div id="why-us">
              <motion.div variants={fromLeft} initial="hidden" whileInView="show" viewport={view}>
                <SectionHeader
                  subtitle="Why Us?"
                  title="Obvious 1st choice"
                  isOpen={activeKey === "why"}
                  onToggle={() => toggle("why")}
                  headerId="why-us"
                />
              </motion.div>

              <motion.div
                key="why-panel"
                id="why-us-panel"
                role="region"
                aria-labelledby="why-us"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={slideVariants}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-visible"
              >
                <motion.div
                  className="mt-4 font-bold md:text-lg leading-relaxed text-black cursor-pointer inline-block"
                  variants={fromRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={{ scale: 1.02 }}
                >
                  Web design is more than just looking good! We create custom
                  websites that make your phone ring. With our in-house experts
                  and 20+ years of insights. With our extensive knowledge of
                  both technology and client requirements, we have built a
                  satisfied customer base of more than ten thousand spanning
                  across 26 countries, showcasing our proven track record.
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6 relative h-full flex gap-6 pt-3 items-start">
            <motion.div
              className="relative aspect-[4/5] w-[80%] overflow-visible rounded-2xl border shadow-lg"
              variants={fromRight}
              initial="hidden"
              whileInView="show"
              viewport={view}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-md"
                whileHover={{ filter: "brightness(1.15) contrast(1.05)" }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/photo-1521898284481-a5ec348cb555.avif"
                  alt="Kenroz team collaborating — our story"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-col justify-between h-full py-10 w-1/4 absolute right-15 top-0">
              {stats.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  className="h-[120px] w-[190px] flex flex-col items-center justify-center rounded-full border bg-primary/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow text-center"
                  variants={i % 2 === 0 ? fromLeft : fromRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className="h-8 w-8 text-primary-foreground mb-2" />
                  <motion.span
                    className="text-xs md:text-lg font-bold leading-snug text-primary-foreground cursor-pointer inline-block"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={view}
                    whileHover={{ scale: 1.02 }}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Variants must be declared inside the component scope
