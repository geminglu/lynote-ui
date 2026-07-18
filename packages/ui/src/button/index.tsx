"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, useConfigProvider } from "../../lib";

const buttonVariants = cva(
  "group/button focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-clip-padding text-sm font-medium outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-8 gap-1.5 px-2.5",
        xs: "in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem]",
        lg: "has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 h-9 gap-1.5 px-2.5",
      },
      icon: {
        true: "p-0",
      },
      radius: {
        none: "rounded-none",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      { icon: true, size: "default", className: "size-8" },
      { icon: true, size: "xs", className: "size-6" },
      { icon: true, size: "sm", className: "size-7" },
      { icon: true, size: "lg", className: "size-9" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size,
  icon,
  radius,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  console.log("resolvedSize", useConfigProvider({ size }), size);

  return (
    <ButtonPrimitive
      data-slot="button"
      data-size={resolvedSize}
      className={cn(
        buttonVariants({
          variant,
          size: resolvedSize,
          icon,
          radius,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
