import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  removeLeftBorderRadius?: boolean;
  customBorderClasses?: string;
}

function Input({ className, type, removeLeftBorderRadius = false, customBorderClasses, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-foreground selection:bg-primary selection:text-primary-foreground border-input hover:border-primary/50 flex h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        removeLeftBorderRadius ? "rounded-r-md border-l-transparent" : "rounded-md",
        customBorderClasses,
        className
      )}
      {...props}
    />
  )
}

export { Input }