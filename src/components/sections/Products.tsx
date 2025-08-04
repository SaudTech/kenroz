'use client'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Target, Shield, Database, Award, CheckCircle } from 'lucide-react'

export default function Products() {
  const products = [
    {
      title: 'E-Commerce Platform',
      description:
        'Complete e-commerce solution with payment integration, inventory management, and real-time analytics that increased sales by 300%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      achievements: ['300% sales increase', '99.9% uptime', 'Mobile-first design'],
      icon: Target,
    },
    {
      title: 'Healthcare Management',
      description:
        'Digital healthcare platform connecting patients and doctors with telemedicine capabilities, appointment scheduling, and health records.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'WebRTC'],
      achievements: ['10,000+ users', 'HIPAA compliant', 'Real-time consultations'],
      icon: Shield,
    },
    {
      title: 'Financial Dashboard',
      description:
        'Advanced financial analytics dashboard with real-time data visualization, portfolio management, and automated reporting features.',
      technologies: ['Angular', 'Python', 'Redis', 'Chart.js'],
      achievements: ['Real-time analytics', 'Automated reports', '99.5% accuracy'],
      icon: Database,
    },
    {
      title: 'Learning Management System',
      description:
        'Comprehensive LMS platform with video streaming, progress tracking, interactive assessments, and certification management.',
      technologies: ['React Native', 'Django', 'AWS', 'Socket.io'],
      achievements: ['50,000+ students', 'Interactive learning', 'Certificate tracking'],
      icon: Award,
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We{' '}
              <span className="bg-gradient-to-r from-[#7e141c] to-[#e31b25] bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our solutions drive digital transformation for businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {products.map((product, index) => (
              <div key={index} className="transform transition-all duration-300 hover:scale-105">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group overflow-hidden bg-white h-full">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#7e141c] to-[#e31b25] rounded-xl flex items-center justify-center mr-3 border border-[#7e141c] hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#e31b25] transition-colors duration-300">
                          {product.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{product.description}</p>
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-yellow-100 text-[#e31b25] hover:bg-yellow-200 transition-colors duration-200 text-xs border border-yellow-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-800 mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {product.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
