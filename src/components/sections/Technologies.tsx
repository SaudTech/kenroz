"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as TechIcons from "../Icons";
import { createElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Exclude non-component exports if any
const EXCLUDED_EXPORTS = new Set<string>(["default", "__esModule"]);

// Turn "ReactDark" -> "React", "NodeJs" -> "Node JS", "Nextjs" -> "Next.js"
function humanize(name: string) {
  const base = name.replace(/(Dark|Light|Logo|Icon)$/i, "");
  const spaced = base.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced
    .replace(/\bJs\b/g, "JS")
    .replace(/\bTs\b/g, "TS")
    .replace(/\bAws\b/g, "AWS")
    .replace(/\bGcp\b/g, "GCP")
    .replace(/\bCi\b/g, "CI")
    .replace(/\bCd\b/g, "CD")
    .replace(/\bUi\b/g, "UI")
    .replace(/\bUx\b/g, "UX")
    .replace(/\bSql\b/g, "SQL")
    .replace(/\bNo Sql\b/g, "NoSQL")
    .replace(/\bNextjs\b/gi, "Next.js")
    .replace(/\bNode Js\b/gi, "Node.js")
    .trim();
}

export default function Technologies() {
  // Collect all component exports from ../Icons and flatten into one array
  const iconEntries = Object.entries(TechIcons)
    .filter(
      ([key, val]) => !EXCLUDED_EXPORTS.has(key) && typeof val === "function"
    )
    .sort(([a], [b]) => a.localeCompare(b));

  const viewportRef = useRef<HTMLDivElement | null>(null); // the masked 50% width viewport
  const trackRef = useRef<HTMLDivElement | null>(null); // the flex track we scroll
  const rafRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    // Ensure the content is wide enough to scroll
    // If not, duplicate once.
    if (track.scrollWidth <= viewport.clientWidth) {
      // Clone all children once to guarantee overflow
      const children = Array.from(track.children);
      children.forEach((el) => track.appendChild(el.cloneNode(true)));
    }

    let lastTs = 0;
    const SPEED_PX_PER_SEC = 30; // tune: higher = faster
    const step = (ts: number) => {
      if (paused) {
        rafRef.current = requestAnimationFrame(step);
        lastTs = ts;
        return;
      }

      const dt = lastTs ? (ts - lastTs) / 1000 : 0;
      lastTs = ts;

      // scroll to the right (content moves left)
      viewport.scrollLeft += SPEED_PX_PER_SEC * dt;

      // When the first tile fully exits on the left, move it to the end,
      // and subtract its width from scrollLeft to keep motion seamless.
      const first = track.firstElementChild as HTMLElement | null;
      if (first) {
        const firstWidth = first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0") || 0;
        if (viewport.scrollLeft >= firstWidth) {
          track.appendChild(first);
          viewport.scrollLeft -= firstWidth;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  return (
    <section id="tech" className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Our{" "}
            <span className="">
              Technologies
            </span>
          </h2>
        </div>

        <TooltipProvider delayDuration={100}>
          {/* 50% width viewport with edge fades */}
          <div
            className="relative mx-auto w-1/2" // 50% of available space
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* gradient fades (pointer-events-none so they don't block hover) */}
            {/* masked scroller */}
            <div
              ref={viewportRef}
              className="overflow-hidden pb-4 rounded-xl"
              aria-label="Technology icons"
            >
              {/* track that actually holds the items */}
              <div
                ref={trackRef}
                className="flex gap-6 px-4"
                // columnGap read in effect; ensure consistent with Tailwind gap-6 (1.5rem)
                style={{ columnGap: "1.5rem" }}
              >
                {iconEntries.map(([name, Comp]) => {
                  const label = humanize(name);
                  return (
                    <div key={name} className="flex-shrink-0">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className="w-16 h-16 p-2 rounded-xl bg-white shadow-sm border border-gray-200
                                       flex items-center justify-center transition-all duration-300
                                       hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25
                                       grayscale hover:grayscale-0 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30
                                       group cursor-pointer"
                            aria-label={label}
                            title={label}
                          >
                            {createElement(Comp as any, {
                              className:
                                "w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg",
                              "aria-hidden": true,
                            })}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-sm font-medium">
                          {label}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
