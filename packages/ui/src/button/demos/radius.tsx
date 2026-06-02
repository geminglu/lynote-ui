import { Button } from "lynote-ui/button";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button radius="none">无圆角</Button>
      <Button>默认</Button>
      <Button radius="full">全圆角</Button>
      <Button variant="outline" radius="full">
        胶囊按钮
      </Button>
      <Button size="sm" icon radius="full" aria-label="全圆角图标">
        +
      </Button>
      <Button size="sm" icon radius="none" aria-label="直角图标">
        +
      </Button>
    </div>
  );
};

export default App;
