import { BoldIcon } from "lucide-react";
import * as React from "react";

import { Toggle } from "lynote-ui";

const App: React.FC = () => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <div className="flex items-center gap-3">
      <Toggle pressed={pressed} onPressedChange={setPressed} aria-label="加粗">
        <BoldIcon />
      </Toggle>
      <span className="text-sm">{pressed ? "已加粗" : "未加粗"}</span>
    </div>
  );
};

export default App;
