import { Checkbox } from "lynote-ui";
import { useState } from "react";

const App: React.FC = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <label
          htmlFor="controlled"
          className="text-sm font-medium leading-none"
        >
          受控复选框 {checked ? "(已选中)" : "(未选中)"}
        </label>
      </div>
    </div>
  );
};

export default App;
