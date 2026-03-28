import { Separator } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">水平分隔线</h4>
        <p className="text-muted-foreground text-sm">
          这是一些内容，下面有分隔线。
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>博客</div>
        <Separator orientation="vertical" />
        <div>文档</div>
        <Separator orientation="vertical" />
        <div>关于</div>
      </div>
    </div>
  );
};

export default App;
