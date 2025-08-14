"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  DollarSign, 
  FileText, 
  Shield, 
  GraduationCap,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import DescriptionToggle from "../DescriptionToggle"

export default function ProductsShowcase() {
  const products = [
    {
      id: "hrms",
      name: "HRMS Solution Systems",
      category: "Human Resources",
      icon: Users,
      image: "/HCM.png",
      shortDescription: "Comprehensive platform that simplifies and automates every aspect of employee lifecycle management.",
      fullDescription: "Our Human Resource Management System (HRMS) is a comprehensive platform that simplifies and automates every aspect of employee lifecycle management. From recruitment and onboarding to attendance, performance, and offboarding, it provides a centralized, user-friendly experience for HR teams and employees alike.\n\nThe system supports full integration with payroll, leave management, training, and appraisal modules, helping HR departments eliminate manual processes and reduce errors. Managers gain access to real-time analytics, while employees benefit from self-service options for routine tasks.\n\nBuilt to scale with your organization, our HRMS is fully customizable to match your internal policies and workflows. It ensures compliance with local labor laws and offers robust data security, so your HR operations are both efficient and protected.",
      keyFeatures: [
        "Employee Lifecycle Management",
        "Real-time Analytics Dashboard", 
        "Self-service Employee Portal",
        "Compliance & Security Ready",
        "Payroll Integration",
        "Performance Management"
      ],
      benefits: [
        "Reduce manual HR processes by 80%",
        "Improve employee satisfaction",
        "Ensure regulatory compliance",
        "Real-time workforce insights"
      ]
    },
    {
      id: "payroll",
      name: "Payroll Management Systems", 
      category: "Finance & Payroll",
      icon: DollarSign,
      image: "/Payroll.png",
      shortDescription: "Automates the entire payroll process with timely, accurate calculations and statutory compliance.",
      fullDescription: "Our Payroll Management System automates the entire payroll process, ensuring timely and accurate salary calculations, tax deductions, and statutory compliance. It reduces manual effort, eliminates errors, and maintains a complete audit trail of all transactions.\n\nEmployees can access their payslips, tax summaries, and leave balances through a self-service portal, while HR and finance teams benefit from automatic tax computation, bank file generation, and seamless integration with attendance and HRMS modules.\n\nCompliant with local labor laws and tax regulations, the system ensures your organization meets legal obligations while saving time and reducing costs. With customizable rules and flexible reporting, it adapts to your payroll structure, whether simple or complex.",
      keyFeatures: [
        "Automated Salary Calculations",
        "Tax Deduction Management",
        "Bank File Generation", 
        "Employee Self-service Portal",
        "Audit Trail & Reporting",
        "Multi-location Support"
      ],
      benefits: [
        "100% accurate payroll processing",
        "Reduce processing time by 70%",
        "Ensure tax compliance",
        "Eliminate calculation errors"
      ]
    },
    {
      id: "zatca",
      name: "ZATCA Taxation Solutions",
      category: "Taxation & Compliance", 
      icon: FileText,
      image: "/Invoice.png",
      shortDescription: "Built for Saudi Arabian businesses to comply with ZATCA e-invoicing and VAT regulations.",
      fullDescription: "Our ZATCA Taxation solution is built to help businesses in Saudi Arabia comply with e-invoicing and VAT regulations set by the Zakat, Tax and Customs Authority (ZATCA). It automates the creation, validation, and submission of e-invoices in full compliance with ZATCA Phase 1 and Phase 2 requirements.\n\nThe system integrates easily with your existing ERP, accounting, or POS solutions, offering a seamless e-invoicing workflow. It includes secure QR code generation, invoice UUIDs, digital signatures, and real-time submission to ZATCA's platform.\n\nWith an intuitive dashboard, automated reconciliation, and audit-ready reports, you reduce the risk of penalties and simplify your tax reporting process. Stay compliant with confidence, using a solution that evolves with regulatory changes.",
      keyFeatures: [
        "ZATCA Phase 1 & 2 Compliance",
        "Automated E-invoice Generation",
        "QR Code & Digital Signatures",
        "Real-time ZATCA Submission",
        "ERP Integration",
        "Audit-ready Reporting"
      ],
      benefits: [
        "Avoid ZATCA penalties",
        "Streamline tax processes", 
        "Ensure regulatory compliance",
        "Reduce manual invoice work"
      ]
    },
    {
      id: "insurance",
      name: "Insurance Product Systems",
      category: "Insurance & Risk",
      icon: Shield,
      image: "/Insurance.png", 
      shortDescription: "Specialized solution for insurance providers to streamline policy administration and claims management.",
      fullDescription: "Our Insurance Product System is a specialized solution tailored for the insurance sector, helping providers streamline policy administration, claims management, underwriting, and customer service. Whether you're in life, health, or general insurance, the platform adapts to your business model.\n\nIt offers dynamic dashboards, rule-based automation, customer portals, and policy lifecycle tracking, improving operational efficiency and enhancing policyholder satisfaction. Agents, brokers, and back-office staff benefit from a unified system that reduces processing time and eliminates redundancies.\n\nOur solution is modular, API-ready, and compatible with both legacy and cloud infrastructure. It ensures regulatory compliance, simplifies reporting, and allows your team to focus on growth and customer service, not system complexity.",
      keyFeatures: [
        "Policy Lifecycle Management",
        "Claims Processing Automation",
        "Customer & Agent Portals",
        "Underwriting Workflows",
        "Regulatory Compliance",
        "API-ready Architecture"
      ],
      benefits: [
        "Improve operational efficiency",
        "Enhance customer satisfaction",
        "Reduce processing time",
        "Ensure compliance"
      ]
    },
    {
      id: "lms",
      name: "Learning Management Systems (LMS)",
      category: "Education & Training",
      icon: GraduationCap,
      image: "/LMS.png",
      shortDescription: "Enables organizations to deliver, track, and manage training and learning content online.",
      fullDescription: "Our Learning Management System enables organizations and educational institutions to deliver, track, and manage training and learning content online. Whether for employee onboarding, skills development, or academic programs, our LMS is designed for engagement and scalability.\n\nIt supports interactive content, quizzes, certifications, and progress tracking with real-time analytics. Trainers can create courses easily, while learners enjoy a seamless experience across devices. The system also supports integration with third-party tools, HR systems, and calendar management.\n\nWith role-based access, multilingual support, and custom branding options, our LMS aligns with your internal culture and learning goals. It empowers teams with continuous learning, ensuring your workforce stays skilled and compliant.",
      keyFeatures: [
        "Interactive Course Creation",
        "Progress Tracking & Analytics",
        "Multi-device Compatibility",
        "Certification Management",
        "Third-party Integrations",
        "Custom Branding"
      ],
      benefits: [
        "Improve employee skills",
        "Track learning progress",
        "Reduce training costs",
        "Ensure compliance training"
      ]
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="products" className="relative py-20 bg-gradient-to-br from-black via-secondary to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-primary text-white px-4 py-2 text-sm font-semibold">
              Our Products
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Software{' '}
              <span className="bg-gradient-to-r from-[#fffde7] to-primary bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We offer powerful, flexible, and scalable software products that help businesses optimize operations, 
              enhance employee experiences, and ensure compliance.
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } items-center gap-12 lg:gap-20 group`}
              >
                {/* Product Image */}
                <motion.div
                  className="lg:w-1/2 flex justify-center"
                  whileHover={{
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#fffde7] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/10">
                      <Image
                        src={product.image}
                        alt={`${product.name} interface`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-contain rounded-2xl"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Product Content */}
                <motion.div
                  className="lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div>
                    <Badge className="mb-4 bg-[#fffde7] text-secondary px-3 py-1 text-xs font-medium">
                      {product.category}
                    </Badge>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {product.name}
                      </h3>
                    </div>

                    <DescriptionToggle description={product.fullDescription} />
                  </div>

                  {/* Key Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {product.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + featureIndex * 0.1,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(227, 27, 37, 0.1)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#fffde7] flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-[#fffde7] font-semibold text-sm uppercase tracking-wide">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-block bg-[#fffde7] text-secondary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-[#fffde7] to-white rounded-3xl p-12 text-center shadow-2xl border border-primary/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how our software products can streamline your business processes, 
                improve efficiency, and drive growth.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 bg-primary text-white hover:bg-secondary px-10 py-4 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Our Products
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}