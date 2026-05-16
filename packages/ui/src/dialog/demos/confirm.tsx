"use client";

import { Trash2Icon } from "lucide-react";

import { Button } from "lynote-ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui/dialog";

const App: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="destructive">
            <Trash2Icon data-icon="inline-start" />
            删除项目
          </Button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认删除项目?</DialogTitle>
          <DialogDescription>
            删除后此项目及其内部的所有任务都将被移除,且无法恢复。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">取消</Button>} />
          <Button variant="destructive">确认删除</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default App;
