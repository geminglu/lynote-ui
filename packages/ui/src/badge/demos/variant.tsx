import { Badge } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">默认</Badge>
      <Badge variant="secondary">次要</Badge>
      <Badge variant="destructive">危险</Badge>
      <Badge variant="outline">轮廓</Badge>
    </div>
  );
};

export default App;
