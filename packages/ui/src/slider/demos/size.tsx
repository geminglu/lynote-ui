import { Slider } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">xs</p>
        <Slider size="xs" defaultValue={[40]} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">sm</p>
        <Slider size="sm" defaultValue={[40]} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">default</p>
        <Slider size="default" defaultValue={[40]} />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">lg</p>
        <Slider size="lg" defaultValue={[40]} />
      </div>
    </div>
  );
};

export default App;
