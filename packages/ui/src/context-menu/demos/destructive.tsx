import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react";
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
        右键打开危险操作
      </ContextMenuTrigger>
      <ContextMenuContent className="w-40">
        <ContextMenuItem>
          <PencilIcon />
          重命名
        </ContextMenuItem>
        <ContextMenuItem>
          <ShareIcon />
          分享
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <TrashIcon />
          删除
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default App;
