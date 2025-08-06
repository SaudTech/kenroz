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

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-center lg:text-left relative overflow-hidden py-8 px-4 w-full min-h-[600px] lg:h-[810px] md:px-8">
      <HeroBackground />

      {/* Left Side - Content */}
      <motion.div
        className="relative z-10 flex-1 space-y-6 mb-8 lg:mb-0 lg:pr-8 max-w-[70%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-red-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Kenroz is a all in one solution for 
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <FlipWords words={["Web Application Development", "Mobile Application Development", "Microsoft Dynamic 365", "Cloud Solutions", "Digital Marketing", "Outsourcing"]} /> 
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-gray-200 text-base lg:text-lg font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Expert team delivering innovative web design, software development,
          and digital marketing solutions in Burdwan.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={"/products"} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-semibold text-base shadow-2xl ring-2 ring-red-500/20 hover:ring-red-400/30 transition-all duration-300">
              View Our products
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
