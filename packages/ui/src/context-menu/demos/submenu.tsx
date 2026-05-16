import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="bg-muted/30 flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        右键点击页面
      </ContextMenuTrigger>
      <ContextMenuContent className="w-44">
        <ContextMenuItem>返回</ContextMenuItem>
        <ContextMenuItem>前进</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>更多工具</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-40">
            <ContextMenuItem>保存页面</ContextMenuItem>
            <ContextMenuItem>创建快捷方式</ContextMenuItem>
            <ContextMenuItem>开发者工具</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default App;
