"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import HeroBackground from "./HeroBackground";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const valueProps = [
    "Future-ready solutions",
    "Expert team support", 
    "Scalable & secure"
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-[#e31b25] via-[#7e141c] to-black text-center lg:text-left relative overflow-hidden py-12 px-4 w-full min-h-[700px] lg:h-[850px] md:px-8">
      <HeroBackground />

      {/* Left Side - Content */}
      <motion.div
        className="relative z-10 flex-1 space-y-8 mb-8 lg:mb-0 lg:pr-8 max-w-[70%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <motion.h1
          className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span
            className="block mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empowering Businesses to
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-[#fffde7] via-white to-[#fffde7] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Lead, Transform & Excel
          </motion.span>
        </motion.h1>

        <motion.div
          className="text-[#fffde7] text-lg lg:text-xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="mb-4">
            Your trusted technology partner for innovative IT solutions:
          </p>
          <FlipWords 
            words={[
              "Microsoft Dynamics 365", 
              "Cloud Solutions", 
              "Web Development", 
              "Mobile Development", 
              "Digital Marketing", 
              "Custom Software"
            ]} 
            className="text-white font-bold"
          />
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#fffde7] text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            >
              <CheckCircle className="w-4 h-4 text-[#fffde7]" />
              {prop}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#services" 
              className="inline-flex items-center gap-2 bg-[#fffde7] text-[#e31b25] hover:bg-white px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="#contact" 
              className="inline-flex items-center gap-2 border-2 border-[#fffde7] text-[#fffde7] hover:bg-[#fffde7] hover:text-[#e31b25] px-8 py-4 rounded-full font-bold text-base transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        className="relative z-10 flex-1 max-w-[30%] w-full flex justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Card className="bg-white/10 backdrop-blur-md border-red-400/20 shadow-2xl min-w-md max-w-md">
          <CardHeader>
            <CardTitle className="text-white text-xl font-semibold text-center">
              Talk to our Growth Consultant Expert
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Input
                placeholder="Your Name"
                className="bg-white/20 border-red-400/30 text-white placeholder:text-gray-300 focus:border-red-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/20 border-red-400/30 text-white placeholder:text-gray-300 focus:border-red-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Input
                placeholder="Phone Number"
                className="bg-white/20 border-red-400/30 text-white placeholder:text-gray-300 focus:border-red-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Textarea
                placeholder="Tell us a bit about your project..."
                rows={10}
                className="bg-white/20 border-red-400/30 text-white min-h-[150px] placeholder:text-gray-300 focus:border-red-400 "
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300">
                Send Message
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-red-400 rounded-full opacity-40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
