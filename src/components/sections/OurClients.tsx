"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
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

// Duplicate just enough for seamless loop (2–3 times only)
const loopCompanies = [...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies, ...companies];

export default function OurClients() {
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

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

            {/* Marquee wrapper */}
            <div className="relative mt-10 sm:mt-20 overflow-hidden">
              <div className="flex animate-marquee gap-8">
                {loopCompanies.map((company, i) => (
                  <div
                    key={`${company.name}-${i}`}
                    className="flex items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px] p-4"
                    title={company.name}
                  >
                    <div
                      className={cn(
                        "relative h-28 w-28 sm:h-36 sm:w-40 opacity-80 hover:opacity-100 transition rounded-md shadow-lg p-2 bg-white/40 backdrop-blur-sm",
                        company.name === "Premier global Trading" && "w-44",
                        company.name === "Musanadah" && "w-44"
                      )}
                    >
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
          </div>

          <Paragraph className="mt-6 text-center text-sm sm:text-base">
            We are proud to have collaborated with a diverse range of clients,
            delivering exceptional solutions tailored to their unique needs.
            Here&apos;s a glimpse of some of the companies we&apos;ve had the
            privilege to work with.
          </Paragraph>
        </div>
      </section>
    </>
  );
}
