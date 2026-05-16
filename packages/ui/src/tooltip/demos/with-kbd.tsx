import { Button } from "lynote-ui/button";
import { Kbd } from "lynote-ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "lynote-ui/tooltip";

const App: React.FC = () => {
  return (
    <div className="flex gap-3">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">保存</Button>} />
        <TooltipContent>
          保存草稿
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">搜索</Button>} />
        <TooltipContent>
          打开命令面板
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default App;
