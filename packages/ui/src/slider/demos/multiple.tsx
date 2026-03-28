import { Slider } from "lynote-ui/slider";
import React from "react";

const App: React.FC = () => {
  return (
    <Slider
      defaultValue={[10, 20, 70]}
      max={100}
      step={10}
      className="mx-auto w-full max-w-xs"
    />
  );
};

export default App;
