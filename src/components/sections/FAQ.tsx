'use client'

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
            <span className="bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold rounded-full border border-blue-200">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-600">Get answers to common questions about our services and process</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
