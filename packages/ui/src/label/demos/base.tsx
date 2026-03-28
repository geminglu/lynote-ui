import { Label } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="name">姓名</Label>
      <Label htmlFor="email">邮箱</Label>
      <Label>不带关联的标签</Label>
    </div>
  );
};

export default App;
