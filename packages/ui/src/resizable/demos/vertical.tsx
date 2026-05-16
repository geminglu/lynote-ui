import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "lynote-ui/resizable";

const App: React.FC = () => {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="h-[300px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={40}>
        <div className="flex h-full items-center justify-center p-6 text-sm">
          顶部面板
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6 text-sm">
          底部面板
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;
