import type { Metadata } from "next";
import JobList from "@/components/careers/JobList";
import {
  ShieldCheck,
  Users,
  Rocket,
  GraduationCap,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import EngagementSection from "@/components/EngagementSection";
import SectionHeading from "@/components/typography/SectionHeading";
import Paragraph from "@/components/typography/Paragraph";
import CareersHero from "@/components/careers/CareersHero";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers at Kenroz",
  description:
    "Join the Kenroz team and help build innovative technology solutions.",
  openGraph: {
    title: "Careers at Kenroz",
    description:
      "Build the future with us. We craft impactful digital experiences for clients across the globe.",
    type: "website",
  },
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kenroz",
    url: "https://kenroz.com",
    sameAs: ["https://www.linkedin.com/company/kenroz"], // optional
  };

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <CareersHero jobs={jobs} />

      {/* Why Kenroz */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <SectionHeading blackText="Why work" primaryText="with us" />
        <Paragraph className="text-center w-full">
          We empower small, focused teams to own outcomes with the autonomy,
          tools, and support to do their best work.
        </Paragraph>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Great Benefits",
              desc: "Health coverage, leave policies, and transparent pay bands.",
            },
            {
              icon: Rocket,
              title: "Impact & Ownership",
              desc: "Ship real features. Make decisions. See outcomes.",
            },
            {
              icon: GraduationCap,
              title: "Learning Budget",
              desc: "Courses, books, events   every year, no red tape.",
            },
            {
              icon: Users,
              title: "Remote-friendly",
              desc: "Hybrid by default. Remote roles where it makes sense.",
            },
            {
              icon: HeartHandshake,
              title: "Supportive Culture",
              desc: "Feedback, mentorship, and psychological safety.",
            },
            {
              icon: Globe2,
              title: "Global Clients",
              desc: "Solve hard problems across industries and regions.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="group rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-slate-900/5 p-3 ring-1 ring-slate-900/10">
                  <Icon className="h-5 w-5 text-card-foreground" />
                </span>
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-card-foreground">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="bg-primary/10">
        <div className="mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading blackTextClassName="text-foreground" blackText="Open" primaryText="positions" />
            <Paragraph className="text-foreground/80">
              Browse teams and find your next role at Kenroz.
            </Paragraph>
          </div>
          <div className="mt-10">
            <JobList />
          </div>
        </div>
      </section>

      {/* CTA */}
      <EngagementSection
        title="Ready to apply?"
        description="Are you ready to join our team? We're always looking for talented individuals to join our team. If you're interested in working with us, please send your resume to support@kenroz.com."
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </div>
  );
}
