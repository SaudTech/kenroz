"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ButtonLink } from "../Navbar";
import { ShieldUser } from "lucide-react";
import { useSectionVariants, hoverScale } from "@/lib/section-animations";
import Paragraph from "../typography/Paragraph";
import SectionHeading from "../typography/SectionHeading";

type Partner = {
  id: "emvive" | "arcgen" | string;
  name: string;
  logo?: string;
  description: string;
  website?: string;
  tags?: string[];
};

const partners: Partner[] = [
  {
    id: "emvive",
    name: "Emvive",
    logo: "/emvive.png",
    description:
      "E-invoicing platform for ZATCA compliance, and enterprise-grade controls.",
    website: "https://emvive.com",
    tags: ["ZATCA", "e-Invoicing"],
  },
  {
    id: "arcgen",
    name: "Arcgen",
    logo: "/Arcgen.png",
    description:
      "Automation-first tooling to orchestrate data flows and reduce operational toil.",
    website: "https://arcgen.in",
    tags: ["Speech Recognition", "Healthcare"],
  },
];

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-xl border bg-primary/10 text-primary font-bold">
      {initials}
    </div>
  );
}

function PartnerCard({ p, index }: { p: Partner; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { fromLeft, fromRight } = useSectionVariants();

  return (
    <motion.div
      ref={ref}
      variants={index % 2 === 0 ? fromLeft : fromRight}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={hoverScale}
      transition={{ delay: index * 0.12 }}
      className="group relative w-full h-full"
    >
      {/* outer gradient frame */}
      <div className="rounded-2xl p-[1px] bg-primary/10 h-full">
        {/* inner card: full-height flex column */}
        <div className="rounded-2xl bg-card backdrop-blur-sm border shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 h-full flex flex-col min-h-[360px] md:min-h-[400px]">
          <div className="mx-auto mb-4 mt-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-md">
            <ShieldUser className="h-6 w-6 text-primary-foreground" />
          </div>

          {/* Logo/Header */}
          {p.logo ? (
            <div className="relative h-24 w-full overflow-hidden rounded-t-2xl bg-card">
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                fill
                className="object-contain bg-white p-3 max-w-[50%] rounded-md mx-auto"
                sizes="200px"
              />
            </div>
          ) : (
            <div className="p-6">
              <Initials name={p.name} />
            </div>
          )}

          {/* Body (grow to push footer down) */}
          <div className="px-6 py-5 flex-1">
            <p className="text-sm leading-relaxed text-card-foreground">
              {p.description}
            </p>
          </div>

          {/* Footer (stick to bottom) */}
          <div className="px-6 pb-6 pt-10 w-full flex justify-center mt-auto">
            {p.website && (
              <ButtonLink href={p.website}>Visit website</ButtonLink>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StrategicPartner() {

  return (
    <section className="w-full" id="strategic-partners">
      <div className="relative z-[4] mx-auto max-w-7xl px-4 py-16 md:py-24">
        {/* Title on top (kept) */}
        <SectionHeading blackText="Strategic" primaryText="Partners" />


        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: Cards (kept left on desktop) */}
          <div className="order-2 h-[400px] md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 items-stretch">
            {partners.map((p, i) => (
              <PartnerCard key={p.id} p={p} index={i} />
            ))}
          </div>

          {/* RIGHT: Content (kept right on desktop) */}
          <div className="order-1 md:order-2 md:pl-4">
            <div className="md:sticky md:top-28 text-center md:text-left">
              <Paragraph>
                We partner with specialized platforms to deliver compliance,
                automation, and intelligent customer experiences—so you launch
                faster and scale with confidence.
              </Paragraph>

              {/* Value bullets (plain list, no card styling) */}
              <ul className="mt-6 -space-y-4 list-disc list-inside">
                {[
                  "Faster rollouts: battle-tested integrations & playbooks.",
                  "Assured compliance: ZATCA, data privacy, and auditability.",
                  "Lower risk: shared expertise, clear SLAs, predictable delivery.",
                ].map((text, i) => (
                  <li key={i}>
                    <Paragraph>{text}</Paragraph>
                  </li>
                ))}
              </ul>

              {/* Inline stats (just text, no boxes) */}
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <Paragraph>
                  <span className="text-2xl font-bold block">
                    95%
                  </span>
                  On-time delivery
                </Paragraph>
                <Paragraph>
                  <span className="text-2xl font-bold block">
                    30%
                  </span>
                  Faster go-live
                </Paragraph>
                <Paragraph>
                  <span className="text-2xl font-bold block">
                    4.8 ★
                  </span>
                  Client rating
                </Paragraph>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap justify-end gap-3">
                <ButtonLink href="/contact-us?p=become-a-partner">Become a partner</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
