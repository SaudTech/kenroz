"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  ShieldCheck,
  Award,
  Clock,
  Globe,
} from "lucide-react";
import { useCallback } from "react";
import logo from "@/../public/logo.png";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const quickLinks = ["About Us", "Services", "Portfolio", "Contact", "Blog"];
  const services = [
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "AI Integration",
    "Consulting",
  ];
  const resources = ["Case Studies", "Pricing", "Careers", "FAQ", "Status"];
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="
        relative text-white
        bg-gradient-to-br from-[#0a0a0a] via-[#0e0b0b] to-[#141013]
        border-t border-white/10
      "
      style={{ height: "calc(100vh - 65px)" }}
      aria-label="Site footer"
    >
      {/* Full-height container */}
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        {/* Grid that fills height: header/links grow, bottom bar sticks */}
        <div className="grid h-full grid-rows-[auto,1fr,auto] gap-8 py-10">
          {/* Top: Brand + Pitch + Contact + Socials */}
          <section className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
            {/* Brand & pitch */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src={logo}
                  alt="Kenroz Logo"
                  width={180}
                  height={40}
                  priority
                  className="h-auto w-auto"
                />
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10">
                  <ShieldCheck className="mr-1 h-3.5 w-3.5" aria-hidden />
                  Enterprise-grade Delivery
                </span>
              </div>

              <p className="text-white/80 leading-relaxed max-w-2xl text-sm sm:text-base">
                Transforming businesses through secure, scalable software and
                cloud solutions. We build experiences that measurably improve
                performance, compliance, and growth.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-1" />
                  <div className="text-sm text-white/85">
                    <p className="font-medium">+91 (810) 624-9040</p>
                    <p className="text-white/60">Mon–Fri, 10:00–19:00 IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-1" />
                  <div className="text-sm text-white/85">
                    <p className="font-medium">contact@kenroz.com</p>
                    <p className="text-white/60">Replies within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <div className="text-sm text-white/85">
                    <p className="font-medium">Hyderabad, India</p>
                    <p className="text-white/60">Global delivery model</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => e.preventDefault()}
                    aria-label={label}
                    className="
                      group inline-flex items-center justify-center rounded-lg
                      bg-white/5 px-3 py-2 text-white/80 ring-1 ring-white/10
                      transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white
                    "
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle: Link groups */}
            <nav className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
              {/* Quick Links */}
              <div>
                <h4 className="mb-3 font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {quickLinks.map((link) => {
                    const id = link.toLowerCase().replace(/\s+/g, "");
                    return (
                      <li key={link}>
                        <a
                          href={`#${id}`}
                          onClick={(e) => handleAnchor(e, id)}
                          className="inline-block text-white/70 transition hover:text-white hover:translate-x-0.5"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-3 font-semibold">Services</h4>
                <ul className="space-y-2 text-sm">
                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        onClick={(e) => handleAnchor(e, "services")}
                        className="inline-block text-white/70 transition hover:text-white hover:translate-x-0.5"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="mb-3 font-semibold">Resources</h4>
                <ul className="space-y-2 text-sm">
                  {resources.map((r) => (
                    <li key={r}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-block text-white/70 transition hover:text-white hover:translate-x-0.5"
                      >
                        {r}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="lg:block">
                <h4 className="mb-3 font-semibold">Legal</h4>
                <ul className="space-y-2 text-sm">
                  {legalLinks.map((legal) => (
                    <li key={legal}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-block text-white/70 transition hover:text-white hover:translate-x-0.5"
                      >
                        {legal}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </section>
          {/* Newsletter / Trust / Hours card */}
          <div
            className="
              rounded-2xl bg-white/5 p-6 ring-1 ring-white/10
              backdrop-blur supports-[backdrop-filter]:bg-white/10
            "
          >
            <h3 className="text-lg font-semibold">Stay in the loop</h3>
            <p className="mt-1 text-sm text-white/70">
              Monthly insights on shipping faster, cutting cloud costs, and
              improving security.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll keep you updated.");
              }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="
                    w-full rounded-lg bg-black/40 px-3 py-2 text-sm text-white
                    placeholder:text-white/50 ring-1 ring-white/15
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                aria-label="Email address"
              />
              <Button className="bg-primary hover:bg-[#c62930]">
                Subscribe
              </Button>
            </form>


            <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
              <Globe className="h-3.5 w-3.5" />
              <span>
                Serving clients across India, Middle East, North Africa, EU & North America
              </span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs sm:text-sm text-white/60">
              © {new Date().getFullYear()} Kenroz. All rights reserved. Built
              with care in Hyderabad.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                Systems Operational
              </span>
              <span aria-hidden>·</span>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition"
              >
                Status
              </Link>
              <span aria-hidden>·</span>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-top */}
      <button
        onClick={scrollToTop}
        className="
          group absolute bottom-6 right-6 rounded-full border border-white/15
          bg-white/10 p-3 text-white shadow-lg backdrop-blur
          transition-all hover:bg-primary hover:border-primary hover:shadow-xl
        "
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="h-5 w-5 transition group-hover:translate-y-[-2px]" />
      </button>

      {/* Soft vignette accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(600px 240px at 90% -10%, rgba(223,42,51,0.25), transparent), radial-gradient(500px 220px at 0% 110%, rgba(155,39,48,0.18), transparent)",
        }}
      />
    </footer>
  );
}
