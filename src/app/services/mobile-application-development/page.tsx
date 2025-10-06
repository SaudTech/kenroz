"use client";

import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { Section } from "@/components/Section";
import EngagementSection from "@/components/EngagementSection";
import { ButtonLink } from "@/components/Navbar";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import ProcessAnimation, { ProcessStep } from "../outsourcing/process";
import {
  Smartphone,
  Zap,
  Shield,
  Users,
  Star,
  CheckCircle2,
  Code,
  Layers,
  Bell,
} from "lucide-react";
import { AppleAppStore, GooglePlaystore } from "./PlatformIcons";
import Image from "next/image";
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";
import ServiceCard, { ServiceCardIcon } from "@/components/ui/service-card";

/* ------------------- Process (mobile-focused) ------------------- */
const mobileProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & UX",
    description:
      "Define outcomes, audiences, and journeys. Wireframes, acceptance criteria, and analytics plan.",
    glowMs: 1400,
  },
  {
    step: "02",
    title: "Architecture & Setup",
    description:
      "Native or cross-platform foundation, design system, environments, CI/CD.",
    glowMs: 1200,
  },
  {
    step: "03",
    title: "Build & Integrate",
    description:
      "Core features first. Push, payments/IAP, maps/camera, offline sync. Tests, reviews, weekly demos.",
    glowMs: 1600,
  },
  {
    step: "04",
    title: "Launch & Operate",
    description:
      "Store assets, privacy/data safety, phased rollout, crash/perf monitoring, roadmap iterations.",
    glowMs: 1200,
  },
];

/* ------------------- Content blocks ------------------- */
const developmentApproaches = [
  {
    title: "Native Development",
    description: "Platform-specific apps for optimal performance and UX",
    technologies: ["Swift/SwiftUI", "Kotlin"],
    pros: [
      "Best Performance",
      "Full Platform Features",
      "Optimal UX",
      "Store-ready",
    ],
    icon: Smartphone,
  },
  {
    title: "Cross-Platform",
    description: "One codebase for iOS and Android with near-native feel",
    technologies: ["React Native", "Flutter"],
    pros: ["Cost Effective", "Faster Delivery", "Code Reuse", "Consistent UI"],
    icon: Layers,
  },
  {
    title: "Hybrid / PWA",
    description: "Web tech in a native shell, ideal for content and utilities",
    technologies: ["Capacitor", "PWA"],
    pros: ["Quick Launch", "Web Skills", "Easy Updates", "Lower Cost"],
    icon: Code,
  },
];

const features = [
  {
    icon: Smartphone,
    title: "Native Performance",
    description:
      "Optimized per platform with smooth animations and responsive gestures.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Secure storage, biometrics, device checks, and encrypted traffic end-to-end.",
  },
  {
    icon: Zap,
    title: "Fast & Responsive",
    description:
      "Snappy interactions and tuned cold-start times for real-world devices.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Guideline-compliant patterns (HIG/Material) validated by user feedback.",
  },
  {
    icon: Bell,
    title: "Push & Engagement",
    description:
      "Targeted push, in-app messaging, and deep links for higher retention.",
  },
  {
    icon: Star,
    title: "Store-Ready & ASO",
    description:
      "Optimized listings, screenshots, privacy labels, and review prompts.",
  },
];

