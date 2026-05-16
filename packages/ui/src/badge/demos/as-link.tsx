import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "lynote-ui/badge";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge render={<a href="#docs" />}>
        Docs
        <ArrowUpRightIcon data-icon="inline-end" />
      </Badge>
      <Badge
        variant="secondary"
        render={
          <a href="https://github.com" target="_blank" rel="noreferrer" />
        }
      >
        GitHub
        <ArrowUpRightIcon data-icon="inline-end" />
      </Badge>
    </div>
  );
};

export default App;
