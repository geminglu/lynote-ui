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

const App: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">打开抽屉</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>这是一个抽屉</DrawerTitle>
          <DrawerDescription>
            这是一个抽屉的示例。你可以在这里放置任何内容。
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>抽屉内容区域</p>
        </div>
        <DrawerFooter>
          <Button>确认</Button>
          <DrawerClose asChild>
            <Button variant="outline">取消</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default App;
