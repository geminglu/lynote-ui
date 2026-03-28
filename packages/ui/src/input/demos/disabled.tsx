import { Input } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input placeholder="禁用状态" disabled />
      <Input placeholder="禁用状态（带值）" value="禁用内容" disabled />
    </div>
  );
};

export default App;
