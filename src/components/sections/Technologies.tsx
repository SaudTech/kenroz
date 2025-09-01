"use client";

import { useMemo, createElement } from "react";
import { motion } from "framer-motion";
import * as TechIcons from "../Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check } from "lucide-react";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
import Paragraph from "../typography/Paragraph";

const EXCLUDED_EXPORTS = new Set(["default", "__esModule"]);

function hashString(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}
function seededRand(seed: number) {
  let x = seed || 123456789;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 4294967296;
  };
}
function humanize(name: string) {
  const base = name.replace(/(Dark|Light|Logo|Icon)$/i, "");
  const spaced = base.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced
    .replace(/\bJs\b/g, "JS")
    .replace(/\bTs\b/g, "TS")
    .replace(/\bAws\b/g, "AWS")
    .replace(/\bGcp\b/g, "GCP")
    .replace(/\bSql\b/g, "SQL")
    .replace(/\bNo Sql\b/g, "NoSQL")
    .replace(/\bNextjs\b/gi, "Next.js")
    .replace(/\bNode Js\b/gi, "Node.js")
    .trim();
}

export default function Technologies() {
  const iconEntries = useMemo(() => {
    return Object.entries(TechIcons)
      .filter(([k, v]) => !EXCLUDED_EXPORTS.has(k) && typeof v === "function")
      .map(([name, Comp]) => [humanize(name), Comp]);
  }, []);
  const { fromLeft, fromRight } = useSectionVariants();

  return (
    <section id="tech" className="py-20 md:py-24">
      <div className="relative mx-auto max-w-7xl text-center px-4">
        <motion.h2
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={hoverScale}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight flex gap-2 justify-center"
        >
          Our <span className="block text-primary">Technologies</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20">
          {/* LEFT: Text */}
          <div className="md:col-span-5 order-2 text-start md:order-1">
            <div className="sticky top-20">
              <motion.p
                className="text-3xl md:text-4xl tracking-widest uppercase text-foreground font-extrabold"
                variants={fromLeft}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={hoverScale}
              >
                Technologies we use
              </motion.p>

              {/* Shorter subtitle */}
              <Paragraph>
                Modern, scalable, and secure tools for building the future.
              </Paragraph>

              {/* Extra detail */}
              <Paragraph>
                From frontend frameworks to cloud-native services, we choose
                technologies that ensure reliability, performance, and long-term
                scalability for every project.
              </Paragraph>

              <ul className="mt-6 -space-y-4">
                {[
                  "Modern frameworks and libraries",
                  "Cloud-native infrastructure",
                  "Secure and scalable data solutions",
                ].map((item, i) => (
                  <Paragraph key={item} className="flex items-start gap-2">
                    <span className="mt-1 rounded-full border p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </span>
                    <span>{item}</span>
                  </Paragraph>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Icons */}
          <div className="md:col-span-7 order-1 md:order-2">
            <style>{`
              @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
              }
            `}</style>

            <TooltipProvider delayDuration={80}>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
                {iconEntries.map(([label, Comp], i) => {
                  const seed = hashString(label as string);
                  const rand = seededRand(seed);
                  const rot = (rand() * 10 - 5).toFixed(2);
                  const floatDuration = 2.5 + rand() * 6;
                  const floatDelay = rand() * 2;

                  return (
                    <Tooltip key={label as string}>
                      <TooltipTrigger asChild>
                        <motion.div
                          aria-label={label as string}
                          title={label as string}
                          className="w-18 h-18 md:w-20 md:h-20 p-2 rounded-lg bg-white shadow-md border border-gray-200 flex items-center justify-center transition-transform duration-300 hover:shadow-xl will-change-transform"
                          style={{
                            transform: `rotate(${rot}deg)`,
                            animation: `float ${floatDuration}s ease-in-out infinite`,
                            animationDelay: `${floatDelay}s`,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          whileHover={hoverScale}
                          transition={{
                            duration: 0.4,
                            delay: i * 0.05,
                            ease: "easeOut",
                          }}
                        >
                          {createElement(Comp, {
                            className: "w-full h-full object-contain",
                            "aria-hidden": true,
                          })}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="text-xs font-medium"
                      >
                        {label as string}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
