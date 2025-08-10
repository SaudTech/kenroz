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

// --- Animations ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      // easeOut cubic-bezier
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
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
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transform transition-all duration-300 h-full"
    >
      <div className="flex items-center mb-6">
        <motion.div
          initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          className="w-14 h-14 bg-gradient-to-br from-[#df2a33] to-[#9B2730] rounded-xl flex items-center justify-center mr-4 shadow-lg"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      </div>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </motion.div>
  );
}

function ValueCard({
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
      <motion.div
        whileHover={{ scale: 1.08, rotate: 3 }}
        className="w-16 h-16 group bg-gradient-to-br transition-colors duration-300 from-[#fffde7] to-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-[#df2a33]/20 group-hover:shadow-xl hover:bg-gradient-to-r hover:from-[#df2a33] hover:to-[#9B2730]"
      >
        <Icon className="w-8 h-8 text-[#df2a33] group-hover:text-white" />
      </motion.div>
      <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const companyDescription = `At Kenroz, we believe in empowering businesses to lead with clarity, transform with technology, and excel with confidence. We are a forward-thinking IT solutions company committed to delivering high-impact digital services and innovative software products tailored to the unique needs of each client. From startups to enterprises, we help organizations thrive in a connected, competitive world.

With a strong foundation in enterprise solutions like Microsoft Dynamics 365, custom software development, cloud and DevOps, and industry-focused platforms such as HRMS, payroll, and taxation systems, our team blends technical expertise with strategic insight. Our approach is simple — we listen, we design, we build, and we support — ensuring that every solution is not just functional, but scalable, secure, and future-ready.

Driven by values of transparency, agility, and excellence, Kenroz is more than just a service provider — we are a technology partner invested in your success. Whether you're looking to modernize operations, enhance digital engagement, or launch a new platform, we're here to help you lead, transform, and excel — every step of the way.`;

  const [activeTab, setActiveTab] = React.useState(0);
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
      description:
        "Rapid adaptation to changing business needs and market demands",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every solution we deliver",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Cutting-edge technology solutions for tomorrow's challenges",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-white via-[#fffde7] to-white overflow-hidden bg-red-300"
    >
      {/* Background Elements (animate in) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-40 -left-[30%] z-0 rotate-90 text-8xl lg:text-9xl font-extrabold tracking-[20px] lg:tracking-[40px] opacity-5 font-sans text-[#df2a33] pointer-events-none"
      >
        ABOUT
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#df2a33]/10 to-transparent rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#fffde7]/50 to-transparent rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#df2a33] to-[#9B2730] bg-clip-text text-transparent">
                Kenroz
              </span>
            </h2>
          </motion.div>

          {/* Company Story */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <DescriptionToggle description={companyDescription} />
          </motion.div>

          {/* Company Values */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-black mb-12">
              Our Core Values
            </h3>
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Main Layout */}
          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-stretch">
            {/* Left Section - Tabs & Feature Cards */}
            <div className="lg:col-span-3 h-full">
              <div className="flex h-full">
                {/* Tab Buttons */}
                <div className="flex flex-col w-48 pr-4 border-r border-gray-200 dark:border-gray-700 overflow-auto">
                  {["Our Mission", "Why Kenroz?", "Our Expertise"].map(
                    (tab, idx) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(idx)}
                        className={`py-3 px-4 text-left font-medium rounded-lg transition-colors ${
                          activeTab === idx
                            ? "bg-[#df2a33] text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>

                {/* Tab Content */}
                <div className="flex-1 pl-6">
                  <motion.div
                    key={activeTab}
                    variants={containerStagger}
                    initial="hidden"
                    animate="show"
                    className="h-full flex flex-col"
                  >
                    {/* Wrap each tab panel in a full-height container */}
                    {activeTab === 0 && (
                      <div className="h-full">
                        <FeatureCard
                          icon={Rocket}
                          title="Our Mission"
                          className="h-full"
                        >
                          <DescriptionToggle description="We anticipate and solve tomorrow's challenges with tailored digital solutions that drive sustainable growth. Our mission is to be the catalyst that transforms your business vision into digital reality, ensuring you stay ahead in an ever-evolving technological landscape." />
                        </FeatureCard>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <motion.div
                        variants={fadeUp}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gradient-to-br from-[#df2a33] to-[#9B2730] rounded-2xl p-8 text-white shadow-2xl border border-[#9B2730]/20 transition-transform duration-300 h-full flex flex-col"
                      >
                        <h4 className="text-xl font-bold mb-6 flex items-center">
                          <Shield className="w-7 h-7 mr-3 text-[#fffde7]" />
                          Why Choose Kenroz?
                        </h4>
                        <ul className="space-y-4 text-[#fffde7] flex-1">
                          {[
                            "Strategic technology roadmap & consulting",
                            "End-to-end implementation with industry best practices",
                            "Proactive monitoring & performance optimization",
                            "Comprehensive security, compliance & data privacy",
                          ].map((line) => (
                            <motion.li
                              key={line}
                              variants={fadeUp}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-[#fffde7] rounded-full mt-2 flex-shrink-0" />
                              <span>{line}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <div className="h-full">
                        <FeatureCard
                          icon={Code}
                          title="Our Expertise"
                          className="h-full"
                        >
                          <DescriptionToggle description="Leveraging cutting-edge technologies including React, Node.js, Microsoft Dynamics 365, cloud-native solutions, and modern DevOps practices. We combine technical excellence with strategic business insight to deliver solutions that perform at scale and adapt to your evolving needs." />
                        </FeatureCard>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Section - Partner Spotlight */}
            <div className="lg:col-span-2 h-full">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-tr from-white to-[#fff8f8] dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center text-center"
              >
                {/* Square logo container */}
                <div className="mb-6 w-28 h-28  rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/Emvive.png"
                    alt="Emvive Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Partner Spotlight — Emvive
                </h4>
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
                  We’re the core{" "}
                  <span className="font-semibold">Development team in India</span>{" "}
                  for <span className="font-semibold">Emvive</span>, based in{" "}
                  <span className="font-semibold">Dammam, Saudi Arabia</span>.
                  
                </p>

                <div className="mt-auto">
                  <a
                    href="https://emvive.com"
                    target="_blank"
                    className="px-5 py-2 bg-[#df2a33] text-white rounded-lg shadow hover:bg-[#c4222a] transition-colors"
                  >
                    View Website
                  </a>
                </div>
              </motion.div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
