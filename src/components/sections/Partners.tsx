"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  ShieldCheck,
  Server,
} from "lucide-react";

export default function Partners() {
  return (
    <section id="partners" className="py-10 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Strategic{" "}
            <span className="text-white">
              Partner
            </span>
          </h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            Deep engineering collaboration with our long-term partner.
          </p>
        </div>

        {/* Emvive highlight card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-gray-100 "
        >
          {/* subtle background accent */}
          <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-white via-white to-gray-50" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#df2a33]/10 to-[#9B2730]/10 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 p-8 sm:p-10 lg:p-14">
            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#9B2730]">
                <Sparkles className="h-4 w-4" aria-hidden />
                Preferred Engineering Partner
              </div>

              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900">
                Emvive
              </h3>

              <div className="mt-2 flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>Khobar, Saudi Arabia</span>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
                We are Emvive&apos;s core development partner, enabling rapid
                delivery of secure, scalable applications. Together we run
                disciplined SDLCs, ship production-ready code, and integrate
                cloud-first architectures tailored to regulated industries like
                banking and insurance.
              </p>

              {/* Capabilities */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Full-stack product engineering",
                  "Cloud Hosting",
                  "Data & integrations",
                  "UI/UX delivery",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Trust highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-100 bg-white p-4">
                  <ShieldCheck className="h-5 w-5 text-[#9B2730]" aria-hidden />
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    Compliant delivery
                  </p>
                  <p className="text-xs text-gray-600">
                    Zatca-compliance-aware SDLC
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4">
                  <Server className="h-5 w-5 text-[#9B2730]" aria-hidden />
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    Scalable infra
                  </p>
                  <p className="text-xs text-gray-600">
                    Cloud-native architectures
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4">
                  <ArrowRight className="h-5 w-5 text-[#9B2730]" aria-hidden />
                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    Faster time-to-value
                  </p>
                  <p className="text-xs text-gray-600">Delivery you can ship</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact-us">
                  <Button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#df2a33] to-[#9B2730] hover:from-[#9B2730] hover:to-[#df2a33] text-white">
                    Work with Emvive through us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: logo + framed card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <Image
                src="/Emvive.png"
                alt="Emvive logo"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
