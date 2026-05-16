import { ExternalLinkIcon } from "lucide-react";
import { Button } from "lynote-ui/button";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        render={
          <a href="https://github.com" target="_blank" rel="noreferrer" />
        }
      >
        访问 GitHub
        <ExternalLinkIcon data-icon="inline-end" />
      </Button>
      <Button
        variant="outline"
        render={
          <a href="https://github.com" target="_blank" rel="noreferrer" />
        }
      >
        作为外链按钮
      </Button>
      <Button variant="link" render={<a href="#docs" />}>
        作为内链链接
      </Button>
    </div>
  );
};

export default App;
