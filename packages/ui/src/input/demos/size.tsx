import { Input } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input placeholder="小尺寸" />
      <Input placeholder="默认尺寸" />
      <Input placeholder="大尺寸" />
    </div>
  );
};

export default App;
