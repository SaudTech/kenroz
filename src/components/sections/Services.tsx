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
import Paragraph from "../typography/Paragraph";
import SectionHeading from "../typography/SectionHeading";

// Small, focused types so props stay clean and consistent
type ServiceItem = {
  icon: LucideIcon;
  title: string;
  path: string;
  desc: string;
  outcomes: { stat: string; note: string }[];
};

type CaseSnapshot = {
  client: string;
  problem: string;
  solution: string;
  result: string;
};

const services: ServiceItem[] = [
  {
    icon: Settings,
    title: "Microsoft Dynamics 365",
    path: "microsoft-dynamics-365",
    desc: "Blueprinted ERP & CRM rollouts across Finance, Sales, and Field.",
    outcomes: [
      { stat: "40% faster go-live", note: "pre-built industry accelerators" },
      { stat: "Tier-1 SLA", note: "15-min response / 99.9% uptime" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    path: "cloud-solutions",
    desc: "Secure Azure & AWS landing zones, DevOps automation, FinOps.",
    outcomes: [
      { stat: "30% infra savings", note: "right-sized environments" },
      { stat: "CI/CD in 2 weeks", note: "pipelines & observability" },
    ],
  },
  {
    icon: Globe,
    title: "Web Application Development",
    path: "web-application-development",
    desc: "Enterprise-grade portals and internal apps built for scale.",
    outcomes: [
      { stat: "<400ms loads", note: "performance budgets enforced" },
      { stat: "WCAG 2.1 AA", note: "accessibility baked in" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    path: "mobile-application-development",
    desc: "Native and cross-platform apps with shared design systems.",
    outcomes: [
      { stat: "App store 4.7★ avg", note: "guided QA & release playbooks" },
      { stat: "90-day roadmap", note: "feature velocity mapped up-front" },
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    path: "digital-marketing",
    desc: "Lifecycle campaigns driven by analytics, SEO, and content ops.",
    outcomes: [
      { stat: "3x MQL lift", note: "full-funnel reporting" },
      { stat: "<24h launch", note: "always-on experimentation" },
    ],
  },
  {
    icon: Users,
    title: "Outsourcing",
    path: "outsourcing",
    desc: "Dedicated pods for engineering, QA, and support with SLAs.",
    outcomes: [
      { stat: "72-hour ramp", note: "signed-off talent bench" },
      { stat: "Quarterly QBRs", note: "governance + risk tracking" },
    ],
  },
] as const;

const caseSnapshots: CaseSnapshot[] = [
  {
    client: "Musanadah",
    problem: "Fragmented facilities management requests across sites.",
    solution: "Field service Dynamics 365 + Power Apps mobile workflows.",
    result: "98% on-time dispatch, 35% faster issue resolution in 6 months.",
  },
  {
    client: "Tamimi Group",
    problem: "Manual reporting slowed decision making for trading ops.",
    solution: "Azure data lake with governed dashboards and alerting.",
    result: "Saved 20 hours/week of manual consolidation, 15% margin uptick.",
  },
];

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
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6">
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
                    className="h-full rounded-2xl border border-border bg-card backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)] focus-within:ring-2 focus-within:ring-ring"
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

                      <div className="mt-4 rounded-xl bg-black/30 px-3 py-3 text-left">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-card-foreground/70 mb-2">
                          Outcomes
                        </p>
                        <ul className="space-y-1.5">
                          {service.outcomes.map((outcome) => (
                            <li key={outcome.stat} className="text-xs text-card-foreground/90">
                              <span className="font-semibold text-primary-foreground/90">
                                {outcome.stat}
                              </span>{" "}
                              <span className="text-card-foreground/70">— {outcome.note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Text (right on desktop) */}
          <div className="md:col-span-5 order-1 md:order-2 border border-border rounded-xl p-6 bg-card/10 shadow-sm">
            <div className="md:sticky  text-start md:top-20">
              <motion.h2
                className="text-3xl md:text-4xl leading-tight text-foreground font-semibold"
                variants={fromLeft}
                initial="hidden"
                whileInView="show"
                viewport={view}
                whileHover={hoverScale}
              >
                From pain points to measurable outcomes
              </motion.h2>
              <Paragraph className="mt-4 text-sm md:text-base leading-relaxed">
                Every engagement starts with a discovery sprint, service blueprint, and signed SLA so you know exactly when value arrives. Need to accelerate a roadmap or steady an implementation? Our teams co-design a plan, ship in iterations, and integrate with your governance.
              </Paragraph>

              {/* Added supporting content: quick value bullets + CTA */}
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {[
                  "Enterprise-grade security & compliance",
                  "Dedicated pod + engagement lead",
                  "SLA-backed delivery with transparent scorecards",
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

              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4">
                <p className="text-sm text-foreground/80">
                  Already exploring a brief? <Link href="/contact-us" className="font-semibold text-primary underline underline-offset-4">Book a 20-min consult</Link> and we&apos;ll match you with the right practice lead.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4">
                {caseSnapshots.map((snapshot) => (
                  <div key={snapshot.client} className="rounded-xl border border-border bg-card/20 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                      Case snapshot
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{snapshot.client}</h3>
                    <dl className="mt-3 space-y-2 text-sm text-foreground/80">
                      <div>
                        <dt className="font-medium text-foreground">Problem</dt>
                        <dd>{snapshot.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-foreground">What we built</dt>
                        <dd>{snapshot.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-foreground">Result</dt>
                        <dd className="font-semibold text-foreground">{snapshot.result}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
