"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cloud,
  Megaphone,
  Users,
  Settings,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Microsoft Dynamics 365",
      path: "microsoft-dynamic-365",
      desc: "Empower your business with smart ERP & CRM solutions tailored to your workflow.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      path: "cloud-solutions",
      desc: "Secure, scalable, and flexible cloud infrastructure to accelerate digital transformation.",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      path: "web-application-development",
      desc: "Modern, high-performance web apps built for growth and reliability.",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      path: "mobile-application-development",
      desc: "Engaging, user-friendly mobile apps that bring your ideas to life.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      path: "digital-marketing",
      desc: "Data-driven strategies to boost visibility, reach, and customer engagement.",
    },
    {
      icon: Users,
      title: "Outsourcing",
      path: "outsourcing",
      desc: "Cost-efficient, skilled teams to streamline operations and scale effortlessly.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 z-[3]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-lg">
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
                <div className="h-full rounded-2xl border group transition-colors duration-300 border-gray-200 hover:bg-gradient-to-r hover:from-primary hover:to-secondary backdrop-blur-md bg-background/70 shadow-md hover:shadow-xl p-8 text-center cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full group-hover:from-black group-hover:to-black bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-black group-hover:text-white transition-colors duration-300 truncate"
                    title={service.title}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
