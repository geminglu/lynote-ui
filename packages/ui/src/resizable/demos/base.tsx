import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">面板 1</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">面板 2</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default App;
