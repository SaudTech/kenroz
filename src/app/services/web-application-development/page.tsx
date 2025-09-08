"use client";

import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import { Section } from "@/components/Section";
import EngagementSection from "@/components/EngagementSection";
import { ButtonLink } from "@/components/Navbar";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import ProcessAnimation, { ProcessStep } from "../outsourcing/process";
import Image from "next/image";
import {
  Wifi,
  CreditCard,
  RefreshCw,
  Layers as LayersIcon,
  Shield,
} from "lucide-react";

/* ------------ Your process steps (from current data) ------------ */
const webProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & UX",
    description:
      "Goals, success metrics, and journeys; design sprint + wireframes; acceptance criteria and analytics plan.",
    glowMs: 1400,
  },
  {
    step: "02",
    title: "Architecture & Setup",
    description:
      "App foundation: routing, auth, environments, CI/CD, and core data models so the team ships with confidence.",
    glowMs: 1200,
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "High-impact features first. Tests, code reviews, and performance/security budgets enforced. Weekly demos.",
    glowMs: 1600,
  },
  {
    step: "04",
    title: "Launch & Operate",
    description:
      "Hardening, analytics, docs, and handover. Post-launch improvements continue in focused sprints.",
    glowMs: 1200,
  },
];

/* ------------ Features (icons are real Lucide components) ------------ */
const features = [
  {
    name: "Real-Time Data & Collaboration",
    icon: Wifi,
    description:
      "Live updates via WebSockets/WebRTC with presence and typing.\nCRDT/OT conflict-free merges for multi-user edits.",
  },
  {
    name: "Payments, Subscriptions & Billing",
    icon: CreditCard,
    description:
      "Card/UPI/wallets with 3DS2/SCA and PCI tokenization.\nTrials, proration, metered usage, coupons, and dunning.",
  },
  {
    name: "Offline-First & Sync Engine",
    icon: RefreshCw,
    description:
      "Service Workers and background sync for true offline use.\nOptimistic UI with local caching and conflict resolution.",
  },
  {
    name: "Multi-Tenant Architecture (SaaS-Ready)",
    icon: LayersIcon,
    description:
      "Strict tenant isolation with scoped auth and rate limits.\nPer-tenant configs, themes, quotas, and centralized audits.",
  },
  {
    name: "Security Hardening",
    icon: Shield,
    description:
      "OAuth2/OIDC, WebAuthn/2FA, device and session controls.\nSecrets management, WAF, bot protection, rate limiting.",
  },
];

export default function WebApplicationDevelopmentPage() {
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  return (
    <main>
      {/* Hero   concise value + how we work */}
      <Section
        is="odd"
        className="relative py-20 overflow-hidden grid place-items-center"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(4, 100, 0.7, true)}
                custom={0}
                whileHover={hoverScale}
              >
                Web Application <span className="text-primary">Development</span>
              </motion.h1>

              <motion.p
                className="text-xl text-foreground mb-6 leading-relaxed"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(6, 80, 0.7, true)}
                custom={1}
                whileHover={hoverScale}
              >
                Ship a polished web app without guesswork. We align on outcomes,
                lock a realistic plan, and deliver usable increments every week
                so stakeholders see progress and go live with confidence.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={6}
                >
                  <ButtonLink href="/contact-us?p=web-apps">Get Started</ButtonLink>
                </motion.div>
              </div>
            </div>

            {/* Hero visual */}
            <motion.div
              className="lg:w-2/5 relative"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              initial="hidden"
              whileInView="visible"
            >
              <div>
                <Image
                  src="/web_development.avif"
                  alt="Web Application Development"
                  className="rounded-2xl filter brightness-90"
                  width={1500}
                  height={1000}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features   center last row when it has only 2 items */}
      <Section is="odd" id="features" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-foreground mb-4"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
            custom={0}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            <div className="border-t-2 border-black max-w-[470px] mb-3 mx-auto"></div>
            Features
            <div className="border-t-2 border-black max-w-[470px] mt-3 mx-auto"></div>
          </motion.h2>

          <motion.p
            className="text-xl text-foreground mb-12 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
            custom={1}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            Some of the features we offer for web application development.
          </motion.p>

          <ul
              // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
              className="
              flex flex-wrap gap-6 justify-center items-center
            "
          >
            {features.map((m, i) => (
              <motion.li
                key={m.name}
                className="p-8 bg-card max-w-[480px] max-h-[250px] min-w-[480px] min-h-[250px] text-card-foreground rounded-2xl flex flex-col text-left cursor-pointer border border-border shadow-lg"
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                whileHover={hoverScale}
                viewport={{ once: true }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="inline-flex items-center justify-center mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4">
                  <m.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <motion.h3
                  className="text-xl font-semibold mb-2 text-center"
                  whileHover={hoverScale}
                  viewport={{ once: true }}
                >
                  {m.name}
                </motion.h3>

                <motion.p
                  className="flex-1 text-center whitespace-pre-line"
                  whileHover={hoverScale}
                  viewport={{ once: true }}
                >
                  {m.description}
                </motion.p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <PageDividerTwo />

      {/* Process Flow   near the last section */}
      <ProcessAnimation
        id="process"
        title="Our Delivery Process"
        subtitle="We plan together, ship in increments, and keep scope transparent throughout."
        centerLabel="Web App Process"
        steps={webProcess}
        defaultGlowMs={1400}
        inViewThreshold={0.2}
      />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EngagementSection
          title="Ready to build your web application?"
          description="Book a quick discovery call walk out with a plan, estimate, and a clear path to launch."
          button1Url="/contact-us?p=web-application-development"
          button1Text="Talk to us"
        />
      </motion.div>
    </main>
  );
}
