import { Textarea } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">可调整大小（默认）</label>
        <Textarea placeholder="可以拖拽右下角调整大小" className="resize" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">禁止调整大小</label>
        <Textarea placeholder="禁止调整大小" className="resize-none" />
      </div>
    </div>
  );
};

export default App;
