"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import Image from "next/image"

export default function ProductsPage() {
  const products = [
    {
      name: "HRMS Solution Systems",
      description:
        "A full-featured Human Resource Management System that automates the entire employee lifecycle: recruitment, onboarding, attendance, performance, training, appraisals, and offboarding. Integrates seamlessly with payroll and leave modules. Provides real-time analytics for managers and self-service portals for employees. Fully customizable, compliant with local labor laws, and built with strong data security to scale with your organization.",
      features: ["Employee Lifecycle Management", "Real-time Analytics", "Self-service Portals", "Compliance Ready"],
    },
    {
      name: "Payroll Management Systems",
      description:
        "Automates payroll calculations, tax deductions, statutory compliance, and audit trails. Employees get self-service access to payslips, tax summaries, and leave balances; HR/finance teams benefit from automatic tax computation, bank file generation, and tight integration with attendance/HRMS. Flexible rules, comprehensive reporting, and legal compliance reduce manual effort and errors.",
      features: ["Automated Calculations", "Tax Compliance", "Bank Integration", "Audit Trails"],
    },
    {
      name: "ZATCA Taxation Solutions",
      description:
        "Designed for Saudi Arabian businesses to comply with ZATCA e-invoicing and VAT regulations (Phase 1 & 2). Automates invoice creation, validation, secure QR code generation, UUIDs, digital signatures, and real-time submission. Includes an intuitive dashboard, reconciliation tools, and audit-ready reporting to minimize penalties and adapt to evolving regulations.",
      features: ["ZATCA Compliance", "E-invoicing", "Digital Signatures", "Real-time Submission"],
    },
    {
      name: "Insurance Product Systems",
      description:
        "A specialized platform for insurers (life, health, general) to streamline policy administration, underwriting, claims, and customer service. Features dynamic dashboards, rule-based workflow automation, unified policy lifecycle tracking, and customer/agent portals. Modular, API-ready, compatible with legacy and cloud setups; ensures regulatory compliance while improving efficiency and client satisfaction.",
      features: ["Policy Administration", "Claims Management", "Workflow Automation", "Customer Portals"],
    },
    {
      name: "Learning Management Systems (LMS)",
      description:
        "Empowers organizations and institutions to deliver, track, and manage training and educational content. Supports interactive courses, quizzes, certifications, progress analytics, and easy course creation. Learners enjoy a seamless, device-agnostic experience; trainers get powerful authoring and insight tools. Includes role-based access, multilingual support, custom branding, and integrations with HR and calendar systems to enable continuous, culture-aligned learning.",
      features: ["Interactive Courses", "Progress Analytics", "Multi-device Support", "Custom Branding"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.header
          className="text-center max-w-5xl mx-auto mb-24"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-4">
              Our Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powerful Products for Modern Business
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We offer powerful, flexible, and scalable software products that help businesses optimize operations,
            enhance employee experiences, and ensure compliance. Our solutions are designed to meet real-world business
            challenges with intuitive interfaces and reliable performance.
          </motion.p>
        </motion.header>

        <motion.section className="space-y-32" variants={containerVariants} initial="hidden" animate="visible">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-12 lg:gap-20 group`}
            >
              <motion.div
                className="lg:w-1/2 flex justify-center"
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <Image
                    src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(product.name + " business software illustration")}`}
                    alt={`${product.name} illustration`}
                    width={400}
                    height={400}
                    className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-gray-200/50 group-hover:shadow-3xl transition-all duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div>
                  <motion.h2
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.name}
                  </motion.h2>

                  <motion.p
                    className="text-gray-600 leading-relaxed text-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {product.description}
                  </motion.p>
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm text-gray-700 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + featureIndex * 0.1,
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <motion.svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>
      </main>
    </div>
  )
}
