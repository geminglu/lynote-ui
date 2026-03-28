import { Input } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input placeholder="请输入内容" />
      <Input placeholder="带标签的输入框" />
    </div>
  );
};

export default App;
