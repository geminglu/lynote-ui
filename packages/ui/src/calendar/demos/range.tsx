"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Calendar } from "lynote-ui/calendar";

const today = new Date();
const inOneWeek = new Date(today.getTime() + 7 * 86400_000);

const App: React.FC = () => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: today,
    to: inOneWeek,
  });

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border shadow-sm"
    />
  );
};

export default App;
