import { Badge } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>默认</Badge>
      <Badge>徽标</Badge>
      <Badge>12</Badge>
      <Badge>999+</Badge>
    </div>
  );
};

export default App;
