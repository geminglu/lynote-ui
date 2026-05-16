import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="bg-muted/30 flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        右键查看快捷键
      </ContextMenuTrigger>
      <ContextMenuContent className="w-44">
        <ContextMenuItem>
          复制
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          粘贴
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          全选
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default App;
