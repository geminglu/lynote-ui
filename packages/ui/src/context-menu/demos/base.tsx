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
        右键点击这里
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>个人资料</ContextMenuItem>
        <ContextMenuItem>账单</ContextMenuItem>
        <ContextMenuItem>团队</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>订阅</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default App;
