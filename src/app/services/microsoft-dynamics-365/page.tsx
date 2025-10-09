"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import { Section } from "@/components/Section";
import EngagementSection from "@/components/EngagementSection";
import { ButtonLink } from "@/components/Navbar";
import {
  CheckCircle2,
  Target,
  Users,
  BarChart3,
  Zap,
  Settings,
  Link2,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import Paragraph from "@/components/typography/Paragraph";
import SectionHeading from "@/components/typography/SectionHeading";
import { Blob } from "@/components/Blob";
import ServiceCard, { ServiceCardIcon } from "@/components/ui/service-card";

/* ------------------------------------------------------------------ */
/* Content (Dynamics-focused)                                          */
/* ------------------------------------------------------------------ */
const d365Modules = [
  {
    name: "Sales",
    description:
      "Shorten sales cycles and forecast accurately with guided processes and AI insights.",
    icon: Target,
    features: [
      "Lead & Opportunity Mgmt",
      "Forecasting & Pipeline",
      "Playbooks & Sequences",
      "Teams/Outlook integration",
    ],
  },
  {
    name: "Customer Service",
    description:
      "Deliver fast, consistent service across email, chat, voice, and self-service.",
    icon: Users,
    features: [
      "Case & SLA Mgmt",
      "Omnichannel Inbox",
      "Knowledge Base",
      "Customer Portal",
    ],
  },
  {
    name: "Finance & Operations",
    description:
      "Run finance, supply chain, and projects with compliant, real-time controls.",
    icon: BarChart3,
    features: [
      "Financials & Reporting",
      "Supply Chain",
      "Project Ops",
      "Global Compliance",
    ],
  },
  {
    name: "Marketing",
    description:
      "Build automated customer journeys and generate high-quality demand.",
    icon: Zap,
    features: [
      "Customer Journeys",
      "Segmentation & Scoring",
      "Email/SMS",
      "Real-time Analytics",
    ],
  },
];

const deliveryModels = [
  {
    title: "Implementation",
    description:
      "End-to-end delivery from discovery to go-live with proven accelerators.",
    icon: Settings,
    features: [
      "Fit-Gap & Solution Design",
      "Configurations & Security",
      "Data Migration",
      "UAT & Go-Live",
    ],
    bestFor: "New rollouts, global programs, re-platforming",
  },
  {
    title: "Customization & Extensions",
    description:
      "Tailor Dynamics with plugins, PCF controls, workflows, and Power Platform.",
    icon: Wrench,
    features: [
      "Plugins & PCF",
      "Power Automate",
      "Canvas/Model-Driven Apps",
      "Custom Reports",
    ],
    bestFor: "Unique processes, UX, and reporting",
  },
  {
    title: "Integration & Migration",
    description:
      "Connect Dynamics with ERPs, data lakes, and third-party apps securely.",
    icon: Link2,
    features: [
      "Azure Integration Services",
      "APIs & Webhooks",
      "Master Data Strategy",
      "Legacy Data Migration",
    ],
    bestFor: "Hybrid stacks, phased modernization",
  },
  {
    title: "Support & Managed Services",
    description:
      "Proactive L2/L3 support, enhancements, and release management with SLAs.",
    icon: ShieldCheck,
    features: [
      "SLA-backed Support",
      "Release/ALM",
      "Health & Security Reviews",
      "Roadmap & Enhancements",
    ],
    bestFor: "Run-ops, continuous improvement",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function MicrosoftDynamic365Page() {
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  return (
    <main>
      <Blob className="absolute -top-[-15%] -right-[5%] w-[48rem] h-[48rem] -z-10 opacity-60 blur-3xl" />
      {/* Hero   matches Outsourcing layout/animation */}
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
                  Microsoft <span className="text-primary">Dynamics 365</span>
                </Paragraph>
              </motion.h1>

              <Paragraph className="text-xl text-foreground mb-8 leading-relaxed">
                Unify your CRM and ERP with solutions designed for{" "}
                <span className="text-primary">scale</span>,{" "}
                <span className="text-primary">security</span>, and tangible
                results. Our certified consultants configure, customize, and
                integrate <span className="text-primary">Dynamics 365</span>,
                reinforced by enterprise-grade governance, DevOps best
                practices, and structured change management for seamless,
                measurable <span className="text-primary">business impact</span>
                .
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=d365">Get Started</ButtonLink>
                </motion.div>
              </div>
            </div>

            {/* Hero visual / stats card with glow effect */}
            <motion.div
              className="lg:w-2/5"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              initial="hidden"
              whileInView="visible"
            >
              {/* One stacking context for both */}
              <div className="relative isolate">
                {/* Blob behind */}

                {/* Image above */}
                <div className="relative z-10">
                  <Image
                    src="/dynamic_365.png"
                    alt="Dynamics 365 dashboards"
                    width={800}
                    height={900}
                    className="rounded-2xl brightness-90" // filter is fine here
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* "Modules" styled like Engagement Models cards */}
      <Section is="odd" id="d365-modules" className="py-20 pt-0 relative">
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
            <div className="border-t-2 border-foreground max-w-[470px] mb-3 mx-auto"></div>
            <SectionHeading blackText="Dynamics 365" primaryText="Modules" />
            <div className="border-t-2 border-foreground max-w-[470px] mt-3 mx-auto"></div>
          </motion.h2>

          <Paragraph className="text-xl text-foreground mb-12 max-w-3xl mx-auto">
            Comprehensive capabilities across sales, service, finance, and
            marketing implemented to fit your operating model.
          </Paragraph>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d365Modules.map((m, i) => (
              <ServiceCard
                key={m.name}
                variants={slideInFromLeftWithDelay(2 * i, 80, 0.7, true)}
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
                  className="flex-1 text-center"
                  whileHover={hoverScale}
                  viewport={{ once: true }}
                >
                  {m.description}
                </motion.p>

                <ul className="mt-4 space-y-2 text-sm">
                  {m.features.map((f) => (
                    <motion.li
                      key={f}
                      className="flex items-center gap-2"
                      whileHover={hoverScale}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </ServiceCard>
            ))}
          </ul>
        </div>
      </Section>

      {/* Decorative divider */}
      <PageDividerTwo />

      {/* Delivery Services   mirrors "Engagement Models" style */}
      <Section is="odd" id="delivery-services" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading blackText="Delivery" primaryText="Services" />

          <Paragraph className="mb-6">
            Choose the right path new implementation, targeted customization,
            robust integrations, or SLA-backed managed services.
          </Paragraph>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryModels.map((m, i) => (
              <ServiceCard
                key={m.title}
                variants={slideInFromLeftWithDelay(2 * i, 80, 0.7, true)}
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
              </ServiceCard>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA   same component/style as Outsourcing */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EngagementSection
          title="Ready to transform with Dynamics 365?"
          description="Talk to our consultants about a roadmap, quick wins, and a phased rollout plan that fits your timelines."
          button1Url="/contact-us?p=d365"
          button1Text="Talk to us"
        />
      </motion.div>
    </main>
  );
}
