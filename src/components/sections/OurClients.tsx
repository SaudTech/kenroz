"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ButtonLink } from "../Navbar";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
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
  { name: "Arcgen", logo: "/Arcgen.png" },
];

export default function OurClients() {
  const { fromLeft, fromRight } = useSectionVariants();
  return (
    <section
      className="w-full"
      id="our-clients"
      aria-labelledby="our-clients-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* ✅ Put border around actual content */}
        <div className="rounded-2xl bg-gray-100 shadow-md border border-solid border-black px-6 py-10 md:px-10 md:py-14">
          <motion.h2
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={view}
            whileHover={hoverScale}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight flex gap-2 justify-center"
          >
            Our <span className="block text-primary">Clients</span>
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* LEFT: Text */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="sticky top-20 text-start">
                <motion.p
                  className="text-3xl md:text-4xl tracking-widest uppercase font-extrabold"
                  variants={fromLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={hoverScale}
                >
                  Trusted by leading companies
                </motion.p>

                <Paragraph>
                  Teams across construction, manufacturing, trading, and
                  services rely on Kenroz to streamline operations and
                  accelerate growth.
                </Paragraph>

                <ul className="mt-6 -space-y-5 w-full text-start">
                  {[
                    "Robust, secure implementations with enterprise-grade standards",
                    "Faster time-to-value with clean, scalable architecture",
                    "Hands-on support from discovery to deployment—and beyond",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center mb-2 gap-2">
                      <span className="mt-1 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                      <Paragraph>{item}</Paragraph>
                    </div>
                  ))}
                </ul>

                <motion.div
                  className="mt-8 flex flex-wrap justify-end items-center gap-3"
                  variants={fromRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={hoverScale}
                >
                  <ButtonLink href="/contact-us?p=work-with-kenroz">
                    Work With Kenroz
                  </ButtonLink>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: Logos */}
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {companies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    className="group relative flex items-center justify-center p-4 md:p-6 rounded-2xl backdrop-blur-sm transition-all duration-300"
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
                        "relative h-20 w-44 md:h-20 md:w-48 opacity-80 group-hover:opacity-100 transition",
                        company.name === "Premier global Trading" &&
                          "md:h-20 w-44",
                        company.name === "Musanadah" && "md:h-20 w-44"
                      )}
                    >
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 160px, 180px"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
