import * as React from "react";

import { Label, Switch } from "lynote-ui";

const App: React.FC = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Switch
          id="notifications"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="notifications">开启通知</Label>
      </div>
      <p className="text-muted-foreground text-sm">
        当前状态：{checked ? "已开启" : "已关闭"}
      </p>
    </div>
  );
};

export default App;
