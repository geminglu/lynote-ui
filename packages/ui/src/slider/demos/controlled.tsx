"use client";

import * as React from "react";

import { Label } from "lynote-ui/label";
import { Slider } from "lynote-ui/slider";

const SliderControlled: React.FC = () => {
  const [value, setValue] = React.useState([0.3, 0.7, 0.9, 1.0]);

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <span className="text-muted-foreground text-sm">
          {value.join(", ")}
        </span>
      </div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={(value) => {
          setValue(value as number[]);
        }}
        min={0}
        max={1}
        step={0.001}
      />
    </div>
  );
};

export default SliderControlled;
