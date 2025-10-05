"use client";

import {
  Search,
  TrendingUp,
  Target,
  Mail,
  Share2,
  BarChart3,
  Users,
  Globe,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Navbar";
import EngagementSection from "@/components/EngagementSection";
import PageDividerTwo from "@/components/pageDividers/PageDividerTwo";
import ProcessAnimation, { ProcessStep } from "../outsourcing/process";
import Image from "next/image";
import Paragraph from "@/components/typography/Paragraph";
import SectionHeading from "@/components/typography/SectionHeading";
import { Blob } from "@/components/Blob";

export default function DigitalMarketingPage() {
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost visibility and drive organic traffic with smart SEO strategies.",
      features: ["Keyword Research", "On-Page Optimization", "Local SEO"],
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
      features: ["Campaign Design", "Automation Flows", "Engagement Tracking"],
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description:
        "Engage audiences with compelling content that builds trust.",
      features: [
        "Blog & Article Writing",
        "Infographics",
        "Content Distribution",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description:
        "Measure performance and optimize campaigns with real insights.",
      features: ["Custom Dashboards", "ROI Analysis", "Funnel Insights"],
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
      <Blob className="absolute -top-[-15%] -right-[5%] w-[48rem] h-[48rem] -z-10 opacity-60 blur-3xl" />
      {/* Hero */}
      <Section
        is="odd"
        className="max-w-auto py-20 overflow-hidden grid place-items-center"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <SectionHeading
                className="justify-start"
                blackText="Digital"
                primaryText="Marketing"
              />

              <Paragraph className="text-xl text-foreground mb-8 leading-relaxed">
                Grow your business with comprehensive strategies across SEO,
                PPC, social, content, and email. We align on outcomes, launch
                fast, and optimize continuously for measurable growth.
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=digital-marketing">
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
                  src="/DigitalMarketing.jpg"
                  alt="Digital Marketing"
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

      {/* Services */}
      <Section is="odd" id="services" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Services
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>
          <Paragraph className="w-full block mx-auto mb-12 max-w-3xl text-xl text-foreground">
            Comprehensive solutions to grow your presence and drive results.
          </Paragraph>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {services.map((s, i) => (
              <motion.li
                key={s.title}
                className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]"
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
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <PageDividerTwo />

      {/* Services */}
      <Section is="odd" id="benefits" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="text-5xl mb-10 font-bold text-foreground">
            <div className="mx-auto mb-3 max-w-[140px] border-t-2 border-foreground" />
            Benefits
            <div className="mx-auto mt-3 max-w-[140px] border-t-2 border-foreground" />
          </Paragraph>

          {/* removed the descriptive paragraph per your request */}

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {benefits.map((b, i) => (
              <motion.li
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]"
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

      {". "} {/*  DO NOT REMOVE, As removing this is causing a line over the page divider */}
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
