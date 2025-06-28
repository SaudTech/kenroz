"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Code,
  Smartphone,
  Database,
  Settings,
  ArrowRight,
  Shield,
  Rocket,
  ChevronDown,
  Menu,
  X,
  Users,
} from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function KenrozWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      const target = e.target
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleClick))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick))
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Kenroz
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-purple-50 rounded-lg relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-purple-600 text-white shadow-lg"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-purple-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Logo Component */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl text-2xl font-bold mb-6 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                K
              </motion.div>
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Kenroz
              </motion.div>
              <motion.p 
                className="text-base text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Your Digital Innovation Partner
              </motion.p>
            </motion.div>

            <motion.div 
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Build, Manage, and{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Grow
                </span>
                <br />
                with Kenroz
              </h1>

              <p className="text-lg md:text-xl text-purple-600 font-bold mb-4">
                Take a lead, get Notified!
              </p>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transforming ambitious ideas into powerful digital realities. From concept to deployment, 
                we deliver excellence in every line of code.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="bg-gradient-to-r flex items-center from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-purple-100 text-purple-600 px-4 py-2 text-base font-semibold mb-4 border border-purple-200">
                About Kenroz
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet the{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're not just developers – we're digital architects crafting innovative solutions that drive real business growth
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-100/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    We are Kenroz, a dynamic technology company based in India, dedicated to transforming 
                    businesses through innovative digital solutions. We specialize in developing fully 
                    functioning applications including cutting-edge websites and mobile apps.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our comprehensive services span from initial app development to ongoing management 
                    of websites and mobile applications. We also excel in social media management, 
                    guaranteeing increased customer engagement and business growth.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Code className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Development</h4>
                    <p className="text-gray-600 text-sm">Cutting-edge solutions using latest technologies</p>
                  </motion.div>

                  <motion.div 
                    className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client-Focused</h4>
                    <p className="text-gray-600 text-sm">Dedicated to delivering exceptional results</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-8 text-white shadow-2xl border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-400" />
                    Why Choose Kenroz?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "India-based expertise with global standards",
                      "Full-stack development capabilities", 
                      "Guaranteed customer acquisition",
                      "End-to-end project management"
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-purple-100 text-purple-600 px-4 py-2 text-base font-semibold mb-4 border border-purple-200">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Deliver
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Database,
                  title: "Database Architecture",
                  description: "Robust, scalable database solutions designed for optimal performance and security. We architect data systems that grow with your business.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications with complete App Store & Play Store deployment following all guidelines and best practices.",
                },
                {
                  icon: Settings,
                  title: "Software Management",
                  description: "Comprehensive management and optimization of existing software systems. We ensure your applications run smoothly and efficiently.",
                },
                {
                  icon: Code,
                  title: "Web Development",
                  description: "Full-stack development of modern web applications using cutting-edge technologies and frameworks for optimal performance.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300 bg-white h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-200"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <service.icon className="w-6 h-6 text-purple-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 text-white shadow-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-base text-purple-100 mb-6 max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve your digital goals with our expert solutions.
                </p>
                <motion.button
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-purple-100 text-purple-600 px-4 py-2 text-base font-semibold mb-4 border border-purple-200">
                Our Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Stories
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Witness the transformation of ambitious visions into market-leading digital realities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[  
                {
                  title: "Emvive - ZATCA E-Invoicing Platform",
                  description: "ZATCA-compliant e-invoicing SaaS platform that significantly reduced invoice rejections and streamlined tax approval workflows for Saudi businesses.",
                  technologies: ["React", "ZATCA SDK", "AWS"],
                  achievements: ["90% cost savings", "Zero invoice rejections", "Drag-and-drop form builder"],
                  icon: Database,
                },
                {
                  title: "Wellyfe - Healthcare Portal",
                  description: "Patient-doctor portal with real-time video conferencing via Twilio, data visualization using ReCharts, and automated SMS reminders.",
                  technologies: ["React", "Twilio", "ReCharts", "Firebase"],
                  achievements: ["Real-time video calls", "Automated SMS reminders", "Data visualization"],
                  icon: Smartphone,
                },
                {
                  title: "Vizzhy - Healthcare Web App",
                  description: "Healthcare web application with Azure AI integration, automated speech recognition, and Firebase-based real-time chat for enhanced doctor-patient communication.",
                  technologies: ["React", "Redux", "Azure AI", "Firebase"],
                  achievements: ["Speech recognition", "Real-time chat", "Cross-browser compatibility"],
                  icon: Code,
                },
                {
                  title: "Dynamic Form Builder",
                  description: "Comprehensive drag-and-drop form builder with 15+ reusable components, reducing development time by 80% and eliminating manual form coding.",
                  technologies: ["React", "dnd-kit", "Context API"],
                  achievements: ["80% faster development", "15+ components", "Enterprise-level forms"],
                  icon: Settings,
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300 group overflow-hidden bg-white h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 border border-purple-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <project.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">{project.description}</p>
                      
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200 text-xs border border-purple-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                        <div className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-purple-100 text-purple-600 px-4 py-2 text-base font-semibold mb-4 border border-purple-200">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your vision into reality? Let's create something extraordinary together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 770-273-5203",
                  subtitle: "Available 24/7 for urgent inquiries"
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "help@kenroz.com",
                  subtitle: "Quick response within 24 hours"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "India",
                  subtitle: "Serving clients globally"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-200 transition-all duration-300 bg-white h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <contact.icon className="w-6 h-6 text-purple-600" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-purple-600 text-base font-semibold mb-2">{contact.value}</p>
                      <p className="text-xs text-gray-500">{contact.subtitle}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href="#"
                  className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-purple-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-purple-500"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-black text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg mr-3 shadow-lg border border-purple-500">
                  Kenroz
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm">
                Building the future of software development and management. We transform ideas into 
                powerful digital solutions that drive business growth.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm">7748596585</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm">help@kenroz.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm">India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4 text-base">Quick Links</h3>
              <ul className="space-y-2">
                {["About Us", "Services", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-white mb-4 text-base">Legal</h3>
              <ul className="space-y-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kenroz. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex space-x-3 mt-3 md:mt-0">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
