export interface Theme {
  name: string;
  colors: Record<string, string>;
}

export const themes: Theme[] = [
  {
    name: "Classic Red & Black",
    colors: {
      primary: "#f92029",
      "primary-foreground": "#ffffff",
      secondary: "#f92029",
      "secondary-foreground": "#000000",
      muted: "#fffde7",
      "muted-foreground": "#000",
      background: "#fff",
      foreground: "#000",
      card: "#0f172b",
      "card-foreground": "#ffffff",
      navbar: "#000000",
    },
  },
  {
    name: "Royal Purple Glow",
    colors: {
      primary: "#7C3AED",
      "primary-foreground": "#ffffff",
      secondary: "#A78BFA",
      "secondary-foreground": "#1b1035",
      muted: "#EDE9FE",
      "muted-foreground": "#3B2B63",
      background: "#F5F3FF",
      foreground: "#1F1636",
      card: "#2E1065",
      "card-foreground": "#F5F3FF",
      navbar: "#7C3AED40",
    },
  },
  {
    name: "Fresh Forest",
    colors: {
      primary: "#22C55E",
      "primary-foreground": "#071F12",
      secondary: "#84CC16",
      "secondary-foreground": "#081402",
      muted: "#0F172A",
      "muted-foreground": "#94A3B8",
      background: "#0B0F10",
      foreground: "#E5F6ED",
      card: "#111827",
      "card-foreground": "#D1FAE5",
      navbar: "#22C55E33",
    },
  },
  {
    name: "Mystic Sunset",
    colors: {
      primary: "#A855F7",
      "primary-foreground": "#1A0B2A",
      secondary: "#F59E0B",
      "secondary-foreground": "#1A1302",
      muted: "#1E293B",
      "muted-foreground": "#94A3B8",
      background: "#0B1020",
      foreground: "#EDE9FE",
      card: "#18122B",
      "card-foreground": "#F5F3FF",
      navbar: "#A855F733",
    },
  },
];
