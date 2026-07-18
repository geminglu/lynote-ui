"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import { cva } from "class-variance-authority";
import * as React from "react";

import type { Size } from "../../lib";
import { cn, useConfigProvider } from "../../lib";

const sliderTrackVariants = cva(
  "bg-muted data-horizontal:h-full data-horizontal:w-full data-vertical:h-full data-vertical:w-full relative grow select-none overflow-hidden rounded-full",
  {
    variants: {
      size: {
        default: "data-horizontal:h-1 data-vertical:w-1",
        xs: "data-horizontal:h-0.5 data-vertical:w-0.5",
        sm: "data-horizontal:h-1 data-vertical:w-1",
        lg: "data-horizontal:h-2 data-vertical:w-2",
      },
    },
    defaultVariants: { size: "default" },
  },
);

const sliderThumbVariants = cva(
  "border-ring ring-ring/50 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 relative block shrink-0 select-none rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "size-3",
        xs: "size-2",
        sm: "size-2.5",
        lg: "size-4",
      },
    },
    defaultVariants: { size: "default" },
  },
);

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  size,
  ...props
}: SliderPrimitive.Root.Props & { size?: Size }) {
  const { size: resolvedSize } = useConfigProvider({ size });

  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full", className)}
      data-slot="slider"
      data-size={resolvedSize}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col relative flex w-full touch-none select-none items-center">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(sliderTrackVariants({ size: resolvedSize }))}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-primary data-horizontal:h-full data-vertical:w-full select-none"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className={cn(sliderThumbVariants({ size: resolvedSize }))}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider, sliderThumbVariants, sliderTrackVariants };
