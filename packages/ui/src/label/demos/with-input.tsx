import { Input, Label } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="username">用户名</Label>
        <Input id="username" placeholder="请输入用户名" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">密码</Label>
        <Input id="password" type="password" placeholder="请输入密码" />
      </div>
    </div>
  );
};

export default App;
