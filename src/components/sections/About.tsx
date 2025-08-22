"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Rocket, Shield, ArrowRight, Code, Smartphone, Cloud, TrendingUp, Settings, Users } from "lucide-react"
import { Card } from "../card"
import { ButtonLink } from "../Navbar"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  return (
    <div className="relative isolate min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-transparent blur-3xl" />
      </div>

      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
            <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              About Us
            </h1>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              We&apos;re a specialized consulting firm delivering cutting-edge digital solutions. From concept to deployment,
              we transform your business challenges into competitive advantages through innovative technology and
              strategic expertise.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {[
                { icon: TrendingUp, label: "Digital Marketing" },
                { icon: Code, label: "Web Development" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Users, label: "Outsourcing" },
                { icon: Cloud, label: "Cloud Solutions" },
                { icon: Settings, label: "Dynamics 365" },
              ].map((service) => (
                <motion.div
                  key={service.label}
                  variants={fadeUp}
                  className="flex items-center gap-2 rounded-lg border bg-card/50 p-3"
                >
                  <service.icon className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-medium">{service.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mb-6 flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
            </div>

            <ButtonLink href="/contact-us">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Card className="p-4">
                <Shield className="mb-2 h-5 w-5 text-blue-600" />
                <h3 className="text-sm font-semibold">Enterprise Security</h3>
                <p className="text-xs text-muted-foreground">Bank-level security standards</p>
              </Card>
              <Card className="p-4">
                <Rocket className="mb-2 h-5 w-5 text-blue-600" />
                <h3 className="text-sm font-semibold">Rapid Deployment</h3>
                <p className="text-xs text-muted-foreground">Fast time-to-market</p>
              </Card>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border bg-white/10 shadow-xl backdrop-blur-sm">
              <Image
                src="/about_us_Bg.jpg"
                alt="Professional consulting team"
                width={400}
                height={200}
                priority
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            
          </motion.div>
        </div>
      </section>
    </div>
  )
}
