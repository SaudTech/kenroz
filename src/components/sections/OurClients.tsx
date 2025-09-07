"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
import SectionHeading from "../typography/SectionHeading";

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
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-0 md:pb-24">
        <div className="rounded-2xl overflow-hidden px-6 pb-10 pt-5 md:px-10 relative">
          {/* <SectionHeading blackText="Our" primaryText="Clients" /> */}
          <SectionHeading
            blackText="Trusted by"
            primaryText="leading companies"
          />

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 translate-y-[100%] z-10 rounded-full bg-primary text-primary-foreground shadow p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 px-10 mt-20 scroll-smooth overflow-y-hidden"
          >
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                className="group relative flex items-center justify-center min-w-[160px] md:min-w-[180px] p-4 md:p-6 rounded-2xl backdrop-blur-sm transition-all duration-300"
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
                    "relative h-52 w-52 md:h-52 md:w-48 opacity-80 group-hover:opacity-100 transition",
                    company.name === "Premier global Trading" && "md:h-52 w-52",
                    company.name === "Musanadah" && "md:h-52 w-52"
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
            className="absolute right-0 top-1/2 translate-y-[100%] z-10 rounded-full bg-primary text-primary-foreground shadow p-2 hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
