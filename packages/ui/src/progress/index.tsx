"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cva, type VariantProps } from "class-variance-authority";

import type { Size } from "../../lib";
import { cn, useConfigProvider } from "../../lib";

const progressTrackVariants = cva(
  "bg-muted relative flex w-full items-center overflow-x-hidden rounded-full",
  {
    variants: {
      size: {
        default: "h-1",
        xs: "h-0.5",
        sm: "h-1",
        lg: "h-2",
      },
    },
    defaultVariants: { size: "default" },
  },
);

function Progress({
  className,
  children,
  value,
  size,
  ...props
}: ProgressPrimitive.Root.Props & { size?: Size }) {
  const { size: resolvedSize } = useConfigProvider({ size });

  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      data-size={resolvedSize}
      className={cn("flex flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <ProgressTrack size={resolvedSize}>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  );
}

function ProgressTrack({
  className,
  size,
  ...props
}: ProgressPrimitive.Track.Props & VariantProps<typeof progressTrackVariants>) {
  return (
    <ProgressPrimitive.Track
      className={cn(progressTrackVariants({ size, className }))}
      data-slot="progress-track"
      {...props}
    />
  );
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("bg-primary h-full transition-all", className)}
      {...props}
    />
  );
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  );
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "text-muted-foreground ml-auto text-sm tabular-nums",
        className,
      )}
      data-slot="progress-value"
      {...props}
    />
  );
}

export {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  progressTrackVariants,
  ProgressValue,
};
