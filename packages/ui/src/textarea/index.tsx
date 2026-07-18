"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn, useConfigProvider } from "../../lib";

const textareaVariants = cva(
  "field-sizing-content border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex w-full rounded-lg border bg-transparent outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "min-h-16 px-2.5 py-2 text-base md:text-sm",
        xs: "min-h-12 rounded-[min(var(--radius-md),10px)] px-2 py-1 text-xs",
        sm: "min-h-14 rounded-[min(var(--radius-md),12px)] px-2.5 py-1.5 text-[0.8rem]",
        lg: "min-h-20 px-3 py-2.5 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Textarea({
  className,
  size,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });
  return (
    <textarea
      data-slot="textarea"
      data-size={resolvedSize}
      className={cn(textareaVariants({ size: resolvedSize }), className)}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };
