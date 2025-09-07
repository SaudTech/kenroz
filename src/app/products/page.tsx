"use client";

import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "@/app/page"; // keeping your Section wrapper
import { ButtonLink } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import EngagementSection from "@/components/EngagementSection";

import SectionHeading from "@/components/typography/SectionHeading";
import ProductCarousel from "./ProductCarousel";

// ---------- Data ----------
type Product = {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  imageName: string | string[];
};

const products: Product[] = [
  {
    name: "PeopleSphere",
    slug: "people-sphere",
    subtitle: "All-in-one HR suite",
    description:
      "Streamline the entire employee journey with an all-in-one HR platform   from hiring to offboarding, with analytics and self-service built in. Manage recruitment, onboarding, performance reviews, and employee data in one unified system. Reduce administrative overhead while improving employee satisfaction with self-service portals and automated workflows.",
    imageName: "/HCM.png",
  },
  {
    name: "PayStream",
    slug: "pay-stream",
    subtitle: "Seamless payroll automation",
    description:
      "Automate payroll, tax, and compliance with seamless calculations, bank integration, and transparent employee access. Handle complex salary structures, overtime calculations, and multi-country payroll requirements effortlessly. Ensure accuracy with real-time tax updates and automated compliance reporting for peace of mind.",
    imageName: "/Payroll.png",
  },
  {
    name: "TaxNova",
    slug: "tax-nova",
    subtitle: "E-invoicing made effortless",
    description:
      "Stay ZATCA-compliant with automated e-invoicing, QR codes, digital signatures, and real-time VAT submissions. Generate compliant invoices instantly with built-in validation and automatic tax calculations. Streamline your billing process while maintaining full regulatory compliance across different jurisdictions and tax requirements.",
    imageName: "/Invoice.png",
  },
  {
    name: "InsuraCore",
    slug: "insura-core",
    subtitle: "Smarter insurance operations",
    description:
      "Simplify policy management, underwriting, claims, and customer service with a flexible, insurer-focused platform. Accelerate policy processing with intelligent automation and risk assessment tools. Enhance customer experience through streamlined claims handling and comprehensive policy management capabilities.",
    imageName: "/Insurance.png",
  },
  {
    name: "Learnify",
    slug: "learnify",
    subtitle: "Empowering digital learning",
    description:
      "Deliver and track engaging learning experiences with interactive courses, certifications, and mobile-first access. Create personalized learning paths with adaptive content and real-time progress tracking. Boost employee development with comprehensive analytics, gamification features, and seamless integration with existing HR systems.",
    imageName: "/LMS.png",
  },
];

export default function ProductsPage() {
  // Handle hash scrolling on page load
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }, 100);
        }
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes (in case user navigates with hash)
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
      name: p.name,
      image: `${baseUrl}${p.imageName}`,
      description: p.description,
      brand: { "@type": "Brand", name: "Kenroz" },
      url: `${baseUrl}/products#${p.slug}`,
    }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ===== HERO (full-bleed, no outside space) ===== */}
      <section className="relative w-full">
        {/* Full-bleed media */}
        <div className="relative h-[52vh] md:h-[64vh] w-full overflow-hidden">
          <Image
            src="/product-hero-image.avif"
            alt="Kenroz Products"
            fill
            priority
            className="absolute inset-0 object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />
          {/* Animated gradient wash */}
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
          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-5xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
                  Products built for modern business
                </h1>
                <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed">
                  Powerful, flexible, and secure software that streamlines
                  operations, enhances employee experiences, and keeps you
                  compliant at scale.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                  <ButtonLink
                    href="#catalog"
                    className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Explore products
                  </ButtonLink>
                  <ButtonLink
                    href="/contact-us"
                    variant="outline"
                    className="text-white group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Talk to an expert
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <Section is="odd" id="catalog" className="py-14 md:py-20">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading blackText="Our product" primaryText="catalog" />

          <div>
            {products.map((product, idx) => {
              const imageLeft = idx % 2 === 0; // even index = left, odd index = right
              return (
                <div
                  key={product.slug}
                  id={product.slug}
                  className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    {/* Image Column - Positioned based on index */}
                    <div
                      className={cn(
                        "md:col-span-6",
                        imageLeft ? "order-1" : "order-2"
                      )}
                    >
                      <div
                        className={cn(
                          "md:col-span-6",
                          imageLeft ? "order-1" : "order-2"
                        )}
                      >
                        {Array.isArray(product.imageName) ? (
                          <ProductCarousel
                            images={product.imageName}
                            alt={product.name}
                          />
                        ) : (
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-2xl">
                            <Image
                              src={product.imageName}
                              alt={`${product.name} illustration`}
                              fill
                              className="object-cover transition-transform duration-700 hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={cn(
                        "md:col-span-6",
                        imageLeft ? "order-2" : "order-1"
                      )}
                    >
                      <div className="sticky top-20">
                        <div>
                          <SectionHeader
                            title={product.name}
                            description={product.description}
                            titleClassName="text-2xl md:text-4xl lg:text-5xl"
                            descriptionClassName="text-sm leading-relaxed"
                          />
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <ButtonLink
                            href={`/contact-us?p=inquire-${product.slug}`}
                            className="group relative overflow-hidden"
                          >
                            Inquire about this product
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

      {/* ===== CTA (tight bottom spacing) ===== */}
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
