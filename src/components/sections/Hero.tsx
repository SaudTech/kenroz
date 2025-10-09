"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ButtonLink } from "../Navbar";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";

const outcomes = [
  {
    label: "4-week pilot launches",
    hint: "Ship MVPs with dedicated squads",
  },
  {
    label: "99.9% SLA uptime",
    hint: "Ops reviews + runbooks on day one",
  },
  {
    label: "40% faster Dynamics rollouts",
    hint: "Blueprints for Finance, Sales, and Field",
  },
];

export default function Hero() {
  const easeInOut = [0.42, 0, 0.58, 1] as const;
  const { fromLeft, fromRight } = useSectionVariants();

  return (
    <section className="flex flex-col items-center justify-center text-center relative overflow-hidden py-16 px-4 w-full h-[calc(100vh-64px)] md:px-8">
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
        className="relative z-10 flex flex-col items-center space-y-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={hoverScale}
        >
          Build, ship, and scale enterprise software—faster.
        </motion.h1>

        <motion.p
          className="text-[#fffde7] text-lg md:text-xl leading-relaxed max-w-2xl"
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={hoverScale}
        >
          Cloud, Dynamics 365, and custom apps with SLA-backed delivery.
        </motion.p>

        {/* Feature Highlights (button-style with hover explanatory text) */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {outcomes.map((item, index) => (
            <motion.div
              key={item.label}
              className="group hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] relative flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#fffde7] text-xs sm:text-sm font-medium border border-white/10  transition-all duration-300"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ButtonLink href="#contact">
              Talk to an expert
              <ArrowRight className="w-5 h-5 ms-2" />
            </ButtonLink>
          </motion.div>
          <ButtonLink href="/services/microsoft-dynamics-365" variant="outline">
            Explore Dynamics 365 services
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(32)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-red-400/70 rounded-full"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{
                y: [-6, 6, -6],
                x: [-3, 3, -3],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: easeInOut,
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
