import * as React from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "lynote-ui";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        打开受控对话框
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>受控状态</DialogTitle>
          <DialogDescription>
            使用 open 和 onOpenChange 控制显示状态。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            取消
          </Button>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default App;
