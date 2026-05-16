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
    <div className="flex flex-wrap gap-2">
      <Dialog>
        <DialogTrigger render={<Button variant="outline">小尺寸</Button>} />
        <DialogContent className="sm:max-w-xs">
          <DialogHeader>
            <DialogTitle>简短确认</DialogTitle>
            <DialogDescription>仅承载关键决策。</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button>知道了</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger render={<Button variant="outline">中等尺寸</Button>} />
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>表单类对话框</DialogTitle>
            <DialogDescription>承载 1-2 屏内容的中等尺寸。</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button>关闭</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger render={<Button variant="outline">大尺寸</Button>} />
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>承载更复杂内容</DialogTitle>
            <DialogDescription>
              适合放置表格、富文本编辑器、长表单等。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button>关闭</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
