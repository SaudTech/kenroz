"use client";

import { Metadata } from "next";
import { Users, DollarSign, Globe, Zap, Settings } from "lucide-react";
import EngagementSection from "@/components/EngagementSection";
import { motion } from "framer-motion";
import useSectionVariants from "@/lib/useSectionVariants";
import ProcessAnimation from "./process";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Page() {
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

  const process = [
    {
      step: "01",
      title: "Initiation & Planning",
      description:
        "Align on goals, scope out requirements, and assemble your dedicated team.",
    },
    {
      step: "02",
      title: "Setup & Onboarding",
      description:
        "Establish tools, access, and workflows for smooth collaboration.",
    },
    {
      step: "03",
      title: "Execution & Monitoring",
      description:
        "Drive development forward with regular check-ins and quality reviews.",
    },
    {
      step: "04",
      title: "Delivery & Support",
      description:
        "Launch your solution and provide ongoing maintenance and enhancements.",
    },
  ];

  const { slideInFromLeftWithDelay, slideInFromRightWithDelay } =
    useSectionVariants();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[calc(100vh-20vh)] grid place-items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(4, 100, 0.7, true)}
                custom={0}
              >
                Outsourcing <span className="text-primary">Services</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-900 mb-8 leading-relaxed"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeftWithDelay(6, 80, 0.7, true)}
                custom={1}
              >
                Build faster with dedicated teams and expert talent—on your
                tools, in your time zone. Choose from Dedicated Teams, Managed
                Delivery, or Staff Augmentation. Our senior engineers, PMs, and
                QA integrate seamlessly with your workflows, uphold bank-grade
                security and clear SLAs, and deliver measurable outcomes across
                Dynamics 365, Cloud/DevOps, and Web & Mobile.
              </motion.p>
            </div>

            {/* Stats Card */}
            <motion.div
              className="lg:w-2/5 relative"
              variants={slideInFromRightWithDelay(8, 80, 0.7, true)}
              initial="hidden"
              whileInView="visible"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    className="text-center p-4 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-900">
                      Skilled Professionals
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-center p-4 bg-secondary/10 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-900">Global Coverage</div>
                  </motion.div>
                </div>
                <motion.div
                  className="text-center p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">60%</div>
                  <div className="text-sm text-gray-900">Cost Reduction</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0}
          >
            Engagement Models
          </motion.h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((m, i) => (
              <motion.li
                key={i}
                className="p-6 bg-card text-card-foreground rounded-lg flex flex-col items-center cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className={`bg-primary text-primary-foreground p-3 rounded-full mb-4`}
                >
                  <m.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{m.title}</h3>
                <p className="">{m.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            custom={0}
          >
            Our Process
          </motion.h2>
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.li
                key={i}
                className="text-center p-6 bg-white rounded-lg shadow"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto flex items-center justify-center mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-gray-900 text-sm">{p.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section> */}

      <ProcessAnimation />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EngagementSection
          title="Ready to Scale Your Team?"
          description="Let's discuss your needs and assemble the perfect team."
          button1Url="/contact-us?p=outsourcing"
          button1Text="Contact us"
        />
      </motion.div>
    </>
  );
}
