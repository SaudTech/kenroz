"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import {
  Calendar,
  CircleCheckBig,
  ThumbsUp,
  Users,
  ChevronDown,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

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
      <p className="text-sm tracking-widest uppercase text-primary/90 font-semibold">
        {subtitle}
      </p>

      {/* Title row + chevron on right */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${headerId}-panel`}
        className="mt-1 w-full flex items-center justify-between gap-4 text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
          {title}
        </h2>
        <ChevronDown
          className={cn(
            "h-6 w-6 flex-shrink-0 text-foreground/80 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

const stats = [
  { label: "5+ years of experience", icon: Calendar },
  { label: "99% satisfied clients", icon: ThumbsUp },
  { label: "10+ Companies", icon: Users },
  { label: "14+ Projects", icon: CircleCheckBig },
];

export default function OurStory() {
  const [activeKey, setActiveKey] = useState<"story" | "why">("story");
  const reduceMotion = useReducedMotion();

  const toggle = useCallback((key: "story" | "why") => {
    setActiveKey(() => key); // keep one open always
  }, []);

  // ----- Per-element animation helpers -----
  const distance = reduceMotion ? 0 : 60;
  const view = { once: true, amount: 0.6, margin: "0px 0px -10% 0px" as const };

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

  const statTile: Variants = {
    hidden: { x: distance * 0.6, opacity: 0, rotate: 3, scale: 0.96 },
    show: {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  return (
    <section className="relative w-full">
      {/* NOTE: no parent whileInView here; every element manages its own in-view animation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Text Content */}
        <div className="lg:col-span-6 space-y-12">
          {/* Our Story */}
          <div id="our-story">
            {/* Header animates only when header itself is visible */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={view}
            >
              <SectionHeader
                subtitle="Our Story"
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
              className="overflow-hidden"
            >
              {/* The content itself also requires its own visibility to fade in */}
              <motion.div
                className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground"
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={view}
                transition={{ duration: 0.35 }}
              >
                For over a decade, we’ve helped many businesses to grow in
                various ways like branding, graphics design, web design, mobile
                development, etc. Established in 2020, Kenroz is headquartered
                in Hyderabad, India. Kenroz is your prime destination for all
                your web design, mobile applications, cloud applications,
                Software Development, SEO and Digital Marketing needs.
              </motion.div>
            </motion.div>
          </div>

          {/* Why Us */}
          <div id="why-us">
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={view}
            >
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
              className="overflow-hidden"
            >
              <motion.div
                className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground"
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={view}
                transition={{ duration: 0.35 }}
              >
                Web design is more than just looking good! We create custom
                websites that make your phone ring. With our in-house experts
                and 20+ years of insights, we’re honoured to have received
                multiple awards & recognitions since 2004. With our extensive
                knowledge of both technology and client requirements, we have
                built a satisfied customer base of more than ten thousand
                spanning across 26 countries, showcasing our proven track
                record.
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Image + Stats */}
        <div className="lg:col-span-6 relative h-full flex gap-6 items-start">
          {/* Image only animates when the image itself is visible */}
          <motion.div
            className="relative aspect-[4/5] w-[100%] overflow-hidden rounded-2xl border shadow-lg"
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={view}
          >
            <Image
              src="/photo-1521898284481-a5ec348cb555.avif"
              alt="Kenroz team collaborating — our story"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Each stat tile checks its own visibility */}
          <div className="flex flex-col justify-between gap-10 w-1/4 absolute -right-10 top-0">
            {stats.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                className="aspect-square flex flex-col items-center justify-center rounded-xl border bg-primary/60 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow text-center"
                variants={statTile}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ delay: i * 0.08 }} // slight cascading as each one enters view
              >
                <Icon className="h-8 w-8 text-primary-foreground/90 mb-2" />
                <span className="text-xs md:text-sm font-medium leading-snug text-primary-foreground/90">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background accent also waits for its own visibility */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={view}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </motion.div>
    </section>
  );
}
