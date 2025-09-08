"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ButtonLink } from "../Navbar";
import { CheckCircle } from "lucide-react";
import { useSectionVariants, hoverScale, view } from "@/lib/section-animations";
import Paragraph from "../typography/Paragraph";
import SectionHeading from "../typography/SectionHeading";

type Partner = {
  id: "emvive" | "arcgen" | "kenroz" | string;
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
    description: `ZATCA-compliant e-invoicing that automates QR/UBL/XML.
ERP connectors & secure archiving.`,
    website: "https://emvive.com",
  },
  {
    id: "arcgen",
    name: "Arcgen",
    logo: "/Arcgen.png",
    description: `Event-driven orchestration for pipelines & integrations.
SDK or low-code, retries/alerts/observability + RBAC.`,
    website: "https://arcgen.in",
  },
  {
    id: "kenroz",
    name: "Kenroz Consulting",
    logo: "/logo_mini.png",
    description: `Digital transformation: Dynamics 365, Cloud & DevOps.
Security-first with HRMS/Payroll/Insurance accelerators.`,
    website: "https://kenrozconsulting.com",
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

/* ----- Stagger container + card variants ----- */
const gridStagger: Variants = {
  hidden: { opacity: 1 }, // keep container visible; we stagger children
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
};

function PartnerCard({ p }: { p: Partner; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      whileHover={hoverScale}
      className="group relative w-full h-full xl:max-h-[300px]"
    >
      <div className="rounded-2xl pt-8 bg-card xl:max-h-[300px] backdrop-blur-sm ring-1 ring-black/10 shadow-[0_0_14px_0_rgba(0,0,0,0.08)] hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] group-hover:shadow-[0_0_40px_0_rgba(var(--primary)_/_0.6),0_0_20px_0_rgba(var(--primary)_/_0.3)] transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col min-h-[250px]">
        {/* Logo */}
        {p.logo ? (
          <div className="relative h-20 w-full overflow-hidden bg-card">
            <Image
              src={p.logo}
              alt={`${p.name} logo`}
              fill
              className="object-contain bg-white p-3 max-w-[60%] rounded-md mx-auto"
              sizes="200px"
            />
          </div>
        ) : (
          <div className="p-4 flex justify-center">
            <Initials name={p.name} />
          </div>
        )}

        {/* Name under logo */}
        <a
          href={p.website}
          target="_blank"
          className="px-6 mt-2 text-center text-card-foreground text-xl underline"
        >
          {p.name}
        </a>

        {/* Body */}
        <div className="px-6 py-4 flex-1">
          <p className="text-sm text-center leading-relaxed text-card-foreground">
            {p.description}
          </p>
        </div>

        {/* Optional footer CTA */}
        {/* <div className="px-6 pb-5 w-full flex justify-center mt-auto">
            {p.website && <ButtonLink href={p.website}>Visit website</ButtonLink>}
          </div> */}
      </div>
    </motion.div>
  );
}

export default function StrategicPartner() {
  const { fromLeft } = useSectionVariants();

  return (
    <div
      className="relative z-[4] mx-auto max-w-7xl px-4 py-16"
    >
      <SectionHeading blackText="Strategic" primaryText="Partners" />

      <div className="mt-10 grid grid-cols-1 gap-8">
        {/* LEFT: Cards */}
        <motion.div
          className="order-2 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2"
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((p, i) => (
            // index no longer needed for timing (stagger handles it)
            <PartnerCard key={p.id} p={p} index={i} />
          ))}
        </motion.div>

        {/* RIGHT: Content */}
        <div className="order-1 md:order-2 text-center md:pl-4">
          <div className="md:sticky md:top-28 text-center md:text-left">
            <Paragraph className="text-center w-full">
              We work with trusted strategic partners to deliver specialized
              solutions that accelerate business growth.
            </Paragraph>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {[
                "High On-Time Delivery",
                "Accelerated Go-Live",
                "Top Client Satisfaction",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 text-foreground text-sm font-medium border border-card hover:shadow-lg transition-all duration-300"
                  variants={fromLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={hoverScale}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-foreground" />
                  {item}
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact-us?p=become-a-partner">
                Become a partner
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
