"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cva, type VariantProps } from "class-variance-authority";

import { CheckIcon } from "lucide-react";
import { cn, useConfigProvider } from "../../lib";

const checkboxVariants = cva(
  "border-input group-has-disabled/field:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary peer relative flex shrink-0 items-center justify-center rounded-[4px] border outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "size-4",
        xs: "size-3",
        sm: "size-3.5",
        lg: "size-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const checkboxIndicatorVariants = cva(
  "grid place-content-center text-current transition-none [&>svg]:size-3.5",
  {
    variants: {
      size: {
        default: "",
        xs: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Checkbox({
  className,
  size,
  ...props
}: CheckboxPrimitive.Root.Props & VariantProps<typeof checkboxVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-size={resolvedSize}
      className={cn(checkboxVariants({ size: resolvedSize }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={checkboxIndicatorVariants({ size: resolvedSize })}
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox, checkboxIndicatorVariants, checkboxVariants };
