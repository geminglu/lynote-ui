import { Kbd, KbdGroup } from "lynote-ui/kbd";

const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">保存草稿：</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">打开命令面板：</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>P</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">关闭窗口：</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>W</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
};

export default App;
