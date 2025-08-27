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
      <div className="relative mx-auto max-w-7xl text-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground"
        >
          Our Clients
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Text content (left on desktop) */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="sticky top-20">
              <motion.p
                className="text-xs md:text-sm tracking-widest uppercase text-primary/90 font-semibold"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
              >
                Trusted by leading companies
              </motion.p>
              <motion.p
                className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Teams across construction, manufacturing, trading, and services rely on Kenroz to streamline operations and accelerate growth.
              </motion.p>

              {/* Value bullets */}
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
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTAs */}
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ButtonLink href="/contact-us">Get on this list</ButtonLink>
              </motion.div>

              {/* Subtle compliance / assurance line (generic & safe) */}
              <motion.p
                className="mt-4 text-xs text-muted-foreground"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Privacy-first by design • Secure SDLC • Regular updates
              </motion.p>
            </div>
          </div>

          {/* Logos grid (right on desktop) */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {companies.map((company, i) => (
                <motion.div
                  key={company.name}
                  className="flex items-center justify-center p-4 md:p-6 rounded-2xl border bg-background/60 backdrop-blur-sm hover:shadow-sm transition-shadow"
                  title={company.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className={cn(
                      "relative h-12 w-36 md:h-16 md:w-44 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition",
                      company.name === "Premier global Trading" && "md:h-20 w-44",
                      company.name === "Musanadah" && "md:h-20 w-44",
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
    </section>
  );
}