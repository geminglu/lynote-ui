"use client";

import { Checkbox } from "lynote-ui/checkbox";
import { Label } from "lynote-ui/label";
import { useState } from "react";

const App: React.FC = () => {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);

  const all = a && b;
  const indeterminate = !all && (a || b);

  const handleParentChange = (checked: boolean) => {
    setA(checked);
    setB(checked);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox
          id="parent"
          checked={all}
          indeterminate={indeterminate}
          onCheckedChange={handleParentChange}
        />
        <Label htmlFor="parent">全选</Label>
      </div>
      <div className="ml-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Checkbox id="child-a" checked={a} onCheckedChange={setA} />
          <Label htmlFor="child-a">阅读权限</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="child-b" checked={b} onCheckedChange={setB} />
          <Label htmlFor="child-b">编辑权限</Label>
        </div>
      </div>
    </div>
  );
};

export default App;
