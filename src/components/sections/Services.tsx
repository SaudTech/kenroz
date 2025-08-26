"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Smartphone,
  Cloud,
  Megaphone,
  Users,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "../SectionHeader";

// Small, focused types so props stay clean and consistent
type ServiceItem = {
  icon: LucideIcon;
  title: string;
  path: string;
  desc: string;
};

const services: ServiceItem[] = [
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
    desc: "Modern, high‑performance web apps built for growth and reliability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    path: "mobile-application-development",
    desc: "Engaging, user‑friendly mobile apps that bring your ideas to life.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    path: "digital-marketing",
    desc: "Data‑driven strategies to boost visibility, reach, and customer engagement.",
  },
  {
    icon: Users,
    title: "Outsourcing",
    path: "outsourcing",
    desc: "Cost‑efficient, skilled teams to streamline operations and scale effortlessly.",
  },
] as const;

export default function Services() {
  return (
    <section className="w-full" id="services" aria-labelledby="services-heading">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Text (Left) */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-20">
              <SectionHeader
                subtitle="What we do best"
                title="Our Services"
                description="We design, build, and scale digital solutions that empower businesses to operate smarter, innovate faster, and grow with confidence."
              />

              {/* Added supporting content: quick value bullets + CTA */}
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "Enterprise-grade security & compliance",
                  "Design systems for pixel‑perfect consistency",
                  "SLA-backed reliability and performance",
                  "Transparent delivery with measurable outcomes",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Talk to an expert <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust/Stats row */}
              <div className="mt-10 grid grid-cols-2 gap-4 text-center md:text-left">
                <div>
                  <p className="text-3xl font-semibold tracking-tight">99.9%</p>
                  <p className="text-xs text-muted-foreground">Uptime across managed projects</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight">200k+</p>
                  <p className="text-xs text-muted-foreground">Daily active users served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards (Right) */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, i) => (
                <Link
                  key={service.path}
                  href={`/services/${service.path}`}
                  aria-label={`Read more about ${service.title}`}
                  className="group h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-2xl border transition-colors duration-300 border-border bg-card/70 backdrop-blur-md shadow-sm hover:shadow-lg focus-within:ring-2 focus-within:ring-ring"
                  >
                    <div className="flex h-full flex-col p-4 md:p-6">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-md">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>

                      {/* Title wraps (no truncation) */}
                      <h3 className="text-base md:text-lg font-semibold leading-tight text-foreground text-center">
                        <span className="break-words hyphens-auto">{service.title}</span>
                      </h3>

                      {/* Description clamped for balance */}
                      <p className="mt-2 text-xs md:text-sm text-muted-foreground text-center line-clamp-3">
                        {service.desc}
                      </p>

                      <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
