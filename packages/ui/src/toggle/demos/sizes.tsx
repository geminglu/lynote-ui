import { BoldIcon } from "lucide-react";

import { Toggle } from "lynote-ui/toggle";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="小尺寸">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" aria-label="默认尺寸">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" aria-label="大尺寸">
        <BoldIcon />
      </Toggle>
    </div>
  );
};

export default App;
