import {
  ClipboardPasteIcon,
  CopyIcon,
  ScissorsIcon,
  ShareIcon,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="bg-muted/30 flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        右键查看图标菜单
      </ContextMenuTrigger>
      <ContextMenuContent className="w-40">
        <ContextMenuItem>
          <CopyIcon />
          复制
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardPasteIcon />
          粘贴
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon />
          剪切
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <ShareIcon />
          分享
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default App;
