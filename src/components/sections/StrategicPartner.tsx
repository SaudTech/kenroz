"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ButtonLink } from "../Navbar";

type Partner = {
  id: "emvive" | "arcgen";
  name: string;
  logo?: string; // optional logo path; fallback to initials
  description: string;
};

const partners: Partner[] = [
  {
    id: "emvive",
    name: "Emvive",
    logo: "/emvive.png",
    description:
      "Emvive is a leading software which helps companies manage their invoices and get compliant with the latest regulations of Zakat, Tax and Customs Authority in Saudi Arabia.",
  },
  {
    id: "arcgen",
    name: "Arcgen",
    logo: "/Arcgen.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus, sapien et luctus posuere, dui magna dapibus nisl, non mollis mi sem at augue.",
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative w-full flex flex-col rounded-2xl border bg-background/70 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Logo / Header */}
      <div className="p-6 flex items-center flex-col gap-3">
        {p.logo ? (
          <div className="relative h-14 w-40 overflow-hidden rounded-xl border bg-white">
            <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain p-2" />
          </div>
        ) : (
          <Initials name={p.name} />
        )}
        <h3 className="text-xl font-semibold leading-tight">{p.name}</h3>
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Body */}
      <div className="p-6 grow">
        <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0">
        <ButtonLink href="#">Visit website</ButtonLink>
      </div>
    </motion.div>
  );
}

export default function StrategicPartner() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const textRef = useRef<HTMLParagraphElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full" id="strategic-partners">
      <div className="relative z-[4] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Title spanning both columns */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground"
        >
          Strategic Partners
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards (left on desktop) */}
          <div className="order-2 md:order-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {partners.map((p, i) => (
              <PartnerCard key={p.id} p={p} index={i} />
            ))}
          </div>

          {/* Text content (right on desktop) */}
          <div className="order-1 md:order-2 mb-10 max-w-3xl">
            <p className="text-xs md:text-sm tracking-widest uppercase text-primary/90 font-semibold">
              Companies Who benefited from us
            </p>
            <motion.p
              ref={textRef}
              className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We collaborate with visionary companies to deliver stronger outcomes and accelerate
              innovation across platforms.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}