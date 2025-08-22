"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "../Navbar";

type Partner = {
  id: "emvive" | "arcgen";
  name: string;
  logo?: string; // optional logo path; fallback to initials
  description: string;
};

const partners: Partner[] = [
  {
    id: "emvive",
    name: "Emvive",
    logo: "/emvive.png",
    description:
      "Emvive is a leading software which helps companies manage their invoices and get compliant with the latest regulations of Zakat, Tax and Customs Authority in Saudi Arabia.",
  },
  {
    id: "arcgen",
    name: "Arcgen",
    logo: "/Arcgen.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus, sapien et luctus posuere, dui magna dapibus nisl, non mollis mi sem at augue.",
  },
];

function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="text-left">
      <p className="text-sm tracking-widest uppercase text-primary/90 font-semibold">{subtitle}</p>
      <h2 className="mt-2 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] text-foreground">
        {title}
      </h2>
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-xl border bg-primary/10 text-primary font-bold">
      {initials}
    </div>
  );
}

function PartnerCard({
  p,
  active,
  setActive,
}: {
  p: Partner;
  active: boolean;
  setActive: (id: Partner["id"]) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={() => setActive(p.id)}
      onFocus={() => setActive(p.id)}
      className={[
        "relative overflow-hidden rounded-2xl border shadow-sm transition-all duration-700 ease-out bg-background/70",
        active ? "w-[550px] h-[420px]" : "w-[120px] h-[420px]",
        "flex-none",
      ].join(" ")}
    >
      {/* Always-visible logo (top center). */}
      <div
        className={[
          "absolute left-1/2 top-6 -translate-x-1/2 transition-all duration-300",
          active ? "h-24  w-52" : "h-24 w-24",
        ].join(" ")}
      >
        {p.logo ? (
          <div className="relative h-full w-full overflow-hidden rounded-xl border bg-white">
            <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain p-2" />
          </div>
        ) : (
          <Initials name={p.name} />
        )}
      </div>

      {/* Collapsed title — visible at the bottom center */}
      <div
        className={[
          "pointer-events-none absolute bottom-13 -rotate-90 left-5 text-3xl  -translate-x-1/2 text-foreground/85 font-semibold tracking-wide",
          "transition-opacity duration-300",
          active ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        {p.name}
      </div>

      {/* Expanded content */}
      <div
        className={[
          "grid h-full grid-rows-[auto_auto_1fr_auto] items-start gap-4 p-6 pt-24", // pt-24 leaves space for the logo at top
          active ? "opacity-100" : "opacity-0",
          "transition-opacity duration-300",
        ].join(" ")}
      >
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold leading-tight">{p.name}</h3>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2"></div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>

        <div className="mt-2 flex items-center gap-3">
          <ButtonLink
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            Visit website
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default function StrategicPartner() {
  // Default expanded partner
  const [activeId, setActiveId] = useState<Partner["id"]>("arcgen");

  return (
    <section className="w-full">
      {/* Global blurry gradient blob (fixed so it sits over the whole page). */}
      <div className="pointer-events-none absolute left-[-12%] top-[200%] z-[1] h-[35rem] w-[35rem] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 z-[4] lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: subtitle + very big title */}
        <div className="lg:col-span-6">
        <SectionHeader subtitle="Companies Who benefited from us" title="Strategic Partners" />
        <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
            We collaborate with visionary companies to deliver stronger outcomes and accelerate
            innovation across platforms.
          </p>
        </div>

        {/* Right: interactive partner cards (side by side) */}
        <div className="lg:col-span-6 flex w-full items-stretch gap-6 overflow-x-auto lg:overflow-visible">
          {partners.map((p) => (
            <PartnerCard
              key={p.id}
              p={p}
              active={activeId === p.id}
              setActive={(id) => setActiveId(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
