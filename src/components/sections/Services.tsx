"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionVariants, view, hoverScale } from "@/lib/section-animations";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Smartphone,
  Cloud,
  Megaphone,
  Users,
  Settings,
  CheckCircle2,
} from "lucide-react";
import { ButtonLink } from "../Navbar";
import Paragraph from "../typography/Paragraph";
import SectionHeading from "../typography/SectionHeading";

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
    desc: "Smart ERP & CRM solutions to streamline your business.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    path: "cloud-solutions",
    desc: "Secure, scalable cloud infrastructure for seamless growth.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    path: "web-application-development",
    desc: "High-performance apps built for reliability and speed.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    path: "mobile-application-development",
    desc: "Intuitive mobile apps that bring ideas to life.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    path: "digital-marketing",
    desc: "Data-driven strategies to maximize reach and engagement.",
  },
  {
    icon: Users,
    title: "Outsourcing",
    path: "outsourcing",
    desc: "Flexible teams to scale operations efficiently.",
  },
] as const;

export default function Services() {
  const { fromLeft, fromRight } = useSectionVariants();
  return (
    <section
      className="w-full"
      aria-labelledby="services-heading"
    >
      <div className="relative mx-auto max-w-7xl text-center px-4  py-16 md:py-24">
        <SectionHeading blackText="Our" primaryText="Services" />


        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Cards (left on desktop) */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, i) => (
                <Link
                  key={service.path}
                  href={`/services/${service.path}`}
                  aria-label={`Read more about ${service.title}`}
                  className="group h-full transition-all duration-300"
                >
                  <motion.div
                    variants={fromRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={view}
                    whileHover={hoverScale}
                    transition={{ delay: i * 0.15 }}
                    className="h-full rounded-2xl border border-border bg-card backdrop-blur-md shadow-sm transition-all duration-300  hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] focus-within:ring-2 focus-within:ring-ring"
                  >
                    <div className="flex h-full flex-col p-4">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-md">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
                      </div>

                      {/* Title wraps (no truncation) */}
                      <h3 className="text-base md:text-lg font-semibold leading-tight text-card-foreground text-center">
                        <span className="break-words hyphens-auto">
                          {service.title}
                        </span>
                      </h3>

                      {/* Description clamped for balance */}
                      <p className="mt-2 text-xs md:text-sm text-card-foreground text-center line-clamp-3">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Text (right on desktop) */}
          <div className="md:col-span-5 order-1 md:order-2  border-black border-solid border-2 rounded-md p-5 bg-card/20 shadow-md">
            <div className="md:sticky  text-start md:top-20">
              <motion.p
                className="text-3xl md:text-4xl tracking-widest uppercase text-foreground font-extrabold"
                variants={fromLeft}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={hoverScale}
              >
                What we do best
              </motion.p>
              <Paragraph>
                We design, build, and scale digital solutions that empower
                businesses to operate smarter, innovate faster, and grow with
                confidence.
              </Paragraph>

              {/* Added supporting content: quick value bullets + CTA */}
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {[
                  "Enterprise-grade security & compliance",
                  "Pixel-perfect design consistency",
                  "SLA-backed reliability with transparent, measurable outcomes",
                ].map((point) => (
                  <Paragraph key={point} className="flex items-start gap-2">
                    <div>
                      <CheckCircle2
                        aria-hidden
                        className="mt-0.5 h-4 w-4 text-primary"
                      />
                    </div>
                    <span>{point}</span>
                  </Paragraph>
                ))}
              </ul>

              <div className="flex flex-wrap justify-end items-center gap-3">
                <ButtonLink href="/contact-us">Talk to an expert</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
