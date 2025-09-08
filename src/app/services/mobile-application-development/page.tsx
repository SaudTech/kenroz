"use client";

import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
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
    technologies: ["Swift/SwiftUI", "Objective-C", "Kotlin", "Java"],
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
    technologies: ["Capacitor", "Ionic", "PWA"],
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
      {/* Hero   concise value + how we work */}
      <Section
        is="odd"
        className="relative grid place-items-center overflow-hidden py-20"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-3/5">
              <motion.h1
                className="mb-6 text-5xl font-bold leading-tight text-foreground lg:text-6xl"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(4, 100, 0.7, true)}
                custom={0}
                whileHover={hoverScale}
              >
                Mobile Application{" "}
                <span className="text-primary">Development</span>
              </motion.h1>

              <motion.p
                className="mb-6 text-xl leading-relaxed text-foreground"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(6, 80, 0.7, true)}
                custom={1}
                whileHover={hoverScale}
              >
                Ship polished iOS and Android apps without guesswork. We align
                on outcomes, set a realistic plan, and deliver usable increments
                each sprint so stakeholders see progress and go live with
                confidence.
              </motion.p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={6}
                >
                  <ButtonLink href="/contact-us?p=mobile-apps">
                    Get Started
                  </ButtonLink>
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
                  src="/mobile_app_development.webp"
                  alt="Mobile Application Development"
                  className="rounded-2xl filter brightness-90"
                  width={1500}
                  height={1000}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Development Approaches (cards) */}
      <Section is="odd" id="approaches" className="relative py-20 pt-0">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="mb-4 text-5xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
            custom={0}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            <div className="mx-auto mb-3 max-w-[470px] border-t-2 border-black"></div>
            Development Approaches
            <div className="mx-auto mt-3 max-w-[470px] border-t-2 border-black"></div>
          </motion.h2>

          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl text-foreground"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
            custom={1}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            Choose the route that fits your goals, budget, and timeline.
          </motion.p>

          <ul className="grid grid-cols-1 gap-6 text-left lg:grid-cols-3">
            {developmentApproaches.map((a, i) => (
              <motion.li
                key={a.title}
                className="rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-lg"
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                whileHover={hoverScale}
                viewport={{ once: true }}
              >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <a.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-center text-2xl font-bold">
                  {a.title}
                </h3>
                <p className="mb-6 text-center">{a.description}</p>

                <h4 className="mb-2 font-semibold">Technologies</h4>
                <div className="mb-6 flex flex-wrap gap-2">
                  {a.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground"
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
                      <span className="text-sm text-primary-foreground">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Features */}
      <Section is="odd" id="features" className="relative py-20 pt-0">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="mb-4 text-5xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
            custom={0}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            <div className="mx-auto mb-3 max-w-[470px] border-t-2 border-black"></div>
            Capabilities
            <div className="mx-auto mt-3 max-w-[470px] border-t-2 border-black"></div>
          </motion.h2>

          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl text-foreground"
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
            custom={1}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            Practical features we build into modern mobile apps.
          </motion.p>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                className="rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-lg"
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                whileHover={hoverScale}
                viewport={{ once: true }}
              >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-center text-xl font-bold">
                  {f.title}
                </h3>
                <p className="text-center">{f.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <PageDividerTwo />

      {/* Platform Support */}
      <Section is="odd" id="platforms" className="py-20 pt-0">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <motion.h2
              className="mb-4 text-4xl font-bold text-foreground"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              custom={0}
              viewport={{ once: true }}
              whileHover={hoverScale}
            >
              Supported Platforms
            </motion.h2>
            <motion.p
              className="text-xl text-foreground"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
              custom={1}
              viewport={{ once: true }}
            >
              We design, build, and ship for <b>iOS</b>, <b>Android</b>, or{" "}
              <b>both</b> native or cross-platform.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-card-foreground">
            {/* iOS */}
            <motion.div
              className="rounded-2xl bg-card p-8 text-center shadow-lg"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={hoverScale}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl">
                <AppleAppStore className="h-10 w-10" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">
                iOS Development
              </h3>
              <p className="mb-6">
                Native apps using Swift/SwiftUI for high performance and
                HIG-compliant UX.
              </p>
              <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-sm">
                <span>iPhone</span>
                <span>•</span>
                <span>iPad</span>
              </div>
            </motion.div>

            {/* Android */}
            <motion.div
              className="rounded-2xl bg-card p-8 text-center shadow-2xl"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={hoverScale}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-card">
                <GooglePlaystore className="h-10 w-10" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">
                Android Development
              </h3>
              <p className="mb-6">
                Native apps using Kotlin/Jetpack for Material-compliant,
                device-ready UI.
              </p>
              <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-sm">
                <span>Smartphones</span>
                <span>•</span>
                <span>Tablets</span>
              </div>
            </motion.div>

            {/* Both */}
            <motion.div
              className="rounded-2xl bg-card p-8 text-center shadow-lg"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRightWithDelay(10, 80, 0.7, true)}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={hoverScale}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-primary/90">
                <div className="relative">
                  <AppleAppStore className="h-8 w-8 opacity-95" />
                  <GooglePlaystore className="h-8 w-8 absolute -right-4 -bottom-3 opacity-95" />
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold">
                Both Platforms
              </h3>
              <p className="mb-6">
                Single codebase (React Native/Flutter) design system, unified
                analytics.
              </p>
              <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-sm">
                <span>Reuseable code</span>
                <span>•</span>
                <span>Faster development</span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mx-auto my-12 h-px w-full max-w-6xl bg-border" />

          {/* Publishing & Distribution */}
          <div className="mx-auto max-w-6xl">
            <motion.h4
              className="mb-4 text-center text-xl font-semibold text-foreground"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromLeftWithDelay(10, 60, 0.6)}
              viewport={{ once: true }}
            >
              Publishing & Distribution
            </motion.h4>

            <motion.ul
              className="mb-10 flex flex-wrap items-center justify-center gap-2"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromRightWithDelay(10, 60, 0.6)}
              viewport={{ once: true }}
            >
              {[
                "App Store Connect",
                "TestFlight",
                "Google Play Console",
                "Firebase App Distribution",
                "Fastlane CI/CD",
              ].map((t, i) => (
                <motion.li
                  key={t}
                  className="rounded-full bg-card px-3 py-1 text-sm text-card-foreground"
                  variants={slideInFromLeftWithDelay(10 + i, 40, 0.5)}
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>

            {/* Store-readiness checklist */}
            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              variants={slideInFromLeftWithDelay(12, 60, 0.6)}
              viewport={{ once: true }}
            >
              {[
                "Privacy labels (iOS) & Data Safety (Play)",
                "App signing, certs & provisioning",
                "Push notifications & deep links",
                "IAP / subscriptions & receipts",
                "Screenshots, metadata & ASO",
                "Crash/perf monitoring & alerts",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-card p-4 text-card-foreground"
                  variants={slideInFromRightWithDelay(12 + i, 60, 0.6)}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
