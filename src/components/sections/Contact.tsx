'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  const contacts = [
    { icon: Phone, title: 'Phone', value: '+91 (810) 624-9040', subtitle: 'Available 9 AM - 9 PM IST' },
    { icon: Mail, title: 'Email', value: 'contact@kenroz.com', subtitle: 'We respond within 24 hours' },
    { icon: MapPin, title: 'Office', value: 'Hyderabad, India', subtitle: 'Serving clients worldwide' },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary-600 px-4 py-2 text-base font-semibold mb-4 border border-primary-200">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let&apos;s Build{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your vision into reality? Contact us today and let&apos;s start building something amazing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <div key={index} className="transform transition-all duration-300 hover:scale-105">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-200 transition-all duration-300 bg-white h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary-200 hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                    <p className="text-primary-600 text-base font-semibold mb-2">{contact.value}</p>
                    <p className="text-xs text-gray-500">{contact.subtitle}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-primary-500 hover:scale-110"
                onClick={(e) => e.preventDefault()}
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-primary-500 hover:scale-110"
                onClick={(e) => e.preventDefault()}
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
