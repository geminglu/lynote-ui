import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "lynote-ui/resizable";

const App: React.FC = () => {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-[260px] items-center justify-center p-3 text-sm">
          侧边栏
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-3 text-sm">
              主编辑区
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-3 text-sm">
              终端 / 控制台
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-[260px] items-center justify-center p-3 text-sm">
          检查器
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;
