'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Globe,
  Smartphone,
  Cloud,
  Megaphone,
  Users,
  Settings
} from 'lucide-react'

export default function Services() {
  const services = [
    { icon: Settings, title: 'Microsoft Dynamics 365', path: 'microsoft-dynamic-365' },
    { icon: Cloud, title: 'Cloud Solutions', path: 'cloud-solutions' },
    { icon: Globe, title: 'Web Application Development', path: 'web-application-development' },
    { icon: Smartphone, title: 'Mobile Application Development', path: 'mobile-application-development' },
    { icon: Megaphone, title: 'Digital Marketing', path: 'digital-marketing' },
    { icon: Users, title: 'Outsourcing', path: 'outsourcing' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-white to-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="bg-gradient-to-r from-[#df2a33] to-[#9B2730] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tailored digital solutions to grow, innovate, and succeed.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/services/${service.path}`}>
                <div className="h-full rounded-2xl border group transition-colors duration-300 border-gray-200 hover:bg-gradient-to-r hover:from-[#df2a33] hover:to-[#9B2730] backdrop-blur-md bg-white/60 shadow-md hover:shadow-xl p-8 text-center cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#df2a33] to-[#9B2730] flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 truncate"
                    title={service.title}
                  >
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
  