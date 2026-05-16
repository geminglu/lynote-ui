import { Button } from "lynote-ui/button";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>default</Button>
      <Button variant="outline" disabled>
        outline
      </Button>
      <Button variant="secondary" disabled>
        secondary
      </Button>
      <Button variant="ghost" disabled>
        ghost
      </Button>
      <Button variant="destructive" disabled>
        destructive
      </Button>
      <Button variant="link" disabled>
        link
      </Button>
    </div>
  );
};

export default App;
