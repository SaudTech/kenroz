'use client'
import { Rocket, Code, Users, Shield } from 'lucide-react'
import DescriptionToggle from '../DescriptionToggle'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-[#7e141c] to-[#e31b25] bg-clip-text text-transparent">
                Kenroz
              </span>
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              <DescriptionToggle
                description={`
At Kenroz, we believe in empowering businesses to lead with clarity, transform with technology, and excel with confidence. We are a forward-thinking IT solutions company committed to delivering high-impact digital services and innovative software products tailored to the unique needs of each client. From startups to enterprises, we help organizations thrive in a connected, competitive world.

With a strong foundation in enterprise solutions like Microsoft Dynamics 365, custom software development, cloud and DevOps, and industry-focused platforms such as HRMS, payroll, and taxation systems, our team blends technical expertise with strategic insight. Our approach is simple — we listen, we design, we build, and we support — ensuring that every solution is not just functional, but scalable, secure, and future-ready.

Driven by values of transparency, agility, and excellence, Kenroz is more than just a service provider — we are a technology partner invested in your success. Whether you're looking to modernize operations, enhance digital engagement, or launch a new platform, we’re here to help you lead, transform, and excel — every step of the way.
                `}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border border-yellow-100/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7e141c] to-[#e31b25] rounded-xl flex items-center justify-center mr-3">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  We build digital solutions that anticipate tomorrow’s challenges — helping businesses transform, scale, and innovate with confidence.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  With expertise across web, mobile, and cloud, we deliver reliable, secure systems that drive real-world business outcomes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:scale-102">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                    <Code className="w-5 h-5 text-[#e31b25]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Stack</h4>
                  <p className="text-gray-600 text-sm">Latest technologies for optimal performance</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:scale-102">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-[#e31b25]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client Success</h4>
                  <p className="text-gray-600 text-sm">Dedicated to exceeding expectations</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-black to-[#7e141c] rounded-2xl p-8 text-white shadow-2xl border border-gray-800 hover:scale-102 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-[#e31b25]" />
                  Why Choose Kenroz?
                </h3>
                <div className="space-y-3">
                  {[
                    'Cutting-edge technology expertise',
                    'Agile development methodology',
                    '24/7 support and maintenance',
                    'Scalable and secure solutions',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#e31b25] rounded-full" />
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
