import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center font-semibold text-sm whitespace-nowrap px-8 py-3
        rounded-full transition-all duration-300 ease-in-out transform
        hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-primary/20`,
  {
    variants: {
      variant: {
        default:
          `bg-gradient-to-r from-primary via-primary/90 to-secondary
          hover:from-secondary hover:via-primary hover:to-primary
          text-white border border-primary/20
          hover:shadow-primary/25 shadow-primary/20`,
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-secondary bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground ",
        secondary:
          `bg-gradient-to-r from-primary/20 via-primary/10 to-primary/10 
          border-2 border-primary
          text-foreground 
          shadow-inner hover:shadow-lg
          backdrop-blur-sm
          hover:from-primary/30 hover:via-primary/20 hover:to-primary/30`,
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-6 py-3 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
