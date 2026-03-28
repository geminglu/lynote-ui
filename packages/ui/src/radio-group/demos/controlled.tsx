import { Label, RadioGroup, RadioGroupItem } from "lynote-ui";
import { useState } from "react";

const App: React.FC = () => {
  const [value, setValue] = useState("option-one");

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="controlled-option-one" />
          <Label htmlFor="controlled-option-one">选项一</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="controlled-option-two" />
          <Label htmlFor="controlled-option-two">选项二</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-three" id="controlled-option-three" />
          <Label htmlFor="controlled-option-three">选项三</Label>
        </div>
      </RadioGroup>
      <p className="text-muted-foreground text-sm">当前选中: {value}</p>
    </div>
  );
};

export default App;
