import { CopyIcon, GitBranchIcon, StarIcon } from "lucide-react";

import { Button } from "lynote-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "lynote-ui/tooltip";

const App: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label="复制">
                <CopyIcon />
              </Button>
            }
          />
          <TooltipContent>复制链接</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label="收藏">
                <StarIcon />
              </Button>
            }
          />
          <TooltipContent>加入收藏夹</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label="新建分支">
                <GitBranchIcon />
              </Button>
            }
          />
          <TooltipContent>从当前提交创建分支</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default App;
