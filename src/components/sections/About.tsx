"use client";
import { motion } from "framer-motion";
import { Rocket, Code, Shield, Target, Award, Globe, Zap } from "lucide-react";
import DescriptionToggle from "../DescriptionToggle";

function FeatureCard({ icon, title, children, delay = 0 }: {
  icon: any;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const Icon = icon
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-[#e31b25] to-[#7e141c] rounded-xl flex items-center justify-center mr-4 shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      </div>
      <div className="text-gray-600 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function ValueCard({ icon: Icon, title, description, delay = 0 }: {
  icon: any;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-[#fffde7] to-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-[#e31b25]/20 group-hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-8 h-8 text-[#e31b25]" />
      </motion.div>
      <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const companyDescription = `At Kenroz, we believe in empowering businesses to lead with clarity, transform with technology, and excel with confidence. We are a forward-thinking IT solutions company committed to delivering high-impact digital services and innovative software products tailored to the unique needs of each client. From startups to enterprises, we help organizations thrive in a connected, competitive world.

With a strong foundation in enterprise solutions like Microsoft Dynamics 365, custom software development, cloud and DevOps, and industry-focused platforms such as HRMS, payroll, and taxation systems, our team blends technical expertise with strategic insight. Our approach is simple — we listen, we design, we build, and we support — ensuring that every solution is not just functional, but scalable, secure, and future-ready.

Driven by values of transparency, agility, and excellence, Kenroz is more than just a service provider — we are a technology partner invested in your success. Whether you're looking to modernize operations, enhance digital engagement, or launch a new platform, we're here to help you lead, transform, and excel — every step of the way.`;

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "Clear communication and honest partnerships in every project"
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Rapid adaptation to changing business needs and market demands"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in every solution we deliver"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Cutting-edge technology solutions for tomorrow's challenges"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white via-[#fffde7] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 -left-[30%] z-0 transform rotate-90 text-8xl lg:text-9xl font-extrabold tracking-[20px] lg:tracking-[40px] opacity-5 font-sans text-[#e31b25] pointer-events-none">
        ABOUT
      </div>
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-[#e31b25]/10 to-transparent rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#fffde7]/50 to-transparent rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              About{' '}
              <span className="bg-gradient-to-r from-[#e31b25] to-[#7e141c] bg-clip-text text-transparent">
                Kenroz
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses to lead with clarity, transform with technology, and excel with confidence
            </p>
          </motion.div>

          {/* Company Story */}
          <motion.div
            className="max-w-4xl mx-auto mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DescriptionToggle description={companyDescription} />
          </motion.div>

          {/* Company Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-center text-black mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            <FeatureCard icon={Rocket} title="Our Mission" delay={0.1}>
              <DescriptionToggle description="We anticipate and solve tomorrow's challenges with tailored digital solutions that drive sustainable growth. Our mission is to be the catalyst that transforms your business vision into digital reality, ensuring you stay ahead in an ever-evolving technological landscape." />
            </FeatureCard>

            {/* Featured Card */}
            <motion.div
              className="bg-gradient-to-br from-[#e31b25] to-[#7e141c] rounded-2xl p-8 text-white shadow-2xl border border-[#7e141c]/20 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="w-7 h-7 mr-3 text-[#fffde7]" />
                Why Choose Kenroz?
              </h4>
              <ul className="space-y-4 text-[#fffde7]">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fffde7] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strategic technology roadmap & consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fffde7] rounded-full mt-2 flex-shrink-0"></div>
                  <span>End-to-end implementation with industry best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fffde7] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proactive monitoring & performance optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fffde7] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive security, compliance & data privacy</span>
                </li>
              </ul>
            </motion.div>

            <FeatureCard icon={Code} title="Our Expertise" delay={0.3}>
              <DescriptionToggle description="Leveraging cutting-edge technologies including React, Node.js, Microsoft Dynamics 365, cloud-native solutions, and modern DevOps practices. We combine technical excellence with strategic business insight to deliver solutions that perform at scale and adapt to your evolving needs." />
            </FeatureCard>
          </div>

          {/* Stats or Additional Info */}
          {/* <motion.div
            className="bg-gradient-to-r from-black to-[#7e141c] rounded-3xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg text-[#fffde7] mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the businesses that trust Kenroz to deliver innovative solutions that drive growth,
              improve efficiency, and create lasting competitive advantages.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#fffde7] text-[#e31b25] hover:bg-white px-10 py-4 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let's Work Together
            </motion.a>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}