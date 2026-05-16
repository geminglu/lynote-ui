import { BoldIcon, ItalicIcon, StarIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "lynote-ui/toggle";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="加粗">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="斜体">
        <ItalicIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="下划线">
        <UnderlineIcon />
      </Toggle>
      <Toggle aria-label="收藏">
        <StarIcon data-icon="inline-start" />
        收藏
      </Toggle>
    </div>
  );
};

export default App;
