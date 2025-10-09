"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "../typography/SectionHeading";
import Paragraph from "../typography/Paragraph";

interface Company {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const companies: Company[] = [
  { name: "Abacus", logo: "/clients/Abacus.jpg", width: 160, height: 64 },
  {
    name: "Pure Quality Construction",
    logo: "/clients/Pure-Quality-Construction-LLC.webp",
    width: 180,
    height: 64,
  },
  { name: "Chemsol", logo: "/clients/Chemsol.png", width: 160, height: 64 },
  { name: "Tamimi Group", logo: "/clients/TamimiGroup.png", width: 180, height: 64 },
  { name: "Stepco", logo: "/clients/Stepco.png", width: 160, height: 64 },
  { name: "NAJIM", logo: "/clients/NAJIM.png", width: 160, height: 64 },
  { name: "Premier Global Trading", logo: "/clients/Premier.webp", width: 170, height: 64 },
  { name: "Musanadah", logo: "/clients/Musanadah.png", width: 180, height: 64 },
];

export default function OurClients() {
  return (
    <>
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

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex h-20 w-full max-w-[180px] items-center justify-center rounded-md border border-white/10 bg-white/10 p-4 transition-all duration-200 hover:border-white/40"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className="h-full w-auto object-contain grayscale hover:grayscale-0 transition"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <Paragraph className="mt-8 text-center text-sm sm:text-base text-card-foreground/80">
            Eight partnerships across construction, trading, and services keep our delivery playbooks sharp—and every engagement starts with clear KPIs.
          </Paragraph>
        </div>
      </section>
    </>
  );
}
