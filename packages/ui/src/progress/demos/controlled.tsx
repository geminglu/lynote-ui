import * as React from "react";

import { Button, Progress } from "lynote-ui";

const App: React.FC = () => {
  const [value, setValue] = React.useState(40);

  return (
    <div className="w-80 space-y-3">
      <Progress value={value} />
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue(Math.max(0, value - 10))}
        >
          -10
        </Button>
        <Button size="sm" onClick={() => setValue(Math.min(100, value + 10))}>
          +10
        </Button>
      </div>
    </div>
  );
};

export default App;
