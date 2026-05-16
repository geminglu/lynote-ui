import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "lynote-ui";

const directions = [
  { label: "顶部", value: "top" },
  { label: "右侧", value: "right" },
  { label: "底部", value: "bottom" },
  { label: "左侧", value: "left" },
] as const;

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex">
      {directions.map((direction) => (
        <Drawer key={direction.value} direction={direction.value}>
          <DrawerTrigger asChild>
            <Button variant="outline">{direction.label}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{direction.label}抽屉</DrawerTitle>
              <DrawerDescription>
                通过 `direction` 控制 Drawer 从不同方向进入。
              </DrawerDescription>
            </DrawerHeader>
            <div className="text-muted-foreground px-4 py-2 text-sm">
              侧向抽屉适合详情面板,底部抽屉更适合移动端操作。
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>知道了</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};

export default App;
