"use client";

import React from "react";
import Image from "next/image";
import { Calendar, CircleCheckBig, ThumbsUp, Users } from "lucide-react";

function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="text-left">
      <p className="text-sm tracking-widest uppercase text-primary/90 font-semibold">
        {subtitle}
      </p>
      <h2 className="mt-1 text-3xl md:text-4xl font-bold leading-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}

const stats = [
  { label: "20+ years of experience", icon: Calendar },
  { label: "99% satisfied clients", icon: ThumbsUp },
  { label: "10000+ Clients", icon: Users },
  { label: "2000+ Projects", icon: CircleCheckBig },
];

export default function OurStory() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Text Content */}
        <div className="lg:col-span-6 space-y-12">
          {/* Our Story */}
          <div>
            <SectionHeader subtitle="Our Story" title="We started our journey years back" />
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              For over a decade, we’ve helped many businesses to grow in various ways like branding,
              graphics design, web design, mobile development, etc. Established in 2020, Kenroz is
              headquartered in Hyderabad, India. Kenroz is your prime destination for all your web
              design, mobile applications, cloud applications, Software Development, SEO and Digital
              Marketing needs.
            </p>
          </div>

          {/* Why Us */}
          <div>
            <SectionHeader subtitle="Why Us?" title="Obvious 1st choice" />
            <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              Web design is more than just looking good! We create custom websites that make your
              phone ring. With our in-house experts and 20+ years of insights, we’re honoured to have
              received multiple awards & recognitions since 2004. With our extensive knowledge of both
              technology and client requirements, we have built a satisfied customer base of more than
              ten thousand spanning across 26 countries, showcasing our proven track record.
            </p>
          </div>
        </div>

        {/* Right Side: Image with Stats to the right */}
        <div className="lg:col-span-6 relative  h-full flex gap-6 items-start">
          {/* Image */}
          <div className="relative aspect-[4/5] w-[100%] overflow-hidden rounded-2xl border shadow-lg">
            <Image
              src="/photo-1521898284481-a5ec348cb555.avif"
              alt="Kenroz team collaborating — our story"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Vertical Square Stats on right side of image */}
          <div className="flex flex-col justify-between gap-10 w-1/4 absolute -right-10 top-0">
            {stats.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="aspect-square flex flex-col items-center justify-center rounded-xl border bg-primary/60 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <Icon className="h-8 w-8 text-primary-foreground/90 mb-2" />
                <span className="text-xs md:text-sm font-medium leading-snug text-primary-foreground/90">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
    </section>
  );
}
