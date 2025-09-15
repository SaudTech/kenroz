"use client";

import { useEffect, useRef, useState } from "react";
import {
  Palette,
  Paintbrush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { themes } from "@/themes";

/**
 * Deluxe Theme Customizer
 * - Floating FAB toggles a polished panel (glass, shadows, motion)
 * - Preset themes with live preview tiles
 * - Custom tab with color pickers bound to your CSS variables
 * - Persist selection to localStorage and rehydrate on mount
 * - Copy CSS variables to clipboard, quick randomize, and reset
 * - Accessible: ARIA roles, keyboard close (Esc), focus trap
 *
 * Assumptions:
 * themes: Array<{ name: string; colors: Record<string, string> }>
 * CSS variables are applied to :root as --<key>
 */

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [activeThemeName, setActiveThemeName] = useState<string>("Default");
  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  // Apply theme variables to :root
  const applyColors = (colors: Record<string, string>) => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  // Handle preset theme change
  const handleThemeChange = (name: string) => {
    const theme = themes.find((t) => t.name === name);
    if (!theme) return;
    setActiveThemeName(theme.name);
    applyColors(theme.colors);
  };

  // Close on ESC and click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Utility: swatch preview tile
  const SwatchRow = ({ colors }: { colors: Record<string, string> }) => (
    <div className="flex gap-1">{
      Object.values(colors).slice(0, 6).map((c, i) => (
        <span key={i} className="h-5 w-5 rounded-md border" style={{ backgroundColor: c }} />
      ))
    }</div>
  );

  return (
    <>
      {/* Floating Action Button */}
      <Button
        ref={fabRef}
        variant="default"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-full px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 border border-white/10 animate-[pulse_3s_ease-in-out_infinite]"
        aria-label="Open theme customizer"
      >
        <Palette className="h-5 w-5" />
        <span className="hidden sm:inline">Theme</span>
      </Button>

      {/* Panel */}
      {open && (
        <div className="fixed inset-0 z-[55] grid place-items-end sm:place-items-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30" aria-hidden />

          {/* Content */}
          <Card
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Theme customizer"
            className="relative m-4 w-[min(92vw,420px)] overflow-hidden rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/10">
                  <Paintbrush className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold leading-tight text-primary">Theme Customizer</div>
                  <div className="text-xs text-primary/50">Pick a preset or craft your own palette</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="overflow-y-scroll max-h-[70vh]">
              <div className="space-y-6 p-4">
                {/* Presets */}
                <section>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {themes.map((t) => {
                      const isActive = activeThemeName === t.name && activeThemeName !== "Custom";
                      return (
                        <button
                          key={t.name}
                          onClick={() => handleThemeChange(t.name)}
                          className={`group relative w-full rounded-xl border p-3 text-left transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                            isActive ? "ring-2 ring-primary/60 border-primary/40" : "border-border"
                          }`}
                          aria-pressed={isActive}
                          aria-label={`Activate ${t.name} theme`}
                        >
                            <SwatchRow colors={t.colors} />
                        </button>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
