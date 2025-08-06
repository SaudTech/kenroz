"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
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
  );
}