export default function MobileApplicationDevelopmentPage() {
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
                  Mobile Application{" "}
                  <span className="text-primary">Development</span>
                </Paragraph>
              </motion.h1>

              <Paragraph className="text-xl text-foreground mb-8 leading-relaxed">
                Ship{" "}
                <span className="text-primary">
                  polished iOS and Android apps
                </span>{" "}
                without guesswork. We align on{" "}
                outcomes, set a realistic
                plan, and deliver usable increments each sprint so
                stakeholders see progress and go live with{" "}
                <span className="text-primary">confidence</span>.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=mobile-apps">
                    Get Started
                  </ButtonLink>
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
                  src="/mobile_app_development.webp"
                  alt="Mobile Application Development"
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

      {/* Development Approaches (cards) */}
      <Section is="odd" id="approaches" className="relative py-20 pt-0">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Development Approaches
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>
          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            Choose the route that fits your goals, budget, and timeline.{" "}
          </Paragraph>

          <ul className="grid grid-cols-1 gap-6 text-left lg:grid-cols-3">
            {developmentApproaches.map((a, i) => (
              <ServiceCard
                key={a.title}
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
              >
                <ServiceCardIcon className="bg-primary text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </ServiceCardIcon>
                <h3 className="mb-3 text-center text-2xl font-bold">
                  {a.title}
                </h3>
                <p className="mb-6 text-center">{a.description}</p>

                <h4 className="mb-2 font-semibold">Technologies</h4>
                <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {a.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex w-full items-center justify-center rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="mb-2 font-semibold">Advantages</h4>
                <ul className="space-y-2">
                  {a.pros.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-card-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </ServiceCard>
            ))}
          </ul>
        </div>
      </Section>

      {/* Features */}
      <Section is="odd" id="features" className="relative py-20 pt-0">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Capabilities
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>
          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            Practical features we build into modern mobile apps.{" "}
          </Paragraph>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ServiceCard
                key={f.title}
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
              >
                <ServiceCardIcon className="bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </ServiceCardIcon>
                <h3 className="mb-2 text-center text-xl font-bold">
                  {f.title}
                </h3>
                <p className="text-center">{f.description}</p>
              </ServiceCard>
            ))}
          </ul>
        </div>
      </Section>

      <PageDividerTwo />

      {/* Supported Platforms */}
      <Section is="odd" id="platforms" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Supported Platforms
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>

          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            We design, build, and ship for <b>iOS</b>, <b>Android</b>, or{" "}
            <b>both</b> — native or cross-platform.
          </Paragraph>

          {/* Platform Cards */}
          <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-card-foreground">
            {[
              {
                title: "iOS Development",
                description:
                  "Native apps using Swift/SwiftUI for high performance and HIG-compliant UX.",
                platforms: ["iPhone", "iPad"],
                icon: AppleAppStore,
              },
              {
                title: "Android Development",
                description:
                  "Native apps using Kotlin/Jetpack for Material-compliant, device-ready UI.",
                platforms: ["Smartphones", "Tablets"],
                icon: GooglePlaystore,
              },
              {
                title: "Both Platforms",
                description:
                  "Single codebase (React Native/Flutter), design system, unified analytics.",
                platforms: ["Reusable code", "Faster development"],
                icon: null,
              },
            ].map((p, i) => (
              <ServiceCard
                key={p.title}
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                className="text-center"
              >
                <ServiceCardIcon className="bg-primary/10">
                  {p.icon ? (
                    <p.icon className="h-8 w-8 text-primary" />
                  ) : (
                    <div className="relative">
                      <AppleAppStore className="h-7 w-7 text-primary" />
                      <GooglePlaystore className="h-7 w-7 absolute -right-4 -bottom-3 text-primary" />
                    </div>
                  )}
                </ServiceCardIcon>

                <h3 className="mb-2 text-2xl font-bold">{p.title}</h3>
                <p className="mb-6">{p.description}</p>

                <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-sm">
                  {p.platforms.map((plat) => (
                    <span key={plat}>{plat}</span>
                  ))}
                </div>
              </ServiceCard>
            ))}
          </ul>

          {/* Checklist */}
          <div className="mx-auto my-12 h-px w-full max-w-6xl bg-border" />
          <Paragraph className="text-4xl font-bold text-foreground mb-8">
            Store-Readiness Checklist
          </Paragraph>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              "Privacy labels (iOS) & Data Safety (Play)",
              "App signing, certs & provisioning",
              "Push notifications & deep links",
              "IAP / subscriptions & receipts",
              "Screenshots, metadata & ASO",
              "Crash/perf monitoring & alerts",
            ].map((item, i) => (
              <ServiceCard
                key={item}
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                className="flex items-center gap-2 p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-left">{item}</span>
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
        centerLabel="Mobile App Process"
        steps={mobileProcess}
        defaultGlowMs={1400}
        inViewThreshold={0.2}
      />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <EngagementSection
          title="Ready to build your mobile app?"
          description="Book a quick discovery call walk out with a plan, estimate, and a clear path to launch."
          button1Url="/contact-us?p=mobile-application-development"
          button1Text="Talk to us"
        />
      </motion.div>
    </main>
  );
}
