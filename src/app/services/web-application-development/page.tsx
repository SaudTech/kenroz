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
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";
import ServiceCard, { ServiceCardIcon } from "@/components/ui/service-card";

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
      <Blob className="absolute -top-[-15%] -right-[5%] w-[48rem] h-[48rem] -z-10 opacity-60 blur-3xl" />
      {/* Hero   concise value + how we work */}
      <Section
        is="odd"
        className="max-w-auto py-20 overflow-hidden grid place-items-center"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(4, 100, 0.7, true)}
                custom={0}
              >
                <Paragraph className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Web Application <span className="text-primary">Development</span>
                </Paragraph>
              </motion.h1>

              <Paragraph className="text-xl text-foreground mb-8 leading-relaxed">
                Ship a polished web app without guesswork. We align on outcomes,
                lock a realistic plan, and deliver usable increments every week
                so stakeholders see progress and go live with confidence.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=web-apps">Get Started</ButtonLink>
                </motion.div>
              </div>
            </div>

            {/* Hero visual / stats card with glow effect */}
            <motion.div
              className="lg:w-2/5 relative"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              initial="hidden"
              whileInView="visible"
            >
              {/* Image container with relative positioning */}
              <div className="relative z-10">
                <Image
                  src="/web_development.avif"
                  alt="Web Application Development"
                  width={800}
                  height={900}
                  className="rounded-2xl filter brightness-90"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features   center last row when it has only 2 items */}
      <Section is="odd" id="features" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Features
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>
          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            Some of the features we offer for web application development.{" "}
          </Paragraph>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {features.map((m, i) => (
              <ServiceCard
                key={m.name}
                className="max-h-[250px] max-w-[480px] min-h-[250px] min-w-[480px]"
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
              >
                <ServiceCardIcon>
                  <m.icon className="h-6 w-6 text-primary-foreground" />
                </ServiceCardIcon>
                <motion.h3
                  className="text-xl font-semibold mb-2 text-center"
                  whileHover={hoverScale}
                  viewport={{ once: true }}
                >
                  {m.name}
                </motion.h3>

                <motion.p
                  className="flex-1 whitespace-pre-line text-center"
                  whileHover={hoverScale}
                  viewport={{ once: true }}
                >
                  {m.description}
                </motion.p>
              </ServiceCard>
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
