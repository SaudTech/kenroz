"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
import SectionHeading from "../typography/SectionHeading";
import Paragraph from "../typography/Paragraph";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Abacus", logo: "/clients/Abacus.jpg" },
  {
    name: "Pure Quality Construction",
    logo: "/clients/Pure-Quality-Construction-LLC.webp",
  },
  { name: "Chemsol", logo: "/clients/Chemsol.png" },
  { name: "Tamimi Group", logo: "/clients/TamimiGroup.png" },
  { name: "Stepco", logo: "/clients/Stepco.png" },
  { name: "NAJIM", logo: "/clients/NAJIM.png" },
  { name: "Premier global Trading", logo: "/clients/Premier.webp" },
  { name: "Musanadah", logo: "/clients/Musanadah.png" },
];

export default function OurClients() {
  const { fromRight } = useSectionVariants();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 2 : clientWidth / 2;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      className="w-full"
      id="our-clients"
      aria-labelledby="our-clients-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-2xl overflow-hidden px-4 sm:px-6 md:px-10 pb-10 pt-5 relative">
          <SectionHeading
            blackText="Trusted by"
            primaryText="leading companies"
          />

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-primary text-primary-foreground shadow p-2 border hover:bg-transparent hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-4 sm:gap-6 px-4 sm:px-10 mt-10 sm:mt-20 scroll-smooth overflow-y-hidden"
          >
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                className="group relative flex items-center justify-center min-w-[120px] sm:min-w-[160px] md:min-w-[180px] p-3 sm:p-4 md:p-6 rounded-2xl backdrop-blur-sm transition-all duration-300"
                title={company.name}
                variants={fromRight}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={hoverScale}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={cn(
                    "relative h-40 w-40 sm:h-52 sm:w-48 opacity-80 group-hover:opacity-100 transition rounded-md shadow-lg p-2",
                    company.name === "Premier global Trading" && "sm:h-52 w-52",
                    company.name === "Musanadah" && "sm:h-52 w-52"
                  )}
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-primary text-primary-foreground shadow p-2 border hover:bg-transparent hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <Paragraph className="mt-6 text-center text-sm sm:text-base">
          We are proud to have collaborated with a diverse range of clients,
          delivering exceptional solutions tailored to their unique needs.
          Here&apos;s a glimpse of some of the companies we&apos;ve had the
          privilege to work with.
        </Paragraph>
      </div>
    </section>
  );
}
