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
      <DialogTrigger render={<Button variant="outline">查看服务条款</Button>} />
      <DialogContent className="max-h-[80vh] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>服务条款</DialogTitle>
          <DialogDescription>
            请仔细阅读以下内容，滚动到底部以继续。
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-80 overflow-y-auto rounded-md border p-3 text-sm leading-relaxed">
          {Array.from({ length: 18 }).map((_, i) => (
            <p key={i} className="mb-3">
              {i + 1}. 这是服务条款的第 {i + 1}{" "}
              节，详细描述了使用本服务时双方的权利与义务。
              请仔细阅读并理解每一项约定。
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">关闭</Button>} />
          <Button>我已阅读并同意</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default App;
