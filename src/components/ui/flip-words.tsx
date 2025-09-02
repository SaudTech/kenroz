"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type FlipItem =
  | string
  | { title: string; subtitle?: string; titleClassName?: string; subtitleClassName?: string };

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  baseTitleClassName = "block text-white font-bold text-xl md:text-2xl",
  baseSubtitleClassName = "block text-sm md:text-base text-[#fffde7]/80",
}: {
  words: FlipItem[];
  duration?: number;
  className?: string;
  baseTitleClassName?: string;
  baseSubtitleClassName?: string;
}) => {
  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(false);
  const current = words[idx];

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % words.length);
    setAnim(true);
  }, [words.length]);

  useEffect(() => {
    if (!anim) {
      const t = setTimeout(next, duration);
      return () => clearTimeout(t);
    }
  }, [anim, duration, next]);

  const spec = useMemo(() => {
    if (typeof current === "string") {
      return {
        title: current,
        subtitle: undefined as string | undefined,
        titleClassName: "text-4xl md:text-5xl text-white",
        subtitleClassName: "",
      };
    }
    return {
        title: current.title,
        subtitle: current.subtitle,
        titleClassName: cn(baseTitleClassName, current.titleClassName),
        subtitleClassName: cn(baseSubtitleClassName, current.subtitleClassName),
    };
  }, [current, baseTitleClassName, baseSubtitleClassName]);

  return (
    <AnimatePresence onExitComplete={() => setAnim(false)} mode="popLayout">
      <motion.div
        key={`${idx}-${typeof current === "string" ? current : current.title}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: -20,
          x: 20,
          filter: "blur(4px)",
          position: "absolute",
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        className={cn("z-10 inline-block relative text-left px-2", className)}
      >
        <LineSplit text={spec.title} wordDelay={0.25} letterDelay={0.045} className={spec.titleClassName} />
        {spec.subtitle ? (
          <LineSplit text={spec.subtitle} wordDelay={0.12} letterDelay={0.03} className={cn("mt-1", spec.subtitleClassName)} />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
};

const LineSplit = ({
  text,
  wordDelay = 0.3,
  letterDelay = 0.05,
  className,
}: {
  text: string;
  wordDelay?: number;
  letterDelay?: number;
  className?: string;
}) => {
  const words = useMemo(() => text.split(" "), [text]);
  return (
    <div className={cn("whitespace-nowrap", className)}>
      {words.map((w, wi) => (
        <motion.span
          key={`${w}-${wi}`}
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: wi * wordDelay, duration: 0.3 }}
          className="inline-block"
        >
          {w.split("").map((ch, ci) => (
            <motion.span
              key={`${w}-${ci}`}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: wi * wordDelay + ci * letterDelay, duration: 0.2 }}
              className="inline-block align-baseline"
            >
              {ch}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </div>
  );
};
