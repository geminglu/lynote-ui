import { Badge } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge size="xs">xs 标签</Badge>
      <Badge size="sm">sm 标签</Badge>
      <Badge size="default">default 标签</Badge>
      <Badge size="lg">lg 标签</Badge>
    </div>
  );
};

export default App;
