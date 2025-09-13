"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { Palette, X, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VariableOption {
  label: string;
  variable: string;
}

const BASE_COLORS: VariableOption[] = [
  { label: "Primary", variable: "--primary" },
  { label: "Secondary", variable: "--secondary" },
  { label: "Card", variable: "--card" },
  { label: "Card Foreground", variable: "--card-foreground" },
  { label: "Background", variable: "--background" },
  { label: "Foreground", variable: "--foreground" },
];

const EXTRA_COLORS: VariableOption[] = [
  { label: "Accent", variable: "--accent" },
  { label: "Accent Foreground", variable: "--accent-foreground" },
  { label: "Muted", variable: "--muted" },
  { label: "Muted Foreground", variable: "--muted-foreground" },
];

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});
  const [json, setJson] = useState<string>("");

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const initial: Record<string, string> = {};
    [...BASE_COLORS, ...EXTRA_COLORS].forEach(({ variable }) => {
      initial[variable] = styles.getPropertyValue(variable).trim();
    });
    setValues(initial);
  }, []);

  const handleChange = (variable: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [variable]: value }));
    document.documentElement.style.setProperty(variable, value);
  };

  const renderInputs = (options: VariableOption[]) =>
    options.map(({ label, variable }) => (
      <div key={variable} className="flex items-center justify-between">
        <label className="text-sm">{label}</label>
        <input
          type="color"
          value={values[variable] || "#ffffff"}
          onChange={handleChange(variable)}
          className="h-6 w-10 cursor-pointer rounded border"
        />
      </div>
    ));

  const handleCopy = () => {
    const output = JSON.stringify(
      Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
          key.replace(/^--/, ""),
          value,
        ]),
      ),
      null,
      2,
    );
    navigator.clipboard.writeText(output);
    setJson(output);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
        aria-label="Open theme customizer"
      >
        <Palette className="h-5 w-5" />
      </Button>
      {open && (
        <Card className="fixed bottom-16 right-4 z-50 w-64 space-y-3 p-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Theme Colors</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="h-auto px-2 py-1 text-xs"
              >
                <Copy className="mr-1 h-3 w-3" /> Copy
              </Button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close theme customizer"
                className="rounded p-1 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          {renderInputs(BASE_COLORS)}
          <details className="pt-2">
            <summary className="cursor-pointer text-sm font-medium">More</summary>
            <div className="mt-2 space-y-3">
              {renderInputs(EXTRA_COLORS)}
            </div>
          </details>
        </Card>
      )}
    </>
  );
}

