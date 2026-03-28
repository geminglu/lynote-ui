import { Button, Popover, PopoverContent, PopoverTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">打开弹出框</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">尺寸</h4>
          <p className="text-muted-foreground text-sm">
            设置组件的尺寸和间距。
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default App;
