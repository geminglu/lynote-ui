"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, useConfigProvider } from "../../lib";

const radioGroupItemVariants = cva(
  "group/radio-group-item border-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary peer relative flex aspect-square shrink-0 rounded-full border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
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

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  size,
  ...props
}: RadioPrimitive.Root.Props & VariantProps<typeof radioGroupItemVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      data-size={resolvedSize}
      className={cn(radioGroupItemVariants({ size: resolvedSize }), className)}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-4 items-center justify-center"
      >
        <span
          className={cn(
            "bg-primary-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
            resolvedSize === "xs" && "size-1.5",
            (resolvedSize === "default" || resolvedSize === "sm") && "size-2",
            resolvedSize === "lg" && "size-2.5",
          )}
        />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem, radioGroupItemVariants };
