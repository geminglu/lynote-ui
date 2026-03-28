import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">打开对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>这是一个对话框</DialogTitle>
          <DialogDescription>
            这是一个对话框的示例。你可以在这里放置任何内容。
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>对话框内容区域</p>
        </div>
        <DialogFooter>
          <Button variant="outline">取消</Button>
          <Button>确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default App;
