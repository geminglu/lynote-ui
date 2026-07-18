"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { ChevronDownIcon } from "lucide-react";
import { cn, useConfigProvider } from "../../lib";

const nativeSelectVariants = cva(
  "border-input selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 w-full min-w-0 select-none appearance-none rounded-lg border bg-transparent outline-none transition-colors disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        default: "h-8 py-1 pl-2.5 pr-8 text-sm",
        xs: "h-6 rounded-[min(var(--radius-md),10px)] py-0.5 pl-2 pr-7 text-xs",
        sm: "h-7 rounded-[min(var(--radius-md),12px)] py-0.5 pl-2.5 pr-8 text-[0.8rem]",
        lg: "h-9 py-1.5 pl-3 pr-9 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> &
  VariantProps<typeof nativeSelectVariants>;

function NativeSelect({ className, size, ...props }: NativeSelectProps) {
  const { size: resolvedSize } = useConfigProvider({ size });
  return (
    <div
      className={cn(
        "group/native-select relative w-fit has-[select:disabled]:opacity-50",
        className,
      )}
      data-slot="native-select-wrapper"
      data-size={resolvedSize}
    >
      <select
        data-slot="native-select"
        data-size={resolvedSize}
        className={cn(nativeSelectVariants({ size: resolvedSize }))}
        {...props}
      />
      <ChevronDownIcon
        className="text-muted-foreground pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
}

function NativeSelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  );
}

export {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
  nativeSelectVariants,
};
