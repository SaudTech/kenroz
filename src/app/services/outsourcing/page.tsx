"use client";

import { Users, Zap, Settings, CheckCircle2 } from "lucide-react";
import EngagementSection from "@/components/EngagementSection";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import { hoverScale } from "@/lib/section-animations";
import ProcessAnimation, { ProcessStep } from "./process";
import { Section } from "@/app/page";
import { ButtonLink } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
const engagementModels = [
  {
    title: "Dedicated Team",
    description:
      "A full-time dedicated team that works exclusively on your projects with complete focus and commitment.",
    features: [
      "Full-time dedication",
      "Direct communication",
      "Long-term partnership",
      "Scalable team size",
    ],
    bestFor: "Long-term projects, Product development, Ongoing maintenance",
    icon: Users,
    color: "primary",
  },
  {
    title: "Staff Augmentation",
    description:
      "Extend your existing team with skilled professionals who integrate seamlessly with your workflows.",
    features: [
      "Quick onboarding",
      "Flexible duration",
      "Your project management",
      "Direct control",
    ],
    bestFor: "Skill gaps, Peak workloads, Specific expertise",
    icon: Zap,
    color: "secondary",
  },
  {
    title: "Project-Based",
    description:
      "Complete project delivery from start to finish with our experienced project management and development teams.",
    features: [
      "End-to-end delivery",
      "Fixed timeline",
      "Defined scope",
      "Quality assurance",
    ],
    bestFor: "Specific projects, MVP development, Time-bound deliverables",
    icon: Settings,
    color: "primary",
  },
];
const process: ProcessStep[] = [
  {
    step: "01",
    title: "Initiation & Planning",
    description:
      "Align on goals, scope out requirements, and assemble your dedicated team.",
    glowMs: 1400, // customize per step (optional)
  },
  {
    step: "02",
    title: "Setup & Onboarding",
    description:
      "Establish tools, access, and workflows for smooth collaboration.",
    glowMs: 1000,
  },
  {
    step: "03",
    title: "Execution & Monitoring",
    description:
      "Drive development forward with regular check-ins and quality reviews.",
    glowMs: 1600,
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "Launch your solution and provide ongoing maintenance and enhancements.",
    glowMs: 1200,
  },
];

export default function Page() {
  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  const [clientScreenWidth, setClientScreenWidth] = useState(0);

  useEffect(() => {
    const update = () => setClientScreenWidth(window.innerWidth);
    update(); // set once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* Hero Section */}
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
                Outsourcing <span className="text-primary">Services</span>
              </motion.h1>

              <motion.p
                className="text-xl text-foreground mb-8 leading-relaxed"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(6, 80, 0.7, true)}
                custom={1}
                whileHover={hoverScale}
              >
                Accelerate delivery with dedicated teams and top-tier talent.
                Choose a model that fits your goals Dedicated Teams, Staff
                Augmentation, or Project-Based Delivery. Our senior engineers,
                PMs, and QA integrate with your workflows, uphold
                enterprise-grade security, and drive measurable results across
                Dynamics 365, Cloud/DevOps, and Web & Mobile.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromLeftWithDelay(8, 80, 0.7, true)}
                  custom={2}
                >
                  <ButtonLink href="/contact-us?p=outsourcing">
                    Get Started
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

            {/* Stats Card */}
            <motion.div
              className="lg:w-2/5 relative"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src="/outsourcing.webp"
                alt="Outsourcing"
                width={800}
                height={900}
                className="rounded-2xl filter brightness-90"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Engagement Models */}
      <Section is="odd" id="engagement-models" className="py-20 pt-0 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold text-foreground mb-4 "
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
            custom={0}
            viewport={{ once: true }}
            whileHover={hoverScale}
          >
            <div className="border-t-2 border-black max-w-[470px] mb-3 mx-auto"></div>
            Engagement Models
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
            Flexible engagement options tailored to your project scope,
            timeline, and budget.
          </motion.p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((m, i) => (
              <motion.li
                key={i}
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
                  {m.title}
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
                <p className="mt-4 text-sm text-primary-foreground">
                  {m.bestFor}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
        <Image
          src="/bubble-side-divider.svg"
          alt="Outsourcing"
          className="absolute bottom-0 left-0 rotate-180"
          width={clientScreenWidth}
          height={100}
        />
      </Section>
      <Image
        src="/intersecting-wave-layers2.svg"
        alt="Outsourcing"
        width={clientScreenWidth}
        height={100}
      />

      <ProcessAnimation
        steps={process}
        centerLabel="Process"
        subtitle="A clear, collaborative delivery flow tailored to your scope."
        title="Process Overview"
      />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EngagementSection
          title="Ready to Scale Your Team?"
          description="Connect with us to choose the right engagement model and accelerate delivery."
          button1Url="/contact-us?p=outsourcing"
          button1Text="Talk to us"
        />
      </motion.div>
    </>
  );
}
