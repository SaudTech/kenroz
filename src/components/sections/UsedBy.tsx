"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ButtonLink } from "../Navbar";
import SectionHeader from "../SectionHeader";

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

export default function UsedBy() {
  return (
    <section className="w-full" id="used-by" aria-labelledby="used-by-heading">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Logos grid (left) */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-center p-4 md:p-6 rounded-2xl border bg-background/60 backdrop-blur-sm hover:shadow-sm transition-shadow"
                  title={company.name}
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
                </div>
              ))}
            </div>
          </div>

          {/* Content (right) */}
          <div className="md:col-span-5">
            <div className="sticky top-20">
              <SectionHeader
                subtitle="Trusted by leading companies"
                title="Our Clients"
                description="Teams across construction, manufacturing, trading, and services rely on Kenroz to streamline operations and accelerate growth."
              />

              {/* Value bullets */}
              <ul className="mt-6 space-y-3">
                {[
                  "Robust, secure implementations with enterprise-grade standards",
                  "Faster time-to-value with clean, scalable architecture",
                  "Hands-on support from discovery to deployment—and beyond",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 rounded-full border p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              
              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact-us">
                  Get on this list
                </ButtonLink>
              </div>

              {/* Subtle compliance / assurance line (generic & safe) */}
              <p className="mt-4 text-xs text-muted-foreground">
                Privacy-first by design • Secure SDLC • Regular updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}