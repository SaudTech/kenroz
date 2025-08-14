"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
} from "lucide-react";

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Partner Spotlight — <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Emvive
            </span>
          </h2>
        </div>

        {/* Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col max-w-7xl mx-auto sm:flex-row gap-5 rounded-2xl bg-black p-6 shadow-xl border border-white/10"
        >
          {/* Logo */}
          <div className="flex items-center justify-center sm:w-[220px] bg-white/80 rounded-xl backdrop-blur-sm p-4">
            <Image
              src="/Emvive.png"
              alt="Emvive logo"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center text-white flex-1">
            <h3 className="text-2xl sm:text-3xl font-semibold">Emvive</h3>

            {/* Location */}
            <div className="mt-2 flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="h-4 w-4" aria-hidden />
              <span>Khobar, Saudi Arabia</span>
            </div>

            {/* Description */}
            <p className="mt-3 text-white/90 text-sm sm:text-base leading-relaxed">
              We are Emvive&apos;s core development partner, enabling rapid
              delivery of secure, scalable applications — from initial
              architecture to production deployment.
            </p>

            {/* CTA */}
            <div className="mt-5">
              <a
                href="https://emvive.com"
                target="_blank"
                className="inline-flex items-center rounded-lg bg-white text-secondary px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
              >
                Visit Emvive
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
