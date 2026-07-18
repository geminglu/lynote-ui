import { Label, Switch } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="sw-xs" size="xs" />
        <Label htmlFor="sw-xs">xs 尺寸</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-sm" size="sm" />
        <Label htmlFor="sw-sm">sm 尺寸</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-default" size="default" defaultChecked />
        <Label htmlFor="sw-default">default 尺寸</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-lg" size="lg" />
        <Label htmlFor="sw-lg">lg 尺寸</Label>
      </div>
    </div>
  );
};

export default App;
