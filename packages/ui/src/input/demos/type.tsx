import { Input } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input type="text" placeholder="文本输入" />
      <Input type="password" placeholder="密码输入" />
      <Input type="email" placeholder="邮箱输入" />
      <Input type="number" placeholder="数字输入" />
      <Input type="search" placeholder="搜索输入" />
    </div>
  );
};

export default App;
