import { Textarea } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Textarea placeholder="请输入内容" />
      <Textarea placeholder="多行文本输入" rows={5} />
    </div>
  );
};

export default App;
