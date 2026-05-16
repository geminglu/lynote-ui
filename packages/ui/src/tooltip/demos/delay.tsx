import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <TooltipProvider delay={300}>
      <div className="flex gap-3">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            300ms 延迟
          </TooltipTrigger>
          <TooltipContent>提示延迟由 Provider 控制</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger delay={0} render={<Button variant="outline" />}>
            立即弹出
          </TooltipTrigger>
          <TooltipContent>单个 Tooltip 可覆盖延迟</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger delay={1000} render={<Button variant="outline" />}>
            1s 延迟
          </TooltipTrigger>
          <TooltipContent>长延迟避免误触</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default App;
