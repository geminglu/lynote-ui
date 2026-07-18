"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import type { Size } from "../../lib";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

function DatePicker({ size }: { size?: Size }) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          size={size}
          variant="outline"
          data-empty={!date}
          className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
        />
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
