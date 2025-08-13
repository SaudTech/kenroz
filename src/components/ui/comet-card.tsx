"use client";
import React, { useRef, createContext, useContext } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------- Context to share motion springs ---------------- */
type CometCtx = {
  mouseXSpring: MotionValue<number>;
  mouseYSpring: MotionValue<number>;
  rotateDepth: number;
  translateDepth: number;
};
const CometContext = createContext<CometCtx | null>(null);
const useComet = () => {
  const ctx = useContext(CometContext);
  if (!ctx) throw new Error("CometItem must be used inside CometCard");
  return ctx;
};

/* ------------------------------ Card ------------------------------ */
export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [`-${translateDepth}px`, `${translateDepth}px`]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-distant transform-3d", className)}>
      <CometContext.Provider value={{ mouseXSpring, mouseYSpring, rotateDepth, translateDepth }}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            translateX,
            translateY,
            // boxShadow:
            //   "rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px",
          }}
          initial={{ scale: 1, z: 0 }}
          whileHover={{ scale: 1.05, z: 50, transition: { duration: 0.2 } }}
          className="relative rounded-2xl will-change-transform shadow-2xl"
        >
          {children}

          {/* Glare overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
            style={{ background: glareBackground, opacity: 0.6 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </CometContext.Provider>
    </div>
  );
};

/* ---------------------------- Child Item ---------------------------- */
/**
 * Wrap any child you want to move with CometItem.
 * depth: how strong the parallax is (0.2 subtle … 2 strong)
 * tilt:  scale factor for the child's own micro-tilt (0 = none)
 */
export const CometItem = ({
  children,
  className,
  depth = 1,
  tilt = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  tilt?: number;
}) => {
  const { mouseXSpring, mouseYSpring, translateDepth, rotateDepth } = useComet();

  // Parallax translation for this child
  const tx = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-translateDepth * depth, translateDepth * depth]
  );
  const ty = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [translateDepth * depth, -translateDepth * depth]
  );

  // Slight local tilt for extra depth (optional)
  const rX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [-(rotateDepth * tilt) + "deg", rotateDepth * tilt + "deg"]
  );
  const rY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [rotateDepth * tilt + "deg", -(rotateDepth * tilt) + "deg"]
  );

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ translateX: tx, translateY: ty, rotateX: rX, rotateY: rY }}
    >
      {children}
    </motion.div>
  );
};