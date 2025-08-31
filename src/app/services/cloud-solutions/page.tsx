"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import { Section } from "@/app/page";
import EngagementSection from "@/components/EngagementSection";
import { ButtonLink } from "@/components/Navbar";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import {
  CheckCircle2,
  Cloud,
  Layers,
  Repeat,
  ServerCrash,
  ShieldCheck,
  Wrench,
  Settings,
  Gauge,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Content (Cloud & DevOps)                                           */
/* ------------------------------------------------------------------ */
const capabilities = [
  {
    name: "Infrastructure as Code",
    description:
      "Codify cloud environments for repeatable, auditable, and secure provisioning.",
    icon: Layers,
    features: ["Terraform/Bicep", "Landing Zones", "Immutable Patterns", "Policy-as-Code"],
  },
  {
    name: "CI/CD Pipelines",
    description:
      "Automate build, test, and deploy with gated releases and progressive delivery.",
    icon: Repeat,
    features: ["GitHub Actions/Azure DevOps", "Multi-env Promotion", "Blue/Green & Canary", "Artifact Mgmt"],
  },
  {
    name: "Containers & Kubernetes",
    description:
      "Operate resilient workloads with GitOps, autoscaling, and zero-downtime rollouts.",
    icon: Cloud,
    features: ["AKS/EKS/GKE", "Helm/Kustomize", "GitOps (ArgoCD/Flux)", "Service Mesh (Istio/Linkerd)"],
  },
  {
    name: "Observability & Incidents",
    description:
      "Full-fidelity logs, metrics, and traces with on-call workflows baked in.",
    icon: ServerCrash,
    features: ["OpenTelemetry", "Dashboards & SLOs", "Alerting & Runbooks", "On-call & Postmortems"],
  },
];

const deliveryModels = [
  {
    title: "Cloud Migration & Foundations",
    description:
      "Assess, migrate, and stabilize with secure landing zones and reference architectures.",
    icon: Settings,
    features: ["Discovery & TCO", "Landing Zones", "Network/IAM Baselines", "Data & App Migration"],
    bestFor: "Greenfield, re-platforming, phased modernization",
  },
  {
    title: "Platform Engineering",
    description:
      "Build an Internal Developer Platform with golden paths and paved roads.",
    icon: Wrench,
    features: ["IDP Backstage", "Reusable Templates", "Self-Service Portals", "Golden Pipelines"],
    bestFor: "Standardization, scaling teams, faster onboarding",
  },
  {
    title: "DevSecOps & Compliance",
    description:
      "Shift-left security with policy-as-code and automated compliance evidence.",
    icon: ShieldCheck,
    features: ["SAST/DAST/Secret Scans", "CIS/ISO/NIST Controls", "SBOM & Supply Chain", "Policy-as-Code"],
    bestFor: "Regulated industries, enterprise guardrails",
  },
  {
    title: "SRE & Managed Reliability",
    description:
      "SLA-backed operations with SLOs, capacity, and continuous resilience testing.",
    icon: Gauge,
    features: ["SLO/Error Budgets", "Capacity & Cost Mgmt", "Chaos & DR Drills", "24×7 Incident Response"],
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
      {/* Hero — mirrors Outsourcing/D365 */}
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
                Cloud & DevOps <span className="text-primary">Solutions</span>
              </motion.h1>

              <motion.p
                className="text-xl text-foreground mb-8 leading-relaxed"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(6, 80, 0.7, true)}
                custom={1}
                whileHover={hoverScale}
              >
                Migrate, build, and run on Azure/AWS/GCP with platform
                engineering, GitOps, and SRE best practices. We codify your
                infrastructure, automate delivery, and bake in security and
                observability—so you ship faster, safer, and cheaper.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=cloud-devops">Get Started</ButtonLink>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
                  custom={3}
                >
                  <ButtonLink variant="outline" href="/contact-us" className="text-black">
                    Have inquiries?
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
              <Image
                src="/Cloud Solution.webp"
                alt="Cloud & DevOps dashboards and pipelines"
                width={800}
                height={900}
                className="rounded-2xl filter brightness-90"
                priority
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Capabilities — styled like “Engagement Models” cards */}
      <Section is="odd" id="cloud-capabilities" className="py-20 pt-0 relative">
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
            <div className="border-t-2 border-black max-w-[470px] mb-3 mx-auto" />
            Cloud & DevOps Capabilities
            <div className="border-t-2 border-black max-w-[470px] mt-3 mx-auto" />
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
            Golden paths for teams, automated pipelines for apps, and paved
            roads for infrastructure—implemented with enterprise guardrails.
          </motion.p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((m, i) => (
              <motion.li
                key={m.name}
                className="p-8 bg-card text-card-foreground rounded-2xl flex flex-col text-left cursor-pointer border border-border shadow-lg"
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

                <motion.p className="flex-1 text-center">{m.description}</motion.p>

                <ul className="mt-4 space-y-2 text-sm">
                  {m.features.map((f) => (
                    <motion.li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Decorative divider */}
      <PageDividerTwo />

      {/* Delivery Services — mirrors the reference grid */}
      <Section is="odd" id="delivery-services" className="py-20 pt-0 relative">
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
            Delivery Services
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
            From first landing zone to a fully productized platform—with guardrails,
            automation, and reliability baked in.
          </motion.p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModels.map((m, i) => (
              <motion.li
                key={m.title}
                className="p-8 bg-card text-card-foreground rounded-2xl flex flex-col text-left cursor-pointer border border-border shadow-lg"
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

                <motion.h3 className="text-xl font-semibold mb-2 text-center">
                  {m.title}
                </motion.h3>
                <motion.p className="flex-1 text-center">{m.description}</motion.p>

                <ul className="mt-4 space-y-2 text-sm">
                  {m.features.map((f) => (
                    <motion.li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-primary-foreground text-center">
                  {m.bestFor}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA — same component/style as reference */}
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
