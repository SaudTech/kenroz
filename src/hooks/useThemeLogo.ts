"use client";

import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

import logoRed from "@/../public/logo/logo_red.png";
import logoGreen from "@/../public/logo/logo_green.png";
import logoPurple from "@/../public/logo/logo_purple.png";

const DEFAULT_THEME = "Classic Red & Black";
const STORAGE_KEY = "selectedTheme";

const THEME_LOGO_MAP: Record<string, StaticImageData> = {
  "Classic Red & Black": logoRed,
  "Fresh Forest": logoGreen,
  "Mystic Sunset": logoPurple,
};

function resolveLogo(themeName?: string | null): StaticImageData {
  if (themeName && THEME_LOGO_MAP[themeName]) {
    return THEME_LOGO_MAP[themeName];
  }
  return THEME_LOGO_MAP[DEFAULT_THEME];
}

export function useThemeLogo(): StaticImageData {
  const [logo, setLogo] = useState<StaticImageData>(resolveLogo(null));

  useEffect(() => {
    const updateLogo = (themeName?: string | null) => {
      setLogo(resolveLogo(themeName));
    };

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    updateLogo(savedTheme);

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<string | null | undefined>;
      updateLogo(customEvent.detail ?? null);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        updateLogo(event.newValue);
      }
    };

    window.addEventListener("themechange", handleThemeChange as EventListener);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(
        "themechange",
        handleThemeChange as EventListener,
      );
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return logo;
}
