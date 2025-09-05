import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import JobList from "@/components/careers/JobList";
import {
  ShieldCheck,
  Users,
  Rocket,
  GraduationCap,
  HeartHandshake,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { ButtonLink } from "@/components/Navbar";
import { OpenInformativeDialog } from "@/components/OpenInformativeDialog";
import EngagementSection from "@/components/EngagementSection";

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
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src="/team.jpg"
          alt="Kenroz team at work"
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40 backdrop-blur-[1px]" />
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-28 md:py-36 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Build the future with Kenroz
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Join a team that ships meaningful products, learns fast, and cares
              about craft.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <ButtonLink href="#open-roles">View open roles</ButtonLink>
              <OpenInformativeDialog
                title="Refer a Candidate"
                description="We're always on the lookout for exceptional talent. If you know someone who would be a strong addition to our team, we’d love to hear from you. Please send their details to support@kenroz.com."
              >
                <ButtonLink variant="outline" className="text-white">
                  Refer a friend
                </ButtonLink>
              </OpenInformativeDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kenroz */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
          Why work with us
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          We empower small, focused teams to own outcomes   with the autonomy,
          tools, and support to do their best work.
        </p>

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
              className="group rounded-2xl border border-slate-200 bg-card p-6 shadow-sm hover:shadow-md transition"
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
      <section id="open-roles" className="bg-slate-50">
        <div className=" mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Open positions
            </h2>
            <p className="mt-3 text-slate-600">
              Browse teams and find your next role at Kenroz.
            </p>
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
        button1Url="/contact-us"
        button1Text="Apply now"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </div>
  );
}
