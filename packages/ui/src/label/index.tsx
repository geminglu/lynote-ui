"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn, useConfigProvider } from "../../lib";

const labelVariants = cva(
  "flex select-none items-center gap-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
  {
    variants: {
      size: {
        default: "text-sm",
        xs: "text-xs",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: { size: "default" },
  },
);

function Label({
  className,
  size,
  ...props
}: React.ComponentProps<"label"> & VariantProps<typeof labelVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <label
      data-slot="label"
      data-size={resolvedSize}
      className={cn(labelVariants({ size: resolvedSize }), className)}
      {...props}
    />
  );
}

export { Label, labelVariants };
