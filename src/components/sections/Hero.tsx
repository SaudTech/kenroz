"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-center lg:text-left relative overflow-hidden py-8 px-4 w-full min-h-[600px] lg:h-[810px] md:px-8">
      {/* Enhanced SVG Background with better grid visibility */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_186_1134)">
            <mask
              id="mask0_186_1134"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="812"
            >
              <rect
                x="10"
                y="-0.84668"
                width="1200"
                height="811.693"
                fill="url(#paint0_linear_186_1134)"
              />
            </mask>
            <g mask="url(#mask0_186_1134)">
              {/* Enhanced Grid Rectangles - More Visible */}
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`row1-${i}`}>
                  {[...Array(22)].map((_, j) => (
                    <motion.rect
                      key={`grid-${i}-${j}`}
                      x={-20.0891 + i * 36}
                      y={9.2 + j * 36}
                      width="35.6"
                      height="35.6"
                      stroke="#ef4444"
                      strokeOpacity="0.4"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                      fill="none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      transition={{
                        delay: (i + j) * 0.005,
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 4,
                      }}
                    />
                  ))}
                </React.Fragment>
              ))}

              {/* Enhanced Specific Rectangles with fill */}
              <motion.rect
                x="699.711"
                y="81"
                width="36"
                height="36"
                fill="#ef4444"
                fillOpacity="0.6"
                stroke="#dc2626"
                strokeWidth="1"
                animate={{
                  fillOpacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.rect
                x="195.711"
                y="153"
                width="36"
                height="36"
                fill="#dc2626"
                fillOpacity="0.7"
                stroke="#b91c1c"
                strokeWidth="1"
                animate={{
                  fillOpacity: [0.7, 0.9, 0.7],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.rect
                x="1023.71"
                y="153"
                width="36"
                height="36"
                fill="#b91c1c"
                fillOpacity="0.8"
                stroke="#991b1b"
                strokeWidth="1"
                animate={{
                  fillOpacity: [0.8, 1, 0.8],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </g>

            {/* Enhanced gradient overlays with more red */}
            <g filter="url(#filter0_f_186_1134)">
              <path
                d="M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z"
                fill="url(#paint1_linear_186_1134)"
              />
            </g>
            <g filter="url(#filter1_f_186_1134)">
              <path
                d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
                fill="url(#paint2_linear_186_1134)"
                fillOpacity="0.7"
              />
            </g>
            <g
              style={{ mixBlendMode: "lighten" }}
              filter="url(#filter2_f_186_1134)"
            >
              <path
                d="M1567.45 -231.02V-293.03H1890V1104.85H586.158V750.269C1128.11 750.269 1567.45 310.931 1567.45 -231.02Z"
                fill="url(#paint3_linear_186_1134)"
              />
            </g>
            <g
              style={{ mixBlendMode: "overlay" }}
              filter="url(#filter3_f_186_1134)"
            >
              <path
                d="M65.625 750.269H284.007C860.205 750.269 1327.31 283.168 1327.31 -293.03H1650V1104.85H65.625V750.269Z"
                fill="url(#paint4_radial_186_1134)"
                fillOpacity="0.6"
              />
            </g>
          </g>
          <rect
            x="0.5"
            y="0.5"
            width="1219"
            height="809"
            rx="15.5"
            stroke="#ef4444"
            strokeOpacity="0.3"
          />
          <defs>
            <filter
              id="filter0_f_186_1134"
              x="147.369"
              y="-467.818"
              width="1941.42"
              height="2035.46"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="159.394"
                result="effect1_foregroundBlur_186_1134"
              />
            </filter>
            <filter
              id="filter1_f_186_1134"
              x="-554.207"
              y="-1169.39"
              width="3216.57"
              height="3310.61"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="478.182"
                result="effect1_foregroundBlur_186_1134"
              />
            </filter>
            <filter
              id="filter2_f_186_1134"
              x="426.762"
              y="-452.424"
              width="1622.63"
              height="1716.67"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="79.6969"
                result="effect1_foregroundBlur_186_1134"
              />
            </filter>
            <filter
              id="filter3_f_186_1134"
              x="-253.163"
              y="-611.818"
              width="2221.95"
              height="2035.46"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="159.394"
                result="effect1_foregroundBlur_186_1134"
              />
            </filter>

            {/* Balanced red-black gradients */}
            <linearGradient
              id="paint0_linear_186_1134"
              x1="35.0676"
              y1="23.6807"
              x2="903.8"
              y2="632.086"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#dc2626" stopOpacity="0.8" />
              <stop offset="1" stopColor="#1f2937" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_186_1134"
              x1="1118.08"
              y1="-149.03"
              x2="1118.08"
              y2="1248.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ef4444" stopOpacity="0.9" />
              <stop offset="0.3" stopColor="#dc2626" stopOpacity="0.7" />
              <stop offset="0.7" stopColor="#b91c1c" stopOpacity="0.6" />
              <stop offset="1" stopColor="#1f2937" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_186_1134"
              x1="1054.08"
              y1="-213.03"
              x2="1054.08"
              y2="1184.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f87171" stopOpacity="0.8" />
              <stop offset="0.4" stopColor="#ef4444" stopOpacity="0.6" />
              <stop offset="0.8" stopColor="#dc2626" stopOpacity="0.4" />
              <stop offset="1" stopColor="#374151" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_186_1134"
              x1="1238.08"
              y1="-293.03"
              x2="1238.08"
              y2="1104.85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fca5a5" stopOpacity="0.7" />
              <stop offset="0.5" stopColor="#f87171" stopOpacity="0.5" />
              <stop offset="1" stopColor="#4b5563" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient
              id="paint4_radial_186_1134"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(989.13 557.24) rotate(47.9516) scale(466.313 471.424)"
            >
              <stop stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="0.3" stopColor="#dc2626" stopOpacity="0.6" />
              <stop offset="0.7" stopColor="#b91c1c" stopOpacity="0.4" />
              <stop offset="1" stopColor="#374151" stopOpacity="0.3" />
            </radialGradient>
            <clipPath id="clip0_186_1134">
              <rect width="1220" height="810" rx="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

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
