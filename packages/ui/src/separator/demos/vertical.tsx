import { Separator } from "lynote-ui/separator";

const App: React.FC = () => {
  return (
    <div className="flex h-5 items-center gap-3 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  );
};

export default App;
