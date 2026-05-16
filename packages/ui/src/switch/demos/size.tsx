import { Label, Switch } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="sw-size-sm" size="sm" />
        <Label htmlFor="sw-size-sm">小尺寸 (sm)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-size-default" size="default" defaultChecked />
        <Label htmlFor="sw-size-default">默认尺寸 (default)</Label>
      </div>
    </div>
  );
};

export default App;
