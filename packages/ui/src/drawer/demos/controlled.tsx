import * as React from "react";

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "lynote-ui";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        打开受控抽屉
      </Button>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>保存筛选条件</DrawerTitle>
          <DrawerDescription>
            受控模式适合在提交成功后主动关闭抽屉。
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-3 px-4 py-2 text-sm">
          <label className="grid gap-1">
            关键词
            <input
              className="bg-background h-8 rounded-md border px-2"
              placeholder="输入关键词"
            />
          </label>
          <label className="grid gap-1">
            状态
            <select className="bg-background h-8 rounded-md border px-2">
              <option>全部</option>
              <option>进行中</option>
              <option>已完成</option>
            </select>
          </label>
        </div>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)}>应用筛选</Button>
          <DrawerClose asChild>
            <Button variant="outline">取消</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default App;
