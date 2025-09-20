"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { ButtonLink } from "@/components/Navbar";
import type { Job } from "@/lib/jobs";
import Paragraph from "../typography/Paragraph";

const headlineWords = [
  { text: "Build", className: "text-white" },
  { text: "the", className: "text-white" },
  { text: "future", className: "text-white" },
  { text: "with", className: "text-white" },
  { text: "Kenroz", className: "text-white" },
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

interface CareersHeroProps {
  jobs: Job[];
}

export default function CareersHero({ jobs }: CareersHeroProps) {
  const roleWords = useMemo(() => {
    if (!jobs.length) {
      return [
        {
          title: "Skilled Professionals",
          subtitle: "We’re always looking for talented people.",
        },
      ];
    }

    return jobs.map((job) => ({
      title: job.title,
      subtitle: job.location ? `Based in ${job.location}` : "Join our global team",
    }));
  }, [jobs]);

  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <Image
        src="/team.jpg"
        alt="Kenroz team at work"
        fill
        priority
        className="absolute inset-0 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/45 backdrop-blur-[1px]" />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        {Array.from({ length: 40 }).map((_, idx) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <motion.div
              key={`career-particle-${idx}`}
              className="absolute w-1 h-1 bg-white/70 rounded-full"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{
                y: [-10, 12, -10],
                x: [-6, 4, -6],
                opacity: [0.25, 0.65, 0.25],
              }}
              transition={{
                duration: 3.5 + Math.random() * 2.5,
                repeat: Infinity,
                ease: easeInOut,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-28 md:py-36 text-white">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <TypewriterEffect words={headlineWords} className="text-white" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90"
          >
            <Paragraph className="md:text-xl">
              Join a team that ships meaningful products, learns fast, and cares
              deeply about craft.
            </Paragraph>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <Paragraph className="text-lg uppercase tracking-[0.3em] text-white/70">
              We&apos;re hiring for
            </Paragraph>
            <FlipWords
              words={roleWords}
              duration={3200}
              className="text-center"
              baseTitleClassName="block text-2xl md:text-4xl font-semibold text-white"
              baseSubtitleClassName="block text-sm md:text-base text-white/75"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <ButtonLink href="#open-roles">View open roles</ButtonLink>
            <ButtonLink href="/apply-for-job" variant="outline" className="text-white border-white/60 hover:border-white">
              Apply now
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
