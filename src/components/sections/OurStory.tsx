"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
import Paragraph from "../typography/Paragraph";
import SectionHeading from "../typography/SectionHeading";
import { Blob } from "../Blob";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type PartnerProduct = {
  name: string;
  url: string;
  blurb: string;
  logo: string;
  screenshot: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Independent to impact",
    description:
      "Launched Kenroz as a freelance collective delivering Dynamics customisations and web builds for regional SMEs.",
  },
  {
    year: "2022",
    title: "Productised know-how",
    description:
      "Released ZATCA-compliant taxation modules and accelerators that now power finance teams across the Middle East.",
  },
  {
    year: "2025",
    title: "Scaled delivery hubs",
    description:
      "Opened our Hyderabad office, formalised pods for Cloud, Dynamics 365, and product engineering, and expanded partner ecosystem.",
  },
];

const partnerProducts: PartnerProduct[] = [
  {
    name: "Emvive",
    url: "https://emvive.com",
    blurb: "E-invoicing and tax automation built on our accelerator stack.",
    logo: "/Emvive.png",
    screenshot: "/HCMProduct1.png",
  },
  {
    name: "Arcgen",
    url: "https://arcgen.in",
    blurb: "Event-driven orchestration powering integrations and pipelines.",
    logo: "/Arcgen.png",
    screenshot: "/HCMProduct2.png",
  },
];

export default function OurStory() {
  const { fromLeft, fromRight } = useSectionVariants();

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading blackText="About" primaryText="& Credibility" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-8">
            <motion.p
              className="text-lg md:text-xl font-medium text-foreground leading-relaxed"
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={view}
              whileHover={hoverScale}
            >
              We grow with our clients—from advisory sprints to scaled delivery. Here&apos;s how the Kenroz story has unfolded so far.
            </motion.p>

            <div className="relative pl-6">
              <span className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" aria-hidden />
              <ul className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.li
                    key={item.year}
                    className="relative rounded-xl bg-card/15 p-5 shadow-sm"
                    variants={index % 2 === 0 ? fromLeft : fromRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={view}
                    whileHover={hoverScale}
                  >
                    <span className="absolute -left-[29px] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-background text-xs font-semibold text-primary">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <Paragraph className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {item.description}
                    </Paragraph>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border shadow-lg"
              variants={fromRight}
              initial="hidden"
              whileInView="show"
              viewport={view}
              whileHover={{ scale: 1.02 }}
            >
              <Blob className="opacity-40 absolute -top-32 -left-16 scale-75" />
              <Image
                src="/photo-1521898284481-a5ec348cb555.avif"
                alt="Kenroz delivery team collaborating in the Hyderabad office"
                width={960}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {partnerProducts.map((partner) => (
                <motion.article
                  key={partner.name}
                  className="rounded-2xl border border-border bg-card/20 p-4 shadow-sm"
                  variants={fromRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={hoverScale}
                >
                  <Link href={partner.url} target="_blank" className="inline-flex items-center gap-3 text-foreground font-semibold text-lg">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                    {partner.name}
                  </Link>
                  <Paragraph className="mt-3 text-sm text-foreground/80">
                    {partner.blurb}
                  </Paragraph>
                  <div className="mt-4 overflow-hidden rounded-xl border border-border/60 bg-background/60">
                    <Image
                      src={partner.screenshot}
                      alt={`${partner.name} product interface`}
                      width={360}
                      height={220}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
