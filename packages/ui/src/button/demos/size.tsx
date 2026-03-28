import { ArrowUpIcon } from "lucide-react";
import { Button } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="default">default</Button>
      <Button size="lg">lg</Button>
      <Button size="icon-xs">
        <ArrowUpIcon />
      </Button>
      <Button size="icon-sm">
        <ArrowUpIcon />
      </Button>
      <Button size="icon">
        <ArrowUpIcon />
      </Button>
      <Button size="icon-lg">
        <ArrowUpIcon />
      </Button>
    </div>
  );
};

export default App;
