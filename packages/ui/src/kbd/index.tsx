"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { cn, useConfigProvider } from "../../lib";

const kbdVariants = cva(
  "bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 pointer-events-none inline-flex w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm px-1 font-sans font-medium [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      size: {
        default: "h-5 text-xs",
        xs: "h-4 min-w-4 text-[10px]",
        sm: "h-[18px] text-[11px]",
        lg: "h-6 text-sm",
      },
    },
    defaultVariants: { size: "default" },
  },
);

function Kbd({
  className,
  size,
  ...props
}: React.ComponentProps<"kbd"> & VariantProps<typeof kbdVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <kbd
      data-slot="kbd"
      data-size={resolvedSize}
      className={cn(kbdVariants({ size: resolvedSize }), className)}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup, kbdVariants };
