"use client";
import { motion, Variants } from "framer-motion";
import {
  Compass,
  PencilRuler,
  Wrench,
  ShieldCheck,
  Rocket,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";
import DescriptionToggle from "../DescriptionToggle";

// Timeline-style section with a TRUE centered rail on desktop.
// Mobile: simple vertical rail on the left; Desktop: centered rail with alternating items.
// Adds staggered fade/slide-in animations per item when entering viewport.

const steps = [
  {
    Icon: Compass,
    title: "Discover & Plan",
    blurb:
      "We start with collaborative workshops to nail goals, risks, and constraints, then define scope and success metrics.",
    points: [
      "Stakeholder interviews & requirement mapping",
      "Solution blueprint & roadmap",
      "Effort estimates & milestones",
    ],
  },
  {
    Icon: PencilRuler,
    title: "Design & Prototype",
    blurb:
      "UX-first wireframes and clickable prototypes to validate flows early and reduce rework.",
    points: [
      "Information architecture & UX flows",
      "UI design system with brand fit",
      "Rapid prototyping & feedback loops",
    ],
  },
  {
    Icon: Wrench,
    title: "Build & Integrate",
    blurb:
      "Agile sprints deliver incremental value using modern stacks and automated tests.",
    points: [
      "API-first development & integrations",
      "Modular, scalable architecture",
      "Automated testing & code reviews",
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Secure & Comply",
    blurb:
      "Security-by-design: hardening, least-privilege access, secrets hygiene, and compliance.",
    points: ["OWASP-aligned controls", "Data privacy & audit readiness", "Threat modeling & monitoring"],
  },
  {
    Icon: Rocket,
    title: "Launch & Optimize",
    blurb:
      "Zero-downtime deploys with CI/CD. Performance, cost, and reliability tuned from day one.",
    points: [
      "CI/CD pipelines & blue‑green releases",
      "Observability (logs, metrics, tracing)",
      "Performance & cost optimization",
    ],
  },
  {
    Icon: RefreshCcw,
    title: "Support & Evolve",
    blurb:
      "Post‑launch care with SLAs and data‑driven iteration to keep you ahead.",
    points: ["SLA-based support & maintenance", "Backlog/feature iteration", "Security patches & upgrades"],
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

function TimelineItem({ step, index }: { step: typeof steps[number]; index: number }) {
  const { Icon, title, blurb, points } = step;
  const isRight = index % 2 === 1;

  return (
    <motion.li
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="relative flex flex-col lg:flex-row lg:items-stretch"
    >
      {/* Content wrapper */}
      <div
        className={`relative lg:w-1/2 ${isRight ? "lg:pl-12 lg:order-2" : "lg:pr-12"}`}
      >
        {/* Connector to the central rail (desktop) */}
        {/* <span
          className={`hidden lg:block absolute top-8 ${
            isRight ? "left-0" : "right-0"
          } h-0.5 w-10 bg-gradient-to-r from-[#e31b25]/50 to-transparent ${
            isRight ? "rotate-180" : ""
          }`}
        /> */}

        <div className="bg-white/70 backdrop-blur-sm border border-[#e31b25]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e31b25] to-[#7e141c] flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center text-xs font-bold text-white bg-[#7e141c] rounded-full w-6 h-6 shadow">
                  {index + 1}
                </span>
                <h4 className="text-xl font-bold text-black">{title}</h4>
              </div>
              <div className="mt-2 text-gray-700">
                <DescriptionToggle description={blurb} />
              </div>
              <ul className="mt-3 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#7e141c] mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer half to alternate around the central rail on desktop */}
      <div className="hidden lg:block lg:w-1/2" />
    </motion.li>
  );
}

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative py-20 bg-gradient-to-br from-[#fffde7] via-white to-[#fffde7] overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute -top-10 -right-24 w-96 h-96 bg-gradient-to-br from-[#e31b25]/10 to-transparent rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-gradient-to-tr from-[#fffde7]/60 to-transparent rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              What <span className="bg-gradient-to-r from-[#e31b25] to-[#7e141c] bg-clip-text text-transparent">We Do</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A lean, secure-by-default delivery process that turns your goals into working software.
            </p>
          </motion.div>

          {/* Central rail: true center on desktop */}
          <div className="relative">
            {/* Desktop center line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#e31b25]/30 to-transparent" />
            {/* Mobile left line */}
            <div className="lg:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#e31b25]/30 to-transparent" />

            {/* Timeline list */}
            <ol className="relative space-y-10 lg:space-y-16">
              {steps.map((s, i) => (
                <TimelineItem key={s.title} step={s} index={i} />
              ))}
            </ol>

            {/* Dots on the rail aligned to each item (desktop only) */}
            <div className="hidden lg:block pointer-events-none">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 mt-[3.25rem] w-5 h-5 rounded-full bg-white border-2 border-[#e31b25] shadow"
                  style={{ top: `calc(${i} * 100% / ${steps.length} + ${i === 0 ? 0 : 2}rem)` }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 rounded-3xl bg-gradient-to-r from-black to-[#7e141c] p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to move from idea to impact?</h3>
            <p className="text-[#fffde7]/90 mb-6 max-w-2xl mx-auto">
              We’ll plan, prototype, ship, and iterate with you — fast and securely.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#fffde7] text-[#e31b25] hover:bg-white px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
