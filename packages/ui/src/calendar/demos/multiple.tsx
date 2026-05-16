"use client";

import { useState } from "react";

import { Calendar } from "lynote-ui/calendar";

const App: React.FC = () => {
  const [dates, setDates] = useState<Date[] | undefined>([new Date()]);

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border shadow-sm"
    />
  );
};

export default App;
