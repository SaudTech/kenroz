"use client";

import { useMemo } from "react";
import { createElement } from "react";
import * as TechIcons from "../Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our Technology Stack
          </h2>
          <p className="mt-2 text-gray-900 mx-auto text-sm md:text-base max-w-2xl">
            A scattered, floating logo cloud — smaller tiles, each offset for a
            casual layout.
          </p>
        </div>

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
                    <div
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
                    >
                      {createElement(Comp, {
                        className: "w-full h-full object-contain",
                        "aria-hidden": true,
                      })}
                    </div>
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
    </section>
  );
}
