import { BoldIcon } from "lucide-react";
import { Toggle } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="xs" aria-label="Bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="sm" aria-label="Bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" aria-label="Bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" aria-label="Bold">
        <BoldIcon />
      </Toggle>
    </div>
  );
};

export default App;
