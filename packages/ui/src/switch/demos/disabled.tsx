import { Label, Switch } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="sw-disabled-off" disabled />
        <Label htmlFor="sw-disabled-off">禁用（关闭）</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-disabled-on" disabled defaultChecked />
        <Label htmlFor="sw-disabled-on">禁用（开启）</Label>
      </div>
    </div>
  );
};

export default App;
