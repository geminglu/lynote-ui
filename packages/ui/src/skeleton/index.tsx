import { cva, type VariantProps } from "class-variance-authority";

import { cn, useConfigProvider } from "../../lib";

const skeletonVariants = cva("bg-muted animate-pulse rounded-md", {
  variants: {
    size: {
      default: "h-4",
      xs: "h-2",
      sm: "h-3",
      lg: "h-6",
    },
  },
  defaultVariants: { size: "default" },
});

function Skeleton({
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <div
      data-slot="skeleton"
      data-size={resolvedSize}
      className={cn(skeletonVariants({ size: resolvedSize, className }))}
      {...props}
    />
  );
}

export { Skeleton, skeletonVariants };
