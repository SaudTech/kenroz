"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import { Section } from "@/components/Section";
import EngagementSection from "@/components/EngagementSection";
import { ButtonLink } from "@/components/Navbar";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import {
  Cloud,
  Layers,
  Repeat,
  ServerCrash,
  ShieldCheck,
  Wrench,
  Settings,
  Gauge,
} from "lucide-react";
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";
import ServiceCard, { ServiceCardIcon } from "@/components/ui/service-card";

/* ------------------------------------------------------------------ */
/* Content (Cloud)                                           */
/* ------------------------------------------------------------------ */
const capabilities = [
  {
    name: "Cloud Migration",
    description:
      "Plan and execute rehost/replatform/refactor moves to Azure/AWS/GCP with secure landing zones, zero-downtime cutovers, and automated validation.",
    icon: Layers,
    features: [
      "TCO & Readiness",
      "Landing Zones",
      "DB & App Cutovers",
      "Rollback Playbooks",
    ],
  },
  {
    name: "Cloud Optimization",
    description:
      "Continuous FinOps + performance tuning—right-size resources, autoscale workloads, and optimize network/storage to cut spend without hurting reliability.",
    icon: Repeat,
    features: [
      "Cost Dashboards",
      "Rightsizing & Schedules",
      "Savings Plans/RIs",
      "Perf Tuning & Caching",
    ],
  },
  {
    name: "Cloud Security",
    description:
      "Defense-in-depth with identity-first access, encryption, secrets, and policy-as-code—produce audit evidence on demand for CIS/ISO/NIST.",
    icon: Cloud,
    features: [
      "IAM & Zero-Trust",
      "KMS & Key Rotation",
      "Network Segmentation",
      "OPA/Conftest Policies",
    ],
  },
  {
    name: "Automated CI/CD",
    description:
      "GitOps pipelines for apps & infra—build, test, scan, release, and roll back safely with supply-chain security baked in.",
    icon: ServerCrash,
    features: [
      "GitOps & IaC",
      "SAST/DAST/Secrets Scan",
      "Progressive Delivery",
      "SBOM & Policy Gates",
    ],
  },
];

const deliveryModels = [
  {
    title: "Cloud Migration & Foundations",
    description:
      "Assess, design, and stand up secure landing zones; migrate apps and data via phased cutovers with operational handover.",
    icon: Settings,
    features: [
      "Discovery & TCO",
      "Landing Zones & Guardrails",
      "Network/IAM Baselines",
      "Data/App Migration Factory",
      "Validation & Cutover Playbooks",
    ],
    bestFor: "Greenfield, re-platforming, phased modernization",
  },
  {
    title: "Platform Engineering",
    description:
      "Internal Developer Platform that abstracts cloud complexity with golden paths, self-service, and paved-road pipelines.",
    icon: Wrench,
    features: [
      "Backstage IDP",
      "Reusable Golden Templates",
      "Self-Service Portals",
      "Golden Pipelines",
      "Shared Observability",
    ],
    bestFor: "Standardization, scaling teams, faster onboarding",
  },
  {
    title: "DevSecOps & Compliance",
    description:
      "Shift-left security and automate evidence collection to meet CIS/ISO/NIST without slowing delivery.",
    icon: ShieldCheck,
    features: [
      "SAST/DAST/Secret Scans",
      "SBOM & Supply Chain",
      "CIS/NIST Controls",
      "Policy-as-Code & Release Gates",
      "Continuous Evidence",
    ],
    bestFor: "Regulated industries, enterprise guardrails",
  },
  {
    title: "SRE & Managed Reliability",
    description:
      "Operate with SLOs and error budgets, proactive capacity/cost management, chaos + DR drills, and 24×7 incident response.",
    icon: Gauge,
    features: [
      "SLOs & Error Budgets",
      "Observability & On-Call",
      "Capacity & Cost Mgmt",
      "Chaos & DR Drills",
      "Runbooks & Postmortems",
    ],
    bestFor: "Business-critical apps, uptime guarantees",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function CloudDevOpsPage() {
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  return (
    <main>
      {/* Hero   mirrors Outsourcing/D365 */}
      <Blob className="absolute -top-[-15%] -right-[5%] w-[48rem] h-[48rem] -z-10 opacity-60 blur-3xl" />

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
                Cloud <span className="text-primary">Solutions</span>
                </Paragraph>
              </motion.h1>

              <Paragraph className="text-xl text-foreground mb-8 leading-relaxed">
                Migrate, build, and run on Azure/AWS/GCP with platform
                engineering, GitOps, and SRE best practices. We codify your
                infrastructure, automate delivery, and bake in security and
                observability so you ship faster, safer, and cheaper.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=cloud-devops">Get Started</ButtonLink>
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
                  src="/CloudSolution.png"
                  alt="Cloud Solutions"
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

      {/* Capabilities   styled like “Engagement Models” cards */}
      <Section is="odd" id="cloud-capabilities" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Cloud Capabilities
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>
          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            Golden paths for teams, automated pipelines for apps, and paved
            roads for infrastructure implemented with enterprise
            guardrails.{" "}
          </Paragraph>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((m, i) => (
              <ServiceCard
                key={m.name}
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

                <motion.p className="flex-1 text-center">
                  {m.description}
                </motion.p>

                {/* <ul className="mt-4 space-y-2 text-sm">
                  {m.features.map((f) => (
                    <motion.li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul> */}
              </ServiceCard>
            ))}
          </ul>
        </div>
      </Section>

      {/* Decorative divider */}
      <PageDividerTwo />

      {/* Delivery Services   mirrors the reference grid */}
      <Section is="odd" id="delivery-services" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Delivery Services
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>
          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            From first landing zone to a fully productized platform with
            guardrails, automation, and reliability baked in.{" "}
          </Paragraph>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModels.map((m, i) => (
              <ServiceCard
                key={m.title}
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
              >
                <ServiceCardIcon>
                  <m.icon className="h-6 w-6 text-primary-foreground" />
                </ServiceCardIcon>
                <motion.h3 className="text-xl font-semibold mb-2 text-center">
                  {m.title}
                </motion.h3>
                <motion.p className="flex-1 text-center">
                  {m.description}
                </motion.p>

                {/* <ul className="mt-4 space-y-2 text-sm">
                  {m.features.map((f) => (
                    <motion.li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul> */}

                <p className="mt-4 text-sm text-primary-foreground text-center">
                  {m.bestFor}
                </p>
              </ServiceCard>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA   same component/style as reference */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EngagementSection
          title="Future-proof your platform"
          description="Whether you’re migrating, standardizing, or scaling, we’ll design a secure, automated platform with measurable reliability."
          button1Url="/contact-us?p=cloud-devops"
          button1Text="Talk to us"
        />
      </motion.div>
    </main>
  );
}
