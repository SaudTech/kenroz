"use client";

import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import EngagementSection from "@/components/EngagementSection";

import SectionHeading from "@/components/typography/SectionHeading";
import ProductCarousel from "./ProductCarousel";
import Paragraph from "@/components/typography/Paragraph";
import { Blob } from "@/components/Blob";

// ---------- Highlighter ----------
function highlightText(text: string, keywords: string[]) {
  if (!keywords || keywords.length === 0) return text;
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  return text.split(regex).map((part, idx) =>
    keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
      <span key={idx} className="font-semibold text-primary">
        {part}
      </span>
    ) : (
      part
    )
  );
}

// ---------- Data ----------
type Product = {
  name: string[];
  slug: string;
  subtitle: string;
  description: string;
  imageName: string | string[];
  highlights: string[];
};

const products: Product[] = [
  {
    name: ["People", "Sphere"],
    slug: "people-sphere",
    subtitle: "All-in-One HR Management Suite",
    description:
      "Streamline the entire employee journey with an all-in-one HR platform from hiring to offboarding, with analytics and self-service built in. Manage recruitment, onboarding, performance reviews, and employee data in one unified system. Reduce administrative overhead while improving employee satisfaction with self-service portals and automated workflows.",
    imageName: "/HCM.png",
    highlights: [
      "hiring",
      "offboarding",
      "analytics",
      "self-service",
      "performance reviews",
      "employee satisfaction",
    ],
  },
  {
    name: ["Pay", "Stream"],
    slug: "pay-stream",
    subtitle: "Payroll & Compliance Automation",
    description:
      "Automate payroll, tax, and compliance with seamless calculations, bank integration, and transparent employee access. Handle complex salary structures, overtime calculations, and multi-country payroll requirements effortlessly. Ensure accuracy with real-time tax updates and automated compliance reporting for peace of mind.",
    imageName: "/Payroll.png",
    highlights: [
      "Automate payroll",
      "compliance",
      "salary structures",
      "multi-country payroll",
      "real-time tax",
    ],
  },
  {
    name: ["Tax", "Nova"],
    slug: "tax-nova",
    subtitle: "E-Invoicing & Tax Compliance",
    description:
      "Stay ZATCA-compliant with automated e-invoicing, QR codes, digital signatures, and real-time VAT submissions. Generate compliant invoices instantly with built-in validation and automatic tax calculations. Streamline your billing process while maintaining full regulatory compliance across different jurisdictions and tax requirements.",
    imageName: "/Invoice.png",
    highlights: [
      "ZATCA-compliant",
      "e-invoicing",
      "QR codes",
      "digital signatures",
      "VAT submissions",
      "regulatory compliance",
    ],
  },
  {
    name: ["Insura", "Core"],
    slug: "insura-core",
    subtitle: "Insurance Policy & Claims Management",
    description:
      "Simplify policy management, underwriting, claims, and customer service with a flexible, insurer-focused platform. Accelerate policy processing with intelligent automation and risk assessment tools. Enhance customer experience through streamlined claims handling and comprehensive policy management capabilities.",
    imageName: "/Insurance.png",
    highlights: [
      "policy management",
      "underwriting",
      "claims",
      "customer service",
      "automation",
      "risk assessment",
    ],
  },
  {
    name: ["", "Learnify"],
    slug: "learnify",
    subtitle: "Learning Management System (LMS)",
    description:
      "Deliver and track engaging learning experiences with interactive courses, certifications, and mobile-first access. Create personalized learning paths with adaptive content and real-time progress tracking. Boost employee development with comprehensive analytics, gamification features, and seamless integration with existing HR systems.",
    imageName: "/LMS.png",
    highlights: [
      "interactive courses",
      "certifications",
      "mobile-first",
      "personalized learning",
      "real-time progress",
      "gamification",
    ],
  },
];

export default function ProductsPage() {
  // Handle hash scrolling on page load
  useEffect(() => {
    const scrollToHash = (hash: string, smooth = true) => {
      if (!hash) return;
      const elementId = hash.slice(1);
      if (!elementId) return;

      const element = document.getElementById(elementId);
      if (!element) return;

      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY - 96;

        window.scrollTo({
          top,
          left: 0,
          behavior: smooth ? "smooth" : "auto",
        });
      });
    };

    if (window.location.hash) {
      scrollToHash(window.location.hash, false);
    }

    const handleHashScroll = () => {
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  // JSON-LD for SEO
  const productJsonLd = useMemo(() => {
    const baseUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://kenroz.com";

    return products.map((p) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name.join(" "),
      image: `${baseUrl}${p.imageName}`,
      description: p.description,
      brand: { "@type": "Brand", name: "Kenroz" },
      url: `${baseUrl}/products#${p.slug}`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative w-full">
        <div className="relative h-[52vh] md:h-[64vh] w-full overflow-hidden">
          <Image
            src="/product-hero-image.avif"
            alt="Kenroz Products"
            fill
            priority
            className="absolute inset-0 object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80rem 60rem at 70% -10%, rgba(255,255,255,0.14), transparent 60%), radial-gradient(70rem 50rem at 10% 120%, rgba(255,255,255,0.10), transparent 60%)",
              backgroundSize: "200% 200%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl text-center">
                <Paragraph className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-2xl">
                  Products built for modern business
                </Paragraph>
                <Paragraph className="text-white">
                  Powerful, flexible, and secure software that streamlines
                  operations, enhances employee experiences, and keeps you
                  compliant at scale.
                </Paragraph>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <ButtonLink href="#catalog" className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Explore products
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <Section
        is="odd"
        id="catalog"
        className="py-14 md:py-20 max-w-auto overflow-visible"
      >
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading blackText="Our product" primaryText="catalog" />

          <div>
            {products.map((product, idx) => {
              const imageLeft = idx % 2 === 0;
              return (
                <div
                  key={product.slug}
                  id={product.slug}
                  className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-32"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    {/* Image */}
                    <div
                      className={cn(
                        "md:col-span-6",
                        imageLeft ? "order-1" : "order-2"
                      )}
                    >
                      {Array.isArray(product.imageName) ? (
                        <ProductCarousel
                          images={product.imageName}
                          alt={`${product.name.join(" ")} illustration`}
                          glowAlign={imageLeft ? "left" : "right"}
                        />
                      ) : (
                        <div className="relative aspect-[4/3] w-full">
                          <Blob align={imageLeft ? "left" : "right"} />
                          <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-2xl">
                            <Image
                              src={product.imageName}
                              alt={`${product.name.join(" ")} illustration`}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "md:col-span-6",
                        imageLeft ? "order-2" : "order-1"
                      )}
                    >
                      <div className="sticky top-20">
                        <SectionHeading
                          blackText={product.name[0]}
                          primaryText={product.name[1]}
                          className="justify-start"
                        />

                        <Paragraph className="mt-1 text-primary font-medium">
                          {product.subtitle}
                        </Paragraph>

                        <Paragraph>
                          {highlightText(product.description, product.highlights)}
                        </Paragraph>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <ButtonLink
                            href={`/contact-us?p=book-a-demo-${product.slug}`}
                            className="group relative overflow-hidden"
                          >
                            Book a demo
                          </ButtonLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </Section>

      {/* ===== CTA ===== */}
      <EngagementSection
        title="Ready to transform your business?"
        description="Not sure which product fits best? We’ll help you evaluate options and design a rollout plan that sticks."
        button1Url="/contact-us"
        button1Text="Contact us"
      />

      {/* ===== JSON-LD (SEO) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </div>
  );
}
