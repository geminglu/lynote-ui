import { Calendar } from "lynote-ui";
import { useState } from "react";

const App: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  );
};

export default App;
