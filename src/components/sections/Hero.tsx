"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import HeroBackground from "./HeroBackground";
import { ArrowRight, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Hero() {
  const valueProps = ["Future-ready solutions", "Expert team support", "Scalable & secure"];

  // ---- form state ----
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const easeOut = [0.16, 1, 0.3, 1] as const;
  const easeInOut = [0.42, 0, 0.58, 1] as const;

  const onChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [field]: e.target.value }));
      // clear field error on change
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (d: FormData): FormErrors => {
    const e: FormErrors = {};
    if (!d.name.trim() || d.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email address.";
    if (d.phone && !/^[\d+\-\s()]{7,20}$/.test(d.phone)) e.phone = "Phone can contain digits, +, -, spaces.";
    if (!d.message.trim() || d.message.trim().length < 10)
      e.message = "Tell us a bit more (min 10 characters).";
    return e;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setIsSubmitting(true);
    try {
      // simulate API
      await new Promise((r) => setTimeout(r, 1200));
      setSuccess(true);
      setData({ name: "", email: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-[#e31b25] via-[#7e141c] to-black text-center lg:text-left relative overflow-hidden py-12 px-4 w-full min-h-[700px] lg:h-[850px] md:px-8">
      <HeroBackground />

      {/* Left Side - Content */}
      <motion.div
        className="relative z-10 flex-1 space-y-8 mb-8 lg:mb-0 lg:pr-8 max-w-[70%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <motion.h1
          className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOut }}
        >
          <motion.span
            className="block mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empowering Businesses to
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-[#fffde7] via-white to-[#fffde7] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Lead, Transform & Excel
          </motion.span>
        </motion.h1>

        <motion.div
          className="text-[#fffde7] text-lg lg:text-xl font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="mb-4">Your trusted technology partner for innovative IT solutions:</p>
          <FlipWords
            words={[
              "Microsoft Dynamics 365",
              "Cloud Solutions",
              "Web Development",
              "Mobile Development",
              "Digital Marketing",
              "Outsourcing",
            ]}
            className="text-white font-bold"
          />
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#fffde7] text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            >
              <CheckCircle className="w-4 h-4 text-[#fffde7]" />
              {prop}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-[#fffde7] text-[#e31b25] hover:bg-white px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        className="relative z-10 flex-1 w-full max-w-md flex justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
      >
        <Card className="bg-white/10 backdrop-blur-md border-red-400/20 shadow-2xl w-full">
          <CardHeader>
            <CardTitle className="text-white text-xl font-semibold text-center">
              Talk to our Growth Consultant Expert
            </CardTitle>

            {/* success banner */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-3 rounded-md bg-emerald-500/15 border border-emerald-400/40 px-3 py-2 text-sm text-emerald-100"
                >
                  Thanks! Your message was sent. We’ll reach out shortly.
                </motion.div>
              )}
            </AnimatePresence>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={onSubmit} noValidate>
              {/* Name */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Input
                  placeholder="Your Name"
                  value={data.name}
                  onChange={onChange("name")}
                  className={`bg-white/20 border-red-400/30 text-white placeholder:text-gray-300 focus:border-red-400 ${
                    errors.name ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-200">{errors.name}</p>}
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={data.email}
                  onChange={onChange("email")}
                  className={`bg-white/20 border-red-400/30 text-white placeholder:text-gray-300 focus:border-red-400 ${
                    errors.email ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-200">{errors.email}</p>}
              </motion.div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <Input
                  placeholder="Phone Number (optional)"
                  value={data.phone}
                  onChange={onChange("phone")}
                  className={`bg-white/20 border-red-400/30 text-white placeholder:text-gray-300 focus:border-red-400 ${
                    errors.phone ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-200">{errors.phone}</p>}
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Textarea
                  placeholder="Tell us a bit about your project..."
                  rows={10}
                  value={data.message}
                  onChange={onChange("message")}
                  className={`bg-white/20 border-red-400/30 text-white min-h-[150px] placeholder:text-gray-300 focus:border-red-400 ${
                    errors.message ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-200">{errors.message}</p>}
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-0">
  {[...Array(50)].map((_, i) => {
    const left = Math.random() * 100; // random between 0–100%
    const top = Math.random() * 100;  // random between 0–100%
    return (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-1 h-1 bg-red-400 rounded-full opacity-40"
        style={{
          left: `${left}%`,
          top: `${top}%`,
        }}
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3 + Math.random() * 2, // random duration
          repeat: Infinity,
          ease: easeInOut,
          delay: Math.random() * 2, // random delay
        }}
      />
    );
  })}
</div>

    </section>
  );
}
