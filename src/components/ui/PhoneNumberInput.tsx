// components/PhoneNumberInput.tsx
"use client";

import * as React from "react";
import { PhoneInput, type CountryIso2 } from "react-international-phone";
import "react-international-phone/style.css";
import { cn } from "@/lib/utils";

type PhoneNumberInputProps = {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  defaultCountry?: CountryIso2; // e.g., "in", "us"
  error?: string;
  disabled?: boolean;
  className?: string;       // wrapper class
  inputClassName?: string;  // input element class override (optional)
};

export function PhoneNumberInput({
  name,
  value,
  onChange,
  placeholder = "Phone number",
  defaultCountry = "in",
  error,
  disabled,
  className,
  inputClassName,
}: PhoneNumberInputProps) {
  // replicate your <Input> look & feel on the underlying input
  const baseInputClasses =
    "file:text-foreground placeholder:text-foreground selection:bg-primary selection:text-primary-foreground " +
    "border-input hover:border-primary/50 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 " +
    "text-base shadow-xs transition-[color,box-shadow] outline-none " +
    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium " +
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " +
    "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]";

  // error ring/border to match your Input aria-invalid styles
  const errorClasses = error
    ? "ring-destructive/20 dark:ring-destructive/40 border-destructive"
    : "";

  return (
    <div className={cn("w-full", className)}>
      <PhoneInput
        name={name}
        value={value}
        onChange={onChange}
        defaultCountry={defaultCountry}
        placeholder={placeholder}
        disabled={disabled}
        countrySelectorStyleProps={{
          buttonClassName:
            "h-9 rounded-l-md border border-input bg-transparent px-2 hover:border-primary/50 " +
            "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] outline-none",
          dropdownArrowClassName: "text-foreground",
        }}
        inputProps={{
          "aria-invalid": !!error,
          name,
        }}
        className="w-full" // wrapper
        inputClassName={cn(baseInputClasses, errorClasses, inputClassName)}
        // nice extras; tweak as you like
        forceDialCode
      />

      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}