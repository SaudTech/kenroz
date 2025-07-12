'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Globe, Smartphone, Database, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications built with the latest frameworks and best practices for optimal performance and user experience.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description:
        'Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android platforms with robust functionality.',
    },
    {
      icon: Database,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and services that ensure your applications perform reliably while reducing operational costs and complexity.',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description:
        'Complete digital transformation services that modernize your business processes and integrate cutting-edge technologies seamlessly.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 px-4 py-2 text-base font-semibold mb-4 border border-blue-200">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="transform transition-all duration-300 hover:scale-105">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-white h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200 hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
              <p className="text-base text-blue-100 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help transform your ideas into powerful digital solutions.
              </p>
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
