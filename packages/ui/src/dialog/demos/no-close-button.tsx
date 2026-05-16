import { Button } from "lynote-ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui/dialog";

export default function App() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">没有关闭按钮</Button>} />
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>没有关闭按钮</DialogTitle>
          <DialogDescription>
            这个对话框没有右上角的关闭按钮。
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
