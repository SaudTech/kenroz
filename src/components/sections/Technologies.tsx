"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as TechIcons from "../Icons";
import { createElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Exclude non-component exports if any
const EXCLUDED_EXPORTS = new Set<string>(["default", "__esModule"]);

// Turn "ReactDark" -> "React", "NodeJs" -> "Node.js", "Nextjs" -> "Next.js"
function humanize(name: string) {
  const base = name.replace(/(Dark|Light|Logo|Icon)$/i, "");
  const spaced = base.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced
    .replace(/\bJs\b/g, "JS")
    .replace(/\bTs\b/g, "TS")
    .replace(/\bAws\b/g, "AWS")
    .replace(/\bGcp\b/g, "GCP")
    .replace(/\bCi\b/g, "CI")
    .replace(/\bCd\b/g, "CD")
    .replace(/\bUi\b/g, "UI")
    .replace(/\bUx\b/g, "UX")
    .replace(/\bSql\b/g, "SQL")
    .replace(/\bNo Sql\b/g, "NoSQL")
    .replace(/\bNextjs\b/gi, "Next.js")
    .replace(/\bNode Js\b/gi, "Node.js")
    .trim();
}

// simple pattern matcher
const matchAny = (name: string, patterns: (RegExp | string)[]) =>
  patterns.some((p) => (p instanceof RegExp ? p.test(name) : name.includes(p)));

export default function Technologies() {
  // Collect all component exports from ../Icons
  const iconEntries = useMemo(
    () =>
      Object.entries(TechIcons)
        .filter(
          ([key, val]) =>
            !EXCLUDED_EXPORTS.has(key) && typeof val === "function"
        )
        .sort(([a], [b]) => a.localeCompare(b)),
    []
  );

  // Category patterns (adjust/extend anytime)
  const FRONTEND_PATTERNS = [
    /React/i,
    /Next/i,
    /Vue/i,
    /Nuxt/i,
    /Angular/i,
    /Remix/i,
    /Svelte/i,
    /Tailwind/i,
    /Shadcn/i,
    /Vite/i,
    /Webpack/i,
    /Redux/i,
    /Zustand/i,
    /Framer/i,
    /Radix/i,
  ];

  const BACKEND_PATTERNS = [
    /Node/i,
    /Express/i,
    /Nest/i,
    /Fastify/i,
    /Deno/i,
    /Hono/i,
    /Bun/i,
    /Python|Django|FastAPI/i,
    /GraphQL/i,
    /tRPC/i,
    /gRPC/i,
    /Prisma/i,
    /Drizzle/i,
    /Sequelize/i,
  ];

  const DEVOPS_PATTERNS = [
    /Docker/i,
    /Kubernetes|K8s/i,
    /Helm/i,
    /Terraform/i,
    /Pulumi/i,
    /GitHub(.*)Actions/i,
    /Gitlab/i,
    /Jenkins/i,
    /AWS|GCP|Azure|Cloudflare|Vercel|Netlify/i,
    /Nginx|Traefik/i,
    /Prometheus|Grafana|Datadog|Sentry/i,
  ];

  const GENERAL_PATTERNS = [
    /Postgres|PostgreSQL/i,
    /MySQL/i,
    /MariaDB/i,
    /SQLite/i,
    /Mongo/i,
    /Redis/i,
    /Kafka/i,
    /Rabbit|NATS/i,
    /Elasticsearch|OpenSearch/i,
    /Supabase|PlanetScale|Neon/i,
    /Stripe|Razorpay|PayPal/i,
    /Auth|Clerk|Auth0|NextAuth/i,
  ];

  const buckets = {
    frontend: [] as [string, any][],
    backend: [] as [string, any][],
    devops: [] as [string, any][],
    general: [] as [string, any][],
    other: [] as [string, any][],
  };

  iconEntries.forEach(([name, Comp]) => {
    const label = humanize(name);
    if (matchAny(label, FRONTEND_PATTERNS))
      buckets.frontend.push([label, Comp]);
    else if (matchAny(label, BACKEND_PATTERNS))
      buckets.backend.push([label, Comp]);
    else if (matchAny(label, DEVOPS_PATTERNS))
      buckets.devops.push([label, Comp]);
    else if (matchAny(label, GENERAL_PATTERNS))
      buckets.general.push([label, Comp]);
    else buckets.other.push([label, Comp]); // fallback (hidden unless you want to show)
  });

  const Card = ({
    title,
    blurb,
    items,
  }: {
    title: string;
    blurb: string;
    items: [string, any][];
  }) => (
    <div className="p-5 flex flex-col">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{blurb}</p>
      </div>

      {/* Icons grid */}
      <TooltipProvider delayDuration={80}>
        <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 mt-2">
          {items.map(([label, Comp]) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <div
                  className="w-16 h-16 md:w-18 md:h-18 p-2 rounded-xl bg-white
                             shadow-sm border border-gray-200 flex items-center justify-center
                             transition-all duration-300 hover:scale-105 hover:shadow-xl
                             hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30"
                  aria-label={label}
                  title={label}
                >
                  {createElement(Comp as any, {
                    className:
                      "w-full h-full object-contain transition group-hover:drop-shadow",
                    "aria-hidden": true,
                  })}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs font-medium">
                {label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );

  return (
    <section
      id="tech"
      className="h-full py-20 md:py-24 bg-gradient-to-br from-primary to-secondary"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Technology Stack
          </h2>
          <p className="mt-2 text-white/80  mx-auto text-sm md:text-base">
            A pragmatic, production-first stack across the full lifecycle — from
            pixel-perfect frontends to resilient backends and reliable delivery.
          </p>
        </div>

        {/* Cards grid */}
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card
            title="Frontend"
            blurb="Modern UX with performance in mind: component-driven, accessible, and fast."
            items={buckets.frontend}
          />
          <Card
            title="Backend"
            blurb="Type-safe APIs, real-time eventing, and clean data access layers."
            items={buckets.backend}
          />
          <Card
            title="DevOps"
            blurb="Automated CI/CD, container orchestration, and observability at scale."
            items={buckets.devops}
          />
          <Card
            title="General"
            blurb="Datastores, queues, auth, and payments that power the business."
            items={buckets.general}
          />
        </div>

        {/* Optional: a subtle CTA row */}
        <div className="mt-10 flex items-center justify-center gap-3 text-white">
          These are just a few examples from our technology stack, but we’re not
          limited to them. We adapt to your needs and work with the tools that
          best fit your vision.{" "}
        </div>
      </div>
    </section>
  );
}
