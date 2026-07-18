"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, useConfigProvider } from "../../lib";

const switchVariants = cva(
  "group/switch focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50 peer relative inline-flex shrink-0 items-center rounded-full border border-transparent outline-none transition-all after:absolute after:-inset-x-3 after:-inset-y-2",
  {
    variants: {
      size: {
        default: "h-[18.4px] w-[32px]",
        xs: "h-[12px] w-[20px]",
        sm: "h-[14px] w-[24px]",
        lg: "h-[22px] w-[40px]",
      },
    },
    defaultVariants: { size: "default" },
  },
);

const switchThumbVariants = cva(
  "bg-background dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground pointer-events-none block rounded-full ring-0 transition-transform",
  {
    variants: {
      size: {
        default:
          "size-4 group-data-[checked]/switch:translate-x-[calc(100%-2px)] group-data-[unchecked]/switch:translate-x-0",
        xs: "size-2.5 group-data-[checked]/switch:translate-x-[calc(100%-1px)] group-data-[unchecked]/switch:translate-x-0",
        sm: "size-3 group-data-[checked]/switch:translate-x-[calc(100%-2px)] group-data-[unchecked]/switch:translate-x-0",
        lg: "size-5 group-data-[checked]/switch:translate-x-[calc(100%-2px)] group-data-[unchecked]/switch:translate-x-0",
      },
    },
    defaultVariants: { size: "default" },
  },
);

function Switch({
  className,
  size,
  ...props
}: SwitchPrimitive.Root.Props & VariantProps<typeof switchVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={resolvedSize}
      className={cn(switchVariants({ size: resolvedSize }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={switchThumbVariants({ size: resolvedSize })}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, switchThumbVariants, switchVariants };
