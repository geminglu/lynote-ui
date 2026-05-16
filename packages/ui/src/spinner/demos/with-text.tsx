import { Spinner } from "lynote-ui/spinner";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-muted-foreground flex items-center gap-2 text-sm">
        <Spinner />
        正在加载数据...
      </div>
      <div className="flex items-center justify-center rounded-lg border py-12 text-sm">
        <div className="flex flex-col items-center gap-2">
          <Spinner className="size-6" />
          <span className="text-muted-foreground">正在处理你的请求</span>
        </div>
      </div>
    </div>
  );
};

export default App;
