"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const THEME_IMAGE_MAP = {
  "Classic Red & Black": {
    top: "/PageDivider/top_red.svg",
    bottom: "/PageDivider/bottom_red.svg",
  },
  "Fresh Forest": {
    top: "/PageDivider/top_green.svg",
    bottom: "/PageDivider/bottom_green.svg",
  },
  "Mystic Sunset": {
    top: "/PageDivider/top_purple.svg",
    bottom: "/PageDivider/bottom_purple.svg",
  },
} as const;

type ThemeName = keyof typeof THEME_IMAGE_MAP;

const DEFAULT_THEME: ThemeName = "Classic Red & Black";
const STORAGE_KEY = "selectedTheme";

const isThemeName = (value: string | null): value is ThemeName =>
  Boolean(value && Object.prototype.hasOwnProperty.call(THEME_IMAGE_MAP, value));

const PageDividerTwo = ({ className = "" }) => {
  const [clientScreenWidth, setClientScreenWidth] = useState(0);
  const [activeTheme, setActiveTheme] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    const update = () => setClientScreenWidth(window.innerWidth);
    update(); // set once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const updateTheme = (themeName?: string | null) => {
      if (themeName && isThemeName(themeName)) {
        setActiveTheme(themeName);
      } else {
        setActiveTheme(DEFAULT_THEME);
      }
    };

    updateTheme(localStorage.getItem(STORAGE_KEY));

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<string | null | undefined>;
      updateTheme(customEvent.detail ?? null);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        updateTheme(event.newValue);
      }
    };

    window.addEventListener("themechange", handleThemeChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("themechange", handleThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const themeImages = THEME_IMAGE_MAP[activeTheme] ?? THEME_IMAGE_MAP[DEFAULT_THEME];
  const computedWidth = clientScreenWidth || 1920;

  return (
    <div className={cn("-mt-[10rem] z-[-10]", className)}>
      <Image
        src={themeImages.top}
        alt="Decorative top page divider"
        className="w-full h-auto rotate-180"
        width={computedWidth}
        height={100}
      />
      <Image
        src={themeImages.bottom}
        alt="Decorative bottom page divider"
        className="w-full h-auto"
        width={computedWidth}
        height={100}
      />
    </div>
  );
};

export default PageDividerTwo;
