import { SearchIcon } from "lucide-react";

import { Button } from "lynote-ui/button";
import { Kbd, KbdGroup } from "lynote-ui/kbd";

const App: React.FC = () => {
  return (
    <Button variant="outline" className="w-64 justify-between">
      <span className="text-muted-foreground inline-flex items-center gap-2">
        <SearchIcon />
        搜索文档...
      </span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Button>
  );
};

export default App;
