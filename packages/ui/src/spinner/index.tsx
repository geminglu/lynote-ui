import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";

import { cn, useConfigProvider } from "../../lib";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      default: "size-4",
      xs: "size-3",
      sm: "size-3.5",
      lg: "size-6",
    },
  },
  defaultVariants: { size: "default" },
});

function Spinner({
  className,
  size,
  ...props
}: React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      data-size={resolvedSize}
      className={cn(spinnerVariants({ size: resolvedSize, className }))}
      {...props}
    />
  );
}

export { Spinner, spinnerVariants };
