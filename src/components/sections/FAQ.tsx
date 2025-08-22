'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion' // adjust the import path as needed

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope, complexity, and requirements. A simple website or MVP can be delivered in 3–6 weeks, while enterprise applications or cloud migrations may span 3–6 months. We provide a detailed, phase-based schedule during discovery, with milestones and regular progress reviews to ensure on-time delivery.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer comprehensive post-launch support packages tailored to your needs. This includes SLA-driven bug fixes, security patching, performance monitoring, feature enhancements, and 24/7 emergency assistance to ensure your system remains secure and reliable.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our expertise covers modern and enterprise technologies, including frontend frameworks (React, Next.js, Vue), backend platforms (Node.js, Python, Java, .NET), mobile development (React Native, Kotlin, Swift), and cloud infrastructure (AWS, Azure, Google Cloud, DigitalOcean). We also implement DevOps pipelines, integrate AI/ML solutions, and build industry-specific platforms like HRMS, payroll, and compliance systems.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "Quality is built into every phase. We follow industry best practices, including peer code reviews, automated and manual testing, continuous integration/deployment (CI/CD), and security checks. Clients receive regular progress demos, technical documentation, and performance audits before launch.",
  },
  {
    question: "How do you handle changes or new requirements mid-project?",
    answer:
      "We embrace agility. Changes are managed through a transparent change-control process: we assess impact on budget and timeline, update the project plan, and seek approval before implementation. This ensures flexibility without compromising delivery quality.",
  },
  {
    question: "How do you protect client data and ensure compliance?",
    answer:
      "We follow strict security protocols, including data encryption, secure authentication, access control, and regular vulnerability scanning. Our team is experienced in aligning with GDPR, HIPAA, ISO 27001, and other compliance standards relevant to your industry.",
  },
  {
    question: "Can you work with teams across different time zones?",
    answer:
      "Yes. We have experience collaborating with global teams. We align on core overlap hours for meetings and use asynchronous communication tools to keep work moving seamlessly across time zones.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing structures: fixed-price for well-defined projects, time-and-materials for evolving requirements, and dedicated team models for long-term engagements. During consultation, we help you choose the best fit for your budget and goals.",
  }
];


export default function FAQ() {
  return (
    <section id="faq" className="relative h-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-900">Get answers to common questions about our services and process</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="rounded-lg border bg-gray-900 border-gray-200 shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-gray-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-200 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
