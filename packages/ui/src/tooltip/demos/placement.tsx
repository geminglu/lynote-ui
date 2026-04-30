import { Button, Tooltip, TooltipContent, TooltipTrigger } from "lynote-ui";

const App: React.FC = () => {
  return (
    <div className="flex gap-3">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          顶部
        </TooltipTrigger>
        <TooltipContent side="top">显示在顶部</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          右侧
        </TooltipTrigger>
        <TooltipContent side="right">显示在右侧</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          底部
        </TooltipTrigger>
        <TooltipContent side="bottom">显示在底部</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default App;
