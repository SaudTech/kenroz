"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Brain, Handshake, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
import Paragraph from "../typography/Paragraph";
import SectionHeading from "../typography/SectionHeading";

function SectionHeader({
  title,
  isOpen,
  onToggle,
  headerId,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  headerId?: string;
}) {
  const { fromLeft } = useSectionVariants();
  return (
    <div className="text-left">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${headerId}-panel`}
        className="mt-1 w-full flex items-center justify-between gap-4 text-left"
      >
        <motion.h2
          className="text-3xl font-extrabold leading-tight text-foreground cursor-pointer inline-block"
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={view}
          whileHover={hoverScale}
        >
          {title}
        </motion.h2>
      </button>
    </div>
  );
}

const stats = [
  { label: "Strategic Thinking", icon: Brain },
  { label: "Technology Innovation", icon: Lightbulb },
  { label: "Trusted Partner", icon: Handshake },
];
export default function OurStory() {
  const [activeKey, setActiveKey] = useState<"story" | "why">("story");

  const toggle = useCallback((key: "story" | "why") => {
    setActiveKey(() => key);
  }, []);

  const { fromLeft, fromRight } = useSectionVariants();

  const slideVariants = {
    collapsed: { height: 0, opacity: 0, y: -4 },
    open: { height: "auto", opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Typewriter Heading */}
        <SectionHeading blackText="Who" primaryText="We Are" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side */}
          <div className="lg:col-span-6 space-y-12">
            {/* Our Journey */}
            <div>
              <motion.div
                variants={fromLeft}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={hoverScale}
              >
                <SectionHeader
                  title="We started our journey years back"
                  isOpen={activeKey === "story"}
                  onToggle={() => toggle("story")}
                />
              </motion.div>

              <motion.div
                key="story-panel"
                id="about-us-panel"
                role="region"
                aria-labelledby="about-us"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={slideVariants}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-visible"
              >
                <Paragraph>
                  Kenroz began in 2020 as a freelance venture with a vision to
                  deliver innovative digital solutions. We started with a few
                  projects and gradually expanded our expertise and team. By
                  mid-2022, we developed a{" "}
                  <b>taxation product for the Middle East</b>, marking a key
                  milestone. In late 2024 and early 2025, we established our{" "}
                  <b>first office in Hyderabad</b>, formalizing our operations
                  and laying the foundation for growth.
                </Paragraph>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <div>
              <motion.div
                variants={fromLeft}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={hoverScale}
              >
                <SectionHeader
                  title="Obvious 1st choice"
                  isOpen={activeKey === "why"}
                  onToggle={() => toggle("why")}
                />
              </motion.div>

              <motion.div
                key="why-panel"
                id="why-choose-us-panel"
                role="region"
                aria-labelledby="why-choose-us"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={slideVariants}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-visible"
              >
                <Paragraph>
                  As our reputation grew, we deliver custom software, mobile
                  apps, cloud solutions, digital marketing, Microsoft Dynamics
                  365, and outsourcing services, working closely with clients to
                  provide end-to-end solutions while forming strategic
                  partnerships to expand our offerings and deliver greater
                  value. Kenroz has established itself as a trusted partner for
                  technology-driven business growth.
                </Paragraph>
              </motion.div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6 relative h-full flex gap-6 pt-3 items-start">
            <motion.div
              className="relative aspect-[4/5] w-[60%] overflow-visible rounded-2xl border shadow-lg"
              variants={fromRight}
              initial="hidden"
              whileInView="show"
              viewport={view}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-md"
                whileHover={{ filter: "brightness(1.15) contrast(1.05)" }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/photo-1521898284481-a5ec348cb555.avif"
                  alt="Kenroz team collaborating our story"
                  fill
                  className="object-cover rounded-md"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-col justify-between h-full py-10 w-1/4 right-32 top-0">
              {stats.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  className={"h-[100px] w-[120px] flex flex-col items-center justify-center rounded-lg border border-primary bg-primary hover:bg-transparent text-primary-foreground hover:text-primary backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow text-center"}
                  variants={i % 2 === 0 ? fromLeft : fromRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={view}
                  whileHover={{ y: -4, ...hoverScale }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className="h-6 w-6 mb-2" />
                  <motion.span
                    className="text-sm font-bold leading-snug inline-block"
                    variants={fromRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={view}
                    whileHover={hoverScale}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
