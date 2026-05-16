"use client";

import { useState } from "react";

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
import { Field, FieldGroup, FieldLabel } from "lynote-ui/field";
import { Input } from "lynote-ui/input";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">编辑个人资料</Button>} />
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>编辑个人资料</DialogTitle>
            <DialogDescription>
              修改信息后点击保存，关闭对话框前不会自动提交。
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4">
            <Field>
              <FieldLabel htmlFor="dialog-name">昵称</FieldLabel>
              <Input id="dialog-name" defaultValue="LyNote" />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-username">用户名</FieldLabel>
              <Input id="dialog-username" defaultValue="@lynote" />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">取消</Button>} />
            <Button type="submit">保存修改</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default App;
