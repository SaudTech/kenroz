"use client";
import { motion, Variants } from "framer-motion";
import {
  Rocket,
  Code,
  Shield,
  Target,
  Award,
  Globe,
  Zap,
  LucideIcon,
} from "lucide-react";
import DescriptionToggle from "../DescriptionToggle";
import React from "react";
import Partners from "./Partners";

// --- Animations (kept snappy) ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  const Icon = icon;
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-xl p-5 shadow-md border border-gray-100 transition-all duration-200 h-[230px]"
    >
      <div className="flex items-center mb-4">
        <motion.div
          initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-3 shadow-md"
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      </div>
      <div className="text-gray-600 leading-relaxed text-sm">{children}</div>
    </motion.div>
  );
}

function ValueItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={fadeUp} className="text-center">
      <div className="w-12 h-12 group bg-gradient-to-br from-[#fffde7] to-white rounded-xl flex items-center justify-center mx-auto mb-2.5 shadow border border-primary/20  transition">
        <Icon className="w-6 h-6 text-primary group-hover:text-secondary" />
      </div>
      <h4 className="text-base font-semibold text-black mb-1">{title}</h4>
      <p className="text-gray-600 text-sm leading-snug">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const companyDescription = `At Kenroz, we empower businesses to lead with clarity, transform with technology, and excel with confidence. We deliver high-impact digital services and software products tailored to each client. From startups to enterprises, we help organizations thrive in a connected, competitive world.

With strengths in Microsoft Dynamics 365, custom development, cloud & DevOps, and platforms such as HRMS, payroll, and taxation systems, we blend technical depth with strategy. Our approach is simple — listen, design, build, support — so every solution is functional, scalable, secure, and future-ready.

Guided by transparency, agility, and excellence, we partner in your success. Whether modernizing operations, enhancing engagement, or launching a new platform, we help you lead, transform, and excel.`;

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description:
        "Clear communication and honest partnerships in every project",
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Rapidly adapt to evolving business needs and markets",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every solution we deliver",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Cutting-edge tech for tomorrow’s challenges",
    },
  ];

  const TABS = [
    "Our Mission",
    "Why Kenroz?",
    "Our Expertise",
    "Core Values",
  ] as const;
  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* tighter vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header (smaller) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kenroz
            </span>
          </h2>
        </motion.div>

        {/* Company Story (compact) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl mx-auto mb-6 text-center"
        >
          <DescriptionToggle description={companyDescription} />
        </motion.div>

        {/* Main Layout capped to viewport: left tabs + right panel.
            On lg+: occupy ~75vh, inner panel scrolls if needed. */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl">
            <div className="h-[230px] flex">
              {/* Tabs */}
              <div className="w-40 lg:w-48 pr-3 border-r border-gray-200 overflow-auto">
                <div className="sticky top-0 py-1 space-y-2 h-full flex flex-col justify-between">
                  {TABS.map((tab, idx) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full py-2.5 px-3 text-left text-sm font-medium rounded-md transition-colors ${
                        activeTab === idx
                          ? "bg-primary text-white"
                          : "hover:bg-primary/10 text-gray-800"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Panel (scrollable) */}
              <div className="flex-1 pl-4 min-w-0 ">
                <motion.div
                  key={activeTab}
                  variants={containerStagger}
                  initial="hidden"
                  animate="show"
                  className="h-full min-h-0 flex flex-col"
                >
                  <div className="h-full min-h-0 overflow-y-auto">
                    {activeTab === 0 && (
                      <FeatureCard icon={Rocket} title="Our Mission">
                        <DescriptionToggle description="We anticipate and solve tomorrow's challenges with tailored digital solutions that drive sustainable growth. Our mission is to be the catalyst that transforms your business vision into digital reality, ensuring you stay ahead in an ever-evolving technological landscape." />
                      </FeatureCard>
                    )}

                    {activeTab === 1 && (
                      <motion.div
                        variants={fadeUp}
                        className="bg-gradient-to-br from-primary to-secondary rounded-xl p-5 text-white shadow-lg border border-secondary/20 transition-transform duration-200 h-[230px]"
                      >
                        <h4 className="text-lg font-bold mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-[#fffde7]" />
                          Why Choose Kenroz?
                        </h4>
                        <ul className="space-y-3 text-[#fffde7]">
                          {[
                            "Strategic technology roadmap & consulting",
                            "End-to-end implementation with industry best practices",
                            "Proactive monitoring & performance optimization",
                            "Comprehensive security, compliance & data privacy",
                          ].map((line) => (
                            <motion.li
                              key={line}
                              variants={fadeUp}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-[#fffde7] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{line}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <FeatureCard icon={Code} title="Our Expertise">
                        <DescriptionToggle description="We leverage React, Node.js, Microsoft Dynamics 365, cloud-native architectures, and modern DevOps. Our blend of technical excellence and business insight delivers solutions that perform at scale and evolve with your needs." />
                      </FeatureCard>
                    )}

                    {activeTab === 3 && (
                      <motion.div
                        variants={fadeUp}
                        className="bg-white rounded-xl p-5 shadow-md border border-gray-100 h-[230px]"
                      >
                        <h4 className="text-lg font-bold text-black mb-4 text-center">
                          Our Core Values
                        </h4>
                        <motion.div
                          variants={containerStagger}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                        >
                          {values.map((v) => (
                            <ValueItem
                              key={v.title}
                              icon={v.icon}
                              title={v.title}
                              description={v.description}
                            />
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background accents toned down and auto-hidden by container height */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 0.04, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute top-28 -left-[28%] rotate-90 text-7xl lg:text-8xl font-extrabold tracking-[16px] lg:tracking-[36px] text-primary hidden md:block"
      >
        ABOUT
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="absolute -top-12 -right-12 w-56 h-56 bg-gradient-to-br from-primary/10 to-transparent rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute bottom-4 left-4 w-64 h-64 bg-gradient-to-tr from-[#fffde7]/50 to-transparent rounded-full pointer-events-none"
      />

      <Partners />
    </section>
  );
}
