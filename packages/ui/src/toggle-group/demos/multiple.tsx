import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "lynote-ui";

const App: React.FC = () => {
  return (
    <ToggleGroup multiple variant="outline">
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
  );
};

export default App;
