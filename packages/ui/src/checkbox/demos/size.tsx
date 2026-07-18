import { Checkbox, Label } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="cb-xs" size="xs" />
        <Label htmlFor="cb-xs">xs 尺寸</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-sm" size="sm" />
        <Label htmlFor="cb-sm">sm 尺寸</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-default" size="default" defaultChecked />
        <Label htmlFor="cb-default">default 尺寸</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-lg" size="lg" />
        <Label htmlFor="cb-lg">lg 尺寸</Label>
      </div>
    </div>
  );
};

export default App;
