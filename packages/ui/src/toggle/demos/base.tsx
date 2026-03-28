import { BoldIcon } from "lucide-react";
import { Toggle } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        斜体
      </Toggle>
    </div>
  );
};

export default App;
