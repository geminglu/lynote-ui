import { ArrowUpIcon } from "lucide-react";
import { Button } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="default">default</Button>
      <Button size="lg">lg</Button>
      <Button size="xs" icon>
        <ArrowUpIcon />
      </Button>
      <Button size="sm" icon>
        <ArrowUpIcon />
      </Button>
      <Button icon>
        <ArrowUpIcon />
      </Button>
      <Button size="lg" icon>
        <ArrowUpIcon />
      </Button>
    </div>
  );
};

export default App;
