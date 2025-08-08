'use client'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Cloud,
  Megaphone,
  Users,
  Settings,
  CheckCircle
} from 'lucide-react'
import DescriptionToggle from '../DescriptionToggle'
import Link from 'next/link'


export default function Services() {

  const services = [
    {
      icon: Settings,
      title: 'Microsoft Dynamics 365',
      path: 'microsoft-dynamic-365',
      shortDescription: 'Unified business management solution for sales, customer service, finance and operations.',
      fullDescription: 'Microsoft Dynamics 365 offers a unified solution to manage every facet of your business, from sales and customer service to finance and operations. Our team specializes in customizing and implementing Dynamics 365 to fit your unique business processes and goals. Whether you\'re looking to improve customer engagement or optimize internal operations, we ensure a smooth, scalable transformation.\n\nWe understand that every organization operates differently, which is why we take a tailored approach, analyzing your workflow, integrating existing systems, and configuring modules to support your business strategy. Our experts guide you from planning through deployment, ensuring you\'re maximizing the capabilities of the Dynamics platform.\n\nWith powerful analytics, AI-driven insights, and seamless cloud integration, Dynamics 365 empowers businesses to make informed decisions in real time. We also offer ongoing support, training, and upgrades so your team can continue to thrive as your business evolves.',
      features: ['Custom Implementation', 'System Integration', 'AI-driven Insights', 'Ongoing Support']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      path: 'cloud-solutions',
      shortDescription: 'Scalable cloud infrastructure with modern DevOps practices for accelerated transformation.',
      fullDescription: 'Embrace the power of the cloud combined with modern DevOps practices to accelerate your business transformation. Our Cloud and DevOps Solutions help you migrate, build, and manage scalable, secure cloud infrastructure while streamlining development through automation and continuous integration. Whether you\'re moving legacy systems to the cloud or deploying new applications, we ensure reliability and performance.\n\nWe specialize in implementing DevOps methodologies that automate your software delivery lifecycle, enabling faster releases, improved quality, and reduced downtime. From infrastructure as code and container orchestration to monitoring and incident management, our team builds a seamless pipeline that supports your business agility and innovation goals.\n\nBy integrating cloud platforms like Microsoft Azure, AWS, or Google Cloud with DevOps best practices, we help you reduce operational costs, enhance collaboration between development and operations teams, and maintain robust security and compliance. Partner with us to future-proof your IT environment and accelerate growth with confidence.',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Security & Compliance']
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      path: 'web-application-development',
      shortDescription: 'Custom web applications focused on functionality, performance, and exceptional user experience.',
      fullDescription: 'Your web presence is your digital storefront, and we\'re here to make it exceptional. Our custom web application development services focus on functionality, performance, and user experience. From internal dashboards to full-scale customer-facing platforms, we build responsive, scalable web apps that meet your exact needs.\n\nOur development process starts with a thorough discovery phase, where we learn about your goals, target users, and business requirements. We then design and develop solutions using modern technologies and frameworks, ensuring that your application is future-proof and easy to maintain.\n\nSecurity, speed, and usability are at the heart of everything we build. We follow best practices in coding, testing, and deployment to deliver a reliable solution that works flawlessly across all devices and browsers. Plus, we provide ongoing support to keep your web apps running smoothly and up-to-date.',
      features: ['Responsive Design', 'Modern Frameworks', 'Security First', 'Cross-browser Compatible']
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      path: 'mobile-application-development',
      shortDescription: 'Powerful Android and iOS apps that are intuitive, high-performing, and visually engaging.',
      fullDescription: 'In today\'s mobile-first world, your app needs to do more than just exist, it must deliver value, usability, and delight. Our mobile app development services focus on creating powerful apps for Android and iOS that are intuitive, high-performing, and visually engaging.\n\nFrom concept to launch, we work closely with you to understand your app\'s purpose and audience. We handle everything, from UI/UX design and front-end development to API integration and backend services, ensuring that the final product not only meets expectations but exceeds them.\n\nOur agile development approach allows for flexibility and quick iterations, so you can adapt to feedback and changing requirements. Whether it\'s a customer app, internal tool, or eCommerce platform, we build mobile solutions that scale with your business and keep users coming back.',
      features: ['Native & Cross-platform', 'UI/UX Design', 'API Integration', 'Agile Development']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      path: 'digital-marketing',
      shortDescription: 'Strategic digital marketing approach to build brand awareness and drive meaningful conversions.',
      fullDescription: 'Standing out online requires more than just a website, it requires a smart, strategic digital marketing approach. Our team helps you build brand awareness, drive traffic, and convert visitors into customers through integrated marketing campaigns across multiple channels.\n\nWe specialize in SEO, content marketing, pay-per-click advertising, email campaigns, and social media management. Every campaign is data-driven, designed to target the right audience at the right time with compelling messages that resonate and engage.\n\nOur goal is to create long-term growth, not just quick wins, which means constantly analyzing performance, optimizing campaigns, and adjusting strategies to align with your business goals. With us, your digital marketing efforts will deliver real ROI and meaningful customer relationships.',
      features: ['SEO & Content Marketing', 'PPC Advertising', 'Social Media Management', 'Data-driven Campaigns']
    },
    {
      icon: Users,
      title: 'Outsourcing',
      path: 'outsourcing',
      shortDescription: 'Trusted professionals who integrate seamlessly into your operations for faster, smarter growth.',
      fullDescription: 'Outsourcing isn\'t just about cutting costs, it\'s about finding trusted partners who can help you grow faster and smarter. We offer reliable, skilled professionals who integrate seamlessly into your operations, delivering high-quality work while you focus on your core business.\n\nWhether you need developers, QA testers, support agents, or project managers, we provide flexible engagement models tailored to your timeline and budget. Our team becomes an extension of yours, aligned with your workflows and business culture.\n\nWe ensure full transparency, effective communication, and secure collaboration in every project. From startups to enterprises, our outsourcing solutions are designed to boost productivity, reduce overhead, and give you access to top-tier talent without the complexities of hiring in-house.',
      features: ['Skilled Professionals', 'Flexible Engagement', 'Seamless Integration', 'Cost-effective Solutions']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-[#fffde7] via-white to-[#fffde7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-[#e31b25] to-[#7e141c] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <Link href={`/services/${service.path}`}>
                  <Card className="cursor-pointer border-2 border-gray-200 hover:border-[#e31b25] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-[#e31b25] to-[#7e141c] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#e31b25] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <DescriptionToggle description={service.fullDescription} />

                          <div className="flex flex-wrap gap-2 mt-4">
                            {service.features.map((feature) => (
                              <span
                                key={feature}
                                className="inline-flex items-center gap-1 bg-[#fffde7] text-[#7e141c] px-3 py-1 rounded-full text-sm font-medium border border-[#e31b25]/20"
                              >
                                <CheckCircle className="w-3 h-3" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
