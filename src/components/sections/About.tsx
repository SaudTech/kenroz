'use client'
import { Badge } from '@/components/ui/badge'
import { Rocket, Code, Users, Shield } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 px-4 py-2 text-base font-semibold mb-4 border border-blue-200">
              About TechFlow
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re passionate technologists creating innovative solutions that transform businesses and empower growth
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  At TechFlow, we believe technology should be accessible, powerful, and transformative. We specialize in creating digital solutions that not only meet today&apos;s needs but anticipate tomorrow&apos;s challenges.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  From startups to enterprise clients, we deliver scalable solutions that drive real business results. Our expertise spans web development, mobile applications, cloud solutions, and digital transformation.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:scale-102">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Stack</h4>
                  <p className="text-gray-600 text-sm">Latest technologies for optimal performance</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-102">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client Success</h4>
                  <p className="text-gray-600 text-sm">Dedicated to exceeding expectations</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl border border-gray-800 hover:scale-102 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-400" />
                  Why Choose TechFlow?
                </h3>
                <div className="space-y-3">
                  {[
                    'Cutting-edge technology expertise',
                    'Agile development methodology',
                    '24/7 support and maintenance',
                    'Scalable and secure solutions',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
