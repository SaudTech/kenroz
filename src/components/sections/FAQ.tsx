'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion' // adjust the import path as needed

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and requirements. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes! We offer comprehensive support and maintenance packages to keep your applications running smoothly. This includes security updates, performance optimization, and feature enhancements.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We work with modern technologies including React, Node.js, Python, cloud platforms (AWS, Azure), mobile development (React Native, Flutter), and emerging technologies like AI integration.',
  },
  {
    question: 'How do you ensure project quality?',
    answer:
      'We follow industry best practices including code reviews, automated testing, continuous integration, and regular client updates. Quality assurance is integrated throughout our development process.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#7e141c] to-[#e31b25] bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-600">Get answers to common questions about our services and process</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <AccordionTrigger className="px-6 py-4 text-base font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions? Contact us below</p>
          </div>
        </div>
      </div>
    </section>
  )
}
