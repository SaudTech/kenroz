"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ButtonLink } from "../Navbar";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";

const headlineWords = [
  { text: "Innovate.", className: "text-white" },
  { text: "Scale.", className: "text-white" },
  { text: "Lead", className: "text-white" },
  { text: "the", className: "text-white" },
  { text: "Future.", className: "text-white" },
];



const featureHighlights = [
  {
    label: "Future-Ready Solutions",
    hint: "Ready for tomorrow’s challenges",
  },
  {
    label: "Expert Team Support",
    hint: "Guidance at every step",
  },
  {
    label: "Scalable & Secure",
    hint: "Grow safely with confidence",
  },
];

export default function Hero() {
  const easeInOut = [0.42, 0, 0.58, 1] as const;
  const { fromLeft, fromRight } = useSectionVariants();

  return (
    <section className="flex flex-col items-center justify-center text-center relative overflow-hidden py-8 px-4 w-full h-[calc(100vh-64px)] md:px-8">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Centered Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center space-y-8 w-full"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline (Typewriter Animation) */}
        <motion.h1
          className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={hoverScale}
        >
          <TypewriterEffect words={headlineWords} className="text-white" />
        </motion.h1>

        {/* Static Subtext + Rotating Services */}
        <motion.div
          className="text-[#fffde7] text-lg lg:text-xl font-medium leading-relaxed max-w-3xl"
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={hoverScale}
          transition={{ delay: 0.9 }}
        >
          <p className="mb-4">
            Your trusted partner for smart, future-ready IT solutions.
          </p>
          <FlipWords
            words={[
              { title: "Cloud Solutions", subtitle: "Streamline Your Business Operations" },
              { title: "Digital Marketing", subtitle: "Grow Your Audience & Revenue" },
              { title: "Microsoft Dynamics 365", subtitle: "Transform Enterprise Efficiency" },
              { title: "AI & Automation", subtitle: "Future-Proof Your Processes" },
              { title: "Custom Software Development", subtitle: "Build Solutions That Scale" },
              { title: "Cybersecurity Solutions", subtitle: "Protect & Secure Your Data" },
            ]}
            className="text-center"
          />{" "}
        </motion.div>

        {/* Feature Highlights (button-style with hover explanatory text) */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {featureHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#fffde7] text-sm font-medium border border-white/10 hover:shadow-lg transition-all duration-300"
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={view}
              whileHover={hoverScale}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <CheckCircle className="w-4 h-4 text-[#fffde7]" />
              {item.label}

              {/* Hover hint */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap"
              >
                <div className="bg-white/95 text-gray-900 text-xs rounded-md px-3 py-2 shadow-xl border border-black/10">
                  {item.hint}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ButtonLink href="#services">
              Explore Our Services
              <ArrowRight className="w-5 h-5 ms-2" />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-40"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: easeInOut,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
