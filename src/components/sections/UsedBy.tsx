"use client";

import React from "react";
import Image from "next/image";

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
  { name: "NAJIM", logo: "/clients/NAJIM.svg" },
  { name: "Premier global Trading", logo: "/clients/Premier.webp" },
  { name: "Musanadah", logo: "/clients/Musanadah.png" },
];

function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="text-left">
      <p className="text-sm tracking-widest uppercase text-primary/90 font-semibold">
        {subtitle}
      </p>
      <h2 className="mt-2 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] text-foreground">
        {title}
      </h2>
    </div>
  );
}

export default function UsedBy() {
  return (
    <section className="w-full" id="used-by">
      <div className="relative z-[4] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <SectionHeader
            subtitle="Companies that trust our innovation"
            title="Used by"
          />
          <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
            These companies use products developed by Kenroz to power their businesses.
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center p-4 rounded-2xl border bg-white/50"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

