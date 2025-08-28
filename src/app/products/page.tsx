"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Section } from "@/app/page"; // keeping your Section wrapper
import { ButtonLink } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import EngagementSection from "@/components/EngagementSection";

// ---------- Data ----------
type Product = {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  imageName: string;
  footerText: string;
};

const products: Product[] = [
  {
    name: "HRMS Solution Systems",
    slug: "hrms-solution-systems",
    subtitle: "All-in-one HR suite",
    description:
      "Streamline the entire employee journey with an all-in-one HR platform — from hiring to offboarding, with analytics and self-service built in.",
    imageName: "/HCM.png",
    footerText: "Compliant • Secure • Scalable",
  },
  {
    name: "Payroll Management Systems",
    slug: "payroll-management-systems",
    subtitle: "Seamless payroll automation",
    description:
      "Automate payroll, tax, and compliance with seamless calculations, bank integration, and transparent employee access.",
    imageName: "/Payroll.png",
    footerText: "Accurate • Compliant • Reliable",
  },
  {
    name: "ZATCA Taxation Solutions",
    slug: "zatca-taxation-solutions",
    subtitle: "E-invoicing made effortless",
    description:
      "Stay ZATCA-compliant with automated e-invoicing, QR codes, digital signatures, and real-time VAT submissions.",
    imageName: "/Invoice.png",
    footerText: "Regulation-ready • Trusted • Future-proof",
  },
  {
    name: "Insurance Product Systems",
    slug: "insurance-product-systems",
    subtitle: "Smarter insurance operations",
    description:
      "Simplify policy management, underwriting, claims, and customer service with a flexible, insurer-focused platform.",
    imageName: "/Insurance.png",
    footerText: "Efficient • Integrated • Customer-centric",
  },
  {
    name: "Learning Management Systems (LMS)",
    slug: "learning-management-systems",
    subtitle: "Empowering digital learning",
    description:
      "Deliver and track engaging learning experiences with interactive courses, certifications, and mobile-first access.",
    imageName: "/LMS.png",
    footerText: "Engaging • Flexible • Insight-driven",
  },
];

// ---------- Animations ----------
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function ProductsPage() {
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={stagger}
                className="mx-auto max-w-5xl text-center"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl"
                >
                  Products built for modern business
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="mx-auto mt-4 md:mt-6 max-w-3xl text-base md:text-lg text-white/90 leading-relaxed"
                >
                  Powerful, flexible, and secure software that streamlines
                  operations, enhances employee experiences, and keeps you
                  compliant — at scale.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
                >
                  <ButtonLink
                    href="#catalog"
                    className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="relative z-10">Explore products</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </ButtonLink>
                  <ButtonLink
                    href="/contact-us"
                    variant="outline"
                    className="text-white group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="relative z-10">Talk to an expert</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <Section is="odd" id="catalog" className="py-14 md:py-20">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 md:mb-14 max-w-3xl text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              Our product catalog
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeInUp}
              className="mt-3 text-slate-600"
            >
              Select a solution to learn how it fits your organization’s
              workflows and goals.
            </motion.p>
          </div>

          {/* <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              <div className="md:col-span-7">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={imageLeft ? fromLeft : fromRight}
                  className={cn(imageLeft ? "order-1" : "order-2", "w-full")}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/5">
                    <Image
                      src={product.imageName}
                      alt={`${product.name} illustration`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="md:col-span-5">
                <div className="sticky top-20">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SectionHeader
                      subtitle="Trusted by leading companies"
                      title="Our Clients"
                      description="Teams across construction, manufacturing, trading, and services rely on Kenroz to streamline operations and accelerate growth."
                    />
                  </motion.div>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Robust, secure implementations with enterprise-grade standards",
                      "Faster time-to-value with clean, scalable architecture",
                      "Hands-on support from discovery to deployment—and beyond",
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                      >
                        <span className="mt-1 rounded-full border p-1">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                        <span className="text-sm md:text-base text-muted-foreground">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="mt-8 flex flex-wrap items-center gap-3"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ButtonLink href="/contact-us">Get on this list</ButtonLink>
                  </motion.div>

                  <motion.p
                    className="mt-4 text-xs text-muted-foreground"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Privacy-first by design • Secure SDLC • Regular updates
                  </motion.p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="space-y-12 md:space-y-16">
            {products.map((product, idx) => {
              const imageLeft = idx % 2 === 0; // even index = left, odd index = right
              return (
                <motion.div
                  key={product.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stagger}
                  className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    {/* Image Column - Positioned based on index */}
                    <motion.div
                      className={cn(
                        "md:col-span-6",
                        imageLeft ? "order-1" : "order-2"
                      )}
                      variants={imageLeft ? fromLeft : fromRight}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-2xl">
                        <Image
                          src={product.imageName}
                          alt={`${product.name} illustration`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                      className={cn(
                        "md:col-span-6",
                        imageLeft ? "order-2" : "order-1"
                      )}
                      variants={fadeInUp}
                    >
                      <div className="sticky top-20">
                        <motion.div variants={fadeInUp}>
                          <SectionHeader
                            subtitle={product.subtitle}
                            title={product.name}
                            description={product.description}
                            titleClassName="text-2xl md:text-4xl lg:text-5xl"
                            descriptionClassName="text-sm leading-relaxed"
                          />
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                          className="mt-8 flex flex-wrap items-center gap-3"
                          variants={fadeInUp}
                        >
                          <ButtonLink
                            href={`/contact-us?p=inquire-${product.slug}`}
                            className="group relative overflow-hidden"
                          >
                            <span className="relative z-10">
                              Inquire about this product
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                          </ButtonLink>
                        </motion.div>

                        {/* Subtle compliance / assurance line */}
                        <motion.p
                          className="mt-4 text-xs text-muted-foreground/70"
                          variants={fadeInUp}
                        >
                          {product.footerText}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
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
