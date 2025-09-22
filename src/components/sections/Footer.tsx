"use client";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, MapPin, Phone, ExternalLink, X } from "lucide-react";
import { createElement, useCallback } from "react";
import Link from "next/link";
import { useThemeLogo } from "@/hooks/useThemeLogo";

// Location Cards Component
const locations = [
  {
    city: "Hyderabad",
    flag: "/flags/ind.png",
    location: `Western Aqua, Hitech City, Hyderabad, Telangana`,
    phone: "+91-970-473-0500",
  },
];

const countryByCity: Record<string, string> = {
  Hyderabad: "India",
};

function mapHref(addr: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
}

function LocationCard({ city, flag, location, phone }: (typeof locations)[number]) {
  const country = countryByCity[city] ?? "Location";
  const tel = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="group relative bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_10px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]">
      {/* Header with flag and city */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="relative h-5 w-8 overflow-hidden rounded border border-white/20">
            <Image
              src={flag}
              alt={`${country} flag`}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <h5 className="text-sm font-medium text-white">{city}, {country}</h5>
        </div>
      </div>

      {/* Address */}
      <div className="mb-3">
        <a
          href={mapHref(location)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 text-sm text-white/70 hover:text-primary transition-colors group/link"
          aria-label={`Open ${city} location in Maps`}
        >
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50 group-hover/link:text-white/80" />
          <span className="leading-relaxed">{location}</span>
          <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 text-white/40 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Phone */}
      <a
        href={tel}
        className="flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors group/phone"
        aria-label={`Call ${phone}`}
      >
        <Phone className="h-4 w-4 text-white/50 group-hover/phone:text-white/80" />
        <span>{phone}</span>
      </a>
    </div>
  );
}

function LocationCards() {
  return (
    <div className="grid gap-3 mt-4">
      {locations.map((loc) => (
        <LocationCard key={loc.city} {...loc} />
      ))}
    </div>
  );
}

// Main Footer Component
export default function Footer() {
  const logo = useThemeLogo();
  const handleLinkClick = useCallback((href: string) => {
    if (!href.includes("#")) return;
    const [path, hash] = href.split("#");
    const urlPath = path === "" ? window.location.pathname : path;
    if (urlPath !== window.location.pathname) {
      window.location.href = href;
      return;
    }
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.history.pushState(null, "", `${urlPath}#${hash}`);
  }, []);

  const services = [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Website Development", href: "/services/web-application-development" },
    { label: "Mobile Development", href: "/services/mobile-application-development" },
    { label: "Microsoft Dynamic 365", href: "/services/microsoft-dynamic-365" },
    { label: "Outsourcing", href: "/services/outsourcing" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
  ];

  const products = [
    { label: "PeopleSphere", href: "/products#people-sphere" },
    { label: "PayStream", href: "/products#pay-stream" },
    { label: "TaxNova", href: "/products#tax-nova" },
    { label: "InsuraCore", href: "/products#insura-core" },
    { label: "Learnify", href: "/products#learnify" },
  ];

  const resources = [
    { label: "About Us", href: "/#about-us" },
    { label: "Why Choose Us", href: "/#about-us" },
    { label: "Strategic Partner", href: "/#strategic-partners" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Career", href: "/careers" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
    { label: "Cancellation Policy", href: "/legal/refund-cancellation-policy" },
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: X, href: "#", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/kenroz", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-card to-black text-white border-t border-white/10 relative z-[90]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="pt-12 lg:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Company Info - Spans 4 columns on large screens */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Image
                  src={logo}
                  alt="Kenroz Logo"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <p className="text-white/70 text-base leading-relaxed mb-6 max-w-sm">
                Empowering businesses with innovative technology solutions. 
                From digital transformation to cloud services, we deliver excellence.
              </p>
              <LocationCards />
            </div>

            {/* Services - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      onClick={(e) => {
                        if (service.href.includes("#")) {
                          e.preventDefault();
                          handleLinkClick(service.href);
                        }
                      }}
                      className="text-white/70 hover:text-primary text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Products
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.label}>
                    <Link
                      href={product.href}
                      onClick={(e) => {
                        if (product.href.includes("#")) {
                          e.preventDefault();
                          handleLinkClick(product.href);
                        }
                      }}
                      className="text-white/70 hover:text-primary text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {product.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <Link
                      href={resource.href}
                      onClick={(e) => {
                        if (resource.href.includes("#")) {
                          e.preventDefault();
                          handleLinkClick(resource.href);
                        }
                      }}
                      className="text-white/70 hover:text-primary text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Connect
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <div className="space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-primary text-sm transition-all duration-200 hover:translate-x-1 group"
                  >
                    {createElement(social.icon, { 
                      className: "h-5 w-5 group-hover:scale-110 transition-transform" 
                    })}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 pb-6">
          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
            {legalLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.includes("#")) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className="text-white/60 hover:text-primary/90 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <div className="hidden sm:block w-px h-4 bg-white/20 ml-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Kenroz Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
