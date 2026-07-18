import { Label } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Label size="xs">xs 标签文字</Label>
      <Label size="sm">sm 标签文字</Label>
      <Label size="default">default 标签文字</Label>
      <Label size="lg">lg 标签文字</Label>
    </div>
  );
};

export default App;
