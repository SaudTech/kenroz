"use client";

import Image from "next/image";
import { Instagram, Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { useCallback } from "react";

import logo from "@/../public/logo.png";

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);



  const services = [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    {
      label: "Website Development",
      href: "/services/web-application-development",
    },
    {
      label: "Mobile Development",
      href: "/services/mobile-application-development",
    },
    { label: "Microsoft Dynamic 365", href: "/services/microsoft-dynamic-365" },
    { label: "Outsourcing", href: "/services/outsourcing" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  ];
  const products = [
    { label: "HRMS Solutions", href: "/products#hrms-solutions" },
    { label: "Payroll Management", href: "/products#payroll-management" },
    { label: "ZATCA Taxation", href: "/products#zatca-taxation" },
    { label: "Insurance Systems", href: "/products#insurance-systems" },
    { label: "Learning Management", href: "/products#learning-management" },
  ];
  
  const resources = [
    { label: "Our Story", href: "/#our-story" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Strategic Partner", href: "/#strategic-partner" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Career", href: "/careers" },
  ];
  
  const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    // { label: "Cookie Policy", href: "/legal/cookie-policy" },
    {
      label: "Refund & Cancellation Policy",
      href: "/legal/refund-cancellation-policy",
    },
    // { label: "Acceptable Use Policy", href: "/legal/acceptable-use-policy" },
  ];
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/kenroz",
      label: "LinkedIn",
    },
  ];
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Career", href: "/careers" },
  ];

  return (
    <footer
      className="h-full text-white bg-black border-t border-white/10 z-[90] relative"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-5">
          {/* Col 1 */}
          <div className="col-span-1">
            <Image
              src={logo}
              alt="Kenroz Logo"
              width={200}
              height={200}
              className="mb-6 h-auto w-auto"
            />

            {/* Socials */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-lg p-3">
              <Image
                src={"/certification.png"}
                alt="certification Logo"
                width={140}
                height={10}
                className="h-36 w-36"
              />
              <p className="text-lg text-white/80 leading-snug">
                Grow your business by <br /> Leveraging Technology.
              </p>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 className="mb-4 text-3xl font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-xl">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="inline-block text-white/70 hover:text-primary transition"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Products */}
          <div>
            <h4 className="mb-4 text-3xl font-semibold">
              Products
            </h4>
            <ul className="space-y-2 text-xl">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <li key={product.label}>
                    <a
                      href={product.href}
                      className="inline-block text-white/70 hover:text-primary transition"
                    >
                      {product.label}
                    </a>
                  </li>
                ))
              ) : (
                <li>No products available</li>
              )}
            </ul>
          </div>

          {/* Col 4 - Resources */}
          <div>
            <h4 className="mb-4 text-3xl font-semibold">
              Resources
            </h4>
            <ul className="space-y-2 text-xl">
              {resources && resources.length > 0 ? (
                resources.map((r) => (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      className="inline-block text-white/70 hover:text-primary transition"
                    >
                      {r.label}
                    </a>
                  </li>
                ))
              ) : (
                <li>No resources available</li>
              )}
            </ul>
          </div>

          {/* Col 5 - Legal Center */}
          <div>
            <h4 className="mb-4 text-3xl font-semibold">
              Legal Center
            </h4>
            <ul className="space-y-2 text-xl">
              {legalLinks.map((legal) => (
                <li key={legal.label}>
                  <a
                    href={legal.href}
                    className="inline-block text-white/70 hover:text-primary transition"
                  >
                    {legal.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          {/* Quick Links */}
          <div className="mb-6">
            <h4 className="mb-3 text-3xl font-semibold">
              Quick Links
            </h4>
            <ul className="flex flex-wrap gap-4 text-xl">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-xs sm:text-sm text-white/60 flex flex-col sm:flex-row justify-center items-center">
        <p>
          © {new Date().getFullYear()} Kenroz Private Limited. All rights
          reserved.
        </p>
      </div>
      {/* Scroll-to-top */}
      <button
        onClick={scrollToTop}
        className="group absolute bottom-6 right-6 rounded-full border border-white/15 bg-white/10 p-3 text-white shadow-lg backdrop-blur transition-all hover:bg-primary hover:border-primary hover:shadow-xl"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="h-5 w-5 transition group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}
