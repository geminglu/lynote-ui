import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "lynote-ui/toggle-group";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <ToggleGroup variant="outline" spacing={1}>
        <ToggleGroupItem value="bold" aria-label="加粗">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="斜体">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="下划线">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup variant="outline" size="sm">
        <ToggleGroupItem value="bold" aria-label="加粗">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="斜体">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="下划线">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default App;
