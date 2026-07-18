import { Textarea } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Textarea size="xs" placeholder="xs 尺寸" />
      <Textarea size="sm" placeholder="sm 尺寸" />
      <Textarea size="default" placeholder="default 尺寸" />
      <Textarea size="lg" placeholder="lg 尺寸" />
    </div>
  );
};

export default App;
