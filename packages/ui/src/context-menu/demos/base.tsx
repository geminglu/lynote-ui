import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        右键点击这里
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>我的账户</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>个人资料</ContextMenuItem>
        <ContextMenuItem>账单</ContextMenuItem>
        <ContextMenuItem>团队</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>退出登录</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default App;
