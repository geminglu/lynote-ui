"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn, useConfigProvider } from "../../lib";

const inputVariants = cva(
  "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 w-full min-w-0 rounded-lg border bg-transparent outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-8 px-2.5 py-1 text-base md:text-sm",
        xs: "h-6 rounded-[min(var(--radius-md),10px)] px-2 py-0.5 text-xs",
        sm: "h-7 rounded-[min(var(--radius-md),12px)] px-2.5 py-1 text-[0.8rem]",
        lg: "h-9 px-3 py-1.5 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Input({
  className,
  type,
  size,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      data-size={resolvedSize}
      className={cn(inputVariants({ size: resolvedSize }), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
