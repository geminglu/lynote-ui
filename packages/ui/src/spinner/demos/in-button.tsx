import { Button } from "lynote-ui/button";
import { Spinner } from "lynote-ui/spinner";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        加载中
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        请稍候
      </Button>
      <Button variant="secondary" size="sm" disabled>
        <Spinner data-icon="inline-start" />
        正在保存
      </Button>
    </div>
  );
};

export default App;
