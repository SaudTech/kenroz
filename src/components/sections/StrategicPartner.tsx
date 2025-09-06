"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Partner = {
  id: string;
  name: string;
  description: string;
  website?: string;
};

const partners: Partner[] = [
  {
    id: "emvive",
    name: "Emvive",
    description:
      "E-invoicing platform for ZATCA compliance, and enterprise-grade controls. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ",
    website: "https://emvive.com",
  },
  {
    id: "arcgen",
    name: "Arcgen",
    description:
      "Automation-first tooling to orchestrate data flows and reduce operational toil.",
    website: "https://arcgen.in",
  },
  {
    id: "kenroz",
    name: "Kenroz Consulting",
    description:
      "Consulting and advisory services focused on driving digital transformation and business efficiency.",
    website: "https://kenrozconsulting.com",
  },
];

const partnerImages: Record<string, string> = {
  emvive: "/Emvive.png",
  arcgen: "/Arcgen.png",
  kenroz: "/logo_min.png",
};

export default function StrategicPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const touchYRef = useRef<number | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const rafId = useRef<number | null>(null);

  const [activeId, setActiveId] = useState<string>(partners[0].id);

  const routeDeltaToLeft = useCallback((deltaY: number) => {
    const el = leftScrollRef.current;
    if (!el) return false;

    const atTop = el.scrollTop <= 0;
    const atBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
    const goingDown = deltaY > 0;

    const canScroll = goingDown ? !atBottom : !atTop;
    if (canScroll) {
      el.scrollBy({ top: deltaY, left: 0, behavior: "auto" });
      return true;
    }
    return false;
  }, []);

  // --- Active card calculation (robust both directions) ---
  const computeActiveFromScroll = useCallback(() => {
    const scroller = leftScrollRef.current;
    if (!scroller) return;

    const scrollRect = scroller.getBoundingClientRect();
    const scrollCenterY = scrollRect.top + scrollRect.height / 2;

    let bestId = activeId;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const p of partners) {
      const node = cardRefs.current[p.id];
      if (!node) continue;
      const r = node.getBoundingClientRect();
      // Only consider cards that are at least partly visible
      const visible = r.bottom > scrollRect.top && r.top < scrollRect.bottom;
      if (!visible) continue;

      const cardCenterY = r.top + r.height / 2;
      const dist = Math.abs(cardCenterY - scrollCenterY);
      if (dist < bestDist) {
        bestDist = dist;
        bestId = p.id;
      }
    }

    if (bestId !== activeId) setActiveId(bestId);
  }, [activeId]);

  // rAF-throttled scroll handler
  const onScroll = useCallback(() => {
    if (rafId.current != null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      computeActiveFromScroll();
    });
  }, [computeActiveFromScroll]);

  // Attach scroll/resize + do initial compute
  useEffect(() => {
    const scroller = leftScrollRef.current;
    if (!scroller) return;

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial calculation after first paint
    requestAnimationFrame(() => computeActiveFromScroll());

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [onScroll, computeActiveFromScroll]);

  // Wheel / touch routing stays the same
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (section.tabIndex < 0) section.tabIndex = 0;

    const onWheel = (e: WheelEvent) => {
      const consumed = routeDeltaToLeft(e.deltaY);
      if (consumed) e.preventDefault();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchYRef.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchYRef.current == null) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchYRef.current - currentY;
      const consumed = routeDeltaToLeft(deltaY);
      if (consumed) e.preventDefault();
      touchYRef.current = currentY;
    };

    const onTouchEnd = () => {
      touchYRef.current = null;
    };

    const optsWheel = {
      passive: false,
      capture: true,
    } as AddEventListenerOptions;
    const optsMove = {
      passive: false,
      capture: true,
    } as AddEventListenerOptions;
    const optsTouch = {
      passive: true,
      capture: true,
    } as AddEventListenerOptions;

    section.addEventListener("wheel", onWheel, optsWheel);
    section.addEventListener("touchstart", onTouchStart, optsTouch);
    section.addEventListener("touchmove", onTouchMove, optsMove);
    section.addEventListener("touchend", onTouchEnd, optsTouch);

    return () => {
      section.removeEventListener("wheel", onWheel, optsWheel);
      section.removeEventListener("touchstart", onTouchStart, optsTouch);
      section.removeEventListener("touchmove", onTouchMove, optsMove);
      section.removeEventListener("touchend", onTouchEnd, optsTouch);
    };
  }, [routeDeltaToLeft]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const el = leftScrollRef.current;
    if (!el) return;
    const page = el.clientHeight * 0.9;
    const line = 40;
    let delta = 0;

    switch (e.key) {
      case "PageDown":
        delta = page;
        break;
      case "PageUp":
        delta = -page;
        break;
      case " ":
        delta = e.shiftKey ? -page : page;
        break;
      case "ArrowDown":
        delta = line;
        break;
      case "ArrowUp":
        delta = -line;
        break;
      case "Home":
        el.scrollTop = 0;
        e.preventDefault();
        return;
      case "End":
        el.scrollTop = el.scrollHeight;
        e.preventDefault();
        return;
      default:
        return;
    }

    const consumed = routeDeltaToLeft(delta);
    if (consumed) e.preventDefault();
    // ensure active recompute after keyboard scroll
    requestAnimationFrame(() => computeActiveFromScroll());
  };

  const activeImg = partnerImages[activeId];

  return (
    <section
      ref={sectionRef}
      id="strategic-partners"
      className="w-full outline-none [overscroll-behavior:contain]"
      onKeyDown={onKeyDown}
    >
      <div className="relative z-[4] bg-cyan-900 h-[644px] flex flex-col overflow-hidden [overscroll-behavior:contain]">
        <div className="px-4 md:px-6 py-6 md:py-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Strategic </span>
            <span className="text-primary">Partners</span>
          </h2>
        </div>

        <div className="flex-1 min-h-0 px-4 md:px-6 pb-6">
          <div className="h-full w-full flex gap-6 md:gap-10 overflow-hidden">
            {/* LEFT: the only scroller */}
            <div
              ref={leftScrollRef}
              className="
                w-1/2 h-full overflow-y-auto pr-2
                snap-y snap-mandatory
                [scrollbar-gutter:stable]
                [overscroll-behavior:contain]
              "
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {partners.map((p) => (
                <PartnerCard
                  key={p.id}
                  partner={p}
                  setRef={(el) => (cardRefs.current[p.id] = el)}
                />
              ))}
              <div className="h-2" />
            </div>

            {/* RIGHT: fixed visual with animated swap */}
            <div className="w-1/2 h-full flex items-center justify-center select-none">
              <div className="relative max-h-[80%] w-[360px] max-w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
                    transition={{
                      opacity: { duration: 0.35 },
                      filter: { duration: 0.35 },
                      scale: {
                        type: "spring",
                        stiffness: 220,
                        damping: 26,
                        mass: 0.6,
                      },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src="/Emvive.png"
                      alt="Emvive"
                      width={360}
                      height={360}
                      className="object-contain bg-white p-4 md:p-6 rounded-xl shadow max-h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
  setRef,
}: {
  partner: Partner;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={setRef}
      data-partner-id={partner.id}
      className="
        snap-start h-full min-h-full
        bg-blue-300/20 border border-white/10 rounded-xl
        p-4 md:p-6
        flex flex-col
        overflow-hidden
        mb-4
      "
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white">
        {partner.name}
      </h3>
      <p className="mt-3 text-white/85 leading-relaxed whitespace-pre-wrap">
        {partner.description.repeat(4)}
      </p>
      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-primary underline underline-offset-4"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}
