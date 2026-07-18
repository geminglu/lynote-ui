import { Input } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input size="xs" placeholder="xs 尺寸" />
      <Input size="sm" placeholder="sm 尺寸" />
      <Input size="default" placeholder="default 尺寸" />
      <Input size="lg" placeholder="lg 尺寸" />
    </div>
  );
};

export default App;
