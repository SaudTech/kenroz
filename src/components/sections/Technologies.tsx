"use client";

import { useMemo } from "react";
import { createElement } from "react";
import { motion } from "framer-motion";
import * as TechIcons from "../Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check } from "lucide-react";
import SectionHeader from "../SectionHeader";

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
  // Custom positions for each technology icon (x%, y%)
  const x = [4, 20, 40, 57, 80, 90, 15, 38, 55, 75, 5, 25, 45, 65, 85, 26, 67];
  const y = [10, 0, 20, 5, 15, 24, 55, 54, 60, 50, 85, 80, 85, 75, 85, 35, 35];

  const iconEntries = useMemo(() => {
    return Object.entries(TechIcons)
      .filter(([k, v]) => !EXCLUDED_EXPORTS.has(k) && typeof v === "function")
      .map(([name, Comp]) => [humanize(name), Comp]);
  }, []);

  return (
    <section id="tech" className="py-20 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20">
          {/* Icons grid (left) */}
          <div className="md:col-span-7">
            <style>{`
              @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-12px); }
                100% { transform: translateY(0); }
              }
            `}</style>

            <TooltipProvider delayDuration={80}>
              <div
                className="relative w-full mx-auto"
                style={{
                  minHeight: "350px",
                }}
              >
                {iconEntries.map(([label, Comp], i) => {
                  // Use x/y arrays, fallback to 0 if out-of-bounds
                  const left = (x[i] ?? 0) + "%";
                  const top = (y[i] ?? 0) + "%";

                  // Random tilt (seeded per icon for stability)
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
                          className="
                            absolute w-20 h-20 md:w-24 md:h-24
                            p-2 rounded-lg bg-white
                            shadow-md border border-gray-200
                            flex items-center justify-center
                            transition-transform duration-300
                            hover:scale-110 hover:shadow-xl
                            will-change-transform
                          "
                          style={{
                            left,
                            top,
                            transform: `rotate(${rot}deg)`,
                            animation: `float ${floatDuration}s ease-in-out infinite`,
                            animationDelay: `${floatDelay}s`,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                        >
                          {createElement(Comp, {
                            className: "w-full h-full object-contain",
                            "aria-hidden": true,
                          })}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs font-medium">
                        {label as string}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>

          {/* Content (right) */}
          <div className="md:col-span-5">
            <div className="sticky top-20">
              <SectionHeader
                subtitle="Technologies we use"
                title="Our Technologies"
                description="A selection of frameworks, languages, and tools that power our solutions."
              />

              <ul className="mt-6 space-y-3">
                {[
                  "Modern frameworks and libraries",
                  "Cloud-native infrastructure",
                  "Secure and scalable data solutions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 rounded-full border p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
