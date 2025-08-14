"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const valueProps = ["Future-ready solutions", "Expert team support", "Scalable & secure"];
  const easeOut = [0.16, 1, 0.3, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

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
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Centered Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center space-y-8 w-full"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <motion.h1
          className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOut }}
        >
          <motion.span
            className="block mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empowering Businesses to{" "}
          {/* </motion.span> */}
          {/* <motion.span
            className="bg-gradient-to-r from-[#fffde7] via-white to-[#fffde7] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          > */}
            Lead, Transform & Excel
          </motion.span>
        </motion.h1>

        <motion.div
          className="text-[#fffde7] text-lg lg:text-xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="mb-4">Your trusted technology partner for innovative IT solutions:</p>
          <FlipWords
            words={[
              "Microsoft Dynamics 365",
              "Cloud Solutions",
              "Web Development",
              "Mobile Development",
              "Digital Marketing",
              "Outsourcing",
            ]}
            className="text-white font-bold"
          />
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#fffde7] text-sm font-medium hover:bg-primary transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            >
              <CheckCircle className="w-4 h-4 text-[#fffde7]" />
              {prop}
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-[#fffde7] text-primary px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-transparent hover:border-white hover:text-white border border-solid"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
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
