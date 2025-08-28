"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ButtonLink } from "../Navbar";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Abacus", logo: "/clients/Abacus.jpg" },
  { name: "Pure Quality Construction", logo: "/clients/Pure-Quality-Construction-LLC.webp" },
  { name: "Chemsol", logo: "/clients/Chemsol.png" },
  { name: "Tamimi Group", logo: "/clients/TamimiGroup.png" },
  { name: "Stepco", logo: "/clients/Stepco.png" },
  { name: "NAJIM", logo: "/clients/NAJIM.png" },
  { name: "Premier global Trading", logo: "/clients/Premier.webp" },
  { name: "Musanadah", logo: "/clients/Musanadah.png" },
  { name: "Arcgen", logo: "/Arcgen.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function OurClients() {
  return (
    <section className="w-full" id="our-clients" aria-labelledby="our-clients-heading">
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* ✅ Put border around actual content */}
        <div className="rounded-2xl bg-gray-100 shadow-md border border-solid border-black px-6 py-10 md:px-10 md:py-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground text-center"
          >
            Our Clients
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* LEFT: Text */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="sticky top-20 text-start font-bold">
                <motion.p
                  className="text-3xl md:text-4xl tracking-widest uppercase font-extrabold"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6 }}
                >
                  Trusted by leading companies
                </motion.p>

                <motion.p
                  className="mt-4 text-lg leading-relaxed text-foreground"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Teams across construction, manufacturing, trading, and services rely on Kenroz to streamline operations and accelerate growth.
                </motion.p>

                <ul className="mt-6 space-y-3 w-full text-start">
                  {[
                    "Robust, secure implementations with enterprise-grade standards",
                    "Faster time-to-value with clean, scalable architecture",
                    "Hands-on support from discovery to deployment—and beyond",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                    >
                      <span className="mt-1 rounded-full border p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-8 flex flex-wrap justify-end items-center gap-3"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ButtonLink href="/contact-us">Work With Kenroz</ButtonLink>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: Logos */}
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {companies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    className="group relative flex items-center justify-center p-4 md:p-6 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    title={company.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div
                      className={cn(
                        "relative h-20 w-44 md:h-20 md:w-48 opacity-80 group-hover:opacity-100 transition",
                        company.name === "Premier global Trading" && "md:h-20 w-44",
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
