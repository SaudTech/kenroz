/* ---------- Desktop Dropdown (hover intent + stable offset) ---------- */
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "../Navbar";

function DesktopDropdown({
  item,
  onNavigate,
  scrolled,
}: {
  item: NavLink;
  onNavigate: (item: NavLink) => void;
  scrolled: boolean;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [open, setOpen] = useState(false);
  const measuredRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 160); // small grace period to cross the gap
  };

  const adjustPosition = useCallback(() => {
    const el = menuRef.current;
    if (!el) return;

    const prev = el.style.transform;
    el.style.transform = "translateX(0px)";

    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const pad = 12;

    let delta = 0;
    if (rect.right > vw - pad) delta = (vw - pad) - rect.right;
    if (rect.left + delta < pad) delta += pad - (rect.left + delta);

    setOffsetX(delta);
    el.style.transform = prev;
  }, []);

  // Measure exactly once per open
  useEffect(() => {
    if (!open) {
      measuredRef.current = false;
      return;
    }
    if (measuredRef.current) return;

    const raf = requestAnimationFrame(() => {
      adjustPosition();
      measuredRef.current = true;
    });
    return () => cancelAnimationFrame(raf);
  }, [open, adjustPosition]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative z-[9999]">
      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        onClick={() => setOpen((v) => !v)} // also allow click to toggle
        className={cn(
          "px-1 py-2 font-bold text-md inline-flex items-center gap-1 transition-colors duration-200",
          scrolled
            ? "text-navbar-foreground hover:text-primary"
            : "bg-clip-text text-transparent bg-gradient-to-r from-card-foreground to-card-foreground hover:from-secondary hover:to-primary"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4",
            scrolled ? "text-navbar-foreground" : "text-card-foreground"
          )}
        />
      </button>

      {/* Panel */}
      <div
        ref={menuRef}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        style={{ transform: `translateX(${offsetX}px)` }}
        className={cn(
          open ? "visible opacity-100" : "invisible opacity-0",
          "absolute left-0 mt-2 z-[9999]",
          "sm:w-[500px] w-[min(calc(100vw-1rem),500px)]",
          "rounded-xl border border-border bg-background shadow-xl",
          // fade only; do not animate transform to avoid horizontal drift
          "transition-opacity duration-150"
        )}
        role="menu"
      >
        <div className="py-4 px-2">
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-6">
            {/* First Column - About & Credibility */}
            <div className="sm:col-span-5">
              <h3 className="text-sm font-bold px-2 mb-2 text-muted-foreground uppercase tracking-wider">
                About & Credibility
              </h3>
              <ul className="space-y-1">
                {item.links?.slice(0, 3).map((child) => {
                  const content = (
                    <span className="block group w-full text-left px-2 py-2 text-sm font-medium rounded-md transition-colors hover:bg-black">
                      <span className="text-primary group-hover:text-primary">
                        {child.label}
                      </span>
                    </span>
                  );
                  return (
                    <li key={child.label} role="none">
                      {child.href ? (
                        <Link href={child.href} onClick={() => onNavigate(child)} role="menuitem">
                          {content}
                        </Link>
                      ) : (
                        <button type="button" onClick={() => onNavigate(child)} role="menuitem" className="w-full">
                          {content}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Second Column - Connections & Opportunities */}
            <div className="sm:col-span-7">
              <h3 className="text-sm font-bold px-2 mb-2 text-muted-foreground uppercase tracking-wider">
                Connections & Opportunities
              </h3>
              <ul className="space-y-1">
                {item.links?.slice(3).map((child) => {
                  const content = (
                    <span className="block group w-full text-left px-2 py-2 text-sm font-medium rounded-md transition-colors hover:bg-black">
                      <span className="text-primary group-hover:text-primary">
                        {child.label}
                      </span>
                    </span>
                  );
                  return (
                    <li key={child.label} role="none">
                      {child.href ? (
                        <Link href={child.href} onClick={() => onNavigate(child)} role="menuitem">
                          {content}
                        </Link>
                      ) : (
                        <button type="button" onClick={() => onNavigate(child)} role="menuitem" className="w-full">
                          {content}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: “hover bridge” to cover the 2–4px gap if you keep mt-2 */}
      {/* <div className="absolute left-0 right-0 top-full h-3" onMouseEnter={openMenu} onMouseLeave={scheduleClose} /> */}
    </div>
  );
}

export default DesktopDropdown;
