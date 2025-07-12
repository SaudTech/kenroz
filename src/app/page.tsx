"use client"
import React, { useEffect, useState } from "react";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Code,
  Smartphone,
  Database,
  ArrowRight,
  Shield,
  Rocket,
  ChevronDown,
  Menu,
  X,
  Users,
  Globe,
  Zap,
  Target,
  Award,
  CheckCircle,
  Twitter,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const KenrozWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-lg shadow-lg">
                TechFlow
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg relative group ${
                        activeSection === item.toLowerCase()
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-blue-600 text-white shadow-lg"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
              <div className="px-4 py-4 space-y-2">
                {["Home", "About", "Services", "Portfolio", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-blue-50 rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        document
                          .getElementById(item.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.03%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Logo Component */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center rounded-2xl text-2xl font-bold mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold text-3xl shadow-2xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                  TechFlow
                </div>
              </div>
              <p className="text-base text-gray-300 font-medium">
                Innovative Solutions for Tomorrow
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Ideas Into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 font-bold mb-4">
                Innovation Meets Excellence
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Empowering businesses through cutting-edge technology solutions.
                From web development to mobile apps, we craft digital
                experiences that drive growth and success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="#contact"
                className="bg-gradient-to-r flex items-center from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group border border-blue-500/30 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600/10 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-600 px-4 py-2 text-base font-semibold mb-4 border border-blue-200">
                About TechFlow
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We&apos;re passionate technologists creating innovative solutions
                that transform businesses and empower growth
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    At TechFlow, we believe technology should be accessible,
                    powerful, and transformative. We specialize in creating
                    digital solutions that not only meet today&apos;s needs but
                    anticipate tomorrow&apos;s challenges.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    From startups to enterprise clients, we deliver scalable
                    solutions that drive real business results. Our expertise
                    spans web development, mobile applications, cloud solutions,
                    and digital transformation.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:scale-102">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Modern Stack
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Latest technologies for optimal performance
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:scale-102">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Client Success
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Dedicated to exceeding expectations
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl border border-gray-800 hover:scale-102 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-blue-400" />
                    Why Choose TechFlow?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Cutting-edge technology expertise",
                      "Agile development methodology",
                      "24/7 support and maintenance",
                      "Scalable and secure solutions",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-600 px-4 py-2 text-base font-semibold mb-4 border border-blue-200">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What We{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Deliver
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your
                digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Globe,
                  title: "Web Development",
                  description:
                    "Modern, responsive websites and web applications built with the latest frameworks and best practices for optimal performance and user experience.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Applications",
                  description:
                    "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android platforms with robust functionality.",
                },
                {
                  icon: Database,
                  title: "Cloud Solutions",
                  description:
                    "Scalable cloud infrastructure and services that ensure your applications perform reliably while reducing operational costs and complexity.",
                },
                {
                  icon: Zap,
                  title: "Digital Transformation",
                  description:
                    "Complete digital transformation services that modernize your business processes and integrate cutting-edge technologies seamlessly.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-white h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200 hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
                <p className="text-base text-blue-100 mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help transform your ideas into
                  powerful digital solutions.
                </p>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-600 px-4 py-2 text-base font-semibold mb-4 border border-blue-200">
                Our Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stories
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how we&apos;ve helped businesses achieve their digital
                transformation goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "Complete e-commerce solution with payment integration, inventory management, and real-time analytics that increased sales by 300%.",
                  technologies: ["React", "Node.js", "MongoDB", "Stripe"],
                  achievements: [
                    "300% sales increase",
                    "99.9% uptime",
                    "Mobile-first design",
                  ],
                  icon: Target,
                },
                {
                  title: "Healthcare Management",
                  description:
                    "Digital healthcare platform connecting patients and doctors with telemedicine capabilities, appointment scheduling, and health records.",
                  technologies: ["Vue.js", "Express", "PostgreSQL", "WebRTC"],
                  achievements: [
                    "10,000+ users",
                    "HIPAA compliant",
                    "Real-time consultations",
                  ],
                  icon: Shield,
                },
                {
                  title: "Financial Dashboard",
                  description:
                    "Advanced financial analytics dashboard with real-time data visualization, portfolio management, and automated reporting features.",
                  technologies: ["Angular", "Python", "Redis", "Chart.js"],
                  achievements: [
                    "Real-time analytics",
                    "Automated reports",
                    "99.5% accuracy",
                  ],
                  icon: Database,
                },
                {
                  title: "Learning Management System",
                  description:
                    "Comprehensive LMS platform with video streaming, progress tracking, interactive assessments, and certification management.",
                  technologies: ["React Native", "Django", "AWS", "Socket.io"],
                  achievements: [
                    "50,000+ students",
                    "Interactive learning",
                    "Certificate tracking",
                  ],
                  icon: Award,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 group overflow-hidden bg-white h-full">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 border border-blue-300 hover:scale-110 transition-transform duration-300">
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {project.description}
                      </p>
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-800 mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200 text-xs border border-blue-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-800 mb-2">
                          Key Results:
                        </h4>
                        <div className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-center text-xs text-gray-600"
                            >
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-600 px-4 py-2 text-base font-semibold mb-4 border border-blue-200">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let&apos;s Build{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Together
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to turn your vision into reality? Contact us today and
                let&apos;s start building something amazing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  subtitle: "Available 9 AM - 6 PM EST",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@techflow.com",
                  subtitle: "We respond within 24 hours",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  value: "San Francisco, CA",
                  subtitle: "Serving clients worldwide",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <Card className="border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-white h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-200 hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-blue-600 text-base font-semibold mb-2">
                        {contact.value}
                      </p>
                      <p className="text-xs text-gray-500">
                        {contact.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-blue-500 hover:scale-110"
                  onClick={(e) => e.preventDefault()}
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-blue-500 hover:scale-110"
                  onClick={(e) => e.preventDefault()}
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-lg border border-blue-500">
                  TechFlow
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm">
                Transforming businesses through innovative technology solutions.
                We create digital experiences that drive growth and deliver
                exceptional results for companies worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">
                    hello@techflow.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300 text-sm">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4 text-base">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["About Us", "Services", "Portfolio", "Contact", "Blog"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "")}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(
                            link.toLowerCase().replace(" ", "")
                          );
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-white mb-4 text-base">Services</h3>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "AI Integration",
                  "Consulting",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById("services")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} TechFlow. All rights reserved. Made
                with ❤️ in San Francisco
              </p>

              {/* Legal Links */}
              <div className="flex space-x-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (legal) => (
                    <a
                      key={legal}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xs"
                      onClick={(e) => e.preventDefault()}
                    >
                      {legal}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-blue-500/50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </footer>

      {/* Newsletter Section (Optional - can be placed before footer) */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with TechFlow
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights on technology trends, development tips,
              and exclusive updates delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>

            <p className="text-blue-200 text-sm mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-600 text-sm">
                We&apos;ve helped hundreds of companies transform their digital
                presence
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Team Members" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold rounded-full border border-blue-200">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                What Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real feedback from real clients who&apos;ve experienced the TechFlow
                difference
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, StartupCo",
                  content:
                    "TechFlow transformed our startup vision into a market-ready platform. Their expertise and dedication are unmatched.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "CTO, FinanceHub",
                  content:
                    "The team's technical prowess and ability to deliver on time exceeded our expectations. Highly recommended!",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder, HealthTech",
                  content:
                    "Working with TechFlow was a game-changer. They understood our needs and delivered a solution that scaled beautifully.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 text-sm font-semibold rounded-full border border-blue-200">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about our services and process
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity and requirements. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer:
                    "Yes! We offer comprehensive support and maintenance packages to keep your applications running smoothly. This includes security updates, performance optimization, and feature enhancements.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "We work with modern technologies including React, Node.js, Python, cloud platforms (AWS, Azure), mobile development (React Native, Flutter), and emerging technologies like AI/ML integration.",
                },
                {
                  question: "How do you ensure project quality?",
                  answer:
                    "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client updates. Quality assurance is integrated throughout our development process.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
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
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KenrozWebsite