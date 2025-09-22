"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Palette } from "lucide-react";
import { themes } from "@/themes";

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [activeThemeName, setActiveThemeName] = useState<string>("Default");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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

    // Save to localStorage
    localStorage.setItem("selectedTheme", theme.name);

    window.dispatchEvent(new CustomEvent("themechange", { detail: theme.name }));

    setOpen(false);
  };

  // Restore theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
      const theme = themes.find((t) => t.name === savedTheme);
      if (theme) {
        setActiveThemeName(theme.name);
        applyColors(theme.colors);
        window.dispatchEvent(
          new CustomEvent("themechange", { detail: theme.name }),
        );
      }
    }
  }, []);

  // Close on ESC and click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        triggerRef.current && 
        !triggerRef.current.contains(e.target as Node)
      ) {
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

  return (
    <div className="fixed bottom-6 right-6 z-[999999]">
      {/* Dropdown Trigger */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-card backdrop-blur-md border border-primary shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        aria-label="Select theme"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-card-foreground" />
          <span className="text-sm font-medium text-card-foreground">{activeThemeName}</span>
        </div>
        <ChevronDown 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <>
          {/* Backdrop for mobile */}
          <div className="fixed inset-0 z-[-1] bg-black/5 sm:hidden" />
          
          <div
            ref={dropdownRef}
            className="absolute bottom-full right-0 mb-2 w-60 origin-bottom-right"
            role="listbox"
            aria-label="Theme options"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden animate-in slide-in-from-bottom-2 fade-in-0 duration-200">
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 mb-1">
                  Choose Theme
                </div>
                
                {themes.map((theme) => {
                  const isActive = activeThemeName === theme.name;
                  return (
                    <button
                      key={theme.name}
                      onClick={() => handleThemeChange(theme.name)}
                      role="option"
                      aria-selected={isActive}
                      className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-gray-900 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {/* Theme color preview */}
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                        style={{ backgroundColor: theme.colors.primary }}
                      />
                      
                      <span className="flex-1 text-left">{theme.name}</span>
                      
                      {/* Check icon for active theme */}
                      {isActive && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    </button>
                  );
                })}
              </div>
              
              {/* Footer */}
              <div className="border-t border-gray-200/50 bg-gray-50/30 px-3 py-2">
                <div className="text-xs text-gray-500 text-center">
                  Theme applied instantly
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
