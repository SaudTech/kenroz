"use client";

import {
  Search,
  TrendingUp,
  Target,
  Mail,
  Share2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import { Section } from "@/app/page";
import { ButtonLink } from "@/components/Navbar";
import EngagementSection from "@/components/EngagementSection";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import ProcessAnimation, { ProcessStep } from "../outsourcing/process";
import Image from "next/image";

export default function DigitalMarketingPage() {
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost visibility and drive organic traffic with smart SEO strategies.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
        "Local SEO",
      ],
    },
    {
      icon: Target,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Deliver instant results with targeted ad campaigns that convert.",
      features: ["Google & Meta Ads", "Campaign Setup", "Conversion Tracking"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Grow your brand and connect with audiences on every platform.",
      features: ["Community Engagement", "Social Ads", "Performance Analytics"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Convert leads and retain customers with personalized campaigns.",
      features: [
        "Campaign Design",
        "Automation Flows",
        "Audience Segmentation",
        "Engagement Tracking",
      ],
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description:
        "Engage audiences with compelling content that builds trust.",
      features: [
        "Blog & Article Writing",
        "Video & Visual Content",
        "Infographics",
        "Content Distribution",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description:
        "Measure performance and optimize campaigns with real insights.",
      features: [
        "Google Analytics Setup",
        "Custom Dashboards",
        "ROI Analysis",
        "Funnel Insights",
        "Data Visualization",
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Website Traffic",
      description:
        "Drive more qualified visitors to your website through multiple digital channels.",
    },
    {
      icon: Target,
      title: "Better Lead Generation",
      description:
        "Generate high-quality leads that are more likely to convert into customers.",
    },
    {
      icon: Users,
      title: "Enhanced Brand Awareness",
      description:
        "Build brand recognition and establish your business as an industry authority.",
    },
    {
      icon: BarChart3,
      title: "Improved ROI",
      description:
        "Maximize your marketing budget with data-driven strategies and continuous optimization.",
    },
    {
      icon: Globe,
      title: "Expanded Market Reach",
      description:
        "Reach new audiences and expand into new markets with targeted digital campaigns.",
    },
    {
      icon: Eye,
      title: "Better Customer Insights",
      description:
        "Gain valuable insights into customer behavior and preferences through analytics.",
    },
  ];

  const process: ProcessStep[] = [
    {
      step: "01",
      title: "Audit & Baseline",
      description:
        "Score your current SEO, ads, content, and tracking. Set KPIs.",
    },
    {
      step: "02",
      title: "Strategy & Plan",
      description:
        "Channel mix, budget split, targeting, and content calendar.",
    },
    {
      step: "03",
      title: "Launch & Learn",
      description:
        "Ship assets, go live, validate tracking, and iterate weekly.",
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description:
        "A/B tests, bid strategies, creative refresh, and CRO sprints.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <Section
        is="odd"
        className="relative grid place-items-center overflow-hidden py-20"
      >
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-2/4">
              <motion.h1
                className="mb-6 text-5xl font-bold leading-tight text-foreground lg:text-6xl"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(4, 100, 0.7, true)}
                custom={0}
                whileHover={hoverScale}
              >
                Digital <span className="text-primary">Marketing</span>
              </motion.h1>

              <motion.p
                className="mb-6 text-xl leading-relaxed text-foreground"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(6, 80, 0.7, true)}
                custom={1}
                whileHover={hoverScale}
              >
                Grow your business with comprehensive strategies across SEO,
                PPC, social, content, and email. We align on outcomes, launch
                fast, and optimize continuously for measurable growth.
              </motion.p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=digital-marketing">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ButtonLink>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
                  custom={3}
                >
                  <ButtonLink
                    variant="outline"
                    href="/contact-us"
                    className="text-black"
                  >
                    Have inquiries?
                  </ButtonLink>
                </motion.div>
              </div>
            </div>

            {/* Stat card */}
            <motion.div
              className="lg:w-2/4 relative"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src="/DigitalMarketing.jpg"
                alt="Team planning a digital marketing campaign covering SEO, PPC, social, content, and email"
                width={900}
                height={900}
                className="rounded-2xl filter brightness-90"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section is="odd" id="services" className="py-20 pt-0 relative">
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
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-black" />
            Services
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-black" />
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
            Comprehensive solutions to grow your presence and drive results.
          </motion.p>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {services.map((s, i) => (
              <motion.li
                key={s.title}
                className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow"
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                whileHover={hoverScale}
                viewport={{ once: true }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                </div>
                <p className="mb-3 text-sm">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary/80" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <PageDividerTwo />

      {/* Benefits (renamed + no “Why choose” copy) */}
      <Section is="odd" id="benefits" className="py-20 pt-0">
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
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-black" />
            Benefits
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-black" />
          </motion.h2>

          {/* removed the descriptive paragraph per your request */}

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {benefits.map((b, i) => (
              <motion.li
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow"
                variants={slideInFromLeftWithDelay(4 * i, 80, 0.7, true)}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                whileHover={hoverScale}
                viewport={{ once: true }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <b.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-semibold">{b.title}</h3>
                </div>
                <p className="text-sm leading-6">{b.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <PageDividerTwo />

      {/* How we work (process) */}
      <ProcessAnimation
        steps={process}
        centerLabel="Delivery Process"
        subtitle="From baseline to scale transparent, iterative, and KPI-driven."
        title="Process"
      />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <EngagementSection
          title="Ready to Grow Your Business Online?"
          description="Get a free marketing audit and a channel plan tailored to your goals."
          button1Url="/contact-us?p=digital-marketing"
          button1Text="Contact us"
        />
      </motion.div>
    </main>
  );
}
