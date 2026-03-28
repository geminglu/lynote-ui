import { Label, Switch } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">飞行模式</Label>
    </div>
  );
};

export default App;
